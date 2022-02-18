import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoCommuComponent } from '../demo/demo-commu/demo-commu.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ExoDirectivesComponent } from './exo-directives/exo-directives.component';
import { ExoComponent } from './exo.component';
import { Exo1Component } from './exo1/exo1.component';

const routes: Routes = [
    { path: "", component: ExoComponent, children: [
       { path:"exo1", component:Exo1Component },
       { path:"chrono", component:ChronoComponent },
       { path:"directives", component:ExoDirectivesComponent  },
       { path:"communication", component: DemoCommuComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }