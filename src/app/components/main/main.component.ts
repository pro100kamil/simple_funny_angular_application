import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from "../product/product.component";
import {RouterLink} from "@angular/router";
import {IProduct} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [CommonModule, ProductComponent, RouterLink],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
    title = 'products';
    products: IProduct[] = [];

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productService.getAllProducts().subscribe(products => {
            this.products = products;
        })
    }
}
