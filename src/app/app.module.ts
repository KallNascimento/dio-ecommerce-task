import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';

import { FiltersComponent } from './components/bookstore/filters/filters.component';
import { ListBooksComponent } from './components/bookstore/list-books/list-books.component';
import { BookstoreMasterdataComponent } from './components/bookstore/bookstore-masterdata/bookstore-masterdata.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ListBooksComponent,
    BookstoreMasterdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
