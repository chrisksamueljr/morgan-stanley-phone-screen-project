import { TestBed } from '@angular/core/testing';

import { LessonsDataSourceService } from './lessons-data-source.service';

describe('LessonsDataSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonsDataSourceService = TestBed.get(LessonsDataSourceService);
    expect(service).toBeTruthy();
  });
});
