import { User } from "./user";

export abstract class UserConverter {
  public static ConvertJson(json: string): User {
    if (!json) {
      throw "NoJsonProvided";
    }

    // TODO implement conversion
    return { name: "", passphrase: "", isValid: false };
  }
}
