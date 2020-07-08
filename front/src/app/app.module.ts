import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ArticleModule } from './article/article.module';

// Register the localization
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, ArticleModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
