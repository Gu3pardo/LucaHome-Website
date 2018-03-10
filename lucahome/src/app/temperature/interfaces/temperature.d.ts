import { TemperatureType } from "../enums/temperature-type.e";

export interface Temperature {
  uuid: string;
  roomUuid: string;
  value: number;
  date: Date;
  temperatureType: TemperatureType;
  sensorPath: string;
  graphPath: string;
}
