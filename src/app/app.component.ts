import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductsComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'products';
  selectedCategoryId!: number;
  ngOnInit(): void {
    const savedCategoryId = localStorage.getItem('selectedCategoryId');
    if (savedCategoryId) {
      this.selectedCategoryId = Number(savedCategoryId);
    }
  }
  onCategorySelected(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}
