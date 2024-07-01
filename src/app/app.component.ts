import {
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Product } from './Interface/Product';
import { ProductsComponent } from './products/products.component';
import { ServicesService } from './serivce/services.service';
import { ProductService } from './serivce/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnChanges {
  @ViewChild(ProductsComponent, { read: ElementRef }) products: ElementRef;
  @ViewChildren(ProductsComponent, { read: ElementRef })
  productsCh: QueryList<ElementRef>;
  ChangeLevel: string;
  @ViewChild('div') div: ElementRef;
  addproduct: boolean = true;
  OnActive: boolean;
  numSize: number = 4;
  ProductsApp: Product[] = [];

  constructor(
    private services: ServicesService,
    private productService: ProductService,
    @Attribute('ChangeLevel') ex: string
  ) {
    console.log('ChangeLevel', ex);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges :');
    console.log(changes);
  }
  ngOnInit(): void {
    this.ViewProducts(this.numSize);
    this.services.ActiveEmitter.subscribe((ele) => (this.OnActive = ele));
    this.services.ActiveSubject.subscribe((ele) => (this.OnActive = ele));
  }
  ViewProducts(size: number) {
    this.productService.getProducts().subscribe((ele: Product[]) => {
      this.ProductsApp = ele;
      console.log(ele);
    });
    // for (let index = 1; index <= size; index++) {
    //   var Product: Product = {
    //     Id: index,
    //     Name: index + 'Name',
    //     Description: 'Description',
    //     Image: (index % 4) + 1 + '.jpeg',
    //     Price: index * 10 + '',
    //   };
    //   this.ProductsApp.push(Product);
    // }
    console.log(this.ProductsApp);
  }
  toggleAddProduct() {
    this.addproduct = !this.addproduct;
  }
  OnAddProduct(ele: Product) {
    this.addproduct = !this.addproduct;
    ele.Image = (this.ProductsApp.length % 4) + 1 + '.jpeg';
    this.ProductsApp.push(ele);
  }

  viewchild() {
    console.log('Products ', this.products);
    console.log('div ', this.div);
    console.log('productsCh ', this.productsCh);
  }

  onToggle(isHighlighted: boolean) {}
  changeEffact() {
    this.ProductsApp[0].Name = 'cahnge !!' + this.numSize + 1;
    this.numSize++;
  }
  onMute() {
    this.ProductsApp[0].Description = 'Hello With Isaac';
  }
}
