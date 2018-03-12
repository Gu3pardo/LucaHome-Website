import { Security } from "../interfaces/security";

export abstract class SecurityConverter {
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

    if (!success) {
      throw "NoSuccessJson";
    }

    const data = json["Data"];
    if (data.length !== 1) {
      throw "InvalidLengthJson";
    }

    if (!data[0].hasOwnProperty("Security")) {
      throw "NoValidJsonProperty";
    }

    const securityJson: JSON = data[0]["Security"];

    const active: boolean = securityJson.hasOwnProperty("Active") ? securityJson["Active"] : false;
    const taskActive: boolean = securityJson.hasOwnProperty("TaskActive") ? securityJson["TaskActive"] : false;

    return {
      active: active,
      taskActive: taskActive
    };
  }
}
