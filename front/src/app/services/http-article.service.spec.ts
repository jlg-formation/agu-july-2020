import { TestBed } from '@angular/core/testing';

import { HttpArticleService } from './http-article.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { a1 } from '../mock/TestData';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  it('should test retrieveAll with 404', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 404, statusText: 'Not Found' });
    expect(service).toBeTruthy();
  });

  it('should test refresh', () => {
    http.expectOne('/ws/articles').flush([]);
    service.refresh();
    http.expectOne('/ws/articles').flush([]);

    expect(service).toBeTruthy();
  });

  it('should test add', () => {
    http.expectOne('/ws/articles').flush([]);
    service.add(a1);
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('POST');
    req.flush([], { status: 201, statusText: 'Created' });
    http.expectOne('/ws/articles').flush([]);

    expect(service).toBeTruthy();
  });

  it('should test add with 405', () => {
    http.expectOne('/ws/articles').flush([]);
    service.add(a1);
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('POST');
    req.flush([], { status: 405, statusText: 'Method not allowed' });
    expect(service).toBeTruthy();
  });

  it('should test remove', () => {
    http.expectOne('/ws/articles').flush([]);
    service.remove([a1]);
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('DELETE');
    req.flush([], { status: 204, statusText: 'No content' });
    http.expectOne('/ws/articles').flush([]);

    expect(service).toBeTruthy();
  });

  it('should test remove with 405', () => {
    http.expectOne('/ws/articles').flush([]);
    service.remove([a1]);
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('DELETE');
    req.flush([], { status: 405, statusText: 'Method not allowed' });

    expect(service).toBeTruthy();
  });

  afterEach(() => {
    http.verify();
  });
});
