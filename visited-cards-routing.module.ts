import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitedCardsPage } from './visited-cards.page';

const routes: Routes = [
  {
    path: '',
    component: VisitedCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitedCardsPageRoutingModule {}
