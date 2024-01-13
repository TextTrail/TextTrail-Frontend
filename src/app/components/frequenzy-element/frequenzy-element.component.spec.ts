import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenzyElementComponent } from './frequenzy-element.component';

describe('FrequenzyElementComponent', () => {
  let component: FrequenzyElementComponent;
  let fixture: ComponentFixture<FrequenzyElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequenzyElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequenzyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
