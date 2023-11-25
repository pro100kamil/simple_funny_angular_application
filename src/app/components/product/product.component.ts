import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IProduct} from "../../models/product";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {products} from "../../data/products";

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule, ButtonModule, DialogModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input() product: IProduct | null = null;
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    protected readonly products = products;
}
