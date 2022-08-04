import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreMasterdataComponent } from './components/bookstore/bookstore-masterdata/bookstore-masterdata.component';

const routes: Routes = [
  {
    path:"books",
    component:BookstoreMasterdataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
