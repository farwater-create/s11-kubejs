import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $WoodType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $Material } from "@package/net/minecraft/client/resources/model";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/mehvahdjukaar/amendments/mixins" {
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        invokeGetSwimSplashSound(): $SoundEvent;
        invokeGetSwimHighSpeedSplashSound(): $SoundEvent;
    }
    export class $SignRendererAccessor {
    }
    export interface $SignRendererAccessor {
        invokeGetSignMaterial(arg0: $WoodType_): $Material;
        invokeGetTextOffset(): $Vec3;
    }
}
