import { Component, Input } from '@angular/core';
import { Category } from "../../interfaces";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent {
  @Input('category')
  category!: Category;
}
