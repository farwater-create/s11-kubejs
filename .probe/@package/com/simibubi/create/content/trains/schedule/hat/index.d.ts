import { $Codec } from "@package/com/mojang/serialization";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ResourceManagerReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/content/trains/schedule/hat" {
    export class $TrainHatInfoReloadListener {
        static getHatInfoFor(arg0: $Entity): $TrainHatInfo;
        static LISTENER: $ResourceManagerReloadListener;
        static HAT_INFO_DIRECTORY: string;
        constructor();
    }
    export class $TrainHatInfo extends $Record {
        scale(): number;
        offset(): $Vec3;
        part(): string;
        cubeIndex(): number;
        static getAdjustedPart(arg0: $TrainHatInfo_, arg1: $ModelPart, arg2: string): $List<$ModelPart>;
        static CODEC: $Codec<$TrainHatInfo>;
        constructor(part: string, cubeIndex: number, offset: $Vec3_, scale: number);
    }
    /**
     * Values that may be interpreted as {@link $TrainHatInfo}.
     */
    export type $TrainHatInfo_ = { cubeIndex?: number, scale?: number, offset?: $Vec3_, part?: string,  } | [cubeIndex?: number, scale?: number, offset?: $Vec3_, part?: string, ];
}
