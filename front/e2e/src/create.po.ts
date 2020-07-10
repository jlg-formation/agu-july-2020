import { by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class CreatePage {
  async fillForm(a: Article): Promise<void> {
    for (const key of Object.keys(a)) {
      const input = element(by.css(`input[formcontrolname="${key}"]`));
      await input.clear();
      // tslint:disable-next-line: no-any
      await input.sendKeys((a as any)[key]);
    }
  }

  async clickOnSubmit(): Promise<void> {
    const btn = element(by.css('button'));
    await btn.click();
  }
}
