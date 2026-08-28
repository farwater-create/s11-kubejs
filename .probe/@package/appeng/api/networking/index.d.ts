import { $GridEvent } from "@package/appeng/api/networking/events";
import { $IEnergyService } from "@package/appeng/api/networking/energy";
import { $Level, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISpatialService } from "@package/appeng/api/networking/spatial";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $IPathingService } from "@package/appeng/api/networking/pathing";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $Set, $Set_ } from "@package/java/util";
import { $ICraftingService } from "@package/appeng/api/networking/crafting";
import { $AEItemKey } from "@package/appeng/api/stacks";
import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $ITickManager } from "@package/appeng/api/networking/ticking";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Object, $Iterable, $Class } from "@package/java/lang";
import { $JsonWriter } from "@package/com/google/gson/stream";
export * as crafting from "@package/appeng/api/networking/crafting";
export * as energy from "@package/appeng/api/networking/energy";
export * as storage from "@package/appeng/api/networking/storage";
export * as security from "@package/appeng/api/networking/security";
export * as pathing from "@package/appeng/api/networking/pathing";
export * as spatial from "@package/appeng/api/networking/spatial";
export * as events from "@package/appeng/api/networking/events";
export * as ticking from "@package/appeng/api/networking/ticking";

declare module "@package/appeng/api/networking" {
    export class $IManagedGridNode {
    }
    export interface $IManagedGridNode {
        destroy(): void;
        create(arg0: $Level, arg1: $BlockPos_): void;
        isActive(): boolean;
        getNode(): $IGridNode;
        ifPresent(arg0: $Consumer_<$IGrid>): boolean;
        ifPresent(arg0: $BiConsumer_<$IGrid, $IGridNode>): boolean;
        setFlags(...arg0: $GridFlags_[]): $IManagedGridNode;
        saveToNBT(arg0: $CompoundTag_): void;
        isPowered(): boolean;
        setVisualRepresentation(arg0: $ItemLike_): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemStack_): $IManagedGridNode;
        setVisualRepresentation(arg0: $AEItemKey): $IManagedGridNode;
        addService<T extends $IGridNodeService>(arg0: $Class<T>, arg1: T): $IManagedGridNode;
        loadFromNBT(arg0: $CompoundTag_): void;
        setOwningPlayer(arg0: $Player): void;
        hasGridBooted(): boolean;
        setIdlePowerUsage(arg0: number): $IManagedGridNode;
        setExposedOnSides(arg0: $Set_<$Direction_>): $IManagedGridNode;
        setInWorldNode(arg0: boolean): $IManagedGridNode;
        isReady(): boolean;
        isOnline(): boolean;
        getGrid(): $IGrid;
        setTagName(arg0: string): $IManagedGridNode;
        setGridColor(arg0: $AEColor_): $IManagedGridNode;
        setOwningPlayerId(arg0: number): void;
        get active(): boolean;
        get node(): $IGridNode;
        set flags(value: $GridFlags_[]);
        get powered(): boolean;
        set owningPlayer(value: $Player);
        set idlePowerUsage(value: number);
        set exposedOnSides(value: $Set_<$Direction_>);
        set inWorldNode(value: boolean);
        get ready(): boolean;
        get online(): boolean;
        get grid(): $IGrid;
        set tagName(value: string);
        set gridColor(value: $AEColor_);
        set owningPlayerId(value: number);
    }
    export class $IGridNode {
    }
    export interface $IGridNode {
        isActive(): boolean;
        getOwner(): $Object;
        getService<T extends $IGridNodeService>(arg0: $Class<T>): T;
        getLevel(): $ServerLevel;
        getVisualRepresentation(): $AEItemKey;
        meetsChannelRequirements(): boolean;
        getOwningPlayerProfileId(): $UUID;
        getInWorldConnections(): $Map<$Direction, $IGridConnection>;
        isPowered(): boolean;
        getConnections(): $List<$IGridConnection>;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        hasFlag(arg0: $GridFlags_): boolean;
        getOwningPlayerId(): number;
        getMaxChannels(): number;
        hasGridBooted(): boolean;
        getUsedChannels(): number;
        getGridColor(): $AEColor;
        getConnectedSides(): $Set<$Direction>;
        getIdlePowerUsage(): number;
        isOnline(): boolean;
        beginVisit(arg0: $IGridVisitor_): void;
        getGrid(): $IGrid;
        get active(): boolean;
        get owner(): $Object;
        get level(): $ServerLevel;
        get visualRepresentation(): $AEItemKey;
        get owningPlayerProfileId(): $UUID;
        get inWorldConnections(): $Map<$Direction, $IGridConnection>;
        get powered(): boolean;
        get connections(): $List<$IGridConnection>;
        get owningPlayerId(): number;
        get maxChannels(): number;
        get usedChannels(): number;
        get gridColor(): $AEColor;
        get connectedSides(): $Set<$Direction>;
        get idlePowerUsage(): number;
        get online(): boolean;
        get grid(): $IGrid;
    }
    export class $IGridVisitor {
    }
    export interface $IGridVisitor {
        visitNode(arg0: $IGridNode): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IGridVisitor}.
     */
    export type $IGridVisitor_ = ((arg0: $IGridNode) => boolean);
    export class $IGridService {
    }
    export interface $IGridService {
    }
    export class $IGrid {
    }
    export interface $IGrid {
        size(): number;
        isEmpty(): boolean;
        getService<C extends $IGridService>(arg0: $Class<C>): C;
        "export"(arg0: $JsonWriter): void;
        getPivot(): $IGridNode;
        getNodes(): $Iterable<$IGridNode>;
        getMachines<T>(arg0: $Class<T>): $Set<T>;
        getMachineNodes(arg0: $Class<never>): $Iterable<$IGridNode>;
        getActiveMachines<T>(arg0: $Class<T>): $Set<T>;
        getStorageService(): $IStorageService;
        getCraftingService(): $ICraftingService;
        getTickManager(): $ITickManager;
        getSpatialService(): $ISpatialService;
        getMachineClasses(): $Iterable<$Class<never>>;
        getPathingService(): $IPathingService;
        getEnergyService(): $IEnergyService;
        postEvent<T extends $GridEvent>(arg0: T): T;
        get empty(): boolean;
        get pivot(): $IGridNode;
        get nodes(): $Iterable<$IGridNode>;
        get storageService(): $IStorageService;
        get craftingService(): $ICraftingService;
        get tickManager(): $ITickManager;
        get spatialService(): $ISpatialService;
        get machineClasses(): $Iterable<$Class<never>>;
        get pathingService(): $IPathingService;
        get energyService(): $IEnergyService;
    }
    export class $IGridNodeService {
    }
    export interface $IGridNodeService {
    }
    export class $IGridConnection {
    }
    export interface $IGridConnection {
        b(): $IGridNode;
        a(): $IGridNode;
        destroy(): void;
        isInWorld(): boolean;
        getDirection(arg0: $IGridNode): $Direction;
        getUsedChannels(): number;
        getOtherSide(arg0: $IGridNode): $IGridNode;
        get inWorld(): boolean;
        get usedChannels(): number;
    }
    export class $GridFlags extends $Enum<$GridFlags> {
        static values(): $GridFlags[];
        static valueOf(arg0: string): $GridFlags;
        static COMPRESSED_CHANNEL: $GridFlags;
        static CANNOT_CARRY_COMPRESSED: $GridFlags;
        static CANNOT_CARRY: $GridFlags;
        static DENSE_CAPACITY: $GridFlags;
        static PREFERRED: $GridFlags;
        static MULTIBLOCK: $GridFlags;
        static REQUIRE_CHANNEL: $GridFlags;
    }
    /**
     * Values that may be interpreted as {@link $GridFlags}.
     */
    export type $GridFlags_ = "require_channel" | "compressed_channel" | "cannot_carry" | "cannot_carry_compressed" | "dense_capacity" | "multiblock" | "preferred";
}
