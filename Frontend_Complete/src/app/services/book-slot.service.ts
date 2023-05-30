import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookSlotService {
  private url:string="";
  private baseUrl: string ='https://localhost:7018/api/bookslotregister';

  constructor(private http: HttpClient) { }
  
  getAllRegister():Observable<any>{
    this.url=this.baseUrl+"/";
    return this.http.get(this.url);
  }

  addBook(registerObj:any):Observable<any>{
    this.url=this.baseUrl+"/bookSlot";
    return this.http.post(this.url,registerObj);
  }
  
  updateBook(registerObj:any,id:any):Observable<any>{
    this.url=this.baseUrl+"/"+id;
    return this.http.put(this.url,registerObj);
  }

  getBookById(id:any):Observable<any>{
    this.url=this.baseUrl+"/Book/GetBookById?id="+id;
    return this.http.get(this.url);
  }

  deleteBookById(id:any): Observable<any> {
    this.url=this.baseUrl+"Book/DeleteBook?id="+id;
    return this.http.delete(this.url);
  }

}
