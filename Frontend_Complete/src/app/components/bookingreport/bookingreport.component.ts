import { Component, OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookSlotService } from 'src/app/services/book-slot.service';
import { BookslotComponent } from '../bookslot/bookslot.component';

@Component({
  selector: 'app-bookingreport',
  templateUrl: './bookingreport.component.html',
  styleUrls: ['./bookingreport.component.css']
})
export class BookingreportComponent implements OnInit{
  book:string="";
  constructor(private bookService:BookSlotService,public dialog:MatDialog ){}
  displayedColumns: string[]=['s.no','empid','department','floor','roomno','date','from','to','empname','action'];
  dataSource=[];

  ngOnInit(): void {
      this.getAllRegister();
  }

  getAllRegister(){
    this.bookService.getAllRegister()
    .subscribe(data=>{
      console.log(data)
      this.dataSource=data;
    })
  }

  updateBook(bookData:any,type:string){
    console.log(bookData,type);
    this.dialog.open(BookslotComponent,{
      data:{
        type:"Edit",
        value:bookData
      },
    })
  }

  deleteBookById(id:any){
    this.bookService.deleteBookById(id)
    .subscribe(response=>{
      console.log(response)
    },
    err=>{
      console.log(err)
    })
  }

  openDialog(){
    this.dialog.open(BookslotComponent,{
      data:{
        type:"Add",
        value:{}
      }
    })
  }
  
}
