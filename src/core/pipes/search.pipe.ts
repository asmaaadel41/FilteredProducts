import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(products: IProduct[], name: string): IProduct[] {
    if (!name || name.trim() === '') {
      return products;
    }
    name = name.toLowerCase().trim().replace(/\s+/g, ' ');
    return products.filter((p) => p.name.toLocaleLowerCase().includes(name));
  }
}
