import { $Record } from "@package/java/lang";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/mod/azure/azurelib/common/cache/object" {
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        mirror(): boolean;
        pivot(): $Vec3;
        quads(): $GeoQuad[];
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { quads?: $GeoQuad_[], pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_,  } | [quads?: $GeoQuad_[], pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, ];
}
