import { AppModule } from './../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a toolbar', () => {
    const toolbar = fixture.debugElement.query(By.css('.toolbar'));

    expect(toolbar).toBeTruthy();
  });

  it('Should have a toolbar controls', () => {
    const toolbarControls = fixture.debugElement.query(By.css('.toolbar__controls'));

    expect(toolbarControls).toBeTruthy();
  });

  it('Should have a toolbar search', () => {
    const toolbarSearch = fixture.debugElement.query(By.css('.toolbar__search'));

    expect(toolbarSearch).toBeTruthy();
  });

  it('Should have a card list', () => {
    const cardList = fixture.debugElement.query(By.css('.card-list'));

    expect(cardList).toBeTruthy();
  });
});


