import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup} from '@angular/forms';
import { CSE_Ejercicio } from './models/CSE_Ejercicio';
import { CSEEjercicioService } from './services/cse-ejercicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent {
  title = 'CuerpoSanoMantenimiento';

  form_Ejercicios: FormGroup;

  constructor( private modal: NgbModal,  
               private formBuilder: FormBuilder,
               private cSEEjercicioService: CSEEjercicioService){

                this.form_Ejercicios =this.formBuilder.group({
                  id:0,
                  NombreEjercicio:[''],
                  Descripcion: [''],
                  Recomendaciones: [''],
                  MusculoTrabajado: [''],
                  MusculosSecundario: [''],
                  UrlFoto: [''],
                  UrlVideo: [''],
                  RepeticionesRecomendadas: [''],
                  TiempoRecomendado:['']
            
                })

                //this.formularios();
               }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class    
  }

  abrirModal( modal){
    this.modal.open(modal, {size:'xl'});
  }

  getEjercicio(){
    this.cSEEjercicioService.getEjercicio()
    .subscribe(data=>{
      console.log(data)
    })
  }
  agregar(){

    var ne = this.form_Ejercicios.get('NombreEjercicio').value;
      const ejercicio: CSE_Ejercicio = {
       
        NombreEjercicio: this.form_Ejercicios.get('NombreEjercicio').value,
        Descripcion: this.form_Ejercicios.get('Descripcion').value,
        Recomendaciones: this.form_Ejercicios.get('Recomendaciones').value,
        MusculoTrabajado: this.form_Ejercicios.get('MusculoTrabajado').value,
        MusculosSecundario: this.form_Ejercicios.get('MusculosSecundario').value,
        UrlFoto: this.form_Ejercicios.get('UrlFoto').value,
        UrlVideo: this.form_Ejercicios.get('UrlVideo').value,
        RepeticionesRecomendadas: this.form_Ejercicios.get('RepeticionesRecomendadas').value,
        TiempoRecomendado: this.form_Ejercicios.get('TiempoRecomendado').value
      }

      this.cSEEjercicioService.guardarRegistro(ejercicio).
      subscribe(data=>{
        console.log("aqui estan los datso")
        console.log(data)
      })
  }

  formularios(){
    
  }
}

