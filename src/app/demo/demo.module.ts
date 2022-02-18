import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { NavComponent } from './nav/nav.component';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoCommuComponent } from './demo-commu/demo-commu.component';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { DemoCommuChildrenComponent } from './demo-commu-children/demo-commu-children.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [DemoPipeComponent, NavComponent, DemoComponent,DemoBindingComponent, 
  DemoDirectiveComponent, DemoCommuComponent, 
  DemoCommuComponent,  DemoCommuChildrenComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
