import { Routes } from '@angular/router';
import { NormalComponent } from './normal/normal.component';
import { AnotherComponent } from './another/another.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'normal-component', component: NormalComponent },
  { path: 'another-component', component: AnotherComponent },
  { path: '**', component: AppComponent },
];
