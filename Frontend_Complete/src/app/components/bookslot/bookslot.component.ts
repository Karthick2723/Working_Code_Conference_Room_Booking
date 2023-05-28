import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { BookSlotRegister } from 'src/app/models/book-slot.model';
import { AuthService } from 'src/app/services/auth.service';
import { BookSlotService } from 'src/app/services/book-slot.service';
import { SelectService } from 'src/app/services/select.service';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {
  registerObj: BookSlotRegister = {
    id: 0,
    employeeId: '',
    employeeName: '',
    department: '',
    seats: 0,
    floor: '',
    roomNumber: '',
    dateTime: new Date(),
    startTime: '',
    endTime: ''
  };
  floor: any = [];
  room: any = [];
  val: any = [];
  bookSlotForm!: FormGroup;


  constructor(private Selectservice: SelectService,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private bookSlotService: BookSlotService,
    private toast: NgToastService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any ) { }


  ngOnInit(): void {

    this.floor = this.Selectservice.getFloor();
    console.log(this.floor);
    this.bookSlotForm = this.fb.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      department: ['', Validators.required],
      floor: ['', Validators.required],
      room: ['', Validators.required],
      seatno: ['', Validators.required],
      date: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
    })

  }

  onSelect(floor: any) {
    this.room = this.Selectservice.getRoom().filter(e => e.id == floor.target.value);
  }



  // slotRegister() {
  //   if (this.bookSlotForm.valid) {
  //     this.auth.confRegister(this.bookSlotForm.value)
  //       .subscribe({
  //         next: (res => {
  //           alert(res.message)
  //           this.bookSlotForm.reset();
  //           this.router.navigate(['bookingReport'])
  //         }),
  //         error: (err => {
  //           alert(err?.error.message)
  //         })
  //       })
  //   }
  //   else {
  //     ValidateForm.validateAllFormFields(this.bookSlotForm)
  //   }
  // }

  slotRegister() {
    if (this.bookSlotForm.valid) {
    console.log("submited")
    if (this.data.type == "Add") {
      let data = {
        employeeId: this.bookSlotForm.controls['employeeId'].value,
        employeeName: this.bookSlotForm.controls['employeeName'].value,
        department: this.bookSlotForm.controls['department'].value,
        seats: this.bookSlotForm.controls['seats'].value,
        floor: this.bookSlotForm.controls['floor'].value,
        roomNumber: this.bookSlotForm.controls['roomNumber'].value,
        dateTime: this.bookSlotForm.controls['dateTime'].value,
        startTime: this.bookSlotForm.controls['startTime'].value,
        endTime: this.bookSlotForm.controls['endTime'].value
      }
      this.bookSlotService.CreateBookSlotRegister(data)
        .subscribe(response => {
          console.log(response);
        },
          (err) => {
            console.log(err);
          })
    } 
  }else {
    ValidateForm.validateAllFormFields(this.bookSlotForm)
      this.bookSlotService.updateBook(this.bookSlotForm.value)
        .subscribe(response => {
          console.log(response);
        }, (err) => {
          console.log(err);
        })
    }
  }
}
