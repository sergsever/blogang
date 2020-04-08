import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

import {LogService} from '../logger';

var output = console.log;


@Component({
  selector: 'app-newarticle',
  templateUrl: './newarticle.component.html',
  styleUrls: ['./newarticle.component.css'],
  
})

export class NewarticleComponent implements OnInit {

  Title = '';
  Content = '';
  ArticleDate = null;
  baseUrl = '';

  

  constructor(private http: HttpClient)
  { 
    //window.console.log('new article constructor:\n');
    console.log('new constructor');
  }

  ngOnInit(): void {
    console.log('new init');
    this.ArticleDate = new Date();
    this.baseUrl = 'http://localhost:61260/'
    output('new Init\n');
  }

  /*
  sendPut()
  {
    console.log('new send put:\n');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
      const data = {title: this.Title, content: this.Content, date: this.ArticleDate}
      this.http.put('/Articles/Put', data, httpOptions).catch((err: any) => {
        console.error('An error occurred:', err);
        return Observable.throw(err.statusText);
      
    });
  
    };
*/
    sendPost()
    {
      
      console.log('new send post: date: ' + this.ArticleDate);
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
      const body = {id: 0, title: this.Title, content: this.Content, ArticleDate: this.ArticleDate}
      this.http.post<any>('/Articles/Create', body, httpOptions).subscribe(value =>{
        console.log('subscribe value: ' + value.id);
      },
      error => {
        console.log('subscribe error:' + error.message);
      });
      
   }
  



  onSubmit()
  {
    console.log('submit form:\n');
    console.log("Title: " + this.Title);
    console.log('Content: ' + this.Content);
    console.log('Date: ' + this.ArticleDate);
    this.sendPost();
  }

}

