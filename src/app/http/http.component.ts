import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//https://jsonplaceholder.typicode.com/
//https://loopback.io/getting-started.html
//npm install -g @loopback/cli
//lb    pour creer backend loopback

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
       (response) => {
         console.log('response', response);

       },
       (error) => {
        console.log('error', error);
       },
       () => {
        console.log('Complete');
       }

    );
  }

}
