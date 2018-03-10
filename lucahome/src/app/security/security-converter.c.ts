import { Security } from "./security";

export abstract class SecurityConverter {
  private static defaultSecurity: Security = {
    active: true,
    taskActive: true
  };

  public static ConvertJson(json: JSON): Security {
    if (!json) {
      throw "NoJsonProvided";
    }

    if (json.hasOwnProperty("Error")) {
      throw json["Error"];
    }

    if (!json.hasOwnProperty("Data")) {
      throw "NoValidJson";
    }

    const category: string = json["Category"];
    const action: string = json["Action"];
    const success: boolean = json["Success"];
    const data = json["Data"];

    // TODO implement conversion
    return this.defaultSecurity;
  }
}
