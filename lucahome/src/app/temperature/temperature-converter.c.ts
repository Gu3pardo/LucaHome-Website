import { Temperature } from "./temperature";
import { TemperatureType } from "./temperature-type.e";

export abstract class TemperatureConverter {
  public static ConvertJson(json: string): Temperature {
    if (!json) {
      throw "NoJsonProvided";
    }

    if (json.indexOf("Error") >= 0) {
      throw json;
    }

    // TODO implement conversion
    return {
      uuid: "Uuid1",
      roomUuid: "RoomUuid1",
      value: 11.5,
      date: new Date(),
      temperatureType: TemperatureType.RaspberryPi,
      sensorPath: "SensorPath",
      graphPath: "GraphPath"
    };
  }
}
