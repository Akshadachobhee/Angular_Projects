import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
name="Marvellous Infosystem" 
today=new Date()
value = 39.89850123
Institute = {
  "name" : "Marvellous",
  "loction" : "Pune"
}
}
