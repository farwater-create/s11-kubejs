import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $GenericRequestPromise } from "@package/net/liukrast/deployer/lib/logistics/packagerLink";
import { $GenericPackageOrderData } from "@package/net/liukrast/deployer/lib/logistics";
import { $Codec } from "@package/com/mojang/serialization";
import { $List, $UUID_, $List_, $Map } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $RandomSource } from "@package/net/minecraft/util";
import { $FilterItemStack } from "@package/com/simibubi/create/content/logistics/filter";
import { $Function_, $Predicate_, $BiFunction_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Record, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $PackagerBlockEntity, $PackagerItemHandler } from "@package/com/simibubi/create/content/logistics/packager";
import { $InventoryIdentifier, $InventoryIdentifier_ } from "@package/com/simibubi/create/api/packager";
import { $CapManipulationBehaviourBase } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $GenericOrderContained_, $GenericOrder, $GenericOrderContained } from "@package/net/liukrast/deployer/lib/logistics/stockTicker";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MutableInt, $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";
export * as screen from "@package/net/liukrast/deployer/lib/logistics/packager/screen";

declare module "@package/net/liukrast/deployer/lib/logistics/packager" {
    export class $AbstractInventorySummary<K, V> {
        getStacks(): $List<V>;
        isEmpty(): boolean;
        add(arg0: $AbstractInventorySummary<K, V>): void;
        add(arg0: V): void;
        add(arg0: V, arg1: number): void;
        copy(): $AbstractInventorySummary<K, V>;
        copy(arg0: V): V;
        erase(arg0: V): boolean;
        isSameKeySameComponents(arg0: V, arg1: V): boolean;
        getTotalCount(): number;
        getCountOf(arg0: V): number;
        getItemMap(): $Map<K, $List<V>>;
        setCount(arg0: V, arg1: number): void;
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        getStacksByCount(): $List<V>;
        keyFrom(arg0: V): K;
        addAllStacks(arg0: $List_<V>): void;
        getTotalOfMatching(arg0: $Predicate_<V>): number;
        contributingLinks: number;
        constructor(arg0: $StockInventoryType<K, V, never>);
        get stacks(): $List<V>;
        get empty(): boolean;
        get totalCount(): number;
        get itemMap(): $Map<K, $List<V>>;
        get stacksByCount(): $List<V>;
    }
    export class $GenericRepackageHelper {
        clear(): void;
        isFragmented(arg0: $ItemStack_): boolean;
        addPackageFragment(arg0: $ItemStack_): number;
        repack<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: number, arg2: $RandomSource): $List<$BigItemStack>;
        constructor();
    }
    export class $GenericPackagingRequest<V> extends $Record {
        context(): $GenericOrderContained<V>;
        isEmpty(): boolean;
        count(): $MutableInt;
        getCount(): number;
        static create<V>(arg0: V, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: number, arg7: $GenericOrderContained_<V> | null): $GenericPackagingRequest<V>;
        address(): string;
        item(): V;
        subtract(arg0: number): void;
        packageCounter(): $MutableInt;
        orderId(): number;
        linkIndex(): number;
        finalLink(): $MutableBoolean;
        constructor(item: V, count: $MutableInt, address: string, linkIndex: number, finalLink: $MutableBoolean, packageCounter: $MutableInt, orderId: number, context: $GenericOrderContained_<V> | null);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GenericPackagingRequest}.
     */
    export type $GenericPackagingRequest_<V> = { orderId?: number, count?: $MutableInt, context?: $GenericOrderContained_<any>, finalLink?: $MutableBoolean, item?: any, address?: string, packageCounter?: $MutableInt, linkIndex?: number,  } | [orderId?: number, count?: $MutableInt, context?: $GenericOrderContained_<any>, finalLink?: $MutableBoolean, item?: any, address?: string, packageCounter?: $MutableInt, linkIndex?: number, ];
    export class $StockInventoryType$IStorageHandler<K, V, H> {
    }
    export interface $StockInventoryType$IStorageHandler<K, V, H> {
        extract(arg0: H, arg1: V, arg2: boolean, arg3: $AbstractPackagerBlockEntity<K, V, H>): V;
        fill(arg0: H, arg1: V, arg2: boolean, arg3: $AbstractPackagerBlockEntity<K, V, H>): number;
        create(arg0: number): H;
        getSlots(arg0: H): number;
        maxCountPerSlot(): number;
        setInSlot(arg0: H, arg1: number, arg2: V, arg3: boolean): V;
        getStackInSlot(arg0: H, arg1: number): V;
        insertItem(arg0: H, arg1: number, arg2: V, arg3: boolean): V;
        getMaxPackageSlots(): number;
        isBulky(arg0: K): boolean;
        get maxPackageSlots(): number;
    }
    export class $AbstractPackagerBlockEntity<K, V, H> extends $PackagerBlockEntity {
        getHatchModel(arg0: boolean, arg1: $PartialModel): $PartialModel;
        getAvailableStacks(): $AbstractInventorySummary<$Object, V>;
        safeUnwrapBox(arg0: $ItemStack_, arg1: boolean): boolean;
        isValidPackage(arg0: $ItemStack_): boolean;
        createItemHandler(): $PackagerItemHandler;
        pleaseBroadcast(arg0: $UUID_, arg1: $LogisticallyLinkedBehaviour$RequestType_, arg2: $GenericOrderContained_<V>, arg3: string): boolean;
        isTargetingSameContainer(arg0: $IdentifiedContainer_<H>): boolean;
        supportsBlockEntity(arg0: $BlockEntity): boolean;
        attemptToSendSpecial(arg0: $List_<$GenericPackagingRequest_<V>>): void;
        attemptToSendSpecial(arg0: $List_<$GenericPackagingRequest_<V>>, arg1: number, arg2: boolean): void;
        getStockOf(arg0: $UUID_, arg1: V): number;
        getStockType(): $StockInventoryType<$Object, V, H>;
        targetInventory: $CapManipulationBehaviourBase<H, $CapManipulationBehaviourBase<never, never>>;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        worldPosition: $BlockPos;
        redstonePowered: boolean;
        heldBox: $ItemStack;
        signBasedAddress: string;
        hasComparators: number;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get availableStacks(): $AbstractInventorySummary<$Object, V>;
        get stockType(): $StockInventoryType<$Object, V, H>;
    }
    export class $StockInventoryType<K, V, H> {
        getBlockCapability(): $BlockCapability<H, $Direction>;
        storageHandler(): $StockInventoryType$IStorageHandler<K, V, H>;
        packageHandler(): $StockInventoryType$IPackageHandler<K, V, H>;
        valueHandler(): $StockInventoryType$IValueHandler<K, V, H>;
        networkHandler(): $StockInventoryType$INetworkHandler<K, V, H>;
        registry: $SimpleRegistry<$Block, $GenericUnpackingHandler<K, V, H>>;
        defaultUnpackProcedure: $GenericUnpackingHandler<K, V, H>;
        get blockCapability(): $BlockCapability<H, $Direction>;
    }
    export class $StockInventoryType$INetworkHandler<K, V, H> {
    }
    export interface $StockInventoryType$INetworkHandler<K, V, H> {
        empty(): $AbstractInventorySummary<K, V>;
        createSummary(): $AbstractInventorySummary<K, V>;
        requestCodec(): $Codec<$GenericRequestPromise<V>>;
        getComponent(): $DataComponentType<$GenericPackageOrderData<V>>;
        get component(): $DataComponentType<$GenericPackageOrderData<V>>;
    }
    export class $IdentifiedContainer<H> extends $Record {
        handler(): H;
        identifier(): $InventoryIdentifier;
        constructor(identifier: $InventoryIdentifier_, handler: H);
    }
    /**
     * Values that may be interpreted as {@link $IdentifiedContainer}.
     */
    export type $IdentifiedContainer_<H> = { identifier?: $InventoryIdentifier_, handler?: any,  } | [identifier?: $InventoryIdentifier_, handler?: any, ];
    export class $StockInventoryType$IPackageHandler<K, V, H> {
    }
    export interface $StockInventoryType$IPackageHandler<K, V, H> {
        getContents(arg0: $ItemStack_): H;
        setBoxContent(arg0: $ItemStack_, arg1: H): void;
        packageOrderData(): $DataComponentType<$GenericPackageOrderData<V>>;
        getRandomBox(): $ItemStack;
        setOrder(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean, arg6: $GenericOrderContained_<V>): void;
        containing(arg0: H): $ItemStack;
        appendHoverText(arg0: $ItemStack_, arg1: $Item$TooltipContext, arg2: $List_<$Component_>, arg3: $TooltipFlag, arg4: H): void;
        packageOrderContext(): $DataComponentType<$GenericOrderContained<V>>;
        get randomBox(): $ItemStack;
    }
    export class $StockInventoryType$IValueHandler<K, V, H> {
        test(arg0: $FilterItemStack, arg1: $Level, arg2: V): boolean;
        isEmpty(arg0: V): boolean;
        empty(): V;
        getCount(arg0: V): number;
        copy(arg0: V): V;
        create(arg0: K, arg1: number): V;
        fromValue(arg0: V): K;
        codec(): $Codec<V>;
        hashStrategy(): $Hash$Strategy<V>;
        orderStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder<V>>;
        createContained(arg0: $List_<V>): $GenericOrderContained<V>;
        orderCodec(): $Codec<$GenericOrder<V>>;
        setCount(arg0: V, arg1: number): void;
        shrink(arg0: V, arg1: number): void;
        orderContainedStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrderContained<V>>;
        orderContainedCodec(): $Codec<$GenericOrderContained<V>>;
        isStackable(arg0: V): boolean;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, V>;
        copyWithCount(arg0: V, arg1: number): V;
        constructor(arg0: $Codec<V>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, V>);
        constructor(arg0: $Codec<V>, arg1: $BiFunction_<$Codec<V>, $Hash$Strategy<V>, $Codec<$GenericOrder<V>>>, arg2: $TriFunction_<$Codec<$GenericOrder<V>>, $Codec<V>, $Hash$Strategy<V>, $Codec<$GenericOrderContained<V>>>, arg3: $StreamCodec<$RegistryFriendlyByteBuf, V>, arg4: $BiFunction_<$StreamCodec<$RegistryFriendlyByteBuf, V>, $Hash$Strategy<V>, $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder<V>>>, arg5: $Function_<$StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder<V>>, $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrderContained<V>>>);
    }
    export class $GenericUnpackingHandler<K, V, H> {
    }
    export interface $GenericUnpackingHandler<K, V, H> {
        unpack(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $List_<V>, arg5: $GenericOrderContained_<V> | null, arg6: boolean, arg7: $AbstractPackagerBlockEntity<K, V, H>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GenericUnpackingHandler}.
     */
    export type $GenericUnpackingHandler_<K, V, H> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Direction, arg4: $List<V>, arg5: $GenericOrderContained<V>, arg6: boolean, arg7: $AbstractPackagerBlockEntity<K, V, H>) => boolean);
}
