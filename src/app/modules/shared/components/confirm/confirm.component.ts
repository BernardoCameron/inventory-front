import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  private categoryService = inject(CategoryService)
  private dialogRef = inject(MatDialogRef)
  private data = inject(MAT_DIALOG_DATA)

  delete() {
    if (this.data != null) {
      this.categoryService.deleteCategorie(this.data.id).
        subscribe((data: any) => {
          this.dialogRef.close(1)
        }, (error: any) => {
          this.dialogRef.close(2)
        })
    } else {
      this.dialogRef.close(2)
    }
  }
  onNoClick() {
    this.dialogRef.close(3)
  }

}
