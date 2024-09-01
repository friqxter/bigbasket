import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searches = new BehaviorSubject<string>('');
  setSearch(val:string){
    this.searches.next(val);
    console.log(this.searches);
}
getSearch(){
  return this.searches.asObservable();
}
}
