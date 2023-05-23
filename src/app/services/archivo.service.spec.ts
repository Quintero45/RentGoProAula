/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArchivoService } from './archivo.service';

describe('Service: Document', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchivoService]
    });
  });

  it('should ...', inject([ArchivoService], (service: ArchivoService) => {
    expect(service).toBeTruthy();
  }));
});
