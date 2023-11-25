import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    url: string = "https://fakestoreapi.com/products";

    constructor(private http: HttpClient) {
    }

    getAllProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.url, {
            params: new HttpParams({fromObject: {limit: 13}})
        });
    }

}
