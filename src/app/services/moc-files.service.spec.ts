import { TestBed } from '@angular/core/testing';

import { MocFilesService } from './moc-files.service';

describe('MocFilesService', () => {
  let service: MocFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
