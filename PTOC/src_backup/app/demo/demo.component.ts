import { Component, EventEmitter ,Output} from '@angular/core'; // We import EventEmitter method // @angular/core is a path

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent 
{
   @Output() public Myevent = new EventEmitter(); //EvenetEmitter() is inbuilt Method
   
   public SendMessage()
   {
    this.Myevent.emit("Hello Parent Component");
   }
  }
