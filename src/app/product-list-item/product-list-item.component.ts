import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSeeProductClicked() {
    this.router.navigate(['/products',this.product.Id])
  }
}
