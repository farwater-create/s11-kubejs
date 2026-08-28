import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $Level } from "@package/net/minecraft/world/level";
import { $Predicate_, $Supplier_, $ToIntFunction_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $TriPredicate_ } from "@package/net/neoforged/neoforge/common/util";
import { $AbstractPanelBehaviour$ConnectionValue } from "@package/net/liukrast/deployer/lib/logistics/board";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List, $Map_, $Set, $Set_ } from "@package/java/util";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $FactoryPanelConnection, $FactoryPanelBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";

declare module "@package/net/liukrast/deployer/lib/logistics/board/connection" {
    export class $PanelConnection<T> {
        getListener(arg0: $Block): $ConnectionExtra<T>;
        addListener(arg0: $ConnectionExtra_<T>, ...arg1: $Block[]): void;
        getColor(arg0: T): number;
        static makeContext(arg0: $BlockState_): $Direction;
        constructor(arg0: $ToIntFunction_<T>);
    }
    export class $PanelValue<T> {
        static of<T>(arg0: (T) | undefined): $PanelValue<T>;
        static of<T>(arg0: T): $PanelValue<T>;
        static empty<T>(): $PanelValue<T>;
        static abort<T>(): $PanelValue<T>;
    }
    export interface $PanelValue<T> {
    }
    export class $ProvidesConnection {
        static getPossibleConnections(arg0: $FactoryPanelBehaviour, arg1: $FactoryPanelBehaviour): $Set<$PanelConnection<never>>;
        static getPossibleConnections(arg0: $ProvidesConnection, arg1: $ProvidesConnection): $Set<$PanelConnection<never>>;
        static getPossibleConnections(arg0: $FactoryPanelBehaviour, arg1: $ProvidesConnection): $Set<$PanelConnection<never>>;
        static getPossibleConnections(arg0: $ProvidesConnection, arg1: $FactoryPanelBehaviour): $Set<$PanelConnection<never>>;
        static getCurrentConnection(arg0: $FactoryPanelConnection, arg1: $Supplier_<$PanelConnection<never>>): $PanelConnection<never>;
    }
    export interface $ProvidesConnection {
        getAllValuesWithSource<T>(arg0: $PanelConnection<T>): $List<$AbstractPanelBehaviour$ConnectionValue<T>>;
        overrideConnectionColor(arg0: number, arg1: $FactoryPanelConnection, arg2: number): number;
        getConnectionValue<T>(arg0: $DeferredHolder<$PanelConnection<never>, $PanelConnection<T>>): (T) | undefined;
        getConnectionValue<T>(arg0: $PanelConnection<T>): (T) | undefined;
        addConnections(arg0: $PanelConnectionBuilder): void;
        getAllValues<T>(arg0: $PanelConnection<T>): $List<T>;
        getOutputConnections(): $Set<$PanelConnection<never>>;
        getInputConnections(): $Set<$PanelConnection<never>>;
        get outputConnections(): $Set<$PanelConnection<never>>;
        get inputConnections(): $Set<$PanelConnection<never>>;
    }
    export class $ConnectionExtra<T> {
    }
    export interface $ConnectionExtra<T> {
        invalidate(arg0: $Level, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionExtra}.
     */
    export type $ConnectionExtra_<T> = ((arg0: $Level, arg1: $BlockState, arg2: $BlockPos, arg3: $BlockEntity) => (T) | undefined);
    export class $PanelConnectionBuilder {
        /**
         * @deprecated
         */
        put<T>(arg0: $DeferredHolder<$PanelConnection<never>, $PanelConnection<T>>, arg1: $Supplier_<T>): $PanelConnectionBuilder;
        /**
         * @deprecated
         */
        put<T>(arg0: $PanelConnection<T>, arg1: $Supplier_<T>): $PanelConnectionBuilder;
        registerBoth<T>(arg0: $DeferredHolder<$PanelConnection<never>, $PanelConnection<T>>, arg1: $Supplier_<T>): $PanelConnectionBuilder;
        registerBoth<T>(arg0: $PanelConnection<T>, arg1: $Supplier_<T>): $PanelConnectionBuilder;
        registerOutput<T>(arg0: $PanelConnection<T>, arg1: $Supplier_<T>): $PanelConnectionBuilder;
        registerOutput<T>(arg0: $DeferredHolder<$PanelConnection<never>, $PanelConnection<T>>, arg1: $Supplier_<T>): $PanelConnectionBuilder;
        registerInput<T>(arg0: $DeferredHolder<$PanelConnection<never>, $PanelConnection<T>>): $PanelConnectionBuilder;
        registerInput<T>(arg0: $PanelConnection<T>): $PanelConnectionBuilder;
        constructor(arg0: $Map_<$PanelConnection<never>, $Supplier_<never>>, arg1: $Set_<$PanelConnection<never>>);
    }
    export class $PanelInteractionBuilder {
        register(arg0: string, arg1: $TriPredicate_<$Level, $BlockPos, $BlockState>): void;
        registerEntity(arg0: string, arg1: $Predicate_<$BlockEntity>): void;
        registerEntity(arg0: string, arg1: $BlockEntityType<never>): void;
        registerBlock(arg0: string, arg1: $Block): void;
        registerState(arg0: string, arg1: $Predicate_<$BlockState>): void;
        constructor(arg0: $Map_<string, $TriPredicate_<$Level, $BlockPos, $BlockState>>);
    }
}
