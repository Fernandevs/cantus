import { Component, Input } from '@angular/core';
import { Product } from "../../interfaces";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent {
  @Input('products')
  products!: Product[]
  constructor() {
  }
}
