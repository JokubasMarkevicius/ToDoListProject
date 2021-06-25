import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateValidator } from './date-validator';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css'],
})
export class DialogOverviewComponent implements OnInit {
  formGroup!: FormGroup;
  post: any = '';

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(20)]],
      description: [null, Validators.required],
      date: [null, Validators.required, DateValidator.dateValidator],
    });
  }

  checkInUseTitle(title: any) {
    //check whether the title exists in the DB once that is implemented
    //for now it could be checking whether the mock data has the title already
  }

  checkDateFormat(date: any) {
    let valid = DateValidator.dateValidator(date);
    return !valid?.dateValidator ? { invalidDate: true } : null;
  }

  getErrorTitle() {
    return this.formGroup.get('title')?.hasError('required')
      ? 'Field is required'
      : '';
  }

  getErrorDate() {
    return this.formGroup.get('date')?.hasError('required')
      ? 'Field is required'
      : this.formGroup.get('date')?.hasError('invalidDate')
      ? 'Invalid Date'
      : '';
  }

  onSubmit(post: any) {
    this.post = post;
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
