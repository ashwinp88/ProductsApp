import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Product } from '../models/product-model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllProducts().subscribe(
      (response: HttpResponse<Product[]>) => {
        this.products = response.body;
      }
    )
  }

}
