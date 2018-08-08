import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { Error403Component } from './pages/error403/error403.component';

const routes: Routes = [
  {
    canActivate: [AuthGuardService],
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  // {
  //   path: '**', component: Error403Component
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
