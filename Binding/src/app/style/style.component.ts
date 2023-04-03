import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent 
{
public Mycolor = "orange"; //Variable creation mycolour will set colour orange
public Isset = false; //Conditional Styling
public myclass = "success";

public Data = "____"; //String Interpollation already data chi value aahe 
public MyAction()
{
  this.Data="Submit button clicked....";
}

public MyActionNew(value : any)
{
console.log(value);
}
}