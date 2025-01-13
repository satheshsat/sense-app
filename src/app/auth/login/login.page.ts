import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonText, IonSpinner, IonContent, IonCard, IonCardContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ IonText,IonSpinner, IonContent, CommonModule, FormsModule, IonCard, IonCardContent, IonInput, IonButton, RouterModule]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  authService = inject(AuthService);
  storageService = inject(StorageService);
  router = inject(Router);
  loading = false;
  message = '';

  constructor() { }

  
  save(event: any){
    event.preventDefault();
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe((res: any)=>{
      this.loading = false;
      this.storageService.set('userData', JSON.stringify(res.data))
      this.storageService.set('accessToken', res.accessToken)
      this.storageService.set('refreshToken', res.refreshToken)
      this.router.navigateByUrl('/home');
    }, (err)=>{
      this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
      this.loading = false;
      console.log(err);
    })

  }

  ngOnInit() {
  }

}
