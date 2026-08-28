import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $FluidVariantCache } from "@package/net/fabricmc/fabric/impl/transfer/fluid";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity, $Mob } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FlowingFluidAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map, $Map$Entry } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderSet_, $Holder, $BlockPos_, $Direction_, $Registry, $Holder$Reference, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Reference2ObjectArrayMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $IFluidStateExtension, $IFluidExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $StateDefinition, $StateDefinition$Builder, $BlockState_, $StateHolder, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $IFlowableFluid } from "@package/com/ishland/c2me/base/mixin/access";
import { $Short2BooleanMap, $Short2ObjectMap } from "@package/it/unimi/dsi/fastutil/shorts";
import { $Explosion, $LevelAccessor, $LevelReader, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $FlowingFluidAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $InjectedFluidExtension } from "@package/dev/architectury/extensions/injected";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FluidVariant } from "@package/net/fabricmc/fabric/api/transfer/v1/fluid";
import { $FluidKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/material" {
    export class $EmptyFluid extends $Fluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $LavaFluid$Flowing extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $LavaFluid$Source extends $LavaFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $WaterFluid extends $FlowingFluid {
        wrapOperation$hea000$sable$addUnderwaterParticle(arg0: $Level, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $MapColor$Brightness extends $Enum<$MapColor$Brightness> {
        static values(): $MapColor$Brightness[];
        static valueOf(arg0: string): $MapColor$Brightness;
        static byIdUnsafe(id: number): $MapColor$Brightness;
        static byId(id: number): $MapColor$Brightness;
        static LOWEST: $MapColor$Brightness;
        static HIGH: $MapColor$Brightness;
        static LOW: $MapColor$Brightness;
        modifier: number;
        id: number;
        static NORMAL: $MapColor$Brightness;
    }
    /**
     * Values that may be interpreted as {@link $MapColor$Brightness}.
     */
    export type $MapColor$Brightness_ = "low" | "normal" | "high" | "lowest";
    export class $Fluid implements $IFluidExtension, $InjectedFluidExtension, $FluidVariantCache, $FluidKJS {
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        is(tag: $TagKey_<$Fluid>): boolean;
        getHeight(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): number;
        getShape(state: $FluidState, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        isSource(state: $FluidState): boolean;
        handler$gcm000$fabric_transfer_api_v1$hookGetBucketFillSound(arg0: $CallbackInfoReturnable<any>): void;
        createFluidStateDefinition(builder: $StateDefinition$Builder<$Fluid, $FluidState>): void;
        tick(level: $Level, pos: $BlockPos_, state: $FluidState): void;
        getBucket(): $Item;
        getOwnHeight(state: $FluidState): number;
        defaultFluidState(): $FluidState;
        /**
         * Returns the type of this fluid.
         * 
         * Important: This MUST be overridden on your fluid, otherwise an
         * error will be thrown.
         */
        getFluidType(): $FluidType;
        getStateDefinition(): $StateDefinition<$Fluid, $FluidState>;
        animateTick(level: $Level, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        getId(): string;
        getFlow(blockReader: $BlockGetter, pos: $BlockPos_, fluidState: $FluidState): $Vec3;
        getAmount(state: $FluidState): number;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Fluid>;
        getExplosionResistance(): number;
        registerDefaultState(state: $FluidState): void;
        isSame(fluid: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getDripParticle(): $ParticleOptions;
        getTickDelay(level: $LevelReader): number;
        canBeReplacedWith(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, fluid: $Fluid, direction: $Direction_): boolean;
        fabric_getCachedFluidVariant(): $FluidVariant;
        randomTick(level: $Level, pos: $BlockPos_, state: $FluidState, random: $RandomSource): void;
        getKey(): $ResourceKey<any>;
        isRandomlyTicking(): boolean;
        asHolder(): $Holder$Reference<any>;
        createLegacyBlock(state: $FluidState): $BlockState;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(state: $FluidState, entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(state: $FluidState, level: $Level, pos: $BlockPos_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(state: $FluidState, boat: $Boat): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        arch$holder(): $Holder<$Fluid>;
        isEmpty(): boolean;
        getFluid(): $Fluid;
        getAmount(): number;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        getRegistry(): $Registry<$Fluid>;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getTags(): $List<$ResourceLocation>;
        copy(amount: number): $FluidLike;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
        get bucket(): $Item;
        get fluidType(): $FluidType;
        get id(): string;
        get pickupSound(): ($SoundEvent) | undefined;
        get dripParticle(): $ParticleOptions;
        get key(): $ResourceKey<any>;
        get randomlyTicking(): boolean;
        get fluid(): $Fluid;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get registry(): $Registry<$Fluid>;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $MapColor {
        getPackedId(brightness: $MapColor$Brightness_): number;
        calculateRGBColor(brightness: $MapColor$Brightness_): number;
        static byId(id: number): $MapColor;
        static getColorFromPackedId(packedId: number): number;
        col: number;
        static WOOD: $MapColor;
        static CRIMSON_STEM: $MapColor;
        static TERRACOTTA_LIGHT_BLUE: $MapColor;
        static PODZOL: $MapColor;
        static WARPED_WART_BLOCK: $MapColor;
        static COLOR_LIGHT_GREEN: $MapColor;
        static COLOR_BLACK: $MapColor;
        static TERRACOTTA_GREEN: $MapColor;
        static WARPED_NYLIUM: $MapColor;
        static FIRE: $MapColor;
        static GRASS: $MapColor;
        static TERRACOTTA_ORANGE: $MapColor;
        static GLOW_LICHEN: $MapColor;
        static COLOR_CYAN: $MapColor;
        id: number;
        static NONE: $MapColor;
        static WOOL: $MapColor;
        static QUARTZ: $MapColor;
        static WATER: $MapColor;
        static TERRACOTTA_YELLOW: $MapColor;
        static SAND: $MapColor;
        static SNOW: $MapColor;
        static DIRT: $MapColor;
        static LAPIS: $MapColor;
        static DEEPSLATE: $MapColor;
        static COLOR_YELLOW: $MapColor;
        static COLOR_LIGHT_GRAY: $MapColor;
        static TERRACOTTA_LIGHT_GRAY: $MapColor;
        static CRIMSON_NYLIUM: $MapColor;
        static TERRACOTTA_BLUE: $MapColor;
        static WARPED_HYPHAE: $MapColor;
        static METAL: $MapColor;
        static TERRACOTTA_GRAY: $MapColor;
        static WARPED_STEM: $MapColor;
        static PLANT: $MapColor;
        static GOLD: $MapColor;
        static DIAMOND: $MapColor;
        static COLOR_RED: $MapColor;
        static COLOR_ORANGE: $MapColor;
        static COLOR_BLUE: $MapColor;
        static NETHER: $MapColor;
        static TERRACOTTA_BLACK: $MapColor;
        static TERRACOTTA_PINK: $MapColor;
        static COLOR_MAGENTA: $MapColor;
        static TERRACOTTA_WHITE: $MapColor;
        static COLOR_GRAY: $MapColor;
        static COLOR_LIGHT_BLUE: $MapColor;
        static TERRACOTTA_LIGHT_GREEN: $MapColor;
        static COLOR_GREEN: $MapColor;
        static COLOR_PURPLE: $MapColor;
        static EMERALD: $MapColor;
        static ICE: $MapColor;
        static COLOR_BROWN: $MapColor;
        static TERRACOTTA_PURPLE: $MapColor;
        static TERRACOTTA_BROWN: $MapColor;
        static TERRACOTTA_MAGENTA: $MapColor;
        static RAW_IRON: $MapColor;
        static COLOR_PINK: $MapColor;
        static TERRACOTTA_RED: $MapColor;
        static CRIMSON_HYPHAE: $MapColor;
        static STONE: $MapColor;
        static TERRACOTTA_CYAN: $MapColor;
        static CLAY: $MapColor;
    }
    export class $WaterFluid$Source extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $FlowingFluid extends $Fluid implements $FlowingFluidAccess, $FlowingFluidAccessor, $IFlowableFluid {
        spread(level: $Level, pos: $BlockPos_, state: $FluidState): void;
        getSource(): $Fluid;
        getSource(falling: boolean): $FluidState;
        getSlopeFindDistance(level: $LevelReader): number;
        beforeDestroyingBlock(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): void;
        handler$cka000$lithium$getSpread(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfoReturnable<any>): void;
        handler$zcc000$openpartiesandclaims$onCanPassThrough(arg0: $BlockGetter, arg1: $Fluid, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        spreadTo(level: $LevelAccessor, pos: $BlockPos_, blockState: $BlockState_, direction: $Direction_, fluidState: $FluidState): void;
        getDropOff(level: $LevelReader): number;
        getSpread(level: $Level, pos: $BlockPos_, state: $BlockState_): $Map<$Direction, $FluidState>;
        /**
         * @deprecated
         */
        canConvertToSource(level: $Level): boolean;
        getFlowing(): $Fluid;
        getFlowing(level: number, falling: boolean): $FluidState;
        static getLegacyLevel(state: $FluidState): number;
        canSpreadTo(level: $BlockGetter, fromPos: $BlockPos_, fromBlockState: $BlockState_, direction: $Direction_, toPos: $BlockPos_, toBlockState: $BlockState_, toFluidState: $FluidState, fluid: $Fluid): boolean;
        isSolidFace(level: $BlockGetter, neighborPos: $BlockPos_, side: $Direction_): boolean;
        getSpreadDelay(level: $Level, pos: $BlockPos_, currentState: $FluidState, newState: $FluidState): number;
        getSlopeDistance(level: $LevelReader, spreadPos: $BlockPos_, distance: number, direction: $Direction_, currentSpreadState: $BlockState_, sourcePos: $BlockPos_, stateCache: $Short2ObjectMap<$Pair<$BlockState_, $FluidState>>, waterHoleCache: $Short2BooleanMap): number;
        getNewLiquid(level: $Level, pos: $BlockPos_, blockState: $BlockState_): $FluidState;
        handler$dlh000$immersiveengineering$canPassThrough(arg0: $BlockGetter, arg1: $Fluid, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        handler$gmm000$create$canPassThroughOnWaterWheel(arg0: $BlockGetter, arg1: $Fluid, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $BlockPos_, arg6: $BlockState_, arg7: $FluidState, arg8: $CallbackInfoReturnable<any>): void;
        callCanPassThroughWall(direction: $Direction_, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, spreadPos: $BlockPos_, spreadState: $BlockState_): boolean;
        invokeIsMatchingAndStill(state: $FluidState): boolean;
        create$getNewLiquid(level: $Level, pos: $BlockPos_, blockState: $BlockState_): $FluidState;
        invokeGetLevelDecreasePerBlock(level: $LevelReader): number;
        invokeReceivesFlow(direction: $Direction_, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, spreadPos: $BlockPos_, spreadState: $BlockState_): boolean;
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $PushReaction extends $Enum<$PushReaction> {
        static values(): $PushReaction[];
        static valueOf(arg0: string): $PushReaction;
        static DESTROY: $PushReaction;
        static BLOCK: $PushReaction;
        static PUSH_ONLY: $PushReaction;
        static IGNORE: $PushReaction;
        static NORMAL: $PushReaction;
    }
    /**
     * Values that may be interpreted as {@link $PushReaction}.
     */
    export type $PushReaction_ = "normal" | "destroy" | "block" | "ignore" | "push_only";
    export class $FluidState extends $StateHolder<$Fluid, $FluidState> implements $IFluidStateExtension {
        isEmpty(): boolean;
        holder(): $Holder<$Fluid>;
        getType(): $Fluid;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluids: $HolderSet_<$Fluid>): boolean;
        is(fluid: $Fluid): boolean;
        getHeight(level: $BlockGetter, pos: $BlockPos_): number;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        isSource(): boolean;
        isSourceOfType(fluid: $Fluid): boolean;
        tick(level: $Level, pos: $BlockPos_): void;
        getOwnHeight(): number;
        animateTick(level: $Level, pos: $BlockPos_, random: $RandomSource): void;
        shouldRenderBackwardUpFace(level: $BlockGetter, pos: $BlockPos_): boolean;
        getTags(): $Stream<$TagKey<$Fluid>>;
        getFlow(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        getAmount(): number;
        /**
         * @deprecated
         */
        getExplosionResistance(): number;
        getDripParticle(): $ParticleOptions;
        canBeReplacedWith(level: $BlockGetter, pos: $BlockPos_, fluid: $Fluid, direction: $Direction_): boolean;
        randomTick(level: $Level, pos: $BlockPos_, random: $RandomSource): void;
        isRandomlyTicking(): boolean;
        createLegacyBlock(): $BlockState;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns the type of this fluid.
         */
        getFluidType(): $FluidType;
        canExtinguish(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the explosion resistance of the fluid.
         */
        getExplosionResistance(level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(level: $Level, pos: $BlockPos_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(boat: $Boat): boolean;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        static PROPERTIES_TAG: string;
        owner: $Fluid;
        static AMOUNT_MAX: number;
        static CODEC: $Codec<$FluidState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static AMOUNT_FULL: number;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$FluidState>;
        constructor(owner: $Fluid, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec<$FluidState>);
        get empty(): boolean;
        get type(): $Fluid;
        get source(): boolean;
        get ownHeight(): number;
        get tags(): $Stream<$TagKey<$Fluid>>;
        get amount(): number;
        get dripParticle(): $ParticleOptions;
        get randomlyTicking(): boolean;
        get fluidType(): $FluidType;
    }
    export class $WaterFluid$Flowing extends $WaterFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $Fluids {
        static LAVA: $FlowingFluid;
        static FLOWING_WATER: $FlowingFluid;
        static EMPTY: $Fluid;
        static FLOWING_LAVA: $FlowingFluid;
        static WATER: $FlowingFluid;
        constructor();
    }
    export class $LavaFluid extends $FlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static MIN_LEVEL_CUTOFF: number;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        stateDefinition: $StateDefinition<$Fluid, $FluidState>;
        constructor();
    }
    export class $FogType extends $Enum<$FogType> {
        static values(): $FogType[];
        static valueOf(arg0: string): $FogType;
        static LAVA: $FogType;
        static POWDER_SNOW: $FogType;
        static NONE: $FogType;
        static WATER: $FogType;
    }
    /**
     * Values that may be interpreted as {@link $FogType}.
     */
    export type $FogType_ = "lava" | "water" | "powder_snow" | "none";
}
