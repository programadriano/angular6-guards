import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OverviewComponent } from './product-details/overview/overview.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsdeactivateService } from '../guards/productsdeactivate.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, ProductDetailsComponent, OverviewComponent, ProductEditComponent],
  providers: [ProductsdeactivateService]
})
export class ProductsModule { }
