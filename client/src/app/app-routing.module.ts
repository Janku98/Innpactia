import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { TokenGuard } from './core/guards/token.guard.service';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: ()=> import('./features/login/login.module').then(m=> m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: ()=> import('./features/register/register.module').then(m=>m.RegisterModule)
  },
  {
    path: 'home',
    canActivateChild: [TokenGuard],
    loadChildren: ()=> import('./features/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'cashbox',
    canActivateChild: [TokenGuard],
    loadChildren: ()=> import('./features/cash-box/cash-box.module').then(m=>m.CashBoxModule)
  },
  {path: '**', redirectTo: 'login'}
]



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true
})],
exports: [RouterModule]
})
export class AppRoutingModule { }
