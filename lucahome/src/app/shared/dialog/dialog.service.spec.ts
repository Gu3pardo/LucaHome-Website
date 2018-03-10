import { TestBed, inject } from '@angular/core/testing';
import { DialogService } from './dialog.service';

xdescribe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DialogService
      ]
    });
  });

  it('should be created', inject([DialogService], (service: DialogService) => {
    expect(service).toBeTruthy();
  }));
});
