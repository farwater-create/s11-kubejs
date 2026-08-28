import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID, $List, $EnumSet, $UUID_, $List_, $Map } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $BehaviourType, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IHaveBigOutline, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $BakedModelWrapperWithData } from "@package/com/simibubi/create/foundation/model";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple, $IntAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $DyeColor_, $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties, $DyeColor } from "@package/net/minecraft/world/item";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $InventorySummary } from "@package/com/simibubi/create/content/logistics/packager";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $AutoRequestData } from "@package/com/simibubi/create/content/logistics/redstoneRequester";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/tableCloth" {
    export class $TableClothFilterSlot extends $ValueBoxTransform {
    }
    export class $TableClothModel extends $BakedModelWrapperWithData {
        static reload(): void;
        constructor(arg0: $BakedModel);
    }
    export class $ShopUpdatePacket extends $BlockEntityDataPacket<$TableClothBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShopUpdatePacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $BlueprintOverlayShopContext extends $Record {
        checkout(): boolean;
        purchases(): number;
        stockLevel(): number;
        constructor(checkout: boolean, stockLevel: number, purchases: number);
    }
    /**
     * Values that may be interpreted as {@link $BlueprintOverlayShopContext}.
     */
    export type $BlueprintOverlayShopContext_ = { purchases?: number, checkout?: boolean, stockLevel?: number,  } | [purchases?: number, checkout?: boolean, stockLevel?: number, ];
    export class $TableClothModel$CullData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $TableClothModel$CullData}.
     */
    export type $TableClothModel$CullData_ = { culled?: $EnumSet<$Direction_>,  } | [culled?: $EnumSet<$Direction_>, ];
    export class $ShoppingListItem$ShoppingList$Mutable {
        toImmutable(): $ShoppingListItem$ShoppingList;
        addPurchases(arg0: $BlockPos_, arg1: number): void;
        constructor(arg0: $ShoppingListItem$ShoppingList_);
    }
    export class $TableClothRenderer extends $SmartBlockEntityRenderer<$TableClothBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ShoppingListItem extends $Item {
        static getAddress(arg0: $ItemStack_): string;
        static getList(arg0: $ItemStack_): $ShoppingListItem$ShoppingList;
        static saveList(arg0: $ItemStack_, arg1: $ShoppingListItem$ShoppingList_, arg2: string): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $TableClothBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
    }
    export class $TableClothBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block, arg1: $Item$Properties);
    }
    export class $TableClothBlock extends $Block implements $IHaveBigOutline, $IWrenchable, $IBE<$TableClothBlockEntity> {
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntityClass(): $Class<$TableClothBlockEntity>;
        getColor(): $DyeColor;
        getBlockEntityType(): $BlockEntityType<$TableClothBlockEntity>;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TableClothBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TableClothBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TableClothBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TableClothBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TableClothBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static HAS_BE: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $DyeColor_);
        constructor(arg0: $BlockBehaviour$Properties, arg1: string);
        get blockEntityClass(): $Class<$TableClothBlockEntity>;
        get color(): $DyeColor;
        get blockEntityType(): $BlockEntityType<$TableClothBlockEntity>;
    }
    export class $ShoppingListItem$ShoppingList extends $Record {
        duplicate(): $ShoppingListItem$ShoppingList;
        getPurchases(arg0: $BlockPos_): number;
        shopNetwork(): $UUID;
        bakeEntries(arg0: $LevelAccessor, arg1: $BlockPos_): $Couple<$InventorySummary>;
        shopOwner(): $UUID;
        purchases(): $List<$IntAttached<$BlockPos>>;
        static CODEC: $Codec<$ShoppingListItem$ShoppingList>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShoppingListItem$ShoppingList>;
        constructor(purchases: $List_<$IntAttached<$BlockPos_>>, shopOwner: $UUID_, shopNetwork: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $ShoppingListItem$ShoppingList}.
     */
    export type $ShoppingListItem$ShoppingList_ = { purchases?: $List_<$IntAttached<$BlockPos_>>, shopOwner?: $UUID_, shopNetwork?: $UUID_,  } | [purchases?: $List_<$IntAttached<$BlockPos_>>, shopOwner?: $UUID_, shopNetwork?: $UUID_, ];
    export class $TableClothOverlayRenderer {
        static tick(): void;
        constructor();
    }
    export class $TableClothFilteringBehaviour extends $FilteringBehaviour {
        upTo: boolean;
        blockEntity: $SmartBlockEntity;
        count: number;
        customLabel: $MutableComponent;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        constructor(arg0: $TableClothBlockEntity);
    }
    export class $TableClothBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        use(arg0: $Player, arg1: $BlockHitResult): $ItemInteractionResult;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getPaymentAmount(): number;
        targetsPriceTag(arg0: $Player, arg1: $BlockHitResult): boolean;
        getPaymentItem(): $ItemStack;
        getItemsForRender(): $List<$ItemStack>;
        isShop(): boolean;
        notifyShopUpdate(): void;
        useShop(arg0: $Player): $ItemInteractionResult;
        invalidateItemsForRender(): void;
        getStockLevelForTrade(arg0: $ShoppingListItem$ShoppingList_): number;
        owner: $UUID;
        level: $Level;
        manuallyAddedItems: $List<$ItemStack>;
        priceTag: $FilteringBehaviour;
        facing: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        sideOccluded: boolean;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        worldPosition: $BlockPos;
        hasComparators: number;
        requestData: $AutoRequestData;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get paymentAmount(): number;
        get paymentItem(): $ItemStack;
        get itemsForRender(): $List<$ItemStack>;
        get shop(): boolean;
    }
}
