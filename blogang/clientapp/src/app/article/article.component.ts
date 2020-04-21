import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import {NewarticleComponent} from '../newarticle/newarticle.component'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from '@angular/http'
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
//import {EventsService} from 'angular-event-service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit, OnChanges {

  Title = ''
  Content = '';
  data : any = null;
  ArticleDate = '';
  _modelState : string;

  state : string = '';
  @Input()
  set modelState(state : string)
  {
    console.log('article set modelState');
      this._modelState = state;
      this.getData();

  }
@Output() stateChanged : EventEmitter<string> = new EventEmitter<string>();

changeState(newstate : string ) 
{
    this.state = newstate;
    this.stateChanged.emit(this.state);
}
  getRunChangeDetection()
  {
    console.log('article check changes');
  }

    constructor(private http: HttpClient) 
  { 
        console.log('article constructor\n');
    this.stateChanged = new EventEmitter();
  }

  public ngOnInit()  
  {
    console.log('OnInit:\n');
    this.Title = 'BigTitle';
    this.Content = 'smart content';
   // this.modelState = 'old';
    
    /*
    .subscribe(resp => {
      console.log('getdata: subs\n');
      this.data = resp} );
  */      
 this.getData();
    }

    public ngOnChanges()
    {
      console.log('article on changes:');
      this.getData();

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
