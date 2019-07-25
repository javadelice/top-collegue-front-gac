import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCandidantComponent } from './liste-candidant.component';

describe('ListeCandidantComponent', () => {
  let component: ListeCandidantComponent;
  let fixture: ComponentFixture<ListeCandidantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCandidantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCandidantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
