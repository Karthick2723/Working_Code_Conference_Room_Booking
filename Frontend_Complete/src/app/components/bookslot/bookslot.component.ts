import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { SelectService } from 'src/app/services/select.service';


@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.css']
})
export class BookslotComponent implements OnInit {
  floor: any = [];
  room: any = [];
  val: any = [];
  bookSlotForm!: FormGroup;


  constructor(private Selectservice: SelectService, private fb: FormBuilder, private auth: AuthService, private router: Router) { }

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



  slotRegister() {
    if (this.bookSlotForm.valid) {
      this.auth.confRegister(this.bookSlotForm.value)
        .subscribe({
          next: (res => {
            alert(res.message)
            this.bookSlotForm.reset();
            this.router.navigate(['bookingReport'])
          }),
          error: (err => {
            alert(err?.error.message)
          })
        })
    }
    else{
      ValidateForm.validateAllFormFields(this.bookSlotForm)
    }
  } 
}

