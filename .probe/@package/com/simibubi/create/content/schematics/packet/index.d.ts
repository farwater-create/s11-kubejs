import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StructurePlaceSettings } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Rotation, $Mirror_, $Rotation_, $Mirror } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $ServerboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/schematics/packet" {
    export class $SchematicPlacePacket extends $Record implements $ServerboundPacketPayload {
        stack(): $ItemStack;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SchematicPlacePacket>;
        constructor(stack: $ItemStack_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SchematicPlacePacket}.
     */
    export type $SchematicPlacePacket_ = { stack?: $ItemStack_,  } | [stack?: $ItemStack_, ];
    export class $SchematicSyncPacket extends $Record implements $ServerboundPacketPayload {
        slot(): number;
        handle(arg0: $ServerPlayer): void;
        anchor(): $BlockPos;
        mirror(): $Mirror;
        rotation(): $Rotation;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        deployed(): boolean;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SchematicSyncPacket>;
        constructor(arg0: number, arg1: $StructurePlaceSettings, arg2: $BlockPos_, arg3: boolean);
        constructor(slot: number, deployed: boolean, anchor: $BlockPos_, rotation: $Rotation_, mirror: $Mirror_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SchematicSyncPacket}.
     */
    export type $SchematicSyncPacket_ = { rotation?: $Rotation_, anchor?: $BlockPos_, slot?: number, mirror?: $Mirror_, deployed?: boolean,  } | [rotation?: $Rotation_, anchor?: $BlockPos_, slot?: number, mirror?: $Mirror_, deployed?: boolean, ];
    export class $SchematicUploadPacket extends $Record implements $ServerboundPacketPayload {
        static finish(arg0: string): $SchematicUploadPacket;
        size(): number;
        static begin(arg0: string, arg1: number): $SchematicUploadPacket;
        code(): number;
        data(): number[];
        static write(arg0: string, arg1: number[]): $SchematicUploadPacket;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        schematic(): string;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static BEGIN: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SchematicUploadPacket>;
        static WRITE: number;
        static FINISH: number;
        constructor(code: number, size: number, schematic: string, data: number[]);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SchematicUploadPacket}.
     */
    export type $SchematicUploadPacket_ = { code?: number, schematic?: string, size?: number, data?: number[],  } | [code?: number, schematic?: string, size?: number, data?: number[], ];
    export class $InstantSchematicPacket extends $Record implements $ServerboundPacketPayload {
        name(): string;
        bounds(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        origin(): $BlockPos;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InstantSchematicPacket>;
        constructor(name: string, origin: $BlockPos_, bounds: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $InstantSchematicPacket}.
     */
    export type $InstantSchematicPacket_ = { bounds?: $BlockPos_, origin?: $BlockPos_, name?: string,  } | [bounds?: $BlockPos_, origin?: $BlockPos_, name?: string, ];
}
