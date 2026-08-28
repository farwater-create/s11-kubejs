import { $Level } from "@package/net/minecraft/world/level";
import { $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/fabricmc/fabric/api/lookup/v1/block" {
    export class $BlockApiLookup$BlockEntityApiProvider<A, C> {
    }
    export interface $BlockApiLookup$BlockEntityApiProvider<A, C> {
        find(arg0: $BlockEntity, arg1: C): A;
    }
    /**
     * Values that may be interpreted as {@link $BlockApiLookup$BlockEntityApiProvider}.
     */
    export type $BlockApiLookup$BlockEntityApiProvider_<A, C> = ((arg0: $BlockEntity, arg1: C) => A);
    export class $BlockApiLookup<A, C> {
        static get<A, C>(arg0: $ResourceLocation_, arg1: $Class<A>, arg2: $Class<C>): $BlockApiLookup<A, C>;
    }
    export interface $BlockApiLookup<A, C> {
        find(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): A;
        find(arg0: $Level, arg1: $BlockPos_, arg2: C): A;
        getId(): $ResourceLocation;
        getProvider(arg0: $Block): $BlockApiLookup$BlockApiProvider<A, C>;
        registerSelf(...arg0: $BlockEntityType<never>[]): void;
        registerFallback(arg0: $BlockApiLookup$BlockApiProvider_<A, C>): void;
        contextClass(): $Class<C>;
        apiClass(): $Class<A>;
        registerForBlockEntity<T extends $BlockEntity>(arg0: $BiFunction_<T, C, A>, arg1: $BlockEntityType<T>): void;
        registerForBlocks(arg0: $BlockApiLookup$BlockApiProvider_<A, C>, ...arg1: $Block[]): void;
        registerForBlockEntities(arg0: $BlockApiLookup$BlockEntityApiProvider_<A, C>, ...arg1: $BlockEntityType<never>[]): void;
        get id(): $ResourceLocation;
    }
    export class $BlockApiLookup$BlockApiProvider<A, C> {
    }
    export interface $BlockApiLookup$BlockApiProvider<A, C> {
        find(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockEntity, arg4: C): A;
    }
    /**
     * Values that may be interpreted as {@link $BlockApiLookup$BlockApiProvider}.
     */
    export type $BlockApiLookup$BlockApiProvider_<A, C> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C) => A);
    export class $BlockApiCache<A, C> {
        static create<A, C>(arg0: $BlockApiLookup<A, C>, arg1: $ServerLevel, arg2: $BlockPos_): $BlockApiCache<A, C>;
    }
    export interface $BlockApiCache<A, C> {
        find(arg0: C): A;
        find(arg0: $BlockState_, arg1: C): A;
        getLookup(): $BlockApiLookup<A, C>;
        getBlockEntity(): $BlockEntity;
        getWorld(): $ServerLevel;
        getPos(): $BlockPos;
        get lookup(): $BlockApiLookup<A, C>;
        get blockEntity(): $BlockEntity;
        get world(): $ServerLevel;
        get pos(): $BlockPos;
    }
}
