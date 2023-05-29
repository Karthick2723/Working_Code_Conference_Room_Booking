import { TestBed } from '@angular/core/testing';

import { BookSlotServiceService } from './book-slot-service.service';

describe('BookSlotServiceService', () => {
  let service: BookSlotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSlotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
