import { Component ,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent implements OnInit
{//Jar service he component madhe inject karaych asel tar ek automatic calling function call karava lagto jo aapoaap call karel object create zalyavar i.e constructor 

public Batches : any =[]

  constructor(public mobj : MarvellousService)
{}

ngOnInit()
{
this.Batches = this.mobj.GetBatchDetails();
}
}
