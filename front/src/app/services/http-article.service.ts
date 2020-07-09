import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article service');
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.http.get<Article[]>('http://localhost:3000/ws/articles').subscribe({
      next: (data) => {
        console.log('data: ', data);
        this.articles = data;
        this.save();
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete'),
    });
  }

  refresh(): void {
    this.retrieveAll();
  }

  add(article: Article): void {
    super.add(article);
    this.http.post<void>('http://localhost:3000/ws/articles', article).subscribe({
      next: () => {
        console.log('created done.');
        this.refresh();
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete'),
    });
  }
}
