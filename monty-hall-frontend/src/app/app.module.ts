import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { MontyHallComponent } from './monty-hall/monty-hall.component';

import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

const routes: Routes = [
  { path: '', component: MontyHallComponent },
];


@NgModule({
  declarations: [AppComponent, MontyHallComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)], // Include FormsModule and RouterModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
