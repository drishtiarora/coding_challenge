import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
// import * from 'jquery';
import 'DataTables.net';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  company: any = [];
  address: any;
  check = true;
  tableWidget: any;
  constructor(private _userService : UserServiceService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe((data)=>{
      this.users = data;
      //  this.company = data.company.toUpperCase();
      // console.log(this.company);
       console.log('data is' , this.users);
    })
  }
 
  formatAddress(address){
    let street, zipcode, suite, city;
    let formatted_address = '';
    if (address.hasOwnProperty('suite'))
      suite = address.suite
      formatted_address += suite + ', '
    if (address.hasOwnProperty('street'))
      street = address.street;
      formatted_address += street + ', '
    if (address.hasOwnProperty('city'))
      city = address.city
      formatted_address += city + ', '
    if (address.hasOwnProperty('zipcode'))
      zipcode = address.zipcode.split('-')[0]
      formatted_address += zipcode
    
    return formatted_address
  }

  checkUser(user){
    if (user.hasOwnProperty('phone')){
      let phone = user.phone;
      if (phone.includes('x'))
        return false;
    return true;
    }
  }

  sortNames() {
    $(document).ready(function() {
      let exampleId: any = $('#user-table');
      this.tableWidget = exampleId.DataTable({
        order: [],
        columnDefs: [ { orderable: false, targets: [1, 2, 3, 4] } ]
      });
  } );
  }
}
