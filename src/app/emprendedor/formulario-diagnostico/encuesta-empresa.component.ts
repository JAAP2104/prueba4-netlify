import { Component, HostListener, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { PREGUNTAS } from './preguntas.component';

import { AlertService } from '../../servicios/alert.service';
import { RespuestasService } from '../../servicios/respuestas.service';

import { Preguntas } from '../../Modelos/preguntas.model';
import { Respuesta } from '../../Modelos/respuesta.model';
import { User } from '../../Modelos/user.model';


@Component({
  selector: 'app-encuesta-empresa',
  templateUrl: './encuesta-empresa.component.html',
  styleUrls: ['./encuesta-empresa.component.css'],
  providers: [RespuestasService]
})
export class EncuestaEmpresaComponent {
  fa1 = fa1;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  preguntas: Preguntas[] = PREGUNTAS;
  firstForm: Object = {};
  section: number = 1;
  user: User;
  token = '';
  documento: string;
  currentRolId: string | null = null;
  currentIndex = 0;
  id_pregunta: number;
  id_subpregunta: number | null = null;
  private originalAttributes: Map<Element, { colspan: string | null, rowspan: string | null }> = new Map();

  respuesta1: Respuesta = new Respuesta({});
  respuesta2: Respuesta = new Respuesta({});
  respuesta3: Respuesta = new Respuesta({});
  respuesta4: Respuesta = new Respuesta({});
  respuesta5: Respuesta = new Respuesta({});
  respuesta6: Respuesta = new Respuesta({});
  respuesta7: Respuesta = new Respuesta({});
  respuesta8: Respuesta = new Respuesta({});
  respuesta9: Respuesta = new Respuesta({});
  respuesta10: Respuesta = new Respuesta({});
  respuesta11: Respuesta = new Respuesta({});
  respuesta12: Respuesta = new Respuesta({});
  respuesta13: Respuesta = new Respuesta({});
  respuesta14: Respuesta = new Respuesta({});
  respuesta15: Respuesta = new Respuesta({});
  respuesta16: Respuesta = new Respuesta({});
  respuesta17: Respuesta = new Respuesta({});
  respuesta18: Respuesta = new Respuesta({});
  respuesta19: Respuesta = new Respuesta({});
  respuesta20: Respuesta = new Respuesta({});
  respuesta21: Respuesta = new Respuesta({});
  respuesta22: Respuesta = new Respuesta({});
  respuesta23: Respuesta = new Respuesta({});
  //Seccion 2
  respuesta24: Respuesta = new Respuesta({});//pregunta 16
  respuesta25: Respuesta = new Respuesta({});//Subpregunta 17-11
  respuesta26: Respuesta = new Respuesta({});//Subpregunta 17-12
  respuesta27: Respuesta = new Respuesta({});//Subpregunta 17-13
  respuesta28: Respuesta = new Respuesta({});//Subpregunta 17-14
  respuesta29: Respuesta = new Respuesta({});//Subpregunta 17-15
  respuesta30: Respuesta = new Respuesta({});//Subpregunta 17-16
  respuesta31: Respuesta = new Respuesta({});//Subpregunta 17-17
  respuesta32: Respuesta = new Respuesta({});//Subpregunta 17-18
  respuesta33: Respuesta = new Respuesta({});//pregunta 18
  respuesta34: Respuesta = new Respuesta({});//Subpregunta 19-19
  respuesta35: Respuesta = new Respuesta({});//Subpregunta 19-20
  respuesta36: Respuesta = new Respuesta({});//Subpregunta 19-21
  respuesta37: Respuesta = new Respuesta({});//Subpregunta 19-22
  respuesta38: Respuesta = new Respuesta({});//Subpregunta 19-23
  respuesta39: Respuesta = new Respuesta({});//pregunta 20
  respuesta40: Respuesta = new Respuesta({});//Subpregunta 21-24
  respuesta41: Respuesta = new Respuesta({});//Subpregunta 21-25
  respuesta42: Respuesta = new Respuesta({});//Subpregunta 21-26
  respuesta43: Respuesta = new Respuesta({});//Subpregunta 21-27
  respuesta44: Respuesta = new Respuesta({});//Pregunta 22
  respuesta45: Respuesta = new Respuesta({});//Subpregunta 23-28
  respuesta46: Respuesta = new Respuesta({});//Subpregunta 23-29
  respuesta47: Respuesta = new Respuesta({});//Subpregunta 23-30
  respuesta48: Respuesta = new Respuesta({});//Subpregunta 23-31
  respuesta49: Respuesta = new Respuesta({});//Subpregunta 24-32
  respuesta50: Respuesta = new Respuesta({});//Subpregunta 24-33
  respuesta51: Respuesta = new Respuesta({});//Subpregunta 24-34
  respuesta52: Respuesta = new Respuesta({});//Subpregunta 24-35
  respuesta53: Respuesta = new Respuesta({});//Subpregunta 24-36
  respuesta54: Respuesta = new Respuesta({});//pregunta 25
  respuesta55: Respuesta = new Respuesta({});//Subpregunta 26-37
  respuesta56: Respuesta = new Respuesta({});//Subpregunta 26-38
  respuesta57: Respuesta = new Respuesta({});//Subpregunta 26-39
  respuesta58: Respuesta = new Respuesta({});//Subpregunta 26-40
  respuesta59: Respuesta = new Respuesta({});//Subpregunta 27-41
  respuesta60: Respuesta = new Respuesta({});//Subpregunta 27-42
  respuesta61: Respuesta = new Respuesta({});//Subpregunta 27-43
  respuesta62: Respuesta = new Respuesta({});//Subpregunta 27-44
  respuesta63: Respuesta = new Respuesta({});//Subpregunta 27-45
  respuesta64: Respuesta = new Respuesta({});//pregunta 28
  respuesta65: Respuesta = new Respuesta({});//Subpregunta 29-46
  respuesta66: Respuesta = new Respuesta({});//Subpregunta 29-47
  respuesta67: Respuesta = new Respuesta({});//Subpregunta 29-48
  respuesta68: Respuesta = new Respuesta({});//Subpregunta 29-49

  respuesta69: Respuesta = new Respuesta({});
  respuesta70: Respuesta = new Respuesta({});
  respuesta71: Respuesta = new Respuesta({});
  respuesta72: Respuesta = new Respuesta({});
  respuesta73: Respuesta = new Respuesta({});
  respuesta74: Respuesta = new Respuesta({});
  respuesta75: Respuesta = new Respuesta({});
  respuesta76: Respuesta = new Respuesta({});
  //Seccion 3
  respuesta77: Respuesta = new Respuesta({});//pregunta 30
  respuesta78: Respuesta = new Respuesta({});//Subpregunta




  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private respuestasService: RespuestasService,
    private alertService: AlertService,
  ) { }



  ngOnInit() {
    this.processAttributesBasedOnScreenSize();
    this.validateToken();
  }

  validateToken(): void {
    if (!this.token) {
      this.token = localStorage.getItem("token");
      let identityJSON = localStorage.getItem('identity');

      if (identityJSON) {
        let identity = JSON.parse(identityJSON);
        console.log(identity);
        this.user = identity;
        this.documento = this.user.emprendedor.documento;
        this.currentRolId = this.user.id_rol?.toString();
      }
    }
  }


  obtenerIds(): any[] {
    return PREGUNTAS.slice(0, 15).map(pregunta => {
      //console.log(pregunta.id); // Verificar los IDs en la consola
      return pregunta.id;
    });
  }


  onSubmitSeccion1() {

    let id_empresa = 1;

    const listaRespuestas: Respuesta[] = [];

    listaRespuestas.push(this.respuesta1);
    //pregunta 2
    listaRespuestas.push(this.respuesta2);
    listaRespuestas.push(this.respuesta3);
    listaRespuestas.push(this.respuesta4);
    listaRespuestas.push(this.respuesta5);
    listaRespuestas.push(this.respuesta6);
    //fin pregunta 2
    listaRespuestas.push(this.respuesta7);
    listaRespuestas.push(this.respuesta8);
    listaRespuestas.push(this.respuesta9);
    listaRespuestas.push(this.respuesta10);
    listaRespuestas.push(this.respuesta11);
    listaRespuestas.push(this.respuesta12);
    listaRespuestas.push(this.respuesta13);
    if (this.respuesta13.opcion === 'Si') {
      listaRespuestas.push(this.respuesta14);
      listaRespuestas.push(this.respuesta15);
    }
    listaRespuestas.push(this.respuesta16);
    if (this.respuesta16.opcion === 'Si') {
      listaRespuestas.push(this.respuesta17);
      listaRespuestas.push(this.respuesta18);
      listaRespuestas.push(this.respuesta19);
      listaRespuestas.push(this.respuesta20);
    }
    listaRespuestas.push(this.respuesta21);
    listaRespuestas.push(this.respuesta22);
    listaRespuestas.push(this.respuesta23);
    let isValidForm = true;
    const payload = { respuestas: listaRespuestas, id_empresa: id_empresa };
    let respCounter = 0;

    for (let i = 0; i < 15; i++) {
      const currentPregunta = PREGUNTAS[i];
      listaRespuestas[respCounter].id_pregunta = i + 1;
      //listaRespuestas[respCounter].id_empresa = id_empresa;
      listaRespuestas[respCounter].id_subpregunta = null;

      if (currentPregunta.id === 2) {
        for (let j = 0; j < currentPregunta.subPreguntas.length - 1; j++) {
          //debugger;
          if (listaRespuestas[respCounter + j].opcion !== 'Si') {
            listaRespuestas[respCounter + j].texto_res = '0';
          }
          listaRespuestas[respCounter + j].id_pregunta = i + 1;
          listaRespuestas[respCounter + j].id_subpregunta = j + 1;
          //listaRespuestas[respCounter + j].id_empresa = id_empresa;

        }
        respCounter += currentPregunta.subPreguntas.length - 1;

      } else if (currentPregunta.id === 12) {
        //debugger
        if (listaRespuestas[respCounter].opcion === 'Si') {
          for (let k = 0; k < currentPregunta.subPreguntas.length; k++) {
            listaRespuestas[respCounter + 1 + k].id_pregunta = i;
            listaRespuestas[respCounter + 1 + k].id_subpregunta = k + 1;
            //listaRespuestas[respCounter + 1 + k].id_empresa = id_empresa;

          }
          respCounter += currentPregunta.subPreguntas.length;
        }
        respCounter++;
      } else {
        if (currentPregunta.isText) {
          if (!listaRespuestas[respCounter].texto_res || listaRespuestas[respCounter].texto_res === '') {
            this.alertService.errorAlert('Error', 'Deben llenar los campos');
            isValidForm = false;
            return;
          }
        } else {
          if (!listaRespuestas[respCounter].opcion || listaRespuestas[respCounter].opcion === '') {
            this.alertService.errorAlert('Error', 'Deben llenar los campos');
            isValidForm = false;
            return;
          }
        }
        if (currentPregunta.isAffirmativeQuestion) {
          if (listaRespuestas[respCounter].opcion === 'No') {
            i += currentPregunta.subPreguntas.length;
            respCounter += currentPregunta.subPreguntas.length;
            continue;
          }
        }
        respCounter++;
      }
      //listaRespuestas[i].valor = 3;
      console.log(i);
      //console.log('fuera del ciclo', listaRespuestas);
    }
    if (!isValidForm) {
      return
    } this.respuestasService.saveAnswers(this.token, payload).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      });


  }


  //onSubmit seccion 2
  onSubmitSeccion2() {
    //console.log(this.respuesta1);
    let id_empresa = 1;

    const listaRespuestas: Respuesta[] = [];
    listaRespuestas.push(this.respuesta24);
    if (this.respuesta24.opcion === 'Si') {
      listaRespuestas.push(this.respuesta25);
      listaRespuestas.push(this.respuesta26);
      listaRespuestas.push(this.respuesta27);
      listaRespuestas.push(this.respuesta28);
      listaRespuestas.push(this.respuesta29);
      listaRespuestas.push(this.respuesta30);
      listaRespuestas.push(this.respuesta31);
      listaRespuestas.push(this.respuesta32);
    }
    //pregunta 18
    listaRespuestas.push(this.respuesta33);
    if (this.respuesta33.opcion === 'Si') {
      listaRespuestas.push(this.respuesta34);
      listaRespuestas.push(this.respuesta35);
      listaRespuestas.push(this.respuesta36);
      listaRespuestas.push(this.respuesta37);
      listaRespuestas.push(this.respuesta38);
    }
    //pregunta20
    listaRespuestas.push(this.respuesta39);
    if (this.respuesta39.opcion === 'Si') {
      listaRespuestas.push(this.respuesta40);
      listaRespuestas.push(this.respuesta41);
      listaRespuestas.push(this.respuesta42);
      listaRespuestas.push(this.respuesta43);
    }
    //pregunta22
    listaRespuestas.push(this.respuesta44);
    if (this.respuesta44.opcion === 'Si') {
      listaRespuestas.push(this.respuesta45);
      listaRespuestas.push(this.respuesta46);
      listaRespuestas.push(this.respuesta47);
      listaRespuestas.push(this.respuesta48);
    }
    //pregunta23
    listaRespuestas.push(this.respuesta49);
    if (this.respuesta49.opcion === 'Si') {
      listaRespuestas.push(this.respuesta50);
      listaRespuestas.push(this.respuesta51);
      listaRespuestas.push(this.respuesta52);
      listaRespuestas.push(this.respuesta53);
    }
    //pregunta25
    listaRespuestas.push(this.respuesta54);
    if (this.respuesta54.opcion === 'Si') {
      listaRespuestas.push(this.respuesta55);
    }
    //pregunta27
    listaRespuestas.push(this.respuesta56);
    listaRespuestas.push(this.respuesta57);
    listaRespuestas.push(this.respuesta58);
    listaRespuestas.push(this.respuesta59);
    listaRespuestas.push(this.respuesta60);
    //pregunta28
    listaRespuestas.push(this.respuesta61);
    if (this.respuesta59.opcion === 'Si') {
      listaRespuestas.push(this.respuesta62);
      listaRespuestas.push(this.respuesta63);
      listaRespuestas.push(this.respuesta64);
      listaRespuestas.push(this.respuesta65);
    }
    


    let isValidForm = true;
    const payload = { respuestas: listaRespuestas, id_empresa: id_empresa };
    let respCounter = 0;

    for (let i = 15; i < 30; i++) {
      debugger
      listaRespuestas[respCounter].id_pregunta = i + 1;
      //listaRespuestas[respCounter].id_empresa = id_empresa;
      listaRespuestas[respCounter].id_subpregunta = null;
      const currentPregunta = PREGUNTAS[i];
      
      if (currentPregunta.id === 16 || currentPregunta.id === 18) {
        if(listaRespuestas[respCounter].opcion === 'Si'){
          const nextPregunta = PREGUNTAS[i + 1];
          for (let j = 0; j < nextPregunta.subPreguntas.length; j++) {
            //debugger;
            listaRespuestas[respCounter + 1 + j].id_pregunta = i;
            listaRespuestas[respCounter + 1 + j].id_subpregunta = j + 11;
            //listaRespuestas[respCounter + j].id_empresa = id_empresa;
          }

          respCounter += nextPregunta.subPreguntas.length - 1;
        }
      }

        if (currentPregunta.isText) {
          if (!listaRespuestas[respCounter].texto_res || listaRespuestas[respCounter].texto_res === '') {
            this.alertService.errorAlert('Error', 'Deben llenar los campos');
            isValidForm = false;
            return;
          }
        } else {
          if (!listaRespuestas[respCounter].opcion || listaRespuestas[respCounter].opcion === '') {
            this.alertService.errorAlert('Error', 'Deben llenar los campos');
            isValidForm = false;
            return;
          }
        }
        if (currentPregunta.isAffirmativeQuestion) {
          if (listaRespuestas[respCounter].opcion === 'No') {
            i += currentPregunta.subPreguntas.length;
            continue;
          }
        }
        if (!isValidForm) {
          return
        }
        //listaRespuestas[i].valor = 3;
        console.log(i);
      }
      console.log('fuera del ciclo', listaRespuestas);
      if (!isValidForm) {
        return
      } this.respuestasService.saveAnswers(this.token, payload).subscribe(
        (data: any) => {
          console.log(data);
        },
        error => {
          console.log(error);
        });


    }

    /*enviarRespuestasJson(){
      this.onSubmitSeccion1();
      this.onSubmitSeccion2();
      const payload = {respuestas:this.listaRespuestas, id_empresa:this.id_empresa}
    }*/


  loadNextSection(): void {
    this.section++;
  }

  next() {
    if (this.currentIndex < 3) {
      this.currentIndex++;
      this.updateAttributes();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateAttributes();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.debouncedProcessAttributes();
  }



  ngAfterViewInit() {
    this.processAttributesBasedOnScreenSize();
  }

  processAttributesBasedOnScreenSize() {
    const isMobile = window.innerWidth < 768; // Ancho considerado como pantalla móvil

    // Seleccionar todas las etiquetas <td> con los atributos colspan o rowspan
    const tdElements = this.elementRef.nativeElement.querySelectorAll('td');
    tdElements.forEach(tdElement => {
      const colspan = tdElement.getAttribute('colspan');
      const rowspan = tdElement.getAttribute('rowspan');
      if (!this.originalAttributes.has(tdElement)) {
        // Guardar los valores originales
        this.originalAttributes.set(tdElement, {
          colspan: colspan,
          rowspan: rowspan
        });
      }

      if (isMobile) {
        // Eliminar los atributos en pantallas móviles
        this.renderer.removeAttribute(tdElement, 'colspan');
        this.renderer.removeAttribute(tdElement, 'rowspan');
      } else {
        // Restaurar los atributos en pantallas grandes
        const original = this.originalAttributes.get(tdElement);
        if (original) {
          if (original.colspan !== null) {
            this.renderer.setAttribute(tdElement, 'colspan', original.colspan);
          }
          if (original.rowspan !== null) {
            this.renderer.setAttribute(tdElement, 'rowspan', original.rowspan);
          }
        }
      }
    });

    // Seleccionar todas las etiquetas <td> con la clase "cell"
    const cellElements = this.elementRef.nativeElement.querySelectorAll('td.cell');
    cellElements.forEach(cellElement => {
      if (isMobile) {
        this.renderer.setAttribute(cellElement, 'colspan', '2');
      } else {
        this.renderer.removeAttribute(cellElement, 'colspan');
      }
    });

    // Forzar detección de cambios
    this.cdr.detectChanges();
  }

  updateAttributes() {
    requestAnimationFrame(() => {
      this.processAttributesBasedOnScreenSize();
    });
  }

  private debouncedProcessAttributes() {
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => this.updateAttributes(), 200);
  }

  private debounceTimeout: any;
}
