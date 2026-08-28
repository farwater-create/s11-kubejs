import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        getBone(arg0: string): ($GeoBone) | undefined;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        topLevelBones(): $List<$GeoBone>;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>,  } | [properties?: $ModelProperties_, topLevelBones?: $List_<$GeoBone>, ];
    export class $GeoBone {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getMirror(): boolean;
        getPosY(): number;
        getPosX(): number;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        setRotX(arg0: number): void;
        setRotY(arg0: number): void;
        getRotY(): number;
        getRotX(): number;
        getWorldPosition(): $Vector3d;
        getRotationVector(): $Vector3d;
        setHidden(arg0: boolean): void;
        getScaleX(): number;
        getScaleY(): number;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setScaleZ(arg0: number): void;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        setPosY(arg0: number): void;
        setPosX(arg0: number): void;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        getInitialSnapshot(): $BoneSnapshot;
        getScaleVector(): $Vector3d;
        hasRotationChanged(): boolean;
        hasScaleChanged(): boolean;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        shouldNeverRender(): boolean;
        markScaleAsChanged(): void;
        setChildrenHidden(arg0: boolean): void;
        resetStateChanges(): void;
        getModelPosition(): $Vector3d;
        getLocalPosition(): $Vector3d;
        hasPositionChanged(): boolean;
        setModelPosition(arg0: $Vector3d): void;
        getPositionVector(): $Vector3d;
        getModelSpaceMatrix(): $Matrix4f;
        markPositionAsChanged(): void;
        setTrackingMatrices(arg0: boolean): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        markRotationAsChanged(): void;
        getWorldSpaceNormal(): $Matrix3f;
        getModelRotationMatrix(): $Matrix4f;
        getLocalSpaceMatrix(): $Matrix4f;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getWorldSpaceMatrix(): $Matrix4f;
        getScaleZ(): number;
        getRotZ(): number;
        getInflate(): number;
        getPivotX(): number;
        getPivotZ(): number;
        setPosZ(arg0: number): void;
        getPivotY(): number;
        setPivotY(arg0: number): void;
        setPivotX(arg0: number): void;
        setPivotZ(arg0: number): void;
        setRotZ(arg0: number): void;
        getReset(): boolean;
        getPosZ(): number;
        isTrackingMatrices(): boolean;
        getChildBones(): $List<$GeoBone>;
        isHidingChildren(): boolean;
        getCubes(): $List<$GeoCube>;
        saveInitialSnapshot(): void;
        saveSnapshot(): $BoneSnapshot;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
        get worldPosition(): $Vector3d;
        get rotationVector(): $Vector3d;
        get initialSnapshot(): $BoneSnapshot;
        get scaleVector(): $Vector3d;
        set childrenHidden(value: boolean);
        get localPosition(): $Vector3d;
        get positionVector(): $Vector3d;
        get modelRotationMatrix(): $Matrix4f;
        get inflate(): number;
        get reset(): boolean;
        get childBones(): $List<$GeoBone>;
        get hidingChildren(): boolean;
        get cubes(): $List<$GeoCube>;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { direction?: $Direction_, vertices?: $GeoVertex_[], normal?: $Vector3f,  } | [direction?: $Direction_, vertices?: $GeoVertex_[], normal?: $Vector3f, ];
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
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        texV(): number;
        texU(): number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { position?: $Vector3f, texU?: number, texV?: number,  } | [position?: $Vector3f, texU?: number, texV?: number, ];
}
