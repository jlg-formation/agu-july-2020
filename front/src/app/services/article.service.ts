import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {}

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [
        {
          name: 'Tournevis',
          price: 2.44,
          qty: 234,
        },
        {
          name: 'Tournevis Cruciforme',
          price: 4,
          qty: 1000,
        },
        {
          name: 'Pince',
          price: 23.3,
          qty: 46,
        },
      ];
    }
    return JSON.parse(str) as Article[];
  }

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(article: Article): void {
    this.articles.push(article);
    this.save();
  }
}
