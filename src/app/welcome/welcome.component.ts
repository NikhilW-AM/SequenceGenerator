import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  getUserName(name: string) {
    localStorage.setItem('username', name);

    if (localStorage.getItem('username')) {
      this._router.navigate(['/home']);
    } else {
      window.location.reload();
    }
  }
}
