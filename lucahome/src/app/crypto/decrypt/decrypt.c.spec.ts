import { TestBed, inject } from '@angular/core/testing';
import { Decrypt } from './decrypt.c';

describe('Decrypt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Decrypt]
    });
  });

  it('should be created', inject([Decrypt], (decrypt: Decrypt) => {
    expect(decrypt).toBeTruthy();
  }));

  it('null response should throw error', () => {
    expect(() => Decrypt.Decrypt(null, "Key")).toThrow("NoResponseProvided");
  });

  it('null key should throw error', () => {
    expect(() => Decrypt.Decrypt("Response", null)).toThrow("NoKeyProvided");
  });
});
