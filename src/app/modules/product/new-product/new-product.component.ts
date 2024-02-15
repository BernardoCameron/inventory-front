import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../shared/services/category.service';
import { ProductService } from '../../shared/services/product.service';
export interface Category {
  description: string;
  id: number;
  name: string;
}

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public productForm!: FormGroup;
  private fb = inject(FormBuilder);
  private productService = inject(ProductService)
  private dialogRef = inject(MatDialogRef)
  public data = inject(MAT_DIALOG_DATA)
  public estadoForm: string = "";
  private categoryService = inject(CategoryService);
  categories: Category[] = [];
  selectedFile: any;
  nameImg: string = "";
  mostrarLabel = true;


  ngOnInit(): void {
    this.getCategories();

    this.estadoForm = "Agregar"

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      amount: ['', Validators.required],
      category: ['', Validators.required],
      picture: ['', Validators.required]
    })

    if (this.data != null) {


      this.updateForm(this.data)
      this.estadoForm = "Actualizar"
      console.log(this.data);
    }
  }

  updateForm(data: any) {
    this.productForm = this.fb.group({
      name: [data.name, Validators.required],
      description: [data.description, Validators.required]
    })
  }


  onSave() {
    let data = {
      name: this.productForm.get('name')?.value,
      price: this.productForm.get('price')?.value,
      amount: this.productForm.get('amount')?.value,
      category: this.productForm.get('category')?.value,
      picture: this.selectedFile
    }

    const uploadImageData = new FormData();
    uploadImageData.append('picture', data.picture, data.picture.name);
    uploadImageData.append('name', data.name);
    uploadImageData.append('price', data.price);
    uploadImageData.append('amount', data.amount);
    uploadImageData.append('categoryId', data.category);

    this.productService.saveProduct(uploadImageData)
      .subscribe((data: any) => {
        this.dialogRef.close(1);
      }, (error: any) => {
        this.dialogRef.close(2);

      })


  }

  onCancel() {
    this.dialogRef.close(3)
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe((data: any) => {
        console.log("respuesta de categorias: ", data);
        this.categories = data.categoryResponse.category;
      }, (error: any) => {
        console.log("error en categorias: ", error);
      })
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

    this.nameImg = event.target.files[0].name;
    this.mostrarLabel = false;
  }

}
