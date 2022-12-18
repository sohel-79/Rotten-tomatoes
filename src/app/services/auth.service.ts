import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uname:String , pass:String){
    if(uname === 'Sohel' && pass === '123'){
      return 200;
    }
    else{
      return 403;
    }
  }

}
