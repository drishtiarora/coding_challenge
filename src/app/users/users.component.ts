import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _userService : UserServiceService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe((data)=>{
      console.log('data is' , data);
    })
  }

}
