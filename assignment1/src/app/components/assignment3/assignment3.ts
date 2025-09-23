import { Component } from '@angular/core';
import products from './products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-assignment3',
  imports: [FormsModule, NgxPaginationModule, FontAwesomeModule],
  templateUrl: './assignment3.html',
  styleUrl: './assignment3.css',
})
export class Assignment3 {
  productsList = products;
  p: number = 1;
  faStar = faStar;

  searchText: string = '';
  filteredProducts: any[] = [...this.productsList];

  //   searchProduct() {
  //   return (this.productsList = this.productsList.filter((product) =>
  //     product.title.toLowerCase().includes(this.searchText.toLowerCase()),
  //   ));
  // }

  searchProduct() {
    return (this.filteredProducts = this.productsList.filter((product) =>
      product.title.toLowerCase().includes(this.searchText.toLowerCase()),
    ));
  }


  sortAscending: boolean = true;
  sortProducts() {
    this.filteredProducts = [...this.filteredProducts].sort((a, b) =>
      this.sortAscending ? a.price - b.price : b.price - a.price,
    );

    this.sortAscending = !this.sortAscending;
  }
}



// -Read data from a static array and display list of products in cards
//   https://fakestoreapi.com/products
// -use font-awesome to display any icons (star icon for rating)
// -implement pagination
// -implement search functionality (Search By Title)
// -implement sort functionality (Price Asc, Price desc)
