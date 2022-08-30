import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { productListingsComponent } from './product-listings/product-listings.component';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';

const routes: Routes = [
    {
        path: 'products', component: ProductComponent,
        children: [
            { path: '', component: productListingsComponent },
    { path: ':productId', component: ProductDetailComponent }
        ]
    },
  ];
  
@NgModule({
  declarations: [
    ProductComponent,
    productListingsComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
],
  providers: [
    ProductService
  ],
  bootstrap: []
})


export class ProductModule { }

