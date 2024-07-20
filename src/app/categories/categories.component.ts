import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  @Output() categorySelected = new EventEmitter<number>();
  @Output() resetSearch = new EventEmitter<void>();
  selectedCategoryId: number | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    const savedCategoryId = localStorage.getItem('selectedCategoryId');
    this.selectedCategoryId = savedCategoryId ? +savedCategoryId : null;
  }

  getProductsByCatID(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const categoryId = +selectElement.value;
    this.categorySelected.emit(categoryId);
    this.resetSearch.emit();
    localStorage.setItem('selectedCategoryId', selectElement.value);
  }

  get getAllCategories() {
    return this.productsService.categories;
  }
}
