import {
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  input,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../Interface/Product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements AfterViewInit {
  // @Input() product: Product;
  product = input.required<Product>({ alias: 'Ishak' });
  constructor(
    private http: HttpClient,
    @Attribute('ChangeLevel') private ex: string
  ) {
    console.log('ChangeLevel', ex);
  }
  @Input() name: string;
  @ContentChild('image') image: any;
  ngAfterViewInit(): void {
    // console.log(this.image);
    // console.log(this.product);
  }
  NoDate: string = 'No Date';
  oncourseTitle(newTtitle: string) {
    this.product()!.Description = newTtitle;
  }
}
