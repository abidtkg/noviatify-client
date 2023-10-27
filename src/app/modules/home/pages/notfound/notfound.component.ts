import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
    
    constructor(
        private Title: Title
    ){}

    ngOnInit(): void {
        this.Title.setTitle(`404 Page Not Found - ${appName}`);
    }
}
