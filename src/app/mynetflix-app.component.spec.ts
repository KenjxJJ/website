import { TestBed, async } from '@angular/core/testing';
import { MyNetflixAppComponent } from './mynetflix-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
       MyNetflixAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyNetflixAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'website'`, () => {
    const fixture = TestBed.createComponent(MyNetflixAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('website');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyNetflixAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('website app is running!');
  });
});
