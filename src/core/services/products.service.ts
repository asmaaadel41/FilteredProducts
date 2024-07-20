import { Injectable } from '@angular/core';
import { ICategory } from '../models/ICategory';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public categories: ICategory[] = [];
  private products: IProduct[] = [];
  constructor() {
    this.categories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' },
      { id: 3, name: 'Jewelery' },
    ];
    this.products = [
      {
        id: 1,
        name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        price: 100,
        quantity: 3,
        cateogryID: 1,
      },
      {
        id: 2,
        name: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        price: 109,
        quantity: 5,
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        cateogryID: 1,
      },
      {
        id: 3,
        name: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        price: 114,
        quantity: 9,
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        cateogryID: 1,
      },
      {
        id: 4,
        name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 85,
        quantity: 1,

        image:
          'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        cateogryID: 3,
      },
      {
        id: 5,
        name: 'White Gold Plated Princess',
        price: 70,
        quantity: 7,

        image:
          'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        cateogryID: 3,
      },
      {
        id: 6,
        name: 'Solid Gold Petite Micropave ',
        price: 168,
        quantity: 4,

        image:
          'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        cateogryID: 3,
      },
      {
        id: 7,
        name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        quantity: 2,

        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        cateogryID: 2,
      },
      {
        id: 8,
        name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        quantity: 1,

        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        cateogryID: 2,
      },
      {
        id: 9,
        name: 'Mens Cotton Jacket',
        price: 55.99,
        quantity: 9,

        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        cateogryID: 2,
      },
    ];
  }
  getProductsByCatID(catID: number): IProduct[] {
    return this.products.filter((product) => product.cateogryID === catID);
  }
  // getProductByID(prodID: number): IProduct | undefined {
  //   return this.products.find((product) => product.id === prodID);
  // }
}
