import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddEmpleados, Empleado } from 'src/app/models/empleado.model';
import { Pais } from 'src/app/models/pais.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  formulario:FormGroup

  listaPaises : Pais [] =[];

  constructor(private servicePais:PaisService, private serviceEmpleado:EmpleadoService, private fb:FormBuilder){
      this.servicePais.listaPaises().subscribe(
        data=> this.listaPaises = data
      )

      this.formulario = this.fb.group({
        nombre: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        pais:['', Validators.required]
      })

  }

  registra(){
    if(this.formulario.invalid){
      Swal.fire({icon:'error', title:'Campos vacios'})
      return
    }
    const {nombre,fechaNacimiento,pais} = this.formulario.value
    let data: AddEmpleados = {
      nombres: nombre,
      fechaNacimiento : fechaNacimiento,
      pais: this.listaPaises.find((x)=> x.idPais == pais)!
      
    }

    this.serviceEmpleado.registrarEmpleado(data).subscribe(

      x =>  Swal.fire({icon: 'info',title: 'Resultado del Registro',text: x.error})
    )
  }

}
