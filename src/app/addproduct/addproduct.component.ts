import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Product } from '../Interface/Product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  @Output() ProductAdd = new EventEmitter<Product>();
  @ViewChild('Price', { static: true }) Price: ElementRef;
  @ViewChild('Image', { static: true }) Image: ElementRef;
  @ViewChild('Description', { static: true }) Description: ElementRef;
  @ViewChild('Name', { static: true }) Name: ElementRef;
  onProductAdd() {
    this.ProductAdd.emit({
      Id:0,
      Name: this.Name.nativeElement.value,
      Price: this.Price.nativeElement.value,
      Image: this.Image.nativeElement.value,
      Description: this.Description.nativeElement.value,
    });
  }
}
