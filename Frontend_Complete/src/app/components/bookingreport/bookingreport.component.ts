import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookSlotService } from 'src/app/services/book-slot.service';
import { BookslotComponent } from '../bookslot/bookslot.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookSlotRegister } from 'src/app/models/book-slot.model';

@Component({
  selector: 'app-bookingreport',
  templateUrl: './bookingreport.component.html',
  styleUrls: ['./bookingreport.component.css']
})
export class BookingreportComponent implements OnInit {
  bookArray:BookSlotRegister[]= [];
  bookFormGroup: FormGroup|undefined;
  constructor(private bookService: BookSlotService, public dialog: MatDialog,private fb:FormBuilder) {
    this.bookFormGroup=this.fb.group({
      id:[""], 
      employeeId:[""],
       department:[""],
        floor:[""],
         roomno:[""],
         seats:[""],
          date:[""],
          startTime:[""],
            toTime :[""], 
            employeeName:[""],
             action:[""]
    })  }
  displayedColumns: string[] = ['id', 'employeeId', 'department', 'floor', 'roomno','seatNo', 'date', 'fromTime', 'toTime ', 'employeeName', 'action'];
  dataSource = [];
  

  ngOnInit(): void {
    this.getAllBookRegister();
  }

  getAllBookRegister() {
    this.bookService.getAllRegister()
      .subscribe(data => {
        console.log(data)
        // this.dataSource = data;
        this.bookArray=data;
      })
  }

  EditBook(bookData: any, type: string) {
    console.log(bookData, type);
    this.dialog.open(BookingreportComponent, {
      data: {
        type: "Edit",
        value: bookData
      },
    })
  }

  DeleteBook(id: any) {
    this.bookService.deleteBookById(id)
      .subscribe(response => {
        console.log(response)
      },
        err => {
          console.log(err)
        })
  }

  // openDialog() {
  //   this.dialog.open(BookslotComponent, {
  //     data: {
  //       type: "Add",
  //       value: {}
  //     }
  //   })
  // }

}
