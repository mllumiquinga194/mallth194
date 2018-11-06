import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import  { MaterialModule } from './material/material.module';

//Particles
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DescriptionComponent,
    ContentComponent,
    HeaderComponent
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
