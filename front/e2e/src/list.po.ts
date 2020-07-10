import { by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class ListPage {
  async clickOnAddBtn(): Promise<void> {
    await element(by.css('button.add')).click();
  }

  async getLastArticle(): Promise<Article> {
    const name = await element(
      by.css('table tbody tr:last-child td.name')
    ).getText();
    const price = await element(
      by.css('table tbody tr:last-child td.price')
    ).getText();
    console.log('price: ', price);
    const qty = await element(
      by.css('table tbody tr:last-child td.qty')
    ).getText();
    const a: Article = {
      name,
      price: +price.trim().replace(',', '.').substring(0, price.length - 2),
      qty: +qty,
    };
    return a;
  }
}
