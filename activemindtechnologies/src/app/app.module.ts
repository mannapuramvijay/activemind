import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesComponent } from 'src/services/services.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
