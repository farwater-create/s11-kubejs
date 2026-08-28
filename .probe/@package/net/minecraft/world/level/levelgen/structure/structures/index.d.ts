import { $DimensionPadding, $DimensionPadding_, $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $RegistryHolder, $MansionRoomDuck } from "@package/dev/worldgen/lithostitched/duck";
import { $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $JigsawStructureAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $MobCategory_ } from "@package/net/minecraft/world/entity";
import { $IStrongholdGenerator, $XPieceDataExtension } from "@package/com/ishland/c2me/fixes/worldgen/threading_issues/common";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map, $Set, $List, $List_ } from "@package/java/util";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $Tuple } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_, $RegistryAccess, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Enum, $Record, $Class, $ThreadLocal } from "@package/java/lang";
import { $Structure$StructureSettings_, $StructurePiece, $SinglePieceStructure, $StructurePiece$BlockSelector, $TemplateStructurePiece, $BoundingBox, $ScatteredFeaturePiece, $StructurePieceAccessor, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $ServerLevelAccessor, $LevelAccessor, $ChunkPos, $BlockGetter, $WorldGenLevel, $StructureManager } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $SpawnBoxSettings, $ISpawnBoxStructure, $SpawnBoxSettings_ } from "@package/net/mehvahdjukaar/moonlight/api/worldgen";
import { $StructureProcessor, $LiquidSettings, $StructureTemplateManager, $LiquidSettings_, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $StructurePieceType_, $PiecesContainer_, $PiecesContainer } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $Mirror_, $Block, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";

