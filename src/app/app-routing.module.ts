import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'empty-page',
    loadChildren: () =>
      import('./features/emptyPage/emptyPage.module').then(
        (m) => m.EmptyPageModule
      ),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
