import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/example/createfurnitureseats/access" {
    export class $SableBridgeSeatAccess {
    }
    export interface $SableBridgeSeatAccess {
        createfurnitureseats$setBridgeSeat(arg0: boolean): void;
        createfurnitureseats$isBridgeSeat(): boolean;
        createfurnitureseats$setSeatBlockId(arg0: $ResourceLocation_): void;
        createfurnitureseats$setLogicalSeatPos(arg0: $Vec3_): void;
        createfurnitureseats$getLogicalSeatPos(): $Vec3;
        createfurnitureseats$getSeatBlockId(): $ResourceLocation;
    }
}
