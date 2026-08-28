import { $BlockAndTintGetter, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IMergeableBE } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $InteractionResult, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $HolderGetter } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockColor } from "@package/net/minecraft/client/color/block";
import { $Rotation_, $Mirror_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $TransformableBlockEntity, $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/copycatsplus/copycats/foundation/copycat" {
    export class $ICopycatBlockEntity {
        static write(tag: $CompoundTag_, stack: $ItemStack_, material: $BlockState_, registries: $HolderLookup$Provider, enableCT: boolean): void;
        static write(self: $ICopycatBlockEntity, tag: $CompoundTag_, registries: $HolderLookup$Provider, clientPacket: boolean): void;
        static read(self: $ICopycatBlockEntity, tag: $CompoundTag_, registries: $HolderLookup$Provider, clientPacket: boolean): void;
        static writeSafe(self: $ICopycatBlockEntity, tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
    }
    export interface $ICopycatBlockEntity extends $SpecialBlockEntityItemRequirement, $TransformableBlockEntity, $PartialSafeNBT, $IMergeableBE {
        transform(blockEntity: $BlockEntity, transform: $StructureTransform): void;
        init(): void;
        accept(other: $BlockEntity): void;
        getBlock(): $ICopycatBlock;
        getLevel(): $Level;
        setLevel(arg0: $Level): void;
        onLoad(): void;
        getBlockPos(): $BlockPos;
        notifyUpdate(): void;
        getMaterial(): $BlockState;
        getBlockState(): $BlockState;
        getRequiredItems(state: $BlockState_): $ItemRequirement;
        hasCustomMaterial(): boolean;
        setMaterial(blockState: $BlockState_): void;
        setCTEnabled(value: boolean): void;
        cycleMaterial(): boolean;
        isCTEnabled(): boolean;
        getConsumedItem(): $ItemStack;
        setConsumedItem(stack: $ItemStack_): void;
        blockHolderGetter(): $HolderGetter<$Block>;
        setBlockState(arg0: $BlockState_): void;
        setCTEnabledInternal(arg0: boolean): void;
        setMaterialInternal(arg0: $BlockState_): void;
        setConsumedItemInternal(arg0: $ItemStack_): void;
        get block(): $ICopycatBlock;
        get blockPos(): $BlockPos;
        set CTEnabledInternal(value: boolean);
        set materialInternal(value: $BlockState_);
        set consumedItemInternal(value: $ItemStack_);
    }
    export class $ICopycatBlock {
        static wrappedColor(): $BlockColor;
        static getMaterial(reader: $BlockGetter, targetPos: $BlockPos_): $BlockState;
        static getRequiredItemsForLayer(state: $BlockState_, property: $IntegerProperty): $ItemRequirement;
        static getAppearance(block: $ICopycatBlock, state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, side: $Direction_, queryState: $BlockState_ | null, queryPos: $BlockPos_ | null): $BlockState;
        static hidesNeighborFace(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, neighborState: $BlockState_, dir: $Direction_): boolean;
    }
    export interface $ICopycatBlock extends $IWrenchable, $IStateType, $TransformableBlock {
        transform(state: $BlockState_, transform: $StructureTransform): $BlockState;
        rotate(pState: $BlockState_, pRot: $Rotation_): $BlockState;
        mirror(pState: $BlockState_, pMirror: $Mirror_): $BlockState;
        toggleCT(state: $BlockState_, level: $Level, pos: $BlockPos_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        onRemove(state: $BlockState_, world: $Level, pos: $BlockPos_, newState: $BlockState_, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler_): void;
        shapeCanOccludeNeighbor(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, neighborPos: $BlockPos_, dir: $Direction_): (boolean) | undefined;
        canConnectTexturesToward(reader: $BlockAndTintGetter, fromPos: $BlockPos_, toPos: $BlockPos_, fromState: $BlockState_): boolean;
        isAcceptedRegardless(material: $BlockState_): boolean;
        isIgnoredConnectivitySide(reader: $BlockAndTintGetter, fromState: $BlockState_, face: $Direction_, fromPos: $BlockPos_, toPos: $BlockPos_ | null, toState: $BlockState_ | null): boolean;
        getAcceptedBlockState(pLevel: $Level, pPos: $BlockPos_, item: $ItemStack_, face: $Direction_): $BlockState;
        getCopycatBlockEntity(worldIn: $BlockGetter, pos: $BlockPos_): $ICopycatBlockEntity;
        onWrenched(state: $BlockState_, context: $UseOnContext): $InteractionResult;
        playerWillDestroy(level: $Level, pos: $BlockPos_, state: $BlockState_, player: $Player): $BlockState;
        setPlacedBy(worldIn: $Level, pos: $BlockPos_, state: $BlockState_, placer: $LivingEntity | null, stack: $ItemStack_): void;
        onSneakWrenched(state: $BlockState_, context: $UseOnContext): $InteractionResult;
        canOcclude(level: $BlockGetter, state: $BlockState_, pos: $BlockPos_): boolean;
        prepareMaterial(pLevel: $Level, pPos: $BlockPos_, pState: $BlockState_, pPlayer: $Player, pHand: $InteractionHand_, pHit: $BlockHitResult, material: $BlockState_): $BlockState;
        canToggleCT(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_): boolean;
        isCTEnabled(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_ | null): boolean;
        checkConnection(reader: $BlockAndTintGetter, fromPos: $BlockPos_, toPos: $BlockPos_, fromState: $BlockState_): boolean;
        useItemOn(stack: $ItemStack_, state: $BlockState_, level: $Level, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        useWithoutItem(state: $BlockState_, level: $Level, pos: $BlockPos_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
    }
    export class $ICopycatBlock$OnRemoveHandler {
    }
    export interface $ICopycatBlock$OnRemoveHandler {
        handle(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $ICopycatBlock$OnRemoveHandler}.
     */
    export type $ICopycatBlock$OnRemoveHandler_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $BlockState, arg4: boolean) => void);
    /**
     * @deprecated
     */
    export class $StateType extends $Enum<$StateType> {
        static values(): $StateType[];
        static valueOf(name: string): $StateType;
        static getTypeFromBlock(block: $Block): $StateType;
        static SINGULAR: $StateType;
        static MULTI: $StateType;
    }
    /**
     * Values that may be interpreted as {@link $StateType}.
     */
    export type $StateType_ = "singular" | "multi";
    /**
     * @deprecated
     */
    export class $IStateType {
    }
    export interface $IStateType {
        stateType(): $StateType;
    }
}
