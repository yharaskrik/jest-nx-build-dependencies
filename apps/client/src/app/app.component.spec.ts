import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Lib1Module } from '@jest-nx-build-dependencies/lib1';
import { Lib2Module } from '@jest-nx-build-dependencies/lib2';
import { Lib3Module } from '@jest-nx-build-dependencies/lib3';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        Lib1Module, Lib2Module, Lib3Module
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('client');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to client!'
    );
  });
});
