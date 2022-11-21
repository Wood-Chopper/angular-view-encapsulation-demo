import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { SideComponent } from './side/side.component';
import { ChildComponent } from './no-encapsulation/child/child.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [
    AppComponent,
    NoEncapsulationComponent,
    SideComponent,
    ChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
