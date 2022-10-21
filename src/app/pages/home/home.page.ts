import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DbServiceService } from '../../services/db.service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  token = 'vfdsvfdejvboa';

  public form: FormGroup;

  modeloCorreo: string = '';
  modeloPassword: string = '';

  constructor(public loadingController: LoadingController, private FormBuilder: FormBuilder, private alertController: AlertController, private dbService: DbServiceService ) {


  }
  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }

  send(): any {
    console.log(this.form.value);
  }

  validarCredenciales() {

    localStorage.setItem('token',this.token)

    console.log(this.modeloCorreo);
    console.log(this.modeloPassword);
  }

  async mostrarFormulario() {
    const alert = await this.alertController.create({
      header: 'Nuevo Usuario',
      
      inputs: [
        {
          name: 'nombre',
          placeholder: 'nombre',
          type: 'text',
          attributes: {
            maxlength: 30,
          },
        },
        {
          name: 'correo',
          placeholder: 'correo electronico',
          type: 'text',
          attributes: {
            maxlength: 30,
          },
        },
        {
          name: 'contrasena',
          placeholder: 'contraseña',
          type: 'password',
          attributes: {
            minlength: 4,
            maxlength: 15,
          },
        },
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler:() =>{
            console.log('confirm cancel');
          }
        },
        {
          text: 'almacenar',
          cssClass: 'primary',
          
        }
      ]
    });

    await alert.present();

}



}
