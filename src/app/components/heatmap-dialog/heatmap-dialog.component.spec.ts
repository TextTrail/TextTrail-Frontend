import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapDialogComponent } from './heatmap-dialog.component';

describe('HeatmapDialogComponent', () => {
  let component: HeatmapDialogComponent;
  let fixture: ComponentFixture<HeatmapDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
