import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-volumen',
  templateUrl: './volumen.component.html',
  styleUrls: ['./volumen.component.sass']
})
export class VolumenComponent implements OnInit {

  constructor(private fb:FormBuilder,private backendService:BackendService) { }
  form=this.fb.group({
    volumen:['',Validators.required],
  })
  volumen={volumen:''}
  ngOnInit(): void {
  }

  obtainVolumen(form){
    if (form.valid){
      console.log(form.value.volumen,"QUE PASA")
      this.backendService.volumen(form.value.volumen)
      .then((result:any)=>{
        this.volumen=result
      })
    }else alert("Llene todos los campos")
  }

}
