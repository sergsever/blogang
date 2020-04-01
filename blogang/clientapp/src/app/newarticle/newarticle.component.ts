import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-newarticle',
  templateUrl: './newarticle.component.html',
  styleUrls: ['./newarticle.component.css']
})
export class NewarticleComponent implements OnInit {

  Title = '';
  Content = '';
  ArticleDate = null;


  constructor() { }

  ngOnInit(): void {
    this.ArticleDate = new Date();
  }

  onSubmit()
  {
    console.log('submit form:\n');
    console.log("Title: " + this.Title);
    console.log('Content: ' + this.Content);
    console.log('Date: ' + this.ArticleDate);
  }

}
