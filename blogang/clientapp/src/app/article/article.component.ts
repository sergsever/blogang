import { Component, OnInit } from '@angular/core';
import {NewarticleComponent} from '../newarticle/newarticle.component'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  Title = ''
  Content = '';

  constructor() { }

  ngOnInit(): void {
    this.Title = 'BigTitle';
    this.Content = 'smart content';
  }

}
