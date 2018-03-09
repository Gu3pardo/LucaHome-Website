import { TestBed, inject } from '@angular/core/testing';

import { User } from "./user";
import { UserProviderService } from './user-provider.service';

describe('UserProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProviderService]
    });
  });

  it('should be created', inject([UserProviderService], (service: UserProviderService) => {
    expect(service).toBeTruthy();
  }));

  it('new user should be set', inject([UserProviderService], (service: UserProviderService) => {
    expect(service.user.value).toBeNull();

    const expected: User = { name: "TestName", passphrase: "TestPassPhrase", isValid: false };
    service.SetUser(expected);

    service.user.subscribe(actual => {
      expect(actual.name).toBeDefined();
      expect(actual.name).toBe(expected.name);
      expect(actual.passphrase).toBe(expected.passphrase);
      expect(actual.isValid).toBe(expected.isValid);
    });
  }));
});
