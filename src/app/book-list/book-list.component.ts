import { Component, OnInit } from '@angular/core';
import { BookService } from 'service/book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  columnDefs: any[] = [];
  rowData: any[] =[];

  constructor(private bookService : BookService) { }
  ngOnInit(): void {
    this.columnDefs = this.bookService.columnDefs;
    this.bookService.get_products()
    .subscribe((res)=>{
                      this.rowData =res as any 
                      },
               (err)=>{
                 console.warn(err);
               });;
     } 
}
