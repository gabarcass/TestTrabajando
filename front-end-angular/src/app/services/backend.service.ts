import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  public save(form){
    return new Promise((resolve,reject)=>{
      this.http.post("http://localhost:8081/v1/paralelepipedo/",form)
      .subscribe((result:any)=>{
        try{
          if(result.id==""){
            alert("Error de conexión con el Backend")
          }
          resolve(result)
        }catch(error){
          alert("No se que paso pero algo paso con el Post.")
          console.log(error)
          reject(error)
        }
      }

      )
    })
  }

  public volumen(id){
    return new Promise((resolve,reject)=>{
      this.http.get(`http://localhost:8081/v1/paralelepipedo/${id}/`)
      .subscribe((result:any)=>{
        try{
          if(result.volumen==""){
            alert("No se encontro la Id ingresada")
          }
          console.log(result)
          resolve(result)
        }catch(error){
          alert("No se que paso pero algo paso con el Get.")
          console.log(error)
          reject(error)
        }
      }

      )
    })
  }
}
