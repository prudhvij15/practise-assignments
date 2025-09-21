import { Component } from '@angular/core';
import products from './products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment3',
  imports: [FormsModule],
  templateUrl: './assignment3.html',
  styleUrl: './assignment3.css',
})
export class Assignment3 {
  productsList = products;

  searchText: string = '';
  filteredProducts: any[] = [...this.productsList];
  searchProduct() {
    return (this.filteredProducts = this.productsList.filter((product) =>
      product.title.toLowerCase().includes(this.searchText.toLowerCase()),
    ));
  }

  //   searchProduct() {
  //   return (this.productsList = this.productsList.filter((product) =>
  //     product.title.toLowerCase().includes(this.searchText.toLowerCase()),
  //   ));
  // }

sortAscending: boolean = true;
  sortProducts() {
     this.filteredProducts = [...this.filteredProducts].sort((a, b) =>
      this.sortAscending ? a.price - b.price : b.price - a.price
    );

    this.sortAscending = !this.sortAscending
  }
}
