import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryModule } from '../category/category.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './pages/dashboard.component';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CategoryModule,
    ProductModule
  ]
})
export class DashboardModule { }
