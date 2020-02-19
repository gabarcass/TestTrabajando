import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
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

/*   public volumen(id){
    return new Promise((resolve,reject)=>{
      this.http.get(`http://localhost:8081/v1/paralelepipedo/${id}/`)
      .subscribe((result:any)=>{
        try{
          if(result.volumen==""){
            alert("No se encontro la Id ingresada")
          }
          console.log(result,"HOLAAA ")
          resolve(result)
        }catch(error){
          alert("No se que paso pero algo paso con el Get.")
          console.log(error)
          reject(error)
        }
      }

      )
    })
  } */

  public volumen(id): Observable<any> {
    return this.http.get<any>(`http://localhost:8081/v1/paralelepipedo/${id}/`)
      .pipe(
        catchError(this.handleError)
      );
  }
 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      if(error.status==404){
        errorMessage = `Error : ${error.status}\nMensaje:  Id no encontrada en la base de datos `;
      }else{
        errorMessage = `Error : ${error.status}\nMensaje:  ${error.error.message} `
      }
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
