import { TestBed } from '@angular/core/testing';

import { ItemsinterfaceService } from './itemsinterface.service';

describe('ItemsinterfaceService', () => {
  let service: ItemsinterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsinterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
