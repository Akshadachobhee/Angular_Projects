import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //reactive EXTENSTION oF jAVA sCRIPT
import { IBatches } from './Batches';
@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
  //In future this path contains the URL of serve (Node.js)
  public URL : string = "/assets/Data/Batches.json";

  constructor(public hobj : HttpClient) { }

  public GetBatchDetails() : Observable<IBatches[]>
  {
    return this.hobj.get<IBatches[]>(this.URL);
  }
}
