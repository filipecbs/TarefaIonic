import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-totoro',
  templateUrl: './totoro.page.html',
  styleUrls: ['./totoro.page.scss'],
})
export class TotoroPage implements OnInit {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async alerta() {
      const alert = await this.alertController.create({
          header: 'Irado!',
          message: 'Gostaria de avaliar o filme?',
          buttons: ['Não', 'Sim']
      });

      await alert.present();
  }

  async presentToast() {
      const toast = await this.toastController.create({
          message: 'Filme adicionado na sua lista! :)',
          duration: 2000
      });
      toast.present();
  }

  ngOnInit() {
  }

}
