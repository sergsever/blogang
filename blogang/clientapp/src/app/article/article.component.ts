import { Component, OnInit } from '@angular/core';
import {NewarticleComponent} from '../newarticle/newarticle.component'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  Title = ''
  Content = '';
  data : any = null;
  ArticleDate = '';

  constructor(private http: HttpClient) 
  { 
    console.log('article constructor\n');
  }

  public ngOnInit()  
  {
    console.log('OnInit:\n');
    this.Title = 'BigTitle';
    this.Content = 'smart content';
    
    this.getData();
    /*
    .subscribe(resp => {
      console.log('getdata: subs\n');
      this.data = resp} );
  */      
      
    }
    getData() : Observable<any> {
      var res = null;
      console.log('getdata: starts\n');
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
      this.http.get('/Articles/Get', httpOptions).subscribe((resp : any) =>{
          console.log('article http resp: ' + JSON.stringify(resp));
          let resdata = resp;
          console.log('resdata: date:' + resdata.articleDate);
          this.data = resdata;
          this.Title = this.data.title;
          this.Content = this.data.content;
          var date = new Date(this.data.articleDate);
          this.ArticleDate = date.toLocaleString();
          
      },
      error => {
        console.log('http error: ' + error.message)
        res = null;
      });
      return res;    
  
  }

}
