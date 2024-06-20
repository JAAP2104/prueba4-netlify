import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DarAsesorModalComponent } from '../dar-asesor-modal/dar-asesor-modal.component';
import { AsesoriaService } from '../../../servicios/asesoria.service';
import { HeaderComponent } from '../../../header/header.component';
import { Asesoria } from '../../../Modelos/asesoria.model';

@Component({
  selector: 'app-asesoria-aliado',
  templateUrl: './asesoria-aliado.component.html',
  styleUrls: ['./asesoria-aliado.component.css'],
  providers: [AsesoriaService]
})
export class AsesoriaAliadoComponent implements OnInit {
  asesorias: Asesoria[] = [];
  asesoriasConAsesor: Asesoria[] = [];
  asesoriasSinAsesor: Asesoria[] = [];
  token: string | null = null;
  user: any = null;
  currentRolId: number;
  mensaje: string | null = null;
  @ViewChild('sinAsignarButton') sinAsignarButton!: ElementRef;
  userFilter: any = { Nombre_sol: ''};
  Nombre_sol: string | null = null;

  constructor(
    private asesoriaService: AsesoriaService, 
    public dialog: MatDialog,
    private router: Router
  ) { }

  /* Inicializa con esas funciones al cargar la pagina */
  ngOnInit() {
    this.validateToken();  
  }

  /* Valida el token del login */
  validateToken(): void {
    if (!this.token) {
      this.token = localStorage.getItem('token');
      let identityJSON = localStorage.getItem('identity');
      if (identityJSON) {
        let identity = JSON.parse(identityJSON);
        this.user = identity;
        this.currentRolId = this.user.id_rol;
        if (this.currentRolId != 3) {
          this.router.navigate(['/inicio/body']);
        }
      }
    }
    if (!this.token ) {
      this.router.navigate(['/inicio/body']);
    } else {
      this.loadAsesorias(1, 0);
    }
  }

  loadAsesorias(rol: number, estado: number): void {
    this.asesoriaService.getAsesoriasPorRolYEstado(this.token, rol, estado).subscribe(
      data => {
        this.asesorias = data;
        this.separarAsesorias();
        this.showSinAsignar(); // Show "Sin asignar" asesorias by default
      },
      error => {
        console.error('Error al obtener las asesorías:', error);
      }
    );
  }

  separarAsesorias(): void {
    this.asesoriasConAsesor = this.asesorias.filter(asesoria => asesoria.Asesor);
    this.asesoriasSinAsesor = this.asesorias.filter(asesoria => !asesoria.Asesor);

    if (this.asesorias.length === 0) {
      this.mensaje = "No hay asesorías disponibles para mostrar.";
    } else if (this.asesoriasSinAsesor.length === 0) {
      this.mensaje = "No hay asesorías esperando por asignación.";
    } else if (this.asesoriasConAsesor.length === 0) {
      this.mensaje = "Aún no has asignado ninguna asesoría.";
    } else {
      this.mensaje = null;
    }
  }

  openModal(asesoria: Asesoria): void {
    const dialogRef = this.dialog.open(DarAsesorModalComponent, {
      width: '400px',
      data: { asesoria: asesoria }
    });

    dialogRef.componentInstance.asesoriaAsignada.subscribe(() => {
      this.loadAsesorias(1, 0); // Recargar las asesorías
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  rechazarAsesoria(asesoria: Asesoria): void {
    if (asesoria && asesoria.id_asesoria) {
      this.asesoriaService.rechazarAsesoria(this.token, asesoria.id_asesoria, 'rechazar').subscribe(
        response => {
          this.loadAsesorias((this.currentRolId!), 1);
          location.reload();
        },
        error => {
          console.error('Error al rechazar asesoría:', error);
        }
      );
    } else {
      console.error('Asesoría inválida:', asesoria);
    }
  }

  showSinAsignar(): void {
    this.asesorias = this.asesoriasSinAsesor;
    this.mensaje = this.asesorias.length === 0 ? "No hay asesorías esperando por asignación." : null;
  }

  showAsignadas(): void {
    this.asesorias = this.asesoriasConAsesor;
    this.mensaje = this.asesorias.length === 0 ? "Aún no has asignado ninguna asesoría." : null;
  }
}
