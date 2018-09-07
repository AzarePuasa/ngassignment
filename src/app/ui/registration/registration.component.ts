import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserDetails } from '../../models/register.model';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[UserDataService]
 
})
export class RegistrationComponent implements OnInit {

  newUser = new UserDetails();
  
  constructor() { }

  ngOnInit() {
  }

  registerUser(register: NgForm){
    const form_values = register.value;
    console.log("Form Values:", form_values);

    var name = form_values.name;
    var email = form_values.email;
    var password = form_values.password;
    var gender = form_values.gender;
    var birthdateobj = form_values.birthdate;
    var birthdate = birthdateobj['_i'];
    var address = form_values.address; 
    var country = form_values.country;
    var contact = form_values.contact;

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Gender:", gender);
    // console.log("Birth Date:", birthdate);
    // console.log("Address:", address);
    // console.log("Country:", country);
    // console.log("Contact:", contact);

    const newUser: UserDetails = {
      id: "1",
      email: email,
      password: password,
      name: name,
      gender: gender,
      birthDate: birthdate,
      address: address,
      country: country,
      contact: contact
    }

    //this.userDataService.addUser()
  }

}
