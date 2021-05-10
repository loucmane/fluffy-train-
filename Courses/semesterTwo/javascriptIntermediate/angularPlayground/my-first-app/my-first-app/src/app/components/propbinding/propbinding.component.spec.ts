import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropbindingComponent } from './propbinding.component';

describe('PropbindingComponent', () => {
  let component: PropbindingComponent;
  let fixture: ComponentFixture<PropbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropbindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
