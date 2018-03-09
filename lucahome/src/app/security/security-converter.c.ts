import { Security } from "./security";

export abstract class SecurityConverter {
  public static ConvertJson(json: string): Security {
    if (!json) {
      throw "NoJsonProvided";
    }

    if (json.indexOf("Error") >= 0) {
      throw json;
    }

    // TODO implement conversion
    return {
      active: true,
      taskActive: true
    };
  }
}
