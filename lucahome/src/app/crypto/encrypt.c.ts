export abstract class Encrypt {
  public static Encrypt(message: string, key: string): string {
    if (!message) {
      throw "NoMessageProvided";
    }

    if (!key) {
      throw "NoKeyProvided";
    }

    // TODO implement encryption
    return message;
  }
}
