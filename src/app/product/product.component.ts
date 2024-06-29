import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../Interface/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements AfterViewInit, OnChanges {
  @Input() product: Product;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges :');
    console.log(changes);
  }

  @Input() name: string;
  @ContentChild('image') image: any;
  ngAfterViewInit(): void {
    // console.log(this.image);
    // console.log(this.product);
  }
  NoDate: string = 'No Date';
}
