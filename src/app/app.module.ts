import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { SideComponent } from './side/side.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NoEncapsulationComponent,
    SideComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
