import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';

import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoCommuComponent } from './demo-commu/demo-commu.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
    { path:"binding", component:DemoBindingComponent },
    { path:"", component:DemoComponent},
    { path:"pipe", component:DemoPipeComponent},
    { path:"directive", component:DemoDirectiveComponent},
    { path:"commu", component: DemoCommuComponent},
    { path:"forms", component: DemoFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }