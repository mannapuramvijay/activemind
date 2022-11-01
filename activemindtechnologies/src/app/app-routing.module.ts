import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { ServicesComponent } from 'src/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch: 'full' },
  {path: 'services', component: ServicesComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
