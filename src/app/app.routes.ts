import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { Chart1Component } from './procurement/chart1/chart1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: 'dashboard' },
  },
  {
    path: 'procurement',
    component: ProcurementComponent,
    data: { breadcrumb: 'procurement' },
    children: [
      {
        path: 'chart1',
        component: Chart1Component,
        data: { breadcrumb: 'chart1' },
      },
    ],
  },

  //   { path: '**', component: AppComponent },
];
