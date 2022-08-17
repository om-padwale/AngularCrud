import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  columnDefs = [{ field: "bookId" }, { field: "bookName" }, { field: "author" }];
 
  baseUrl:string = "https://localhost:7225/";
  constructor(private httpClient: HttpClient) { }
   
  get_products(){
      return this.httpClient.get(this.baseUrl + 'api/book');
  }
  post_products(book: any){
    return this.httpClient.post(this.baseUrl + 'api/book', book);
  }
  update_products(book: any){ 
    return this.httpClient.put(this.baseUrl + 'api/book', book);
  }
  delete_products(bookId: number){
    return this.httpClient.delete(this.baseUrl + 'api/book/' + bookId);
  }
}
