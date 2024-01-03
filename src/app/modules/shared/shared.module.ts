import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
