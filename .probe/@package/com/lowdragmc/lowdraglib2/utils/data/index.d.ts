import { $LevelReader } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Tag_, $CompoundTag, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $ConfiguratorGroup, $Configurator } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IPersistedSerializable } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/lowdragmc/lowdraglib2/utils/data" {
    export class $EntityInfo {
        static of(arg0: number): $EntityInfo;
        static of(arg0: number, arg1: $EntityType<never>): $EntityInfo;
        static of(arg0: number, arg1: $EntityType<never>, arg2: $CompoundTag_): $EntityInfo;
        getId(): number;
        getTag(): $CompoundTag;
        setId(arg0: number): void;
        setTag(arg0: $CompoundTag_): void;
        getEntityType(): $EntityType<never>;
        setEntityType(arg0: $EntityType<never>): void;
    }
    export class $BlockInfo implements $IPersistedSerializable, $IConfigurable {
        static fromBlock(arg0: $Block): $BlockInfo;
        postEntity(arg0: $BlockEntity): void;
        setTag(arg0: $CompoundTag_): void;
        hasBlockEntity(): boolean;
        getBlockState(): $BlockState;
        static fromBlockState(arg0: $BlockState_): $BlockInfo;
        setItemStack(arg0: $ItemStack_): void;
        setBlockState(arg0: $BlockState_): void;
        setPostCreate(arg0: $Consumer_<$BlockEntity>): void;
        setHasBlockEntity(arg0: boolean): void;
        getItemStackForm(arg0: $LevelReader, arg1: $BlockPos_): $ItemStack;
        getItemStackForm(): $ItemStack;
        writeToBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        beforeDeserialize(): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        createHistoryRecorder(): $IConfigurableHistory;
        static EMPTY: $BlockInfo;
        constructor();
        constructor(arg0: $BlockState_, arg1: boolean, arg2: $ItemStack_, arg3: $Consumer_<$BlockEntity>);
        constructor(arg0: $BlockState_, arg1: $Consumer_<$BlockEntity>);
        constructor(arg0: $Block);
        constructor(arg0: $BlockState_);
        constructor(arg0: $BlockState_, arg1: boolean);
        set tag(value: $CompoundTag_);
        set itemStack(value: $ItemStack_);
        set postCreate(value: $Consumer_<$BlockEntity>);
        get configurableName(): string;
    }
    export class $BlockPosFace extends $Record {
        pos(): $BlockPos;
        facing(): $Direction;
        constructor(pos: $BlockPos_, facing: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $BlockPosFace}.
     */
    export type $BlockPosFace_ = { pos?: $BlockPos_, facing?: $Direction_,  } | [pos?: $BlockPos_, facing?: $Direction_, ];
}
