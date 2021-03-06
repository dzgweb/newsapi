import { Component, Input, OnInit } from '@angular/core';
import { Article } from "../../../interfaces/article";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() data: Article;

  public isOwnNews: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  deleteArticle() {
    console.log(`the article has been removed`);
  }
}
