import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookSlotService } from 'src/app/services/book-slot.service';
import { BookslotComponent } from '../bookslot/bookslot.component';

@Component({
  selector: 'app-bookingreport',
  templateUrl: './bookingreport.component.html',
  styleUrls: ['./bookingreport.component.css']
})
export class BookingreportComponent implements OnInit {
  book: string = "";
  constructor(private bookService: BookSlotService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'employeeId', 'department', 'floor', 'roomno','seatNo', 'date', 'fromTime', 'toTime ', 'employeeName', 'action'];
  dataSource = [];

  ngOnInit(): void {
    this.getAllBookRegister();
  }

  getAllBookRegister() {
    this.bookService.getAllRegister()
      .subscribe(data => {
        console.log(data)
        this.dataSource = data;
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
