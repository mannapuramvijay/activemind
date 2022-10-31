import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from 'src/services/services.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  {path: 'services', redirectTo: '/services', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
