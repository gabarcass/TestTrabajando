import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder,private backendService:BackendService) { }
  form=this.fb.group({
    alto:['',[Validators.required,Validators.min(1)]],
    ancho:['',[Validators.required,Validators.min(1)]],
    fondo:['',[Validators.required,Validators.min(1)]]
  })
  id={id:''}

  ngOnInit(): void {
  }

  save(form){
    if(form.valid){
      this.backendService.save(form.value)
      .then((result:any)=>{
        console.log(result)
        this.id=result
      })
    }else {
      console.log(form)
      alert("Revise los campos ingresados")}
  }

}
