import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;


  
describe('BookService', () => {
  
   beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ]
    })
    .compileComponents();
       fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
    it('should create', () => {
    expect(component).toBeTruthy();
  });
});

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ BookListComponent ]
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(BookListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
