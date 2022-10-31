import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(
      m => m.AuthModule
    )
  },
  // {
  //   path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(
  //     m => m.AdminModule
  //   ), canActivate:[AuthGuard]
  // },
  {
    path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(
      m => m.AdminModule
    )
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404' },
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
