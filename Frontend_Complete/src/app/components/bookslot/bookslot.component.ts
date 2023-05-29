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
departments:any=['Glamz','Haliburton','Servicenow','Ezhour','HR','Project Manager','Finance'];
seatNumber:any=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
floors:any=['1st','2nd','3rd'];
roomNumber:any=['Room-1','Room-2','Room-3','Room-4']
  bookSlotForm:FormGroup=this.formbuilder.group({});
  floor: any = [];
  room: any = [];
  val: any = [];
  // bookSlotForm!: FormGroup;

  constructor(private Selectservice: SelectService,
    private formbuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private bookSlotService: BookSlotService,
    private toast: NgToastService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {type:any,value:any} ) { }


  ngOnInit(): void {
    console.log(this.data);
    this.initFormBuilder();

    this.floor = this.Selectservice.getFloor();
    console.log(this.floor);
    
    // if(this.data.type=="Edit"){
    //   this.bookSlotForm.patchValue(this.data.value);
    // }

  }


  initFormBuilder(){
    this.bookSlotForm = this.formbuilder.group({
      // refId:[''],
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      department: ['', Validators.required],
      floor: ['', Validators.required],
      roomNo: ['', Validators.required],
      seatNo: ['', Validators.required],
      date: [new Date(), Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
    });
    
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
    console.log(this.data)


      this.bookSlotService.addBook(this.bookSlotForm.value)
        .subscribe(response => {
          console.log(response);
        },
          (err) => {
            console.log(err);
          }) 
          console.log(this.bookSlotForm.value);
          this.toast.success({ detail: "SUCCESS", summary: "Registered Successfully", duration: 5000 });
          this.bookSlotForm.reset();

        }
        

  // }else {
  //     this.bookSlotService.updateBook(this.bookSlotForm.value)
  //       .subscribe(response => {
  //         console.log(response);
  //       }, (err) => {
  //         console.log(err);
  //       })
  //   }
    
  // }

}
