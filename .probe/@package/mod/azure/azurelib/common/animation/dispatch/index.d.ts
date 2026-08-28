import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as command from "@package/mod/azure/azurelib/common/animation/dispatch/command";

declare module "@package/mod/azure/azurelib/common/animation/dispatch" {
    export class $AzDispatchSide extends $Enum<$AzDispatchSide> implements $StringRepresentable {
        static values(): $AzDispatchSide[];
        static valueOf(arg0: string): $AzDispatchSide;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $StreamCodec<$FriendlyByteBuf, $AzDispatchSide>;
        static SERVER: $AzDispatchSide;
        static CLIENT: $AzDispatchSide;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AzDispatchSide}.
     */
    export type $AzDispatchSide_ = "client" | "server";
}
