import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = [
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

  constructor() {}
}
