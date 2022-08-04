import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreMasterdataComponent } from './bookstore-masterdata.component';

describe('BookstoreMasterdataComponent', () => {
  let component: BookstoreMasterdataComponent;
  let fixture: ComponentFixture<BookstoreMasterdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreMasterdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstoreMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
