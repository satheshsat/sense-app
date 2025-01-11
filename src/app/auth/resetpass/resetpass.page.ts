import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/service/auth.service';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonInput, IonButton, RouterModule]
})
export class ResetpassPage implements OnInit {

  email: string = '';
  message: string = '';
  loading: boolean = false;
  authService = inject(AuthService);
  router = inject(Router);

  constructor() { }

  
  save(event: any){
    event.preventDefault();
    this.loading = true;
    this.authService.resetpass(this.email).subscribe((res: any)=>{
      console.log(res);
      this.router.navigateByUrl('/auth/login');
    }, (err)=>{
      this.message = err.error?.message ? err.error?.message : 'Something went wrong please try again';
      this.loading = false;
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
