import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        constructor(worldBorder: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        getSize(): number;
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getWarningBlocks(): number;
        getWarningTime(): number;
        getSafeZone(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        getDamagePerBlock(): number;
        getCenterX(): number;
        getCenterZ(): number;
        constructor(centerX: number, arg1: number, centerZ: number, arg3: number, damagePerBlock: number, arg5: number, safeZone: number, arg7: number, warningBlocks: number);
        constructor(border: $WorldBorder);
        get size(): number;
        get warningBlocks(): number;
        get warningTime(): number;
        get safeZone(): number;
        get sizeLerpTime(): number;
        get sizeLerpTarget(): number;
        get damagePerBlock(): number;
        get centerX(): number;
        get centerZ(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
        getSize(): number;
        update(): $WorldBorder$BorderExtent;
        getMinX(): number;
        getStatus(): $BorderStatus;
        getMaxZ(): number;
        getMaxX(): number;
        getMinZ(): number;
        getLerpRemainingTime(): number;
        onAbsoluteMaxSizeChange(): void;
        onCenterChange(): void;
        getLerpSpeed(): number;
        getLerpTarget(): number;
        getCollisionShape(): $VoxelShape;
        get size(): number;
        get minX(): number;
        get status(): $BorderStatus;
        get maxZ(): number;
        get maxX(): number;
        get minZ(): number;
        get lerpRemainingTime(): number;
        get lerpSpeed(): number;
        get lerpTarget(): number;
        get collisionShape(): $VoxelShape;
    }
    export class $WorldBorder implements $WorldBorderExtension {
        getSize(): number;
        setSize(damagePerBlock: number): void;
        getMinX(): number;
        handler$hec000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        handler$hec000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        getStatus(): $BorderStatus;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        getListeners(): $List<$BorderChangeListener>;
        removeListener(listener: $BorderChangeListener): void;
        setCenter(x: number, arg1: number): void;
        getMaxZ(): number;
        getMaxX(): number;
        getMinZ(): number;
        addListener(listener: $BorderChangeListener): void;
        tick(): void;
        getLerpRemainingTime(): number;
        createSettings(): $WorldBorder$Settings;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        setDamageSafeZone(damagePerBlock: number): void;
        setWarningTime(size: number): void;
        getWarningBlocks(): number;
        getLerpSpeed(): number;
        getWarningTime(): number;
        setWarningBlocks(size: number): void;
        applySettings(serializer: $WorldBorder$Settings): void;
        setDamagePerBlock(damagePerBlock: number): void;
        getLerpTarget(): number;
        getAbsoluteMaxSize(): number;
        setAbsoluteMaxSize(size: number): void;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        getCollisionShape(): $VoxelShape;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        getCenterX(): number;
        getCenterZ(): number;
        getDistanceToBorder(x: number, arg1: number): number;
        getDistanceToBorder(entity: $Entity): number;
        wrapOperation$cpa000$lithium$getUpdatedArea(arg0: $WorldBorder$BorderExtent, arg1: $Operation_<any>): $WorldBorder$BorderExtent;
        sable$setLevel(arg0: $Level): void;
        listeners: $List<$BorderChangeListener>;
        absoluteMaxSize: number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get minX(): number;
        get status(): $BorderStatus;
        get maxZ(): number;
        get maxX(): number;
        get minZ(): number;
        get lerpRemainingTime(): number;
        get lerpSpeed(): number;
        get lerpTarget(): number;
        get collisionShape(): $VoxelShape;
        get centerX(): number;
        get centerZ(): number;
    }
}
