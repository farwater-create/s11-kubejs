import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum } from "@package/java/lang";

declare module "@package/net/antopfr/advancedweather/weather" {
    export class $WeatherTypes extends $Enum<$WeatherTypes> {
        static values(): $WeatherTypes[];
        static valueOf(arg0: string): $WeatherTypes;
        displayName(): $Component;
        dimension(): $WeatherTypes$Dimension;
        isNether(): boolean;
        translationKey(): string;
        isOverworld(): boolean;
        isVanillaRaining(): boolean;
        displayString(): string;
        static fromNameSafe(arg0: string): $WeatherTypes;
        isVanillaThundering(): boolean;
        isEnd(): boolean;
        hasFog(): boolean;
        static LIGHT_RAIN: $WeatherTypes;
        static FREEZING_RAIN: $WeatherTypes;
        static DENSE_FOG: $WeatherTypes;
        static SANDSTORM: $WeatherTypes;
        static BLIZZARD: $WeatherTypes;
        static NETHERSTORM: $WeatherTypes;
        static ENDERSTORM: $WeatherTypes;
        static CLOUDY: $WeatherTypes;
        static END_CLEAR: $WeatherTypes;
        static SUNNY: $WeatherTypes;
        static HELLFIRE: $WeatherTypes;
        static ASH_STORM: $WeatherTypes;
        static THUNDERSTORM: $WeatherTypes;
        static BRIMSTONE_STORM: $WeatherTypes;
        static MIST: $WeatherTypes;
        static FOG: $WeatherTypes;
        static VOID_STORM: $WeatherTypes;
        static OVERCAST: $WeatherTypes;
        static SNOW: $WeatherTypes;
        static DRIZZLE: $WeatherTypes;
        static HEAVY_RAIN: $WeatherTypes;
        static LAVA_RAIN: $WeatherTypes;
        static NETHER_CLEAR: $WeatherTypes;
        static HAIL: $WeatherTypes;
        static WINDY: $WeatherTypes;
        static CHORUS_GALE: $WeatherTypes;
        static CLEAR: $WeatherTypes;
        static END_MIST: $WeatherTypes;
        get nether(): boolean;
        get overworld(): boolean;
        get vanillaRaining(): boolean;
        get vanillaThundering(): boolean;
        get end(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WeatherTypes}.
     */
    export type $WeatherTypes_ = "clear" | "sunny" | "cloudy" | "overcast" | "mist" | "drizzle" | "light_rain" | "heavy_rain" | "freezing_rain" | "thunderstorm" | "snow" | "blizzard" | "hail" | "fog" | "dense_fog" | "windy" | "sandstorm" | "nether_clear" | "brimstone_storm" | "lava_rain" | "ash_storm" | "netherstorm" | "hellfire" | "end_clear" | "void_storm" | "end_mist" | "chorus_gale" | "enderstorm";
    export class $WeatherTypes$Dimension extends $Enum<$WeatherTypes$Dimension> {
        static values(): $WeatherTypes$Dimension[];
        static valueOf(arg0: string): $WeatherTypes$Dimension;
        static OVERWORLD: $WeatherTypes$Dimension;
        static NETHER: $WeatherTypes$Dimension;
        static END: $WeatherTypes$Dimension;
    }
    /**
     * Values that may be interpreted as {@link $WeatherTypes$Dimension}.
     */
    export type $WeatherTypes$Dimension_ = "overworld" | "nether" | "end";
}
