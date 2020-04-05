import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  host: {
    class : 'row'
  }
})
export class ArticlesComponent implements OnInit {

 @Input() article : Article;

  constructor() {
  }

  voteUp() : boolean{
    this.article.voteUp();
    return false;
  }

  voteDown() : boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
