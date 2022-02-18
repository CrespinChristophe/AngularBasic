import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressionBinding } from '@angular/compiler';
import { Exo1Component } from './exo1/exo1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ChronoComponent } from './chrono/chrono.component';
import { ExoComponent } from './exo.component';
import { ExoDirectivesComponent } from './exo-directives/exo-directives.component';
//import { ExoCommuComponent } from './exo-commu/exo-commu.component';
//import { ExoCommuChildrenComponent } from './exo-commu-children/exo-commu-children.component';
import { ExoParentComponent } from './exo-parent/exo-parent.component';
import { ExoEnfantComponent } from './exo-parent/exo-enfant/exo-enfant.component';
import { ExoEnfantDeuxComponent } from './exo-parent/exo-enfant-deux/exo-enfant-deux.component';
import { ChildTextComponent } from './child-text/child-text.component';
import { ChildTextDirective } from '../directives/child-text.directive';
import { ExoFormsComponent } from './exo-forms/exo-forms.component';



@NgModule({
  declarations: [  
    ChronoComponent, Exo1Component, ExoComponent, ExoDirectivesComponent, ExoParentComponent, ExoEnfantComponent, 
    ExoEnfantDeuxComponent, ChildTextComponent, ChildTextDirective, ExoFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExoModule { }
