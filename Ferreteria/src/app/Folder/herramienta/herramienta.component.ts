import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css']
})
export class HerramientaComponent implements OnInit {

  public formularioHerramientas:FormGroup
  constructor(private fb:FormBuilder) {
    this.formularioHerramientas=this.fb.group({
      nombre:['',Validators.required],
      precio:['',Validators.required],
      descripción:['',Validators.required],
      url:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  editarHerramientas(){
    if(!this.formularioHerramientas.invalid){
      console.log(this.editarHerramientas.value);
    }
    else{
      alert("No se puede editar la herramienta")
    }
    console.log(this.editarHerramientas.value);
  }

}
