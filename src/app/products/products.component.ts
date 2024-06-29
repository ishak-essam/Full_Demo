import { AfterContentChecked, AfterContentInit, Component, Input, input } from '@angular/core';
import { Product } from '../Interface/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  @Input() Products: Product[];
  @Input() name: string;
  ViewProducts(size: number) {
    for (let index = 1; index <= size; index++) {
      this.Products.push({
        Id:index,
        Name: index + 'Name',
        Description: 'Description',
        Image: index + '.jpeg',
        Price: index * 10 + '',
      });
    }
  }
}
