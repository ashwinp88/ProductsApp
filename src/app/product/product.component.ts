import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Services/data.service';
import { Product } from '../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: string;
  product: Product;

  constructor(private route: ActivatedRoute, private dataService: DataService) { 
    this.product = new Product;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getProductByID(+this.id).subscribe(
      (result: Product) => this.product = result
    )
  }

}
