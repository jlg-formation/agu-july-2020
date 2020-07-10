import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let router: Router;
  let articleService: ArticleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    articleService = TestBed.inject(ArticleService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call submit', () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');
    const addSpy = spyOn(articleService, 'add');

    component.submit();
    expect(navigateSpy).toHaveBeenCalledWith('/article/list');
    expect(addSpy).toHaveBeenCalledWith(component.f.value);

    expect(component).toBeTruthy();
  });
});
