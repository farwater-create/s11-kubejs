import { $Level } from "@package/net/minecraft/world/level";
import { $SingleRecipeInput_, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $TransportedItemStackHandlerBehaviour$TransportedResult } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List } from "@package/java/util";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FanProcessingTypeSimulatedExtension } from "@package/plus/dragons/createdragonsplus/integration/simulated/api/kinetics/fan";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/com/simibubi/create/content/kinetics/fan/processing" {
    export class $AllFanProcessingTypes$SmokingType implements $FanProcessingType, $FanProcessingTypeSimulatedExtension {
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level): $List<$ItemStack>;
        active(): boolean;
        canAffectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): void;
        affectEntity(arg0: $Entity, arg1: $Level): void;
        isValidAt(arg0: $Level, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level): boolean;
        spawnProcessingParticles(arg0: $Level, arg1: $Vec3_): void;
        constructor();
        get priority(): number;
    }
    export class $FanProcessingTypeRegistry {
        static init(): void;
        static SORTED_TYPES_VIEW: $List<$FanProcessingType>;
        constructor();
    }
    export class $FanProcessing {
        static applyProcessing(arg0: $TransportedItemStack, arg1: $Level, arg2: $FanProcessingType): $TransportedItemStackHandlerBehaviour$TransportedResult;
        static applyProcessing(arg0: $ItemEntity, arg1: $FanProcessingType): boolean;
        static canProcess(arg0: $ItemEntity, arg1: $FanProcessingType): boolean;
        constructor();
    }
    export class $HauntingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> {
        matches(arg0: $SingleRecipeInput_, arg1: $Level): boolean;
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $AllFanProcessingTypes$BlastingType implements $FanProcessingType, $FanProcessingTypeSimulatedExtension {
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level): $List<$ItemStack>;
        active(): boolean;
        canAffectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): void;
        affectEntity(arg0: $Entity, arg1: $Level): void;
        isValidAt(arg0: $Level, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level): boolean;
        spawnProcessingParticles(arg0: $Level, arg1: $Vec3_): void;
        constructor();
        get priority(): number;
    }
    export class $SplashingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> {
        matches(arg0: $SingleRecipeInput_, arg1: $Level): boolean;
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $FanProcessingType {
        static parse(arg0: string): $FanProcessingType;
        static getAt(arg0: $Level, arg1: $BlockPos_): $FanProcessingType;
    }
    export interface $FanProcessingType {
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level): $List<$ItemStack>;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectEntity(arg0: $Entity, arg1: $Level): void;
        isValidAt(arg0: $Level, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level): boolean;
        spawnProcessingParticles(arg0: $Level, arg1: $Vec3_): void;
        get priority(): number;
    }
    export class $AllFanProcessingTypes$HauntingType implements $FanProcessingType, $FanProcessingTypeSimulatedExtension {
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level): $List<$ItemStack>;
        active(): boolean;
        canAffectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): void;
        affectEntity(arg0: $Entity, arg1: $Level): void;
        isValidAt(arg0: $Level, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level): boolean;
        spawnProcessingParticles(arg0: $Level, arg1: $Vec3_): void;
        constructor();
        get priority(): number;
    }
    export class $AllFanProcessingTypes$SplashingType implements $FanProcessingType, $FanProcessingTypeSimulatedExtension {
        getPriority(): number;
        process(arg0: $ItemStack_, arg1: $Level): $List<$ItemStack>;
        active(): boolean;
        canAffectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        affectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): void;
        affectEntity(arg0: $Entity, arg1: $Level): void;
        isValidAt(arg0: $Level, arg1: $BlockPos_): boolean;
        canProcess(arg0: $ItemStack_, arg1: $Level): boolean;
        spawnProcessingParticles(arg0: $Level, arg1: $Vec3_): void;
        constructor();
        get priority(): number;
    }
    export class $AllFanProcessingTypes {
        static init(): void;
        static parseLegacy(arg0: string): $FanProcessingType;
        static ofLegacyName(arg0: string): $FanProcessingType;
        static BLASTING: $AllFanProcessingTypes$BlastingType;
        static HAUNTING: $AllFanProcessingTypes$HauntingType;
        static SMOKING: $AllFanProcessingTypes$SmokingType;
        static SPLASHING: $AllFanProcessingTypes$SplashingType;
        constructor();
    }
    export class $FanProcessingType$AirFlowParticleAccess {
    }
    export interface $FanProcessingType$AirFlowParticleAccess {
        setColor(arg0: number): void;
        setAlpha(arg0: number): void;
        spawnExtraParticle(arg0: $ParticleOptions_, arg1: number): void;
        set color(value: number);
        set alpha(value: number);
    }
}
