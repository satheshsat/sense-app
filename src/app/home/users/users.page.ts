import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonMenuButton, IonSpinner, IonText, AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';
import { CoreService } from 'src/app/service/core.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton,  IonSpinner, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonFabButton, IonFab, IonButton, IonCardContent, IonCard, IonInput]
})
export class UsersPage implements OnInit {

    name: string = '';
    email: string='';
    password: String='';
    message: string = '';
    id: string = '';

    loading: boolean = false;
  
    alertController = inject(AlertController);
    coreService = inject(CoreService);
    toastService = inject(ToastService);
  
    constructor() {
      addIcons({ create });
    }
  
    async edit(){
      const alert = await this.alertController.create({
        inputs: [
        {
            name: 'email',
            type: 'text',
            placeholder: 'Ener Email'
        }],    
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel');
                }
            }, 
            {
                text: 'Ok',
                handler: (alertData: any) => { //takes the data 
                  this.loadData(alertData);
                }
            }
        ]
      });
      await alert.present();
    }

    loadData(data: any) {
      // this.loading = true;
      this.coreService.userList(data).subscribe((res: any)=>{
        // this.loading = false;
        this.id = res._id;
        this.name = res.name;
        this.email = res.email;
      }, (err)=>{
        this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
          // this.loading = false;
          this.id = '';
          this.name = '';
          this.email = '';
          console.log(err);
      })
    }
    save(event: any){
      event.preventDefault();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if(!emailRegex.test(this.email)){
       this.message = 'Enter valid email address';
       return;
     }
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.loading = true;
      if(this.id){
        this.coreService.userUpdate(this.id, data).subscribe((res)=>{
          this.loading = false;
          this.toastService.create('User Updated Successfully').then((res)=>{
            res.present();
          });
          this.id = '';
          this.name = '';
          this.email='';
          this.password='';
          this.message = '';
        }, (err)=>{
          this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
            this.loading = false;
            console.log(err);
        })
        return;
      }
      this.coreService.userCreate(data).subscribe((res)=>{
        this.loading = false;
        this.toastService.create('User Created Successfully').then((res)=>{
          res.present()
        });
        this.id = '';
        this.name = '';
        this.email='';
        this.password='';
        this.message = '';
      }, (err)=>{
        this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
          this.loading = false;
          console.log(err);
      })
    }
  

  ngOnInit() {
  }

}