declare module "@package/net/minecraft/world/level/levelgen/structure/structures" {
    export class $IglooPieces$IglooPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, startPos: $BlockPos_, rotation: $Rotation_, down: number);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $JigsawStructure extends $Structure implements $JigsawStructureAccessor, $ISpawnBoxStructure {
        ml$setSpawnBoxSettings(arg0: $SpawnBoxSettings_): void;
        ml$getSpawnBoxSettings(): $SpawnBoxSettings;
        static verifyRange(structure: $JigsawStructure): $DataResult<$JigsawStructure>;
        ml$getSpecialSpawns(arg0: $StructureManager, arg1: $Structure, arg2: $BlockPos_, arg3: $LongSet, arg4: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        setPoolAliases(list: $List_<$PoolAliasBinding>): void;
        getPoolAliases(): $List<$PoolAliasBinding>;
        static CODEC: $MapCodec<$JigsawStructure>;
        poolAliases: $List<$PoolAliasBinding>;
        static MAX_DEPTH: number;
        liquidSettings: $LiquidSettings;
        static DIRECT_CODEC: $Codec<$Structure>;
        dimensionPadding: $DimensionPadding;
        startPool: $Holder<$StructureTemplatePool>;
        startHeight: $HeightProvider;
        static MAX_TOTAL_STRUCTURE_RANGE: number;
        maxDepth: number;
        startJigsawName: ($ResourceLocation) | undefined;
        useExpansionHack: boolean;
        projectStartToHeightmap: ($Heightmap$Types) | undefined;
        static DEFAULT_LIQUID_SETTINGS: $LiquidSettings;
        static DEFAULT_DIMENSION_PADDING: $DimensionPadding;
        static MIN_DEPTH: number;
        maxDistanceFromCenter: number;
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean);
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, startJigsawName: ($ResourceLocation_) | undefined, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean, projectStartToHeightmap: ($Heightmap$Types_) | undefined, maxDistanceFromCenter: number, poolAliases: $List_<$PoolAliasBinding>, dimensionPadding: $DimensionPadding_, liquidSettings: $LiquidSettings_);
        constructor(settings: $Structure$StructureSettings_, startPool: $Holder_<$StructureTemplatePool>, maxDepth: number, startHeight: $HeightProvider, useExpansionHack: boolean, projectStartToHeightmap: $Heightmap$Types_);
    }
    export class $OceanMonumentPieces$MonumentBuilding extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static BIOME_RANGE_CHECK: number;
        static LEFTWING_INDEX: number;
        constructor(random: $RandomSource, x: number, z: number, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$RoomDefinition {
        isSpecial(): boolean;
        updateOpenings(): void;
        setConnection(direction: $Direction_, connectingRoom: $OceanMonumentPieces$RoomDefinition): void;
        countOpenings(): number;
        findSource(index: number): boolean;
        hasOpening: boolean[];
        claimed: boolean;
        isSource: boolean;
        index: number;
        connections: $OceanMonumentPieces$RoomDefinition[];
        constructor(index: number);
        get special(): boolean;
    }
    export class $OceanMonumentPieces$FitDoubleXYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$FitSimpleTopRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanRuinPieces {
        static addPieces(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, structurePieceAccessor: $StructurePieceAccessor, random: $RandomSource, structure: $OceanRuinStructure): void;
        static WARM_SUSPICIOUS_BLOCK_PROCESSOR: $StructureProcessor;
        static COLD_SUSPICIOUS_BLOCK_PROCESSOR: $StructureProcessor;
        constructor();
    }
    export class $IglooStructure extends $Structure {
        static CODEC: $MapCodec<$IglooStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdStructure extends $Structure {
        static CODEC: $MapCodec<$StrongholdStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $OceanRuinStructure extends $Structure {
        largeProbability: number;
        clusterProbability: number;
        static CODEC: $MapCodec<$OceanRuinStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        biomeTemp: $OceanRuinStructure$Type;
        constructor(settings: $Structure$StructureSettings_, biomeTemp: $OceanRuinStructure$Type_, largeProbability: number, clusterProbability: number);
    }
    export class $JungleTemplePiece extends $ScatteredFeaturePiece {
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        static WIDTH: number;
        static DEPTH: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftStructure extends $Structure {
        static CODEC: $MapCodec<$MineshaftStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, type: $MineshaftStructure$Type_);
    }
    export class $MineshaftPieces$MineShaftPiece extends $StructurePiece {
        isInInvalidLocation(level: $LevelAccessor, boundingBox: $BoundingBox): boolean;
        setPlanksBlock(level: $WorldGenLevel, box: $BoundingBox, plankState: $BlockState_, x: number, y: number, z: number): void;
        isSupportingBox(level: $BlockGetter, box: $BoundingBox, xStart: number, xEnd: number, y: number, z: number): boolean;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        type: $MineshaftStructure$Type;
        constructor(structurePieceType: $StructurePieceType_, genDepth: number, type: $MineshaftStructure$Type_, boundingBox: $BoundingBox);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
    }
    export class $RuinedPortalStructure$Setup extends $Record {
        canBeCold(): boolean;
        weight(): number;
        replaceWithBlackstone(): boolean;
        airPocketProbability(): number;
        overgrown(): boolean;
        vines(): boolean;
        placement(): $RuinedPortalPiece$VerticalPlacement;
        mossiness(): number;
        static CODEC: $Codec<$RuinedPortalStructure$Setup>;
        constructor(arg0: $RuinedPortalPiece$VerticalPlacement_, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number);
    }
    /**
     * Values that may be interpreted as {@link $RuinedPortalStructure$Setup}.
     */
    export type $RuinedPortalStructure$Setup_ = { vines?: boolean, weight?: number, mossiness?: number, replaceWithBlackstone?: boolean, placement?: $RuinedPortalPiece$VerticalPlacement_, airPocketProbability?: number, overgrown?: boolean, canBeCold?: boolean,  } | [vines?: boolean, weight?: number, mossiness?: number, replaceWithBlackstone?: boolean, placement?: $RuinedPortalPiece$VerticalPlacement_, airPocketProbability?: number, overgrown?: boolean, canBeCold?: boolean, ];
    export class $WoodlandMansionPieces {
        static generateMansion(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, pieces: $List_<$WoodlandMansionPieces$WoodlandMansionPiece>, random: $RandomSource): void;
        constructor();
    }
    export class $StrongholdPieces$FillerCorridor extends $StrongholdPieces$StrongholdPiece {
        static findPieceBox(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$FitSimpleRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $WoodlandMansionPieces$PlacementData {
        rotation: $Rotation;
        wallType: string;
        position: $BlockPos;
        constructor();
    }
    export class $MineshaftStructure$Type extends $Enum<$MineshaftStructure$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $MineshaftStructure$Type[];
        static valueOf(arg0: string): $MineshaftStructure$Type;
        getSerializedName(): string;
        getPlanksState(): $BlockState;
        getWoodState(): $BlockState;
        getFenceState(): $BlockState;
        static byId(id: number): $MineshaftStructure$Type;
        getRemappedEnumConstantName(): string;
        static MESA: $MineshaftStructure$Type;
        static CODEC: $Codec<$MineshaftStructure$Type>;
        static NORMAL: $MineshaftStructure$Type;
        get serializedName(): string;
        get planksState(): $BlockState;
        get woodState(): $BlockState;
        get fenceState(): $BlockState;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MineshaftStructure$Type}.
     */
    export type $MineshaftStructure$Type_ = "normal" | "mesa";
    export class $NetherFortressPieces$BridgeStraight extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeStraight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$BridgeCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(tag: $CompoundTag_);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
        constructor(x: number, z: number, orientation: $Direction_);
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
    }
    export class $EndCityPieces {
        static startHouseTower(structureTemplateManager: $StructureTemplateManager, startPos: $BlockPos_, rotation: $Rotation_, pieces: $List_<$StructurePiece>, random: $RandomSource): void;
        static addPiece(structureTemplateManager: $StructureTemplateManager, piece: $EndCityPieces$EndCityPiece, startPos: $BlockPos_, name: string, rotation: $Rotation_, overwrite: boolean): $EndCityPieces$EndCityPiece;
        static recursiveChildren(structureTemplateManager: $StructureTemplateManager, sectionGenerator: $EndCityPieces$SectionGenerator, counter: number, piece: $EndCityPieces$EndCityPiece, startPos: $BlockPos_, pieces: $List_<$StructurePiece>, random: $RandomSource): boolean;
        static addHelper(pieces: $List_<$StructurePiece>, piece: $EndCityPieces$EndCityPiece): $EndCityPieces$EndCityPiece;
        static TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static HOUSE_TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static TOWER_BRIDGE_GENERATOR: $EndCityPieces$SectionGenerator;
        static TOWER_BRIDGES: $List<$Tuple<$Rotation, $BlockPos>>;
        static FAT_TOWER_GENERATOR: $EndCityPieces$SectionGenerator;
        static FAT_TOWER_BRIDGES: $List<$Tuple<$Rotation, $BlockPos>>;
        constructor();
    }
    export class $RuinedPortalPiece$Properties {
        overgrown: boolean;
        static CODEC: $Codec<$RuinedPortalPiece$Properties>;
        replaceWithBlackstone: boolean;
        mossiness: number;
        vines: boolean;
        cold: boolean;
        airPocket: boolean;
        constructor();
        constructor(cold: boolean, mossiness: number, airPocket: boolean, overgrown: boolean, vines: boolean, replaceWithBlackstone: boolean);
    }
    export class $RuinedPortalStructure extends $Structure {
        static CODEC: $MapCodec<$RuinedPortalStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, setups: $List_<$RuinedPortalStructure$Setup_>);
        constructor(settings: $Structure$StructureSettings_, setup: $RuinedPortalStructure$Setup_);
    }
    export class $StrongholdPieces$StartPiece extends $StrongholdPieces$StairsDown {
        previousPiece: $StrongholdPieces$PieceWeight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        portalRoomPiece: $StrongholdPieces$PortalRoom;
        pendingChildren: $List<$StructurePiece>;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces {
        static findAndCreateBridgePieceFactory(weight: $NetherFortressPieces$PieceWeight, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$NetherBridgePiece;
        static BRIDGE_PIECE_WEIGHTS: $NetherFortressPieces$PieceWeight[];
        static CASTLE_PIECE_WEIGHTS: $NetherFortressPieces$PieceWeight[];
        static MAGIC_START_Y: number;
        constructor();
    }
    export class $NetherFortressPieces$NetherBridgePiece extends $StructurePiece {
        generateChildForward(startPiece: $NetherFortressPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number, castlePiece: boolean): $StructurePiece;
        generateChildLeft(startPiece: $NetherFortressPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number, castlePiece: boolean): $StructurePiece;
        generateChildRight(startPiece: $NetherFortressPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number, castlePiece: boolean): $StructurePiece;
        static isOkBox(box: $BoundingBox): boolean;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(type: $StructurePieceType_, genDepth: number, boundingBox: $BoundingBox);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftStairs extends $MineshaftPieces$MineShaftPiece {
        static findStairs(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        type: $MineshaftStructure$Type;
        constructor(genDepth: number, boundingBox: $BoundingBox, orientation: $Direction_, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentEntryRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressStructure extends $Structure {
        static FORTRESS_ENEMIES: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        static CODEC: $MapCodec<$NetherFortressStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $MineshaftPieces$MineShaftCorridor extends $MineshaftPieces$MineShaftPiece {
        fillPillarDownOrChainUp(level: $WorldGenLevel, state: $BlockState_, x: number, y: number, z: number, box: $BoundingBox): void;
        static findCorridorSize(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        type: $MineshaftStructure$Type;
        constructor(genDepth: number, random: $RandomSource, boundingBox: $BoundingBox, orientation: $Direction_, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces {
    }
    export class $OceanMonumentPieces$FitDoubleYRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Straight extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_, genDepth: number): $StrongholdPieces$Straight;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece$SmallDoorType extends $Enum<$StrongholdPieces$StrongholdPiece$SmallDoorType> {
    }
    /**
     * Values that may be interpreted as {@link $StrongholdPieces$StrongholdPiece$SmallDoorType}.
     */
    export type $StrongholdPieces$StrongholdPiece$SmallDoorType_ = "opening" | "wood_door" | "grates" | "iron_door";
    export class $NetherFortressPieces$CastleCorridorTBalconyPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleCorridorTBalconyPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$MonsterThrone extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, genDepth: number, orientation: $Direction_): $NetherFortressPieces$MonsterThrone;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorCrossingPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorCrossingPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$FloorRoomCollection implements $RegistryHolder {
        getRegistries(): $RegistryAccess;
        setRegistries(registries: $RegistryAccess): void;
        get2x2(random: $RandomSource): string;
        get1x1(random: $RandomSource): string;
        get2x2Secret(random: $RandomSource): string;
        get1x1Secret(random: $RandomSource): string;
        get1x2SideEntrance(random: $RandomSource, isStairs: boolean): string;
        get1x2Secret(random: $RandomSource): string;
        get1x2FrontEntrance(random: $RandomSource, isStairs: boolean): string;
        constructor();
    }
    export class $IglooPieces {
        static addPieces(structureTemplateManager: $StructureTemplateManager, startPos: $BlockPos_, rotation: $Rotation_, pieces: $StructurePieceAccessor, random: $RandomSource): void;
        static OFFSETS: $Map<$ResourceLocation, $BlockPos>;
        static PIVOTS: $Map<$ResourceLocation, $BlockPos>;
        static STRUCTURE_LOCATION_IGLOO: $ResourceLocation;
        static GENERATION_HEIGHT: number;
        constructor();
    }
    export class $EndCityPieces$SectionGenerator {
    }
    export interface $EndCityPieces$SectionGenerator {
    }
    export class $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorLeftTurnPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PrisonHall extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$PrisonHall;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFossilStructure extends $Structure {
        static CODEC: $MapCodec<$NetherFossilStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        height: $HeightProvider;
        constructor(settings: $Structure$StructureSettings_, height: $HeightProvider);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYZRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentPiece extends $StructurePiece {
        spawnElder(level: $WorldGenLevel, box: $BoundingBox, x: number, y: number, z: number): void;
        generateBoxOnFillOnly(level: $WorldGenLevel, box: $BoundingBox, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, state: $BlockState_): void;
        generateDefaultFloor(level: $WorldGenLevel, box: $BoundingBox, x: number, z: number, hasOpeningDownwards: boolean): void;
        static getRoomIndex(x: number, y: number, z: number): number;
        chunkIntersects(box: $BoundingBox, minX: number, minZ: number, maxX: number, maxZ: number): boolean;
        generateWaterBox(level: $WorldGenLevel, boundingBox: $BoundingBox, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(type: $StructurePieceType_, genDepth: number, orientation: $Direction_, roomDefinition: $OceanMonumentPieces$RoomDefinition, x: number, y: number, z: number);
        constructor(type: $StructurePieceType_, orientation: $Direction_, genDepth: number, box: $BoundingBox);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentWingRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, box: $BoundingBox, flag: number);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftCrossing extends $MineshaftPieces$MineShaftPiece {
        static findCrossing(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_): $BoundingBox;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        type: $MineshaftStructure$Type;
        constructor(tag: $CompoundTag_);
        constructor(genDepth: number, boundingBox: $BoundingBox, direction: $Direction_ | null, type: $MineshaftStructure$Type_);
    }
    export class $BuriedTreasurePieces$BuriedTreasurePiece extends $StructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(pos: $BlockPos_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleSmallCorridorRightTurnPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorRightTurnPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$ChestCorridor extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$ChestCorridor;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$FitDoubleYZRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$StartPiece extends $NetherFortressPieces$BridgeCrossing {
        previousPiece: $NetherFortressPieces$PieceWeight;
        availableCastlePieces: $List<$NetherFortressPieces$PieceWeight>;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        availableBridgePieces: $List<$NetherFortressPieces$PieceWeight>;
        pendingChildren: $List<$StructurePiece>;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleTopRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$StairsDown;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(tag: $CompoundTag_);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(type: $StructurePieceType_, genDepth: number, x: number, z: number, orientation: $Direction_);
    }
    export class $OceanMonumentPieces$FitDoubleXRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $OceanMonumentPieces$MonumentRoomFitter {
    }
    export interface $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $NetherFortressPieces$CastleStalkRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleStalkRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckStructure extends $Structure {
        static CODEC: $MapCodec<$ShipwreckStructure>;
        isBeached: boolean;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_, isBeached: boolean);
    }
    export class $NetherFortressPieces$CastleEntrance extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleEntrance;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $MineshaftPieces$MineShaftRoom extends $MineshaftPieces$MineShaftPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        type: $MineshaftStructure$Type;
        constructor(genDepth: number, random: $RandomSource, x: number, z: number, type: $MineshaftStructure$Type_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$MansionGrid {
        isRoomId(layout: $WoodlandMansionPieces$SimpleGrid, x: number, y: number, floor: number, roomId: number): boolean;
        static isHouse(layout: $WoodlandMansionPieces$SimpleGrid, x: number, y: number): boolean;
        get1x2RoomDirection(layout: $WoodlandMansionPieces$SimpleGrid, x: number, y: number, floor: number, roomId: number): $Direction;
        thirdFloorGrid: $WoodlandMansionPieces$SimpleGrid;
        floorRooms: $WoodlandMansionPieces$SimpleGrid[];
        entranceX: number;
        entranceY: number;
        baseGrid: $WoodlandMansionPieces$SimpleGrid;
        constructor(random: $RandomSource);
    }
    export class $WoodlandMansionPieces$MansionPiecePlacer implements $RegistryHolder {
        getRegistries(): $RegistryAccess;
        setRegistries(registries: $RegistryAccess): void;
        createMansion(pos: $BlockPos_, rotation: $Rotation_, pieces: $List_<$WoodlandMansionPieces$WoodlandMansionPiece>, grid: $WoodlandMansionPieces$MansionGrid): void;
        constructor(structureTemplateManager: $StructureTemplateManager, random: $RandomSource);
    }
    export class $BuriedTreasureStructure extends $Structure {
        static CODEC: $MapCodec<$BuriedTreasureStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces$StraightStairsDown extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$StraightStairsDown;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SimpleGrid {
        get(x: number, y: number): number;
        set(minX: number, minY: number, maxX: number, maxY: number, value: number): void;
        set(width: number, height: number, valueIfOutside: number): void;
        setif(x: number, y: number, oldValue: number, newValue: number): void;
        edgesTo(x: number, y: number, expectedValue: number): boolean;
        width: number;
        height: number;
        constructor(width: number, height: number, valueIfOutside: number);
    }
    export class $NetherFortressPieces$CastleSmallCorridorPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleSmallCorridorPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $EndCityPieces$EndCityPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, name: string, startPos: $BlockPos_, rotation: $Rotation_, overwrite: boolean);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $OceanRuinPieces$OceanRuinPiece extends $TemplateStructurePiece {
        static create(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_): $OceanRuinPieces$OceanRuinPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_, integrity: number, biomeType: $OceanRuinStructure$Type_, isLarge: boolean);
    }
    export class $OceanMonumentPieces$FitDoubleZRoom implements $OceanMonumentPieces$MonumentRoomFitter {
    }
    export class $StrongholdPieces$Turn extends $StrongholdPieces$StrongholdPiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(arg0: $StructurePieceType_, arg1: number, arg2: $BoundingBox);
        constructor(arg0: $StructurePieceType_, arg1: $CompoundTag_);
    }
    export class $WoodlandMansionPieces$SecondFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection implements $MansionRoomDuck {
        lithostitched$floorNumber(): number;
        handler$che001$lithostitched$use2x2TemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$che001$lithostitched$use1x1TemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$che001$lithostitched$use1x2SideTemplateList(random: $RandomSource, bl: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$che001$lithostitched$use1x1SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$che001$lithostitched$use1x2SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$che001$lithostitched$use1x2FrontTemplateList(random: $RandomSource, bl: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$che001$lithostitched$use2x2SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        lithostitched$getRandom(name: string, random: $RandomSource): string;
        constructor();
    }
    export class $RuinedPortalPiece$VerticalPlacement extends $Enum<$RuinedPortalPiece$VerticalPlacement> implements $StringRepresentable {
        getName(): string;
        static values(): $RuinedPortalPiece$VerticalPlacement[];
        static valueOf(name: string): $RuinedPortalPiece$VerticalPlacement;
        static byName(name: string): $RuinedPortalPiece$VerticalPlacement;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND: $RuinedPortalPiece$VerticalPlacement;
        static ON_LAND_SURFACE: $RuinedPortalPiece$VerticalPlacement;
        static CODEC: $StringRepresentable$EnumCodec<$RuinedPortalPiece$VerticalPlacement>;
        static IN_MOUNTAIN: $RuinedPortalPiece$VerticalPlacement;
        static PARTLY_BURIED: $RuinedPortalPiece$VerticalPlacement;
        static IN_NETHER: $RuinedPortalPiece$VerticalPlacement;
        static ON_OCEAN_FLOOR: $RuinedPortalPiece$VerticalPlacement;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RuinedPortalPiece$VerticalPlacement}.
     */
    export type $RuinedPortalPiece$VerticalPlacement_ = "on_land_surface" | "partly_buried" | "on_ocean_floor" | "in_mountain" | "underground" | "in_nether";
    export class $SwampHutPiece extends $ScatteredFeaturePiece {
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$RoomCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$RoomCrossing;
        handler$bii001$supplementaries$supp$addSconces(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $BlockPos_, arg7: $CallbackInfo): void;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        type: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$LeftTurn extends $StrongholdPieces$Turn {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$LeftTurn;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckPieces {
        static addRandomPiece(structureTemplateManager: $StructureTemplateManager, pos: $BlockPos_, rotation: $Rotation_, pieces: $StructurePieceAccessor, random: $RandomSource, isBeached: boolean): $ShipwreckPieces$ShipwreckPiece;
        static MARKERS_TO_LOOT: $Map<string, $ResourceKey<$LootTable>>;
        static PIVOT: $BlockPos;
        constructor();
    }
    export class $StrongholdPieces$Library extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$Library;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        static TALL_HEIGHT: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFossilPieces {
        static addPieces(structureManager: $StructureTemplateManager, pieces: $StructurePieceAccessor, random: $RandomSource, pos: $BlockPos_): void;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleXRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $JungleTempleStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$JungleTempleStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $WoodlandMansionStructure extends $Structure {
        static CODEC: $MapCodec<$WoodlandMansionStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $BuriedTreasurePieces {
        constructor();
    }
    export class $MineshaftPieces {
        static generateAndAddPiece(piece: $StructurePiece, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_, genDepth: number): $MineshaftPieces$MineShaftPiece;
        static MAGIC_START_Y: number;
        static LOGGER: $Logger;
        constructor();
    }
    export class $OceanMonumentPieces$OceanMonumentCoreRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $SwampHutStructure extends $Structure {
        static CODEC: $MapCodec<$SwampHutStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $NetherFortressPieces$PieceWeight implements $XPieceDataExtension {
        isValid(): boolean;
        c2me$getGeneratedCountThreadLocal(): $ThreadLocal<any>;
        doPlace(genDepth: number): boolean;
        placeCount: number;
        allowInRow: boolean;
        pieceClass: $Class<$NetherFortressPieces$NetherBridgePiece>;
        maxPlaceCount: number;
        weight: number;
        constructor(pieceClass: $Class<$NetherFortressPieces$NetherBridgePiece>, weight: number, maxPlaceCount: number, allowInRow: boolean);
        constructor(pieceClass: $Class<$NetherFortressPieces$NetherBridgePiece>, weight: number, maxPlaceCount: number);
        get valid(): boolean;
    }
    export class $StrongholdPieces$RightTurn extends $StrongholdPieces$Turn {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$RightTurn;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanRuinStructure$Type extends $Enum<$OceanRuinStructure$Type> implements $StringRepresentable {
        getName(): string;
        static values(): $OceanRuinStructure$Type[];
        static valueOf(arg0: string): $OceanRuinStructure$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$OceanRuinStructure$Type>;
        static COLD: $OceanRuinStructure$Type;
        static WARM: $OceanRuinStructure$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $OceanRuinStructure$Type}.
     */
    export type $OceanRuinStructure$Type_ = "warm" | "cold";
    export class $DesertPyramidStructure extends $SinglePieceStructure {
        static CODEC: $MapCodec<$DesertPyramidStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $StrongholdPieces implements $IStrongholdGenerator {
        getActivePieceTypeThreadLocal(): $ThreadLocal<any>;
        static generateAndAddPiece(piece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, direction: $Direction_ | null, genDepth: number): $StructurePiece;
        static resetPieces(): void;
        static MAGIC_START_Y: number;
        static imposedPiece: $Class<$StrongholdPieces$StrongholdPiece>;
        static SMOOTH_STONE_SELECTOR: $StrongholdPieces$SmoothStoneSelector;
        constructor();
        get activePieceTypeThreadLocal(): $ThreadLocal<any>;
    }
    export class $NetherFortressPieces$BridgeEndFiller extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$BridgeEndFiller;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $ShipwreckPieces$ShipwreckPiece extends $TemplateStructurePiece {
        isTooBigToFitInWorldGenRegion(): boolean;
        calculateBeachedPosition(maxHeight: number, random: $RandomSource): number;
        adjustPositionHeight(height: number): void;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_, isBeached: boolean);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
        get tooBigToFitInWorldGenRegion(): boolean;
    }
    export class $WoodlandMansionPieces$WoodlandMansionPiece extends $TemplateStructurePiece {
        handler$eim000$illagerinvasion$handleDataMarker(name: string, pos: $BlockPos_, level: $ServerLevelAccessor, random: $RandomSource, box: $BoundingBox, callback: $CallbackInfo): void;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
        constructor(structureTemplateManager: $StructureTemplateManager, templateName: string, templatePosition: $BlockPos_, rotation: $Rotation_, mirror: $Mirror_);
        constructor(structureTemplateManager: $StructureTemplateManager, templateName: string, templatePosition: $BlockPos_, rotation: $Rotation_);
    }
    export class $WoodlandMansionPieces$FirstFloorRoomCollection extends $WoodlandMansionPieces$FloorRoomCollection implements $MansionRoomDuck {
        lithostitched$floorNumber(): number;
        handler$chd000$lithostitched$use2x2TemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$chd000$lithostitched$use1x1TemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$chd000$lithostitched$use1x1SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$chd000$lithostitched$use1x2FrontTemplateList(random: $RandomSource, bl: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$chd000$lithostitched$use1x2SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        handler$chd000$lithostitched$use1x2SideTemplateList(random: $RandomSource, bl: boolean, cir: $CallbackInfoReturnable<any>): void;
        handler$chd000$lithostitched$use2x2SecretTemplateList(random: $RandomSource, cir: $CallbackInfoReturnable<any>): void;
        lithostitched$getRandom(name: string, random: $RandomSource): string;
        constructor();
    }
    export class $NetherFossilPieces$NetherFossilPiece extends $TemplateStructurePiece {
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureManager: $StructureTemplateManager, location: $ResourceLocation_, pos: $BlockPos_, rotation: $Rotation_);
        constructor(structureManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$CastleCorridorStairsPiece extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$CastleCorridorStairsPiece;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $OceanMonumentStructure extends $Structure {
        static regeneratePiecesAfterLoad(chunkPos: $ChunkPos, seed: number, arg2: $PiecesContainer_): $PiecesContainer;
        static CODEC: $MapCodec<$OceanMonumentStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
    export class $OceanMonumentPieces$OceanMonumentPenthouse extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, box: $BoundingBox);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PortalRoom extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$PortalRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $NetherFortressPieces$StairsRoom extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, genDepth: number, orientation: $Direction_): $NetherFortressPieces$StairsRoom;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$PieceWeight implements $XPieceDataExtension {
        isValid(): boolean;
        c2me$getGeneratedCountThreadLocal(): $ThreadLocal<any>;
        doPlace(genDepth: number): boolean;
        placeCount: number;
        pieceClass: $Class<$StrongholdPieces$StrongholdPiece>;
        maxPlaceCount: number;
        weight: number;
        constructor(pieceClass: $Class<$StrongholdPieces$StrongholdPiece>, weight: number, maxPlaceCount: number);
        get valid(): boolean;
    }
    export class $OceanMonumentPieces$OceanMonumentSimpleRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition, random: $RandomSource);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$StrongholdPiece extends $StructurePiece {
        generateSmallDoorChildForward(startPiece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number): $StructurePiece;
        generateSmallDoorChildRight(startPiece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number): $StructurePiece;
        generateSmallDoorChildLeft(startPiece: $StrongholdPieces$StartPiece, pieces: $StructurePieceAccessor, random: $RandomSource, offsetX: number, offsetY: number): $StructurePiece;
        randomSmallDoor(random: $RandomSource): $StrongholdPieces$StrongholdPiece$SmallDoorType;
        generateSmallDoor(level: $WorldGenLevel, random: $RandomSource, box: $BoundingBox, type: $StrongholdPieces$StrongholdPiece$SmallDoorType_, x: number, y: number, z: number): void;
        static isOkBox(box: $BoundingBox): boolean;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        constructor(type: $StructurePieceType_, genDepth: number, boundingBox: $BoundingBox);
        constructor(type: $StructurePieceType_, tag: $CompoundTag_);
    }
    export class $OceanMonumentPieces$OceanMonumentDoubleYRoom extends $OceanMonumentPieces$OceanMonumentPiece {
        static PENTHOUSE_INDEX: number;
        static BASE_GRAY: $BlockState;
        boundingBox: $BoundingBox;
        static GRID_HEIGHT: number;
        static GRIDROOM_RIGHTWING_CONNECT_INDEX: number;
        genDepth: number;
        static BASE_LIGHT: $BlockState;
        static GRIDROOM_WIDTH: number;
        static GRID_DEPTH: number;
        static DOT_DECO_DATA: $BlockState;
        static FILL_KEEP: $Set<$Block>;
        roomDefinition: $OceanMonumentPieces$RoomDefinition;
        static FILL_BLOCK: $BlockState;
        static GRID_WIDTH: number;
        static GRIDROOM_SOURCE_INDEX: number;
        static GRIDROOM_TOP_CONNECT_INDEX: number;
        static GRIDROOM_LEFTWING_CONNECT_INDEX: number;
        static DO_FILL: boolean;
        static CAVE_AIR: $BlockState;
        static RIGHTWING_INDEX: number;
        static BASE_BLACK: $BlockState;
        static GRIDROOM_HEIGHT: number;
        static GRID_FLOOR_COUNT: number;
        static GRID_SIZE: number;
        static LAMP_BLOCK: $BlockState;
        static GRIDROOM_DEPTH: number;
        static LEFTWING_INDEX: number;
        constructor(direction: $Direction_, room: $OceanMonumentPieces$RoomDefinition);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$FiveCrossing extends $StrongholdPieces$StrongholdPiece {
        static createPiece(pieces: $StructurePieceAccessor, random: $RandomSource, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $StrongholdPieces$FiveCrossing;
        handler$bih000$supplementaries$supp$addSconces(arg0: $WorldGenLevel, arg1: $StructureManager, arg2: $ChunkGenerator, arg3: $RandomSource, arg4: $BoundingBox, arg5: $ChunkPos, arg6: $BlockPos_, arg7: $CallbackInfo): void;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        entryDoor: $StrongholdPieces$StrongholdPiece$SmallDoorType;
        static WIDTH: number;
        static HEIGHT: number;
        static DEPTH: number;
        constructor(genDepth: number, random: $RandomSource, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $StrongholdPieces$SmoothStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $WoodlandMansionPieces$ThirdFloorRoomCollection extends $WoodlandMansionPieces$SecondFloorRoomCollection implements $MansionRoomDuck {
        constructor();
    }
    export class $JungleTemplePiece$MossStoneSelector extends $StructurePiece$BlockSelector {
    }
    export class $NetherFortressPieces$RoomCrossing extends $NetherFortressPieces$NetherBridgePiece {
        static createPiece(pieces: $StructurePieceAccessor, x: number, y: number, z: number, orientation: $Direction_, genDepth: number): $NetherFortressPieces$RoomCrossing;
        boundingBox: $BoundingBox;
        genDepth: number;
        static CAVE_AIR: $BlockState;
        constructor(genDepth: number, box: $BoundingBox, orientation: $Direction_);
        constructor(tag: $CompoundTag_);
    }
    export class $DesertPyramidPiece extends $ScatteredFeaturePiece {
        getRandomCollapsedRoofPos(): $BlockPos;
        getPotentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
        heightPosition: number;
        boundingBox: $BoundingBox;
        genDepth: number;
        depth: number;
        static CAVE_AIR: $BlockState;
        width: number;
        static WIDTH: number;
        static DEPTH: number;
        height: number;
        constructor(random: $RandomSource, x: number, z: number);
        constructor(tag: $CompoundTag_);
        get randomCollapsedRoofPos(): $BlockPos;
        get potentialSuspiciousSandWorldPositions(): $List<$BlockPos>;
    }
    export class $RuinedPortalPiece extends $TemplateStructurePiece {
        static getHeightMapType(verticalPlacement: $RuinedPortalPiece$VerticalPlacement_): $Heightmap$Types;
        boundingBox: $BoundingBox;
        genDepth: number;
        templateName: string;
        static CAVE_AIR: $BlockState;
        constructor(structureTemplateManager: $StructureTemplateManager, templatePosition: $BlockPos_, verticalPlacement: $RuinedPortalPiece$VerticalPlacement_, properties: $RuinedPortalPiece$Properties, location: $ResourceLocation_, template: $StructureTemplate, rotation: $Rotation_, mirror: $Mirror_, pivotPos: $BlockPos_);
        constructor(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_);
    }
    export class $EndCityStructure extends $Structure {
        static CODEC: $MapCodec<$EndCityStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        constructor(settings: $Structure$StructureSettings_);
    }
}
