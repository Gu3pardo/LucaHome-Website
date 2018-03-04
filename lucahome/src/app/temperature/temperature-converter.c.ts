import { Temperature } from "./temperature";
import { TemperatureType } from "./temperature-type.e";

export abstract class TemperatureConverter {
  public static ConvertJson(json: string): Temperature {
    if (!json) {
      throw "NoJsonProvided";
    }

    // TODO implement conversion
    return {
      uuid: "",
      roomUuid: "",
      value: 0,
      date: new Date(),
      temperatureType: TemperatureType.RaspberryPi,
      sensorPath: "",
      graphPath: ""
    };
  }
}
