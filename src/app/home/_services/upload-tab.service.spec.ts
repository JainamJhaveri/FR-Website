import { TestBed, inject } from '@angular/core/testing';

import { UploadTabService } from './upload-tab.service';

describe('UploadTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadTabService]
    });
  });

  it('should be created', inject([UploadTabService], (service: UploadTabService) => {
    expect(service).toBeTruthy();
  }));
});
