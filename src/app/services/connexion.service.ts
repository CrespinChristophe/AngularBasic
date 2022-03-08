import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private isConnected = false;

  constructor() { }

  public get isConnected(){
    return this._isConnected;
  }

  public connect(credentials: User): boolean {
    
    if(credentials.username === 'user' && credentials.password === 'pass')
     this.isConnected = true;
     return true;

     return false;
  }
 


public disconnect(): boolean {

  if(this.isConnected){
    this.isConnected = false;
    return true;
  }
  return false;

}
}