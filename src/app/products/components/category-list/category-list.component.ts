import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Category, Product } from '../../interfaces';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: []
})
export class CategoryListComponent implements OnInit{
  categories: Category[];

  constructor(
    private productService: ProductService
  ) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(
      value => this.categories = value
    );
  }
}
