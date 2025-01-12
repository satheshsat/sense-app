import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSplitPane, IonMenu, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, RouterLink, RouterLinkActive, IonSplitPane, IonMenu, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet]
})
export class HomePage implements OnInit {

  authService = inject(AuthService);
    storageService = inject(StorageService);
    router = inject(Router);

  public appPages = [
      { title: 'Party Master', url: '/home/partymaster', icon: 'mail' },
      { title: 'Users', url: '/home/users', icon: 'paper-plane' },
      { title: 'Service Entry', url: '/home/serviceentry', icon: 'heart' },
      { title: 'Products', url: '/home/products', icon: 'archive' },
      { title: 'Purchase', url: '/home/purchase', icon: 'archive' },
      { title: 'Job Card', url: '/home/jobcard', icon: 'trash' },
      { title: 'Delivery', url: '/home/delivery', icon: 'warning' },
      { title: 'Adjustment', url: '/home/adjustment', icon: 'warning' },
    ];
    constructor() {
      addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
    }

    logout(){
      this.authService.logout().subscribe((res)=>{
        console.log(res);
        this.storageService.clear();
        this.router.navigateByUrl('/auth/login')
      })
    }

  ngOnInit() {
  }

}
