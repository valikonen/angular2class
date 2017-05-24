import { Component } from '@angular/core';

@Component({
  selector: 'main-container',
  template: `
      <div class="main-container">
          <app-bar></app-bar>
          <div class="main">
              <notes></notes>
          </div>
      </div>
  `
})

export class Main {
  
}
