import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//routes(array name): Routes(Data Type)
const routes: Routes = [
  {path: 'first',component : FirstComponent}, //ashya prakare routing karto aapn
  {path: 'Second',component : SecondComponent},
  {path: 'third',component : ThirdComponent},
  {path: '',component : FirstComponent}, // Default Route
  {path : '**',component : PagenotfoundComponent} // Wild card routes
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
