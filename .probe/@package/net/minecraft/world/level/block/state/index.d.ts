import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $CustomBlockState, $CustomBlock } from "@package/com/moulberry/axiom/custom_blocks";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$3 } from "@package/com/github/alexthe666/citadel/mixin";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Rotation_, $Block_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $PhysicsBlockPropertiesDefinition_, $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $AbstractBlockSettingsAccessor, $AbstractBlockAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Map, $Map$Entry, $List, $Map_, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ShapeUpdateHandlingBlockBehaviour } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $IState } from "@package/com/ishland/c2me/base/mixin/access";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockBehaviourInvoker } from "@package/org/embeddedt/modernfix/common/mixin/perf/reduce_blockstate_cache_rebuilds";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1 } from "@package/com/yungnickyoung/minecraft/bettermineshafts/mixin";
import { $FluidState, $PushReaction_, $PushReaction, $MapColor, $Fluid } from "@package/net/minecraft/world/level/material";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $Pattern } from "@package/java/util/regex";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $IBlockState } from "@package/org/embeddedt/modernfix/duck";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$2 } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        getProperty(propertyName: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getOwner(): O;
        any(): S;
        getPossibleStates(): $ImmutableList<S>;
        static appendPropertyCodec<S extends $StateHolder<never, S>, T extends $Comparable<T>>(propertyCodec: $MapCodec<S>, holderSupplier: $Supplier_<S>, value: string, property: $Property<T>): $MapCodec<S>;
        static NAME_PATTERN: $Pattern;
        constructor(stateValueFunction: $Function_<O, S>, owner: O, valueFunction: $StateDefinition$Factory_<O, S>, propertiesByName: $Map_<string, $Property<never>>);
        get properties(): $Collection<$Property<never>>;
        get owner(): O;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
        getCollisionShape(): $VoxelShape;
        isFaceSturdy(direction: $Direction_, supportType: $SupportType_): boolean;
        setOcclusionShapes(arg0: $VoxelShape[]): void;
        setFaceSturdy(arg0: boolean[]): void;
        getOcclusionShapes(): $VoxelShape[];
        getFaceSturdy(): boolean[];
        setCollisionShape(arg0: $VoxelShape): void;
        largeCollisionShape: boolean;
        lightBlock: number;
        isCollisionShapeFullBlock: boolean;
        collisionShape: $VoxelShape;
        solidRender: boolean;
        occlusionShapes: $VoxelShape[];
        propagatesSkylightDown: boolean;
        constructor(state: $BlockState_);
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> {
        add(...properties: $Property<never>[]): $StateDefinition$Builder<O, S>;
        create(stateValueFunction: $Function_<O, S>, stateFunction: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        properties: $Map<string, $Property<never>>;
        constructor(owner: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourInvoker, $BlockBehaviourAccessor$1, $ShapeUpdateHandlingBlockBehaviour, $AbstractBlockAccessor, $BlockBehaviourAccessor$3, $BlockBehaviourAccessor$2, $BlockBehaviourKJS, $BlockBehaviourAccessor {
        properties(): $BlockBehaviour$Properties;
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        rotate(state: $BlockState_, rotation: $Rotation_): $BlockState;
        /**
         * Return a random long to be passed to `BakedModel#getQuads`, used for random model rotations
         */
        getSeed(state: $BlockState_, pos: $BlockPos_): number;
        /**
         * Returns the blockstate with the given mirror of the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        mirror(state: $BlockState_, mirror: $Mirror_): $BlockState;
        getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        setIsRandomlyTicking(arg0: boolean): void;
        getMaxHorizontalOffset(): number;
        setExplosionResistance(arg0: number): void;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        getMaxVerticalOffset(): number;
        isOcclusionShapeFullBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        codec(): $MapCodec<$Block>;
        /**
         * Performs a random tick on a block.
         */
        tick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        onRemove(state: $BlockState_, level: $Level, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        requiredFeatures(): $FeatureFlagSet;
        getFluidState(state: $BlockState_): $FluidState;
        getLootTable(): $ResourceKey<$LootTable>;
        /**
         * @deprecated
         */
        getSoundType(state: $BlockState_): $SoundType;
        getCollisionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        entityInside(state: $BlockState_, level: $Level, pos: $BlockPos_, entity: $Entity): void;
        onExplosionHit(state: $BlockState_, level: $Level, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        /**
         * The type of render function called. MODEL for mixed tesr and static model, MODELBLOCK_ANIMATED for TESR-only, LIQUID for vanilla liquids, INVISIBLE to skip all rendering
         */
        getRenderShape(state: $BlockState_): $RenderShape;
        propagatesSkylightDown(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        useShapeForLightOcclusion(state: $BlockState_): boolean;
        getBlockSupportShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        hasAnalogOutputSignal(state: $BlockState_): boolean;
        /**
         * Returns the analog signal this block emits. This is the signal a comparator can read from it.
         */
        getAnalogOutputSignal(state: $BlockState_, level: $Level, pos: $BlockPos_): number;
        getInteractionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        setHasCollision(arg0: boolean): void;
        asBlock(): $Block;
        canSurvive(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        asItem(): $Item;
        static simpleCodec<B extends $Block>(factory: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        setSoundType(arg0: $SoundType_): void;
        setSpeedFactor(arg0: number): void;
        defaultMapColor(): $MapColor;
        setFriction(arg0: number): void;
        setJumpFactor(arg0: number): void;
        defaultDestroyTime(): number;
        /**
         * Returns the direct signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        onPlace(state: $BlockState_, level: $Level, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        /**
         * Performs a random tick on a block.
         */
        randomTick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getDrops(state: $BlockState_, params: $LootParams$Builder): $List<$ItemStack>;
        isCollisionShapeFullBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        isAir(state: $BlockState_): boolean;
        attack(state: $BlockState_, level: $Level, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, state: $BlockState_, level: $Level, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        /**
         * Called on server when `Level#blockEvent` is called. If server returns true, then also called on the client. On the Server, this may perform additional changes to the world, like pistons replacing the block with an extended base. On the client, the update may involve replacing block entities or effects such as sounds or particles
         */
        triggerEvent(state: $BlockState_, level: $Level, pos: $BlockPos_, id: number, param: number): boolean;
        isRandomlyTicking(state: $BlockState_): boolean;
        /**
         * Get the hardness of this Block relative to the ability of the given player
         */
        getDestroyProgress(state: $BlockState_, player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        /**
         * Perform side-effects from block dropping, such as creating silverfish
         */
        spawnAfterBreak(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        canBeReplaced(state: $BlockState_, useContext: $BlockPlaceContext): boolean;
        canBeReplaced(state: $BlockState_, fluid: $Fluid): boolean;
        skipRendering(state: $BlockState_, adjacentState: $BlockState_, direction: $Direction_): boolean;
        getMenuProvider(state: $BlockState_, level: $Level, pos: $BlockPos_): $MenuProvider;
        onProjectileHit(level: $Level, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        getLightBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        isSignalSource(state: $BlockState_): boolean;
        getShadeBrightness(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        getOcclusionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        /**
         * Returns the direct signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        neighborChanged(state: $BlockState_, level: $Level, pos: $BlockPos_, neighborBlock: $Block, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        useWithoutItem(state: $BlockState_, level: $Level, pos: $BlockPos_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        /**
         * Update the provided state given the provided neighbor direction and neighbor state, returning a new state.
         * For example, fences make their connections to the passed in state if possible, and wet concrete powder immediately returns its solidified counterpart.
         * Note that this method should ideally consider only the specific direction passed in.
         */
        updateShape(state: $BlockState_, direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        isPathfindable(state: $BlockState_, pathComputationType: $PathComputationType_): boolean;
        getVisualShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        updateIndirectNeighbourShapes(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number): void;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        lithium$handleShapeUpdate(arg0: $LevelReader, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockState_): void;
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
        getProperties(): $BlockBehaviour$Properties;
        invokeIsRandomlyTicking(arg0: $BlockState_): boolean;
        invokeGetFluidState(arg0: $BlockState_): $FluidState;
        getHasCollision(): boolean;
        callCanSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        citadel_canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        explosionResistance: number;
        drops: $ResourceKey<$LootTable>;
        dynamicShape: boolean;
        static UPDATE_SHAPE_ORDER: $Direction[];
        speedFactor: number;
        hasCollision: boolean;
        soundType: $SoundType;
        friction: number;
        jumpFactor: number;
        constructor(properties: $BlockBehaviour$Properties);
        get maxHorizontalOffset(): number;
        set randomTickCallback(value: $Consumer_<any>);
        get maxVerticalOffset(): number;
        get lootTable(): $ResourceKey<$LootTable>;
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
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateExtension, $CustomBlockState {
        getProperty(property: $Property<any>): $Comparable<any>;
        getCustomBlock(): $CustomBlock;
        sable$loadProperties(arg0: $StateDefinition<any, any>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        getVanillaState(): $BlockState;
        axiomHasProperty(property: $Property<any>): boolean;
        sable$getProperty(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<any>): $Object;
        setPropertyUnsafe(property: $Property<any>, value: $Comparable_<any>): $CustomBlockState;
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        isScaffolding(arg0: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        addRunningEffects(arg0: $Level, arg1: $BlockPos_, arg2: $Entity): boolean;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        hasDynamicLightEmission(): boolean;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onDestroyedByPushReaction(arg0: $Level, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        onDestroyedByPlayer(arg0: $Level, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        supportsExternalFaceHiding(): boolean;
        handler$zhg000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        isStickyBlock(): boolean;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getRespawnPosition(arg0: $EntityType<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        isSlimeBlock(): boolean;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        onCaughtFire(arg0: $Level, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        onBlockExploded(arg0: $Level, arg1: $BlockPos_, arg2: $Explosion): void;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static CODEC: $Codec<$BlockState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(arg0: $Block, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec<$BlockState_>);
        get customBlock(): $CustomBlock;
        get vanillaState(): $BlockState;
        get empty(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
        get stickyBlock(): boolean;
        get slimeBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(owner: O, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $IBlockState, $BlockStateKJS {
        is(block: $ResourceKey_<$Block>): boolean;
        is(block: $Block): boolean;
        is(block: $Holder_<$Block>): boolean;
        is(tag: $TagKey_<$Block>, predicate: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        is(holder: $HolderSet_<$Block>): boolean;
        is(tag: $TagKey_<$Block>): boolean;
        getOffset(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        /**
         * @deprecated
         * @return the blockstate with the given rotation. If inapplicable, returns itself.
         */
        rotate(rotation: $Rotation_): $BlockState;
        getBlock(): $Block;
        getSeed(pos: $BlockPos_): number;
        /**
         * @return the blockstate mirrored in the given way. If inapplicable, returns itself.
         */
        mirror(mirror: $Mirror_): $BlockState;
        getShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        clearCache(): void;
        initCache(): void;
        instrument(): $NoteBlockInstrument;
        modifyReturnValue$bim000$supplementaries$supp$modifyPlanterOffset(arg0: $Vec3_, arg1: $BlockGetter, arg2: $BlockPos_): $Vec3;
        tick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        onRemove(level: $Level, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        getFluidState(): $FluidState;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        entityInside(level: $Level, pos: $BlockPos_, entity: $Entity): void;
        onExplosionHit(level: $Level, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        isSuffocating(level: $BlockGetter, pos: $BlockPos_): boolean;
        getRenderShape(): $RenderShape;
        hasBlockEntity(): boolean;
        getTags(): $Stream<$TagKey<$Block>>;
        getPistonPushReaction(): $PushReaction;
        isRedstoneConductor(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasLargeCollisionShape(): boolean;
        getFaceOcclusionShape(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): $VoxelShape;
        propagatesSkylightDown(level: $BlockGetter, pos: $BlockPos_): boolean;
        useShapeForLightOcclusion(): boolean;
        getBlockSupportShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        hasAnalogOutputSignal(): boolean;
        getAnalogOutputSignal(level: $Level, pos: $BlockPos_): number;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        setLightEmission(arg0: number): void;
        setDestroySpeed(arg0: number): void;
        setRequiresTool(arg0: boolean): void;
        /**
         * @return true if the collision box of this state covers the entire upper face of the blockspace
         */
        entityCanStandOnFace(level: $BlockGetter, pos: $BlockPos_, entity: $Entity, face: $Direction_): boolean;
        handleNeighborChanged(level: $Level, pos: $BlockPos_, block: $Block, fromPos: $BlockPos_, isMoving: boolean): void;
        getInteractionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        canSurvive(level: $LevelReader, pos: $BlockPos_): boolean;
        handler$dlc000$immersiveengineering$onBlockCollision(arg0: $Level, arg1: $BlockPos_, arg2: $Entity, arg3: $CallbackInfo): void;
        asState(): $BlockState;
        /**
         * @deprecated
         */
        liquid(): boolean;
        canOcclude(): boolean;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        getSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        onPlace(level: $Level, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        randomTick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getDrops(lootParams: $LootParams$Builder): $List<$ItemStack>;
        getTicker<T extends $BlockEntity>(level: $Level, blockEntityType: $BlockEntityType<T>): $BlockEntityTicker<T>;
        isCollisionShapeFullBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        isAir(): boolean;
        attack(level: $Level, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, level: $Level, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        modifyReturnValue$jko001$axiom$getShape(shape: $VoxelShape, context: $CollisionContext): $VoxelShape;
        handler$jko000$axiom$updateShapeHead(direction: $Direction_, blockState: $BlockState_, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockPos2: $BlockPos_, cir: $CallbackInfoReturnable<any>): void;
        handler$jej000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        handler$jko000$axiom$useWithoutItemHead(level: $Level, player: $Player, res: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$jko000$axiom$useWithoutItemReturn(level: $Level, player: $Player, res: $BlockHitResult, cir: $CallbackInfoReturnable<any>): void;
        handler$jko000$axiom$updateShapeRet(direction: $Direction_, blockState: $BlockState_, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockPos2: $BlockPos_, cir: $CallbackInfoReturnable<any>): void;
        handler$jej000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        getDestroySpeed(level: $BlockGetter, pos: $BlockPos_): number;
        triggerEvent(level: $Level, pos: $BlockPos_, id: number, param: number): boolean;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        hasOffsetFunction(): boolean;
        isRandomlyTicking(): boolean;
        getBlockHolder(): $Holder<$Block>;
        getDestroyProgress(player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        spawnAfterBreak(level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        canBeReplaced(useContext: $BlockPlaceContext): boolean;
        canBeReplaced(): boolean;
        canBeReplaced(fluid: $Fluid): boolean;
        skipRendering(state: $BlockState_, face: $Direction_): boolean;
        getMenuProvider(level: $Level, pos: $BlockPos_): $MenuProvider;
        onProjectileHit(level: $Level, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        emissiveRendering(level: $BlockGetter, pos: $BlockPos_): boolean;
        getLightBlock(level: $BlockGetter, pos: $BlockPos_): number;
        isViewBlocking(level: $BlockGetter, pos: $BlockPos_): boolean;
        getMapColor(level: $BlockGetter, pos: $BlockPos_): $MapColor;
        isSignalSource(): boolean;
        entityCanStandOn(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        isValidSpawn(level: $BlockGetter, pos: $BlockPos_, entityType: $EntityType<never>): boolean;
        getShadeBrightness(level: $BlockGetter, pos: $BlockPos_): number;
        isSolidRender(level: $BlockGetter, pos: $BlockPos_): boolean;
        getOcclusionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getDirectSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        hasPostProcess(level: $BlockGetter, pos: $BlockPos_): boolean;
        useWithoutItem(level: $Level, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        updateShape(direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        isPathfindable(arg0: $PathComputationType_): boolean;
        getVisualShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, face: $Direction_, supportType: $SupportType_): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        isCacheInvalid(): boolean;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        shouldSpawnTerrainParticles(): boolean;
        requiresCorrectToolForDrops(): boolean;
        getId(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        getKey(): $ResourceKey<$Block>;
        getWebIconURL(size: number): $RelativeURL;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        asHolder(): $Holder<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toString(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(owner: $Block, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec<$BlockState_>);
        get block(): $Block;
        get fluidState(): $FluidState;
        get soundType(): $SoundType;
        get renderShape(): $RenderShape;
        get pistonPushReaction(): $PushReaction;
        set requiresTool(value: boolean);
        get solid(): boolean;
        get air(): boolean;
        get randomlyTicking(): boolean;
        get blockHolder(): $Holder<$Block>;
        get signalSource(): boolean;
        get cacheInvalid(): boolean;
        get id(): string;
        get key(): $ResourceKey<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<$Block>>;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $AbstractBlockSettingsAccessor {
        static of(): $BlockBehaviour$Properties;
        strength(destroyTime: number): $BlockBehaviour$Properties;
        strength(destroyTime: number, explosionResistance: number): $BlockBehaviour$Properties;
        lightLevel(lightEmission: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        instrument(instrument: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        isSuffocating(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isRedstoneConductor(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        explosionResistance(destroyTime: number): $BlockBehaviour$Properties;
        friction(destroyTime: number): $BlockBehaviour$Properties;
        jumpFactor(destroyTime: number): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        speedFactor(destroyTime: number): $BlockBehaviour$Properties;
        mapColor(mapColor: $MapColor): $BlockBehaviour$Properties;
        mapColor(mapColor: $DyeColor_): $BlockBehaviour$Properties;
        mapColor(mapColor: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        sound(soundType: $SoundType_): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        emissiveRendering(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isViewBlocking(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        pushReaction(pushReaction: $PushReaction_): $BlockBehaviour$Properties;
        isValidSpawn(isValidSpawn: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        destroyTime(destroyTime: number): $BlockBehaviour$Properties;
        hasPostProcess(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(block: $Block): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        offsetType(offsetType: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        getLiquid(): boolean;
        isRequiresCorrectToolForDrops(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        getIgnitedByLava(): boolean;
        getInstrument(): $NoteBlockInstrument;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        setHasCollision(arg0: boolean): void;
        setDynamicShape(arg0: boolean): void;
        getReplaceable(): boolean;
        getForceSolidOn(): boolean;
        setReplaceable(arg0: boolean): void;
        getPushReaction(): $PushReaction;
        setForceSolidOn(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        getDestroyTime(): number;
        getForceSolidOff(): boolean;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        setIgnitedByLava(arg0: boolean): void;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        setForceSolidOff(arg0: boolean): void;
        getCanOcclude(): boolean;
        getDynamicShape(): boolean;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        getSoundType(): $SoundType;
        getFriction(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getExplosionResistance(): number;
        getRequiredFeatures(): $FeatureFlagSet;
        setIsRandomlyTicking(arg0: boolean): void;
        getIsRandomlyTicking(): boolean;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getSpawnTerrainParticles(): boolean;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        getHasCollision(): boolean;
        getDrops(): $ResourceKey<$LootTable>;
        getMapColor(): $Function<$BlockState, $MapColor>;
        setIsAir(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        getIsAir(): boolean;
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
        get luminance(): $ToIntFunction<$BlockState>;
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, value: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor<any, any>, $FastMapStateHolder<any>, $IState<any> {
        /**
         * @return the value of the given Property for this state
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * @return an unmodifiable collection of all possible properties.
         */
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        cycle<T extends $Comparable<T>>(property: $Property<T>): $Object;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        static codec<O, S extends $StateHolder<O, S>>(propertyMap: $Codec<O>, holderFunction: $Function_<O, S>): $Codec<S>;
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        static findNextInCollection<T>(collection: $Collection_<T>, value: T): T;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        redirect$jef000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        setStateMap(arg0: $FastMap<any>): void;
        getNeighborTable(): $Table<any, any, any>;
        getStateMap(): $FastMap<any>;
        setStateIndex(arg0: number): void;
        trySetValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        getStateIndex(): number;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        populateNeighbours(possibleStateMap: $Map_<any, any>): void;
        getOwner(): $Object;
        getCodec(): $MapCodec<$Object>;
        static PROPERTIES_TAG: string;
        owner: $Object;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$Object>;
        constructor(owner: $Object, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec<$Object>);
        get properties(): $Collection<$Property<never>>;
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
    }
}
