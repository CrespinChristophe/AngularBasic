import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DemoBindingComponent } from './demo/demo-binding/demo-binding.component';
import { Exo1Component } from './exo/exo1/exo1.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path:"", redirectTo: "accueil", pathMatch: 'full' },
  { path:"accueil", component: AccueilComponent },
  //{ path: "demo", component: DemoBindingComponent },
  { path: "demo", loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: "exo", loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule) },
  //{ path : "exo", component: Exo1Component },
  { path: "404", component: Page404Component},
  { path: "**", redirectTo:"404" } // le double ** correspond à n'importe quelle URL, donc l'ordre a une importance
];                                  // "**" s'active pour toutes les routes, c'est une wildcard

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot parce que racine
  exports: [RouterModule]
})
export class AppRoutingModule { }
