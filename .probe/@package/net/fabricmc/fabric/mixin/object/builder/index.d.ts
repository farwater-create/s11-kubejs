import { $Function_, $Function, $ToIntFunction } from "@package/java/util/function";
import { $NoteBlockInstrument } from "@package/net/minecraft/world/level/block/state/properties";
import { $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$OffsetFunction_, $BlockBehaviour$Properties, $BlockState, $BlockBehaviour$OffsetFunction, $BlockBehaviour$StatePredicate } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $AttributeSupplier } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map } from "@package/java/util";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/fabricmc/fabric/mixin/object/builder" {
    export class $DefaultAttributeRegistryAccessor {
        static getRegistry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
        static get registry(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>;
    }
    export interface $DefaultAttributeRegistryAccessor {
    }
    export class $AbstractBlockSettingsAccessor {
    }
    export interface $AbstractBlockSettingsAccessor {
        getLiquid(): boolean;
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        getIgnitedByLava(): boolean;
        getInstrument(): $NoteBlockInstrument;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        setHasCollision(arg0: boolean): void;
        setDynamicShape(arg0: boolean): void;
        getReplaceable(): boolean;
        getForceSolidOn(): boolean;
        setReplaceable(arg0: boolean): void;
        getPushReaction(): $PushReaction;
        setForceSolidOn(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        getDestroyTime(): number;
        getForceSolidOff(): boolean;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        setIgnitedByLava(arg0: boolean): void;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        setForceSolidOff(arg0: boolean): void;
        getCanOcclude(): boolean;
        getDynamicShape(): boolean;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getSoundType(): $SoundType;
        getFriction(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getExplosionResistance(): number;
        getRequiredFeatures(): $FeatureFlagSet;
        setIsRandomlyTicking(arg0: boolean): void;
        getIsRandomlyTicking(): boolean;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getSpawnTerrainParticles(): boolean;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        getHasCollision(): boolean;
        getDrops(): $ResourceKey<$LootTable>;
        getMapColor(): $Function<$BlockState, $MapColor>;
        setIsAir(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        getIsAir(): boolean;
        get instrument(): $NoteBlockInstrument;
        get isViewBlocking(): $BlockBehaviour$StatePredicate;
        get pushReaction(): $PushReaction;
        get destroyTime(): number;
        get hasPostProcess(): $BlockBehaviour$StatePredicate;
        get isValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        get isSuffocating(): $BlockBehaviour$StatePredicate;
        get soundType(): $SoundType;
        get friction(): number;
        get luminance(): $ToIntFunction<$BlockState>;
        get jumpFactor(): number;
        get speedFactor(): number;
        get explosionResistance(): number;
        get isRedstoneConductor(): $BlockBehaviour$StatePredicate;
        get emissiveRendering(): $BlockBehaviour$StatePredicate;
    }
    export class $AbstractBlockAccessor {
    }
    export interface $AbstractBlockAccessor {
        getProperties(): $BlockBehaviour$Properties;
        get properties(): $BlockBehaviour$Properties;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBlockAccessor}.
     */
    export type $AbstractBlockAccessor_ = (() => $BlockBehaviour$Properties);
}
