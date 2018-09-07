import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { RegisterDetails } from '../../models/register.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser: RegisterDetails;
  constructor() { }

  ngOnInit() {
  }

  registerUser(register: NgForm){
    const formvals = register.value;
    console.log("Form Values:", formvals);
  }

}
