import { Component } from '@angular/core';
import { Article } from './articles/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles=[
        new Article("article 1", "http://angular.io", 3),
        new Article("article 2", "http://facebook.com", 2),
        new Article("article 3", "http://bebo.com", 4)
    ];
  }

   addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
     console.log(`Adding title ${title.value} and adding link ${link.value}`);
     this.articles.push(new Article(title.value, link.value, 0));
     title.value =  link.value = "";
     return false;
}
}
