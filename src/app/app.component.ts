import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  display = false;

  switch(): void {
    this.display = !this.display;
  }
}
