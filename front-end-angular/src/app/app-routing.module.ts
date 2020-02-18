import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { VolumenComponent } from './pages/volumen/volumen.component';


const routes: Routes  =[
  {path:'',
  component:FormComponent
}
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 

}
