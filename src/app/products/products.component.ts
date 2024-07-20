import { Component, Input } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, SearchPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input({ required: true }) categoryId!: number;
  name = '';

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.name = savedSearchTerm;
    }
  }

  get filteredProducts() {
    return this.productService.getProductsByCatID(this.categoryId);
  }

  onSearchTermChange(): void {
    localStorage.setItem('searchTerm', this.name);
  }
  resetSearchTerm(): void {
    this.name = '';
    localStorage.removeItem('searchTerm');
  }
}
