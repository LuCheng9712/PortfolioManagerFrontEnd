import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { InsightsComponent } from './insights/insights.component'

const routes: Routes = [
  {path:'assets', component:AssetsComponent},
  {path:'insights', component:InsightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
