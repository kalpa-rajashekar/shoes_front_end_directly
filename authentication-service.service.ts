import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor() { }
  authenticate(username: string, password: string) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
}
isUserLoggedIn() {
  let user = sessionStorage.getItem('username')
  console.log(!(user === null))
  return !(user === null)
}
}
