import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import  { MaterialModule } from './material/material.module';

//Particles
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
