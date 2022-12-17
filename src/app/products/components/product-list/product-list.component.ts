import { Component, OnInit } from '@angular/core';

import { Category, Product } from '../../interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories: Category[];
  products: Product[] = [];
  responsiveOptions;

  constructor(
    private productService: ProductService
  ) {
    this.categories = [];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.productService.getAllCategories().subscribe(value => this.categories = value);
    this.productService.getAllProducts().subscribe(value => this.products = value);
  }

  getProductsByCategory(category: Category) {
    let productsByCategory: Product[] = [];

    this.productService.getInCategory(category).subscribe(
      value => productsByCategory = value
    );

    return productsByCategory;
  }
}
