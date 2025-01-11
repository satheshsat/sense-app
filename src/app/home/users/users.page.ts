import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonFabButton, IonFab, IonButton, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonFabButton, IonFab, IonButton, IonCardContent, IonCard]
})
export class UsersPage implements OnInit {

    name: string = '';
    email: String='';
    role: String='';
    password: String='';
  
    alertController = inject(AlertController);
  
    constructor() {
      addIcons({ create });
    }
  
    async edit(){
      const alert = await this.alertController.create({
        inputs: [
        {
            name: 'name1',
            type: 'text',
            placeholder: 'Ener Code'
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
                    console.log(alertData.name1);
                }
            }
        ]
      });
      await alert.present();
    }
    save(event: any){
      event.preventDefault();
    }
  

  ngOnInit() {
  }

}
