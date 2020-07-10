import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { Routes, Router } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { Location } from '@angular/common';

const routes: Routes = [{ path: '', component: HomeComponent }];

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), LayoutModule],
      declarations: [AppComponent, HomeComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header span').textContent).toContain(
      'Gestion de stock'
    );
  });

  it('should render the home page', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
    router.navigateByUrl('/');
    tick();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-home h1').textContent).toContain(
      'Gérer votre stock efficacement.'
    );
  }));
});
