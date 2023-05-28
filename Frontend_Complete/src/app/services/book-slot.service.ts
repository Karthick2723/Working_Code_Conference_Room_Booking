import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookSlotService {
  // private url:string="";
  private baseUrl: string ='https://localhost:7018/api/bookslotregister/';

  constructor(private http: HttpClient) { }
  
  getAllRegister():Observable<any>{
    // this.url=this.baseUrl+"/book/GetBook";
    return this.http.get(this.baseUrl);
  }

  CreateBookSlotRegister(registerObj:any):Observable<any>{
    // this.url=this.baseUrl+"/book/CreateBook";
    return this.http.post(this.baseUrl,registerObj);
  }
  
  updateBook(registerObj:any):Observable<any>{
    // this.url=this.baseUrl+"/book/UpdateBook";
    return this.http.post(this.baseUrl,registerObj);
  }

  getBookById(id:any):Observable<any>{
    // this.url=this.baseUrl+"/Book/GetBookById?id="+id;
    return this.http.get(this.baseUrl);
  }

  deleteBookById(id:any): Observable<any> {
    // this.url=this.baseUrl+"Book/DeleteBook?id="+id;
    return this.http.delete(this.baseUrl);
  }

}
