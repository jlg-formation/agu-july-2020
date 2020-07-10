import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    localStorage.clear();
    expect(service).toBeTruthy();
  });

  it('should test getArticle without localstorage', () => {
    localStorage.clear();
    localStorage.setItem('articles', JSON.stringify([]));
    expect(service).toBeTruthy();
  });

  it('should test refresh', () => {
    service.refresh();
    expect(service).toBeTruthy();
  });
});
