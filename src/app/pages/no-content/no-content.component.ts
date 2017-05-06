import { Component } from '@angular/core';

@Component({
	selector: 'no-content',
	template: `
    <div class="container">
      <h1>404: page missing</h1>
      <div>The site have not been found.</div>
    </div>
  `
})
export class NoContentComponent {

}
