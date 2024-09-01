import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './home/container/container.component';
import { IndproComponent } from './products/indpro/indpro.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CartComponent } from './cart/cart/cart.component';


const routes: Routes = [ {
  path: '',
  redirectTo:'home',
  pathMatch: 'full'
 

},

{
  path:'home',
  component:ContainerComponent
},

{
  path:'cart',
  component: CartComponent
},
{
  path:'home/:id',
  component: IndproComponent
},
{
  path:'login',
  loadChildren:() => import('./login/login.module').then(m=>m.LoginModule)
},
{
  path:'home/categories/:category',
  component: CategoriesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
