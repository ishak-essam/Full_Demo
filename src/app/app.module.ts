import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { HighlightedDirective } from './directive/highlighted.directive';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsComponent } from './posts/posts.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authInterceptService } from './interceptor/auth.interceptor.service';
import { AlertComponent } from './alert/alert.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddproductComponent,
    ProductComponent,
    BasicHighlightDirective,
    HighlightedDirective,
    MainComponent,
    EmployeeComponent,
    TdfComponent,
    ReactiveFormsComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    PostsComponent,
    AlertComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptService, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
