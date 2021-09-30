import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// import { MessageService } from '../../messages/message.service';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  pageTitle = 'Product Edit';
  @ViewChild(NgForm, {static: false}) 
  productForm: NgForm;

  errorMessage: string;
  product: Product;

  constructor(
    private productService: ProductService,
    // private messageService: MessageService,
    private route: ActivatedRoute,
    // private router: Router
    ) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      if (this.productForm) {
        this.productForm.reset();
      }
      this.product = data["resolvedData"].product;
    })
  }

  // getProduct(id: number): void {
  //   this.productService.getProduct(id).subscribe({
  //     next: product => this.onProductRetrieved(product),
  //     error: err => this.errorMessage = err
  //   });
  // }
  
  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Edit: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
