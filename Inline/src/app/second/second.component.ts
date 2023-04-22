import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  <h1>Indiside Second Component</h1>
  <h2>Concept of Inline in Angular</h2>
  `, // ` =Back quotr

  styles: [
    '
    h1
    {
   
    color :red  
    },
   h2 
   {
    coloe : green {
      
    },
  }
    '
  
  ]
})

export class SecondComponent {

}
