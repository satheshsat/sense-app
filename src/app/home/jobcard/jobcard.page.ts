import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.page.html',
  styleUrls: ['./jobcard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon]
})
export class JobcardPage implements OnInit {

  yearcode: string = '';
      compcode: String='';
      entryno: String='';
      entrydate: String='';
      billno: String='';
      billdate: String='';
      jctype: Number|null = null;
      jsstatus: String = '';
      intime: String = '';
      outtime: String = '';
      narration: String = '';
      vendorid: Number|null = null;
      customerid: Number|null = null;
      products:any = [];
    
      alertController = inject(AlertController);
      coreService = inject(CoreService);
    
      constructor() {
        addIcons({ create });
        this.addProduct();
      }
  
      removeProduct(i:any) {
        this.products.splice(i,1);
        // this.products = this.products.filter((val: any) => val)
      }
  
      addProduct(){
        this.products.push(
          {
            sno: '',
            productid: '',
            productname: '',
            quantity: '',
            rate: '',
            amount: '',
            taxper: '',
            taxamount: '',
            taxableamount: '',
            loading: '',
            unloading: '',
            discountper: '',
            discountamount: '',
            totalamount:''
        }
        );
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
