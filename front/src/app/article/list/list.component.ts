import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  selectedArticles: Article[] = [];

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(article: Article): void {
    console.log('article: ', article);
    const index = this.selectedArticles.findIndex((a) => a === article);
    if (index === -1) {
      this.selectedArticles.push(article);
      return;
    }
    this.selectedArticles.splice(index, 1);
  }

  remove(): void {
    this.articleService.remove(this.selectedArticles);
    this.selectedArticles.length = 0;
  }
}
