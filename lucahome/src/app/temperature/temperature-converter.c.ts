import { Temperature } from "./temperature";
import { TemperatureType } from "./temperature-type.e";

export abstract class TemperatureConverter {
  private static defaultTemperature: Temperature = {
    uuid: "",
    roomUuid: "",
    value: -273.15,
    date: new Date(),
    temperatureType: TemperatureType.RaspberryPi,
    sensorPath: "",
    graphPath: ""
  };

  public static ConvertJson(json: JSON): Temperature {
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
    return this.defaultTemperature;
  }
}
