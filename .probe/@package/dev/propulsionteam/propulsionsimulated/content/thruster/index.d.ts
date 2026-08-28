import { $TagKey } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $Set_, $List_ } from "@package/java/util";

declare module "@package/dev/propulsionteam/propulsionsimulated/content/thruster" {
    export class $FluidThrusterProperties extends $Record {
        static decode(arg0: $FriendlyByteBuf): $FluidThrusterProperties;
        encode(arg0: $FriendlyByteBuf): void;
        particleType(): $ThrusterParticleType;
        thrustMultiplier(): number;
        overrideTextures(): $List<$ResourceLocation>;
        useFluidColor(): boolean;
        overrideColor(): number;
        consumptionMultiplier(): number;
        static DEFAULT: $FluidThrusterProperties;
        constructor(thrustMultiplier: number, consumptionMultiplier: number, particleType: $ThrusterParticleType_, overrideTextures: $List_<$ResourceLocation_>, overrideColor: number, useFluidColor: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FluidThrusterProperties}.
     */
    export type $FluidThrusterProperties_ = { consumptionMultiplier?: number, particleType?: $ThrusterParticleType_, overrideTextures?: $List_<$ResourceLocation_>, overrideColor?: number, useFluidColor?: boolean, thrustMultiplier?: number,  } | [consumptionMultiplier?: number, particleType?: $ThrusterParticleType_, overrideTextures?: $List_<$ResourceLocation_>, overrideColor?: number, useFluidColor?: boolean, thrustMultiplier?: number, ];
    export class $ThrusterParticleType extends $Enum<$ThrusterParticleType> {
        static values(): $ThrusterParticleType[];
        static valueOf(arg0: string): $ThrusterParticleType;
        static fromString(arg0: string): $ThrusterParticleType;
        serializedName(): string;
        createParticleOptions(): $ParticleOptions;
        createParticleOptions(arg0: $ItemThrusterProperties_): $ParticleOptions;
        createParticleOptions(arg0: $FluidThrusterProperties_): $ParticleOptions;
        static PLASMA: $ThrusterParticleType;
        static CODEC: $Codec<$ThrusterParticleType>;
        static PLUME: $ThrusterParticleType;
        static NONE: $ThrusterParticleType;
    }
    /**
     * Values that may be interpreted as {@link $ThrusterParticleType}.
     */
    export type $ThrusterParticleType_ = "none" | "plume" | "plasma";
    export class $ItemThrusterProperties extends $Record {
        static decode(arg0: $FriendlyByteBuf): $ItemThrusterProperties;
        encode(arg0: $FriendlyByteBuf): void;
        particleType(): $ThrusterParticleType;
        thrustMultiplier(): number;
        overrideTextures(): $List<$ResourceLocation>;
        useItemColor(): boolean;
        overrideColor(): number;
        consumptionMultiplier(): number;
        static DEFAULT: $ItemThrusterProperties;
        constructor(thrustMultiplier: number, consumptionMultiplier: number, particleType: $ThrusterParticleType_, overrideTextures: $List_<$ResourceLocation_>, overrideColor: number, useItemColor: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ItemThrusterProperties}.
     */
    export type $ItemThrusterProperties_ = { consumptionMultiplier?: number, useItemColor?: boolean, particleType?: $ThrusterParticleType_, overrideColor?: number, overrideTextures?: $List_<$ResourceLocation_>, thrustMultiplier?: number,  } | [consumptionMultiplier?: number, useItemColor?: boolean, particleType?: $ThrusterParticleType_, overrideColor?: number, overrideTextures?: $List_<$ResourceLocation_>, thrustMultiplier?: number, ];
    export class $ThrusterFuelManager extends $SimpleJsonResourceReloadListener {
        static getProperties(arg0: $Fluid): $FluidThrusterProperties;
        static getEfficiency(arg0: $Fluid): number;
        static rebuildThrusterFuelsAfterCommonConfigReload(): void;
        static removeFuel(arg0: string): boolean;
        static updateClient(arg0: $Map_<$ResourceLocation_, $FluidThrusterProperties_>, arg1: $Set_<$ResourceLocation_>): void;
        static clearScriptedFuels(): void;
        static overrideFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static getRemovedFuelIds(): $Set<$ResourceLocation>;
        static getFuelPropertiesMap(): $Map<$Fluid, $FluidThrusterProperties>;
        static registerScriptedFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static DIRECTORY: string;
        constructor();
        static get removedFuelIds(): $Set<$ResourceLocation>;
        static get fuelPropertiesMap(): $Map<$Fluid, $FluidThrusterProperties>;
    }
    export class $SolidThrusterFuelDefinition extends $Record {
        getItem(): $Item;
        itemId(): ($ResourceLocation) | undefined;
        particle(): $ThrusterParticleType;
        getItemTag(): $TagKey<$Item>;
        isTagEntry(): boolean;
        itemTagId(): ($ResourceLocation) | undefined;
        burnTicks(): (number) | undefined;
        thrustMultiplier(): number;
        overrideTextures(): $List<$ResourceLocation>;
        requiredMod(): (string) | undefined;
        useItemColor(): boolean;
        overrideColor(): (number) | undefined;
        resolveBurnTicks(arg0: $ItemStack_): number;
        isItemEntry(): boolean;
        consumptionMultiplier(): number;
        static CODEC: $Codec<$SolidThrusterFuelDefinition>;
        constructor(itemId: ($ResourceLocation_) | undefined, itemTagId: ($ResourceLocation_) | undefined, thrustMultiplier: number, consumptionMultiplier: number, burnTicks: (number) | undefined, particle: $ThrusterParticleType_, overrideTextures: $List_<$ResourceLocation_>, overrideColor: (number) | undefined, useItemColor: boolean, requiredMod: (string) | undefined);
        get item(): $Item;
        get itemTag(): $TagKey<$Item>;
        get tagEntry(): boolean;
        get itemEntry(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SolidThrusterFuelDefinition}.
     */
    export type $SolidThrusterFuelDefinition_ = { overrideTextures?: $List_<$ResourceLocation_>, particle?: $ThrusterParticleType_, itemId?: ($ResourceLocation_) | undefined, itemTagId?: ($ResourceLocation_) | undefined, burnTicks?: (number) | undefined, useItemColor?: boolean, requiredMod?: (string) | undefined, consumptionMultiplier?: number, overrideColor?: (number) | undefined, thrustMultiplier?: number,  } | [overrideTextures?: $List_<$ResourceLocation_>, particle?: $ThrusterParticleType_, itemId?: ($ResourceLocation_) | undefined, itemTagId?: ($ResourceLocation_) | undefined, burnTicks?: (number) | undefined, useItemColor?: boolean, requiredMod?: (string) | undefined, consumptionMultiplier?: number, overrideColor?: (number) | undefined, thrustMultiplier?: number, ];
    export class $SolidThrusterFuelManager extends $SimpleJsonResourceReloadListener {
        static getProperties(arg0: $ItemStack_): $ItemThrusterProperties;
        static getProperties(arg0: $Item): $ItemThrusterProperties;
        static getEfficiency(arg0: $Item): number;
        static rebuildAfterCommonConfigReload(): void;
        static removeFuel(arg0: string): boolean;
        static updateClient(arg0: $Map_<$ResourceLocation_, $ItemThrusterProperties_>, arg1: $Set_<$ResourceLocation_>): void;
        static clearScriptedFuels(): void;
        static overrideFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static getRemovedFuelIds(): $Set<$ResourceLocation>;
        static resolveBurnTicks(arg0: $ItemStack_): number;
        static getFuelPropertiesMap(): $Map<$Item, $ItemThrusterProperties>;
        static registerScriptedFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static findDefinitionForStack(arg0: $ItemStack_): $SolidThrusterFuelDefinition;
        static DIRECTORY: string;
        constructor();
        static get removedFuelIds(): $Set<$ResourceLocation>;
        static get fuelPropertiesMap(): $Map<$Item, $ItemThrusterProperties>;
    }
}
