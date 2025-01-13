import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-partymaster',
  templateUrl: './partymaster.page.html',
  styleUrls: ['./partymaster.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon]
})
export class PartymasterPage implements OnInit {

  name: string = '';
  address1: String='';
  address2: String='';
  address3: String='';
  place: String='';
  city: String='';
  mobileno: String='';
  groupcode: String='';
  gstno: String='';
  gpayid: String='';
  banckaccno: String='';
  ifsc: String='';
  bankaccname: String='';
  bankacctype: String='';

  alertController = inject(AlertController);
  coreService = inject(CoreService);

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
