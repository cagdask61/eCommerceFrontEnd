import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CategoryListComponent } from './Components/CategoryComponents/category-list/category-list.component';
import { ProductListComponent } from './Components/ProductComponents/product-list/product-list.component';
import { HomeComponent } from './Components/Start/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductListComponent },
  { path: "categories", component: CategoryListComponent },
  {path:"category/:categoryid",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
