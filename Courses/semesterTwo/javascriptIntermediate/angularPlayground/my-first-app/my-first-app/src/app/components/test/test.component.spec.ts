import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle correctly', () => {
    //1 kontrollera startvärde
    expect(component.isShowing).toBeFalse();
    //2 Agera
    component.toggle();
    //3 kontrollera resultat
    expect(component.isShowing).toBeTrue();
  });
});
//vilken component är det som förväntas när man skriver expect?
//är det komponenten vi är i?
