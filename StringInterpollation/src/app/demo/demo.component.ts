import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
public batch = "Angular"; // variable 
public fees = 18500; // variable
//function - If function is in class we do not write function kleyword
DisplayDetails()
{
return "This is webapplication"
}
public ret=this.DisplayDetails()
}
