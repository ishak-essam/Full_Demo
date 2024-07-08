import {
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EffectRef,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  computed,
  effect,
  signal,
} from '@angular/core';
import { Product } from './Interface/Product';
import { ProductsComponent } from './products/products.component';
import { ServicesService } from './serivce/services.service';
import { ProductService } from './serivce/product.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnChanges {
  @ViewChild(ProductsComponent, { read: ElementRef }) products: ElementRef;
  @ViewChildren(ProductsComponent, { read: ElementRef })
  CancleEffect: EffectRef;
  productsCh: QueryList<ElementRef>;
  ChangeLevel: string;
  @ViewChild('div') div: ElementRef;
  addproduct: boolean = true;
  OnActive: boolean;
  numSize: number = 4;
  ProductsApp: Product[] = [];
  totalProduct = this.ProductsApp.length;
  constructor(
    private services: ServicesService,
    public counterService: CounterService,
    private chaangeDectectionRef: ChangeDetectorRef,
    private productService: ProductService,
    @Attribute('ChangeLevel') ex: string
  ) {
    console.log('ChangeLevel', ex);
    this.CancleEffect = effect(
      () => {
        const counter = this.counter();
        const ComputedCounter = this.ComputedCounter();
        console.log(
          `Counter is ${counter}, ComputedCounter is  ${ComputedCounter} `
        );
        localStorage.setItem(
          'value',
          `Counter is ${counter}, ComputedCounter is  ${ComputedCounter} `
        );
      },
      { manualCleanup: true }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges :');
    console.log(changes);
    this.chaangeDectectionRef.markForCheck();
  }
  localList = [
    {
      code: 'en-us',
      label: 'english',
    },
    {
      code: 'ar',
      label: 'arabic',
    },
  ];
  CancleEffectFun() {
    this.CancleEffect.destroy();
  }
  ngOnInit(): void {
    this.ViewProducts(this.numSize);

    this.services.ActiveEmitter.subscribe((ele) => (this.OnActive = ele));
    this.services.ActiveSubject.subscribe((ele) => (this.OnActive = ele));
  }
  ViewProducts(size: number) {
    this.productService.getProducts().subscribe((ele: Product[]) => {
      this.ProductsApp = ele;
      this.totalProduct = this.ProductsApp.length;
    });
    console.log(this.totalProduct);
    console.log(this.ProductsApp.length);
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
  counter = signal(0);
  ComputedCounter = computed(() => {
    let count = this.counter();
    if (count % 2 != 0) count = count + 2;
    else return null;
    return count;
  });
  increment() {
    // this.counter.set(this.counter() + 1);
    // this.counter.update((ele) => ele + 1);
    this.counterService.increment();
  }
}
