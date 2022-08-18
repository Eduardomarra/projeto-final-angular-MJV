import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user?: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user');
    if(userSessionStorage) {
      this.user = JSON.parse(userSessionStorage);
    }
  }

  exitSession() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
