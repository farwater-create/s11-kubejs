import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $EntityType, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $LevelTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $ExplosionEvent$Detonate, $LevelEvent$Unload, $ExplosionEvent$Start, $LevelEvent$Load } from "@package/net/neoforged/neoforge/event/level";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as ruletest from "@package/dev/latvian/mods/kubejs/level/ruletest";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        constructor(level: $Level, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedEntities(): $EntityArrayList;
        get affectedBlocks(): $List<$LevelBlock>;
    }
    export class $WrappedSpawner extends $Record {
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        entity(): $Entity;
        isWorldgen(): boolean;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedSpawner}.
     */
    export type $WrappedSpawner_ = { entity?: $Entity, block?: $LevelBlock,  } | [entity?: $Entity, block?: $LevelBlock, ];
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level);
    export class $CachedLevelBlock implements $LevelBlock {
        clearCache(): void;
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        getBlockState(): $BlockState;
        getPos(): $BlockPos;
        setBlockState(state: $BlockState_, flags: number): void;
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block, properties: $Map_<never, never>): void;
        set(block: $Block): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        getX(): number;
        getCenterY(): number;
        getDown(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        getNorth(): $LevelBlock;
        getWest(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getLight(): number;
        getSouth(): $LevelBlock;
        getEast(): $LevelBlock;
        getUp(): $LevelBlock;
        getY(): number;
        createEntity(type: $EntityType<never>): $Entity;
        getBlockLight(): number;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        setEntityData(tag: $CompoundTag_): void;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getCanSeeSky(): boolean;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        toBlockStateString(): string;
        getSkyLight(): number;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        canSeeSkyFromBelowWater(): boolean;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        explode(properties: $ExplosionProperties_): $Explosion;
        getCenterX(): number;
        getCenterZ(): number;
        getZ(): number;
        setBlockState(state: $BlockState_): void;
        getDimensionKey(): $ResourceKey<$Level>;
        getId(): string;
        getTypeData(): $Map<string, $Object>;
        getKey(): $ResourceKey<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        minecraftLevel: $Level;
        constructor(w: $Level, p: $BlockPos_);
        get level(): $Level;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get x(): number;
        get centerY(): number;
        get down(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get north(): $LevelBlock;
        get west(): $LevelBlock;
        get light(): number;
        get south(): $LevelBlock;
        get east(): $LevelBlock;
        get up(): $LevelBlock;
        get y(): number;
        get blockLight(): number;
        get entityId(): string;
        get canSeeSky(): boolean;
        get skyLight(): number;
        get block(): $Block;
        get centerX(): number;
        get centerZ(): number;
        get z(): number;
        get dimensionKey(): $ResourceKey<$Level>;
        get id(): string;
        get typeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $ExplosionProperties extends $Record {
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        strength(): (number) | undefined;
        explosionSound(): $Holder<$SoundEvent>;
        damageCalculator(): $ExplosionDamageCalculator;
        damageSource(): $DamageSource;
        explode(level: $Level, x: number, y: number, z: number): $Explosion;
        particles(): (boolean) | undefined;
        causesFire(): (boolean) | undefined;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, particles?: (boolean) | undefined, causesFire?: (boolean) | undefined,  } | [mode?: $Level$ExplosionInteraction_, source?: $Entity, strength?: (number) | undefined, smallParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, largeParticles?: $ParticleOptions_, explosionSound?: $Holder_<$SoundEvent>, damageSource?: $DamageSource_, particles?: (boolean) | undefined, causesFire?: (boolean) | undefined, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(l: $Level);
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeJSWorldEventHandler {
        static serverTickEvent(event: $LevelTickEvent$Post): void;
        static preExplosion(event: $ExplosionEvent$Start): void;
        static serverLevelUnload(event: $LevelEvent$Unload): void;
        static serverLevelLoad(event: $LevelEvent$Load): void;
        static detonateExplosion(event: $ExplosionEvent$Detonate): void;
        constructor();
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        offset(f: $Direction_, d: number): $LevelBlock;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        set(block: $Block, properties: $Map_<never, never>, flags: number): void;
        set(block: $Block, properties: $Map_<never, never>): void;
        set(block: $Block): void;
        getProperties(): $Map<string, string>;
        getItem(): $ItemStack;
        getDimension(): $ResourceLocation;
        getX(): number;
        getLevel(): $Level;
        getEntity(): $BlockEntity;
        getCenterY(): number;
        getDown(): $LevelBlock;
        getBiomeId(): $ResourceLocation;
        getNorth(): $LevelBlock;
        getWest(): $LevelBlock;
        popItem(item: $ItemStack_): void;
        getLight(): number;
        getSouth(): $LevelBlock;
        getEast(): $LevelBlock;
        getUp(): $LevelBlock;
        getY(): number;
        createEntity(type: $EntityType<never>): $Entity;
        getBlockLight(): number;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(): void;
        spawnLightning(effectOnly: boolean): void;
        getPlayersInRadius(): $EntityArrayList;
        getPlayersInRadius(radius: number): $EntityArrayList;
        setEntityData(tag: $CompoundTag_): void;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getCanSeeSky(): boolean;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        toBlockStateString(): string;
        getSkyLight(): number;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        canSeeSkyFromBelowWater(): boolean;
        getBlockState(): $BlockState;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        getDrops(): $List<$ItemStack>;
        explode(properties: $ExplosionProperties_): $Explosion;
        getPos(): $BlockPos;
        getCenterX(): number;
        getCenterZ(): number;
        getZ(): number;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getDimensionKey(): $ResourceKey<$Level>;
        get properties(): $Map<string, string>;
        get item(): $ItemStack;
        get dimension(): $ResourceLocation;
        get x(): number;
        get level(): $Level;
        get entity(): $BlockEntity;
        get centerY(): number;
        get down(): $LevelBlock;
        get biomeId(): $ResourceLocation;
        get north(): $LevelBlock;
        get west(): $LevelBlock;
        get light(): number;
        get south(): $LevelBlock;
        get east(): $LevelBlock;
        get up(): $LevelBlock;
        get y(): number;
        get blockLight(): number;
        get entityId(): string;
        get canSeeSky(): boolean;
        get skyLight(): number;
        get block(): $Block;
        get pos(): $BlockPos;
        get centerX(): number;
        get centerZ(): number;
        get z(): number;
        get dimensionKey(): $ResourceKey<$Level>;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getBlock(): $LevelBlock;
        getPosition(): $Vec3;
        getX(): number;
        getLevel(): $Level;
        getY(): number;
        getZ(): number;
        getExploder(): $LivingEntity;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(level: $Level, explosion: $Explosion);
        get block(): $LevelBlock;
        get position(): $Vec3;
        get x(): number;
        get level(): $Level;
        get y(): number;
        get z(): number;
        get exploder(): $LivingEntity;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
