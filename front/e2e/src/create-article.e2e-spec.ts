import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { a1 } from '../../src/app/mock/TestData';
import { ListPage } from './list.po';
import { CreatePage } from './create.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let listPage: ListPage;
  let createPage: CreatePage;

  beforeEach(() => {
    page = new AppPage();
    listPage = new ListPage();
    createPage = new CreatePage();
  });

  it('create an article', async () => {
    await page.navigateTo();
    await page.clickOnGetStockBtn();
    await listPage.clickOnAddBtn();
    await createPage.fillForm(a1);
    await createPage.clickOnSubmit();
    const a = await listPage.getLastArticle();
    console.log('a: ', a);

    expect(a).toEqual(a1);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
