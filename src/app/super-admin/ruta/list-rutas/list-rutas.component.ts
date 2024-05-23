import { Component, OnInit } from '@angular/core';
import { faEye, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { RutaService } from '../../../servicios/rutas.service';
import { Router } from '@angular/router';
import { User } from '../../../Modelos/user.model';
import { Ruta } from '../../../Modelos/ruta.modelo';


@Component({
  selector: 'app-list-rutas',
  templateUrl: './list-rutas.component.html',
  styleUrl: './list-rutas.component.css',
  providers: [RutaService]
})
export class ListRutasComponent implements OnInit {
  userFilter: any = { nombre: '', estado_usuario: 'Activo' };
  public page!: number;
  listaRutas: Ruta[] = [];
  fax = faXmark;
  falupa = faMagnifyingGlass;
  token: string | null = null;
  user: User | null = null;
  currentRolId: string | null = null;

  constructor(
    private rutaService: RutaService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.validateToken();
    //this.cargarRutas();
  }



  validateToken(): void {
    if (!this.token) {
      this.token = localStorage.getItem('token');
      console.log(this.token);
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

  /*cargarRutas(): void {
    this.rutaService.getAllRutas(this.token).subscribe(
      (data: Ruta[]) => {
        console.log(data);
        this.listaRutas = data.map((item: any) => {
          new Ruta(
            item.id,
            item.nombre,
            item.fecha_creacion,
            item.estado)
          
      });
  },
      (error) => {
  console.error('Error al cargar las rutas', error);
}
    );
  }*/

onEstadoChange(event: any): void {
  const estado = event.target.value;
  //this.cargarAliados(parseInt(estado, 10));
}


limpiarFiltro(): void {
  this.userFilter = { nombre: '', estado_usuario: 'Activo' };
  // Opcional: recargar los aliados con el estado por defecto
  //this.cargarAliados(1);
}
}
