import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, }   from '@angular/forms';

import { ArticleComponent } from './article/article.component';
import { NewarticleComponent } from './newarticle/newarticle.component';

@NgModule({
  declarations: [
    ArticleComponent,
    NewarticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ArticleComponent]
})
export class AppModule { }
