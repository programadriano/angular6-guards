import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OverviewComponent } from './product-details/overview/overview.component';
import { AuthGuardChildService } from '../guards/auth-guard-child.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsdeactivateService } from '../guards/productsdeactivate.service';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-edit/:id', component: ProductEditComponent, canDeactivate: [ProductsdeactivateService] },
  {
    path: 'product-details/:id',
    canActivateChild: [AuthGuardChildService],
    children: [
      { path: '', component: ProductDetailsComponent },
      {
        path: 'overview',
        component: OverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
