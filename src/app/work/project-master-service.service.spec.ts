import { TestBed } from '@angular/core/testing';

import { ProjectMasterServiceService } from './project-master-service.service';

describe('ProjectMasterServiceService', () => {
  let service: ProjectMasterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectMasterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
