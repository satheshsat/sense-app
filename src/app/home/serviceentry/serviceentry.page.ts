import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';
import { CoreService } from 'src/app/service/core.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-serviceentry',
  templateUrl: './serviceentry.page.html',
  styleUrls: ['./serviceentry.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonInput, IonFab, IonFabButton, IonIcon]
})
export class ServiceentryPage implements OnInit {

    yearcode: string = '';
    compcode: String='';
    entryno: String='';
    entrydate: String='';
    billno: String='';
    billdate: String='';
    jcno: Number|null = null;
    jcdate: String = '';
    jctype: Number|null = null;
    jsstatus: String = '';
    servicestatus: String = '';
    intime: String = '';
    outtime: String = '';
    narration: String = '';
    vendorid: Number|null = null;
    customerid: Number|null = null;
    serviceengineerid: Number|null = null;
    products:any = [];
    id: string = '';

    message = '';
    loading = false;
  
    alertController = inject(AlertController);
    coreService = inject(CoreService);
    toastService = inject(ToastService);
  
    constructor() {
      addIcons({ create });
      this.addProduct();
      this.getEntryNo();
    }

    getEntryNo(){
      this.coreService.serviceentryEntryNo().subscribe((res: any)=>{
        this.entryno = res?.entryno;
      }, err=>{
        console.log(err);
      })
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
            name: 'entryno',
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
      this.coreService.serviceentryList(data).subscribe((res: any)=>{
        // this.loading = false;
          this.id = res._id;
          this.yearcode = res.yearcode;
          this.compcode =res.compcode;
          this.entryno =res.entryno;
          this.entrydate =res.entrydate;
          this.billno =res.billno;
          this.billdate =res.billdate;
          this.jcno = res.jcno;
          this.jcdate = res.jcdate;
          this.jctype = res.jctype;
          this.jsstatus = res.jsstatus;
          this.servicestatus = res.servicestatus;
          this.intime = res.intime;
          this.outtime = res.outtime;
          this.narration = res.narration;
          this.vendorid = res.vendorid;
          this.customerid = res.customerid;
          this.serviceengineerid = res.serviceengineerid;
          for(let i = 0; i <res.products.length; i++) {
            if(this.products.length == res.products.length){
              break;
            }
            this.addProduct();
          }
          this.products = res.products;
      }, (err)=>{
        this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
          // this.loading = false;
          this.yearcode = '';
          this.compcode ='';
          this.entryno ='';
          this.entrydate ='';
          this.billno ='';
          this.billdate ='';
          this.jcno = null;
          this.jcdate = '';
          this.jctype = null;
          this.jsstatus = '';
          this.servicestatus = '';
          this.intime = '';
          this.outtime = '';
          this.narration = '';
          this.vendorid = null;
          this.customerid = null;
          this.serviceengineerid = null;
          this.products = [];
          this.addProduct();
          this.id = '';
          console.log(err);
      })
    }

    save(event: any){
      event.preventDefault();
      let data = {
        yearcode: this.yearcode,
        compcode: this.compcode,
        entryno: this.entryno,
        entrydate: this.entrydate,
        billno: this.billno,
        billdate: this.billdate,
        jcno: this.jcno,
        jcdate: this.jcdate,
        jctype: this.jctype,
        jsstatus: this.jsstatus,
        servicestatus: this.servicestatus,
        intime: this.intime,
        outtime: this.outtime,
        narration: this.narration,
        vendorid: this.vendorid,
        customerid: this.customerid,
        serviceengineerid: this.serviceengineerid,
        products: this.products
      }
      this.loading = true;
      if(this.id){
        this.coreService.serviceentryUpdate(this.id, data).subscribe((res)=>{
          this.loading = false;
          this.toastService.create('User Updated Successfully').then((res)=>{
            res.present();
          });
          this.yearcode = '';
          this.compcode ='';
          this.entryno ='';
          this.entrydate ='';
          this.billno ='';
          this.billdate ='';
          this.jcno = null;
          this.jcdate = '';
          this.jctype = null;
          this.jsstatus = '';
          this.servicestatus = '';
          this.intime = '';
          this.outtime = '';
          this.narration = '';
          this.vendorid = null;
          this.customerid = null;
          this.serviceengineerid = null;
          this.products = [];
          this.addProduct();
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
      this.coreService.serviceentryCreate(data).subscribe((res)=>{
        this.loading = false;
        this.toastService.create('User Created Successfully').then((res)=>{
          res.present()
        });
        this.yearcode = '';
          this.compcode ='';
          this.entryno ='';
          this.entrydate ='';
          this.billno ='';
          this.billdate ='';
          this.jcno = null;
          this.jcdate = '';
          this.jctype = null;
          this.jsstatus = '';
          this.servicestatus = '';
          this.intime = '';
          this.outtime = '';
          this.narration = '';
          this.vendorid = null;
          this.customerid = null;
          this.serviceengineerid = null;
          this.products = [];
          this.addProduct();
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
