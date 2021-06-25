import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from './list-container/list-container.component';

const routes: Routes = [
  { path: 'list', component: ListContainerComponent },
  { path: '**', redirectTo: '/list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
