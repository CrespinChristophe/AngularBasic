import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
//import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DemoCommuComponent } from './demo-commu/demo-commu.component';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoCommuChildrenComponent } from './demo-commu-children/demo-commu-children.component';
//import { DemoCommuChildrenComponent } from './demo-commu-enfant/demo-commu-enfant.component';
//import { DemoCommuEnfantComponent } from './demo-commu-enfant/demo-commu-enfant.component';
//import { ComponentsComponent } from './components/components.component';



@NgModule({
  declarations: [DemoPipeComponent, NavComponent, DemoComponent,DemoBindingComponent, 
  DemoDirectiveComponent, HighlightDirective, DemoCommuComponent, 
  DemoCommuComponent,  DemoCommuChildrenComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
