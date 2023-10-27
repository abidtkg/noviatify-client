import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private Title: Title
  ){}
  ngOnInit(): void {
    this.Title.setTitle('Register - Noviatify');
  }

}
