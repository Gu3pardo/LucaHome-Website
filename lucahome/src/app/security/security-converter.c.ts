import { Security } from "./security";

export abstract class SecurityConverter {
  public static ConvertJson(json: string): Security {
    if (!json) {
      throw "NoJsonProvided";
    }

    // TODO implement conversion
    return {
      active: true,
      taskActive: true,
      url: ""
    };
  }
}
