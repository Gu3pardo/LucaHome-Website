import { User } from "./user";

export abstract class UserConverter {
  public static ConvertJson(json: string): User {
    if (!json) {
      throw "NoJsonProvided";
    }

    if (json.indexOf("Error") >= 0) {
      throw json;
    }

    // TODO implement conversion
    return { name: "Jonas Schubert", passphrase: "Secret", isValid: true };
  }
}
