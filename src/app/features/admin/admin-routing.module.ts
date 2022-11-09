import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'presence-management',
        loadChildren: () =>
          import('./presence-management/presence-management.module').then(
            (m) => m.PresenceManagementModule
          ),
      },
      {
        path: 'absence-request',
        loadChildren: () =>
          import('./absence-request/absence-request.module').then(
            (m) => m.AbsenceRequestModule
          ),
      },
      {
        path: 'hour-lesson',
        loadChildren: () =>
          import('./hour-lesson/hour-lesson.module').then(
            (m) => m.HourLessonModule
          ),
      },
      {
        path: 'matter',
        loadChildren: () =>
          import('./matter/matter.module').then((m) => m.MatterModule),
      },
      {
        path: 'my-scores',
        loadChildren: () =>
          import('./my-scores/my-scores.module').then((m) => m.MyScoresModule),
      },
      {
        path: 'score-list',
        loadChildren: () =>
          import('./score-list/score-list.module').then(
            (m) => m.ScoreListModule
          ),
      },
      {
        path: 'list-of-requests',
        loadChildren: () =>
          import('./list-of-requests/list-of-requests.module').then(
            (m) => m.ListOfRequestsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
