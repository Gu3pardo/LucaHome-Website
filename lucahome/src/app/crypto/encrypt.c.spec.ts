import { TestBed, inject } from '@angular/core/testing';

import { Encrypt } from './encrypt.c';

describe('Encrypt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Encrypt]
    });
  });

  it('should be created', inject([Encrypt], (encrypt: Encrypt) => {
    expect(encrypt).toBeTruthy();
  }));

  it('null message should throw error', () => {
    expect(() => Encrypt.Encrypt(null, "Key")).toThrow("NoMessageProvided");
  });

  it('null key should throw error', () => {
    expect(() => Encrypt.Encrypt("Message", null)).toThrow("NoKeyProvided");
  });
});
