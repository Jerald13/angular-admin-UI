import { Routes } from '@angular/router';
import { ProcurementComponent } from './procurement/procurement.component';
import { Chart1Component } from './procurement/chart1/chart1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Chart2Component } from './procurement/chart2/chart2.component';
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
      {
        path: 'chart2',
        component: Chart2Component,
        data: { breadcrumb: 'chart2' },
      },
    ],
  },
  { path: '**', component: ProcurementComponent },
  { path: '', component: ProcurementComponent },
];
