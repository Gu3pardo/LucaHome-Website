import { Temperature } from "../interfaces/temperature";
import { TemperatureType } from "../enums/temperature-type.e";

export abstract class TemperatureConverter {
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

    if (!success) {
      throw "NoSuccessJson";
    }

    const data: JSON[] = json["Data"];
    if (data.length !== 1) {
      throw "InvalidLengthJson";
    }

    if (!data[0].hasOwnProperty("Temperature")) {
      throw "NoValidJsonProperty";
    }

    const temperatureJson: JSON = data[0]["Temperature"];

    const uuid = temperatureJson.hasOwnProperty("Uuid") ? temperatureJson["Uuid"] : "";
    const roomUuid = temperatureJson.hasOwnProperty("RoomUuid") ? temperatureJson["RoomUuid"] : "";
    const value: number = temperatureJson.hasOwnProperty("Value") ? temperatureJson["Value"] : -273.15;
    const date: Date = new Date();
    const temperatureType: TemperatureType = temperatureJson.hasOwnProperty("TemperatureType") ? temperatureJson["TemperatureType"] : TemperatureType.RaspberryPi;
    const sensorPath = temperatureJson.hasOwnProperty("SensorPath") ? temperatureJson["SensorPath"] : "";
    const graphPath = temperatureJson.hasOwnProperty("GraphPath") ? temperatureJson["GraphPath"] : "";

    return {
      uuid: uuid,
      roomUuid: roomUuid,
      value: value,
      date: date,
      temperatureType: temperatureType,
      sensorPath: sensorPath,
      graphPath: graphPath
    };
  }
}
