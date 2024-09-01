import { EventEmitter, Injectable} from "@angular/core";
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class UserService {
    public names = new BehaviorSubject<string>('Login');
    public bools = new BehaviorSubject<boolean>(false);
    setName(val:string){
        this.names.next(val);
    }
    getName(){
        console.log(this.names);
        return this.names.asObservable();
    }

    setBool(val:boolean){
        this.bools.next(val);
    }
    getBool(){
        console.log(this.bools);
        return this.bools.asObservable();
    }

    
}