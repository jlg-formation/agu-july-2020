import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>(this.getArticles());

  constructor() {
    console.log('article service');
    this.articles$.subscribe((articles) => {
      localStorage.setItem('articles', JSON.stringify(articles));
    });
  }

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  add(article: Article): void {
    this.articles$.value.push(article);
    this.articles$.next(this.articles$.value);
  }

  remove(selectedArticles: Article[]): void {
    this.articles$.next(
      this.articles$.value.filter((a) => !selectedArticles.includes(a))
    );
  }

  refresh(): void {
    this.articles$.next(this.getArticles());
  }
}
