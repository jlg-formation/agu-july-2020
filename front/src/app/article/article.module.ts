import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ArticleRoutingModule } from './article-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    WidgetModule,
    ReactiveFormsModule,
  ],
})
export class ArticleModule {}
