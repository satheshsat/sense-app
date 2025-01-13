import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonButtons, IonMenuButton, AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';
import { CoreService } from 'src/app/service/core.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [ IonButtons, IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon]
})
export class ProductsPage implements OnInit {

  productcode: string='';
  name: string = '';
    units: String='';
    taxper: Number|null=null;
    prate: Number|null=null;
    srate: Number|null=null;
    mrp: Number|null=null;
    mstk: Number|null=null;
    opstk: Number|null=null;
    hsn: Number|null=null;

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
      this.coreService.productsListCode().subscribe((res: any)=>{
        this.productcode = res?.productcode;
      }, err=>{
        console.log(err);
      })
    }
  
    async edit(){
      const alert = await this.alertController.create({
        inputs: [
        {
            name: 'productcode',
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
      this.coreService.productsList(data).subscribe((res: any)=>{
        // this.loading = false;
          this.id = res._id;
          this.productcode=res.productcode;
          this.name = res.name;
          this.units=res.units;
          this.taxper=res.taxper;
          this.prate=res.prate;
          this.srate=res.srate;
          this.mrp=res.mrp;
          this.mstk=res.mstk;
          this.opstk=res.opstk;
          this.hsn=res.hsn;
      }, (err)=>{
        this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
          // this.loading = false;
          this.id = '';
          this.productcode='';
          this.name = '';
          this.units='';
          this.taxper=null;
          this.prate=null;
          this.srate=null;
          this.mrp=null;
          this.mstk=null;
          this.opstk=null;
          this.hsn=null;
          console.log(err);
      })
    }
    save(event: any){
      event.preventDefault();
      let data = {
        productcode: this.productcode,
          name: this.name,
          units: this.units,
          taxper:this.taxper,
          prate:this.prate,
          srate:this.srate,
          mrp:this.mrp,
          mstk:this.mstk,
          opstk:this.opstk,
          hsn:this.hsn
      }
      this.loading = true;
      if(this.id){
        this.coreService.productsUpdate(this.id, data).subscribe((res)=>{
          this.loading = false;
          this.toastService.create('User Updated Successfully').then((res)=>{
            res.present();
          });
          this.id = '';
          this.productcode='';
          this.name = '';
          this.units='';
          this.taxper=null;
          this.prate=null;
          this.srate=null;
          this.mrp=null;
          this.mstk=null;
          this.opstk=null;
          this.hsn=null;
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
      this.coreService.productsCreate(data).subscribe((res)=>{
        this.loading = false;
        this.toastService.create('Added Successfully').then((res)=>{
          res.present()
        });
        this.id = '';
          this.productcode='';
          this.name = '';
          this.units='';
          this.taxper=null;
          this.prate=null;
          this.srate=null;
          this.mrp=null;
          this.mstk=null;
          this.opstk=null;
          this.hsn=null;
        this.message = '';
        this.getEntryNo();
      }, (err)=>{
        this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
          this.loading = false;
          console.log(err);
      })
    }

  ngOnInit() {
  }

}
