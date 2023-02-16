import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: ()=> import('./features/login/login.module').then(m=> m.LoginModule)
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
