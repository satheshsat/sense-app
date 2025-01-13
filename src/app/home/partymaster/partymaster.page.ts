import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';
import { CoreService } from 'src/app/service/core.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-partymaster',
  templateUrl: './partymaster.page.html',
  styleUrls: ['./partymaster.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon]
})
export class PartymasterPage implements OnInit {

  pcode: string = '';
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

  id='' ;
  message = '';
  loading = false;

  alertController = inject(AlertController);
  coreService = inject(CoreService);
  toastService = inject(ToastService);

  constructor() {
    addIcons({ create });
    this.getEntryNo();
  }

  getEntryNo(){
    this.coreService.partyMasterCode().subscribe((res: any)=>{
      this.pcode = res?.pcode;
    }, err=>{
      console.log(err);
    })
  }

  async edit(){
    const alert = await this.alertController.create({
      inputs: [
      {
          name: 'pcode',
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
                this.loadData(alertData);;
              }
          }
      ]
    });
    await alert.present();
  }

  loadData(data: any) {
    // this.loading = true;
    this.coreService.partyMasterList(data).subscribe((res: any)=>{
      // this.loading = false;
        this.id = res._id;
        this.pcode = res.pcode;
        this.name = res.name;
        this.address1 = res.address1;
        this.address2 = res.address2;
        this.address3 = res.address3;
        this.place = res.place;
        this.city = res.city;
        this.mobileno = res.mobileno;
        this.groupcode = res.groupcode;
        this.gstno = res.gstno;
        this.gpayid = res.gpayid;
        this.banckaccno = res.banckaccno;
        this.ifsc = res.ifsc;
        this.bankaccname = res.bankaccname;
        this.bankacctype = res.bankacctype;
    }, (err)=>{
      this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
        // this.loading = false;
        this.id = '';
        this.pcode = '';
        this.name = '';
        this.address1 = '';
        this.address2 = '';
        this.address3 = '';
        this.place = '';
        this.city = '';
        this.mobileno = '';
        this.groupcode = '';
        this.gstno = '';
        this.gpayid = '';
        this.banckaccno = '';
        this.ifsc = '';
        this.bankaccname = '';
        this.bankacctype = '';
        console.log(err);
    })
  }

  save(event: any){
    event.preventDefault();
    let data = {
      pcode: this.pcode,
      name: this.name,
      address1: this.address1,
      address2: this.address2,
      address3: this.address3,
      place: this.place,
      city: this.city,
      mobileno: this.mobileno,
      groupcode: this.groupcode,
      gstno: this.gstno,
      gpayid: this.gpayid,
      banckaccno: this.banckaccno,
      ifsc: this.ifsc,
      bankaccname: this.bankaccname,
      bankacctype: this.bankacctype,
    }
    this.loading = true;
    if(this.id){
      this.coreService.partyMasterUpdate(this.id, data).subscribe((res)=>{
        this.loading = false;
        this.toastService.create('User Updated Successfully').then((res)=>{
          res.present();
        });
        this.id = '';
        this.pcode = '';
        this.name = '';
        this.address1 = '';
        this.address2 = '';
        this.address3 = '';
        this.place = '';
        this.city = '';
        this.mobileno = '';
        this.groupcode = '';
        this.gstno = '';
        this.gpayid = '';
        this.banckaccno = '';
        this.ifsc = '';
        this.bankaccname = '';
        this.bankacctype = '';
        this.getEntryNo();
        this.id = '';
        this.message = '';
      }, (err)=>{
        this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
          this.loading = false;
          console.log(err);
      })
      return;
    }
    this.coreService.partyMasterCreate(data).subscribe((res)=>{
      this.loading = false;
      this.toastService.create('Added Successfully').then((res)=>{
        res.present()
      });
      this.id = '';
        this.pcode = '';
        this.name = '';
        this.address1 = '';
        this.address2 = '';
        this.address3 = '';
        this.place = '';
        this.city = '';
        this.mobileno = '';
        this.groupcode = '';
        this.gstno = '';
        this.gpayid = '';
        this.banckaccno = '';
        this.ifsc = '';
        this.bankaccname = '';
        this.bankacctype = '';
        this.getEntryNo();
        this.id = '';
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
