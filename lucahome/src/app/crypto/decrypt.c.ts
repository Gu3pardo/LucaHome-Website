export abstract class Decrypt {
  public static Decrypt(response: string, key: string): string {
    if (!response) {
      throw "NoResponseProvided";
    }

    if (!key) {
      throw "NoKeyProvided";
    }

    // TODO implement decryption
    return response;
  }
}
