import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { ProductListCategoryComponent } from './components/product-list-category/product-list-category.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    CategoryListComponent,
    CategoryComponent,
    ProductComponent,
    GalleriaComponent,
    ProductListCategoryComponent
  ],
  exports: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    PrimeNgModule
  ]
})
export class ProductsModule {
}
