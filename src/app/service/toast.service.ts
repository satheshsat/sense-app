import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastController = inject(ToastController);

  constructor() { }

  async create(message: string){
    const toast = await this.toastController.create({
      // header?: string;
      message: message,
      // cssClass?: string | string[];
      duration: 3000,
      // buttons?: (ToastButton | string)[];
      // position?: 'top' | 'bottom' | 'middle';
      position: 'bottom',
      // translucent?: boolean;
      // animated?: boolean;
      // icon?: string;
      // htmlAttributes?: { [key: string]: any };

      // color?: Color;
      // mode?: Mode;
      // keyboardClose?: boolean;
      // id?: string;
      // buttons: [
      //   {
      //     icon: 'close',
      //     htmlAttributes: {
      //       'aria-label': 'close',
      //     },
      //   },
      // ],
    });
    return toast;
  }
}
