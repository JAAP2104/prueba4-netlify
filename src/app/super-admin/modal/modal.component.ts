import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RutaService } from '../../servicios/rutas.service';
import { SwitchService } from '../../servicios/switch.service'

import { Ruta } from '../../Modelos/ruta.modelo';
import { User } from '../../Modelos/user.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  providers: [RutaService, DatePipe]

})
export class ModalComponent implements OnInit {

  createRutaForm: FormGroup;
  token = '';
  user: User | null = null;
  currentRolId: string | null = null;
  now = new Date();
  formattedDate: string = '';
  

  constructor(
    private modalSS: SwitchService,
    private rutaService: RutaService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
  ) {

  }

  ngOnInit(): void {

  }

 

  validateToken(): void {
    if (!this.token) {
      this.token = localStorage.getItem("token");
      let identityJSON = localStorage.getItem('identity');

      if (identityJSON) {
        let identity = JSON.parse(identityJSON);
        console.log(identity);
        this.user = identity;
        this.currentRolId = this.user.id_rol?.toString();
        console.log(this.currentRolId);
      }
    }
  }

  createRuta() {
    const ruta = new Ruta(
      this.createRutaForm.get('nombre')?.value,
      this.createRutaForm.get('fecha_creacion')?.value,
      this.createRutaForm.get('estado')?.value
    );
    this.rutaService.createRutas(this.token, ruta).subscribe(
      (response:any) => {
        console.log(response);
        this.closeModal();
      },
      (error) => {
        console.error(error);
      }
    )
  };

  closeModal() {
    this.modalSS.$modal.emit(false);
  }

  confirmarModal() {
    // this.submitted = true;
    // if (this.isFormValid()) {
    //   console.log('Form data:', this.persona);
    //   // Realizar acción de guardar
    // }
    this.modalSS.$modal.emit(false);
  }

  // isFormValid() {
  //   return this.persona.nombre.trim() !== '';
  // }
}