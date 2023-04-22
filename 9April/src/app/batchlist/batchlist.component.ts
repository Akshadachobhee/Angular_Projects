import { Component } from '@angular/core';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent
 {//Jar service he component madhe inject karaych asel tar ek automatic calling function call karava lagto jo aapoaap call karel object create zalyavar i.e constructor 

public Batches : any =[]

constructor(public mobj : MarvellousService)
{}

ngOnInit()
{
this.Batches = this.mobj.GetBatchDetails();
}
}
