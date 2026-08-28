import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $WeatherTypes_, $WeatherTypes$Dimension, $WeatherTypes, $WeatherTypes$Dimension_ } from "@package/net/antopfr/advancedweather/weather";
import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/net/antopfr/advancedweather/api/event" {
    export class $WeatherChangeEvent extends $Event {
        getDimension(): $WeatherTypes$Dimension;
        getLevel(): $ServerLevel;
        getCurrent(): $WeatherTypes;
        getPrevious(): $WeatherTypes;
        constructor(arg0: $ServerLevel, arg1: $WeatherTypes$Dimension_, arg2: $WeatherTypes_, arg3: $WeatherTypes_);
        get dimension(): $WeatherTypes$Dimension;
        get level(): $ServerLevel;
        get current(): $WeatherTypes;
        get previous(): $WeatherTypes;
    }
}
