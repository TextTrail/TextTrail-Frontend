import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenzyViewComponent } from './frequenzy-view.component';

describe('FrequenzyViewComponent', () => {
  let component: FrequenzyViewComponent;
  let fixture: ComponentFixture<FrequenzyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequenzyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequenzyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
