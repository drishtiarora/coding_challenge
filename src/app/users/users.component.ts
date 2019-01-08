import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';


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
  isDesc: boolean = false;
  column: string = 'name';
  records: any;
  constructor(private _userService : UserServiceService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe((data)=>{
      this.users = data;
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

  sort(property){
    this.isDesc = !this.isDesc;    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;
    this.users.sort(function(a, b){
      let last_name_a = a[property].split(' ').pop();
      let last_name_b = b[property].split(' ').pop();
        if(last_name_a < last_name_b)
          return -1 * direction;
        else if( last_name_a > last_name_b)
          return 1 * direction;
        else
          return 0;
    });
  };
}
