import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon]
})
export class ProductsPage implements OnInit {

  name: string = '';
    units: String='';
    taxper: Number|null=null;
    prate: Number|null=null;
    srate: Number|null=null;
    mrp: Number|null=null;
    mstk: Number|null=null;
    opstk: Number|null=null;
    hsn: Number|null=null;
  
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
