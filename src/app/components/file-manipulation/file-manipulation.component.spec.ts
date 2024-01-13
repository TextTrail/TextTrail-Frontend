import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManipulationComponent } from './file-manipulation.component';

describe('FileManipulationComponent', () => {
  let component: FileManipulationComponent;
  let fixture: ComponentFixture<FileManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileManipulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
