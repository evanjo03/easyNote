import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from './login-modal.interface';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  public user: User = {
    username: '',
    password: '',
  };

  constructor() { }

  ngOnInit() {}


  onSubmit() {
    console.log(this.user);
  }

}
