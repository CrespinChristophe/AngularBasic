import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoBindingComponent } from './demo/demo-binding/demo-binding.component';
import { Exo1Component } from './exo/exo1/exo1.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Page404Component } from './components/page404/page404.component';
//import { VoitureFormatPipe } from './shared/pipes/voiture-format.pipe';
import { DemoComponent } from './demo/demo.component';
import { ChildTextDirective } from './directives/child-text.directive';
//import { ChildTextDirective } from './child-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
