import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root app-home h1')).getText() as Promise<string>;
  }

  async clickOnGetStockBtn(): Promise<void> {
    const btn = element(by.css('button'));
    await btn.click();
  }
}
