import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductEditComponent } from '../products/product-edit/product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsdeactivateService implements CanDeactivate<ProductEditComponent> {

  canDeactivate(
    component: ProductEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(route)
    return window.confirm("Tem certeza que deseja sair dessa página?");
  }
}
