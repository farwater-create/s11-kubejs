import { $Instant } from "@package/java/time";
import { $BooleanSupplier, $BooleanSupplier_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $MessageSignature_, $Component_, $PlayerChatMessage, $ChatType$Bound_, $Component, $PlayerChatMessage_ } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $GuiMessageTag_, $GuiMessageTag } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID, $UUID_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as report from "@package/net/minecraft/client/multiplayer/chat/report";

declare module "@package/net/minecraft/client/multiplayer/chat" {
    export class $LoggedChatMessage$Player extends $Record implements $LoggedChatMessage {
        type(): $LoggedChatEvent$Type;
        profile(): $GameProfile;
        message(): $PlayerChatMessage;
        profileId(): $UUID;
        toHeadingComponent(): $Component;
        trustLevel(): $ChatTrustLevel;
        canReport(uuid: $UUID_): boolean;
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        static CODEC: $MapCodec<$LoggedChatMessage$Player>;
        constructor(arg0: $GameProfile, arg1: $PlayerChatMessage_, arg2: $ChatTrustLevel_);
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatMessage$Player}.
     */
    export type $LoggedChatMessage$Player_ = { trustLevel?: $ChatTrustLevel_, message?: $PlayerChatMessage_, profile?: $GameProfile,  } | [trustLevel?: $ChatTrustLevel_, message?: $PlayerChatMessage_, profile?: $GameProfile, ];
    export class $LoggedChatEvent$Type extends $Enum<$LoggedChatEvent$Type> implements $StringRepresentable {
        static values(): $LoggedChatEvent$Type[];
        static valueOf(arg0: string): $LoggedChatEvent$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PLAYER: $LoggedChatEvent$Type;
        static SYSTEM: $LoggedChatEvent$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent$Type}.
     */
    export type $LoggedChatEvent$Type_ = "player" | "system";
    export class $ChatTrustLevel extends $Enum<$ChatTrustLevel> implements $StringRepresentable {
        static values(): $ChatTrustLevel[];
        static valueOf(arg0: string): $ChatTrustLevel;
        static evaluate(chatMessage: $PlayerChatMessage_, decoratedServerContent: $Component_, timestamp: $Instant): $ChatTrustLevel;
        getSerializedName(): string;
        createTag(chatMessage: $PlayerChatMessage_): $GuiMessageTag;
        isNotSecure(): boolean;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ChatTrustLevel>;
        static SECURE: $ChatTrustLevel;
        static MODIFIED: $ChatTrustLevel;
        static NOT_SECURE: $ChatTrustLevel;
        get serializedName(): string;
        get notSecure(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTrustLevel}.
     */
    export type $ChatTrustLevel_ = "secure" | "modified" | "not_secure";
    export class $ChatListener {
        queueSize(): number;
        clearQueue(): void;
        tick(): void;
        handlePlayerChatMessage(chatMessage: $PlayerChatMessage_, gameProfile: $GameProfile, boundChatType: $ChatType$Bound_): void;
        handleChatMessageError(sender: $UUID_, boundChatType: $ChatType$Bound_): void;
        handleDisguisedChatMessage(message: $Component_, boundChatType: $ChatType$Bound_): void;
        acceptNextDelayedMessage(): void;
        handleSystemMessage(message: $Component_, isOverlay: boolean): void;
        setMessageDelay(delaySeconds: number): void;
        removeFromDelayedMessageQueue(signature: $MessageSignature_): boolean;
        handler$bdf000$chat_heads$chatheads$handleAddedSystemMessage(message: $Component_, bl: boolean, ci: $CallbackInfo): void;
        handler$doj000$brewinandchewin$modifyTipsyMessageWhileFiltering(arg0: $ChatType$Bound_, arg1: $PlayerChatMessage_, arg2: $Component_, arg3: $GameProfile, arg4: boolean, arg5: $Instant, arg6: $CallbackInfoReturnable<any>): void;
        modify$bdo000$chat_heads$chatheads$handleAddedDisguisedMessage(original: $BooleanSupplier_, undecoratedMessage: $Component_, bound: $ChatType$Bound_): $BooleanSupplier;
        handler$bdf000$chat_heads$chatheads$handleAddedPlayerMessage(bound: $ChatType$Bound_, playerChatMessage: $PlayerChatMessage_, message: $Component_, gameProfile: $GameProfile, bl: boolean, instant: $Instant, cir: $CallbackInfoReturnable<any>): void;
        localvar$doj000$brewinandchewin$setTipsyChatToModified(arg0: $ChatTrustLevel_, arg1: $PlayerChatMessage_, arg2: boolean): $ChatTrustLevel;
        handler$ead000$xaerominimap$onHandleDisguisedChatMessag(arg0: $Component_, arg1: $ChatType$Bound_, arg2: $CallbackInfo): void;
        localvar$dpb000$brewinandchewin$setTipsyChatToModified(arg0: $GuiMessageTag_, arg1: $PlayerChatMessage_, arg2: boolean): $GuiMessageTag;
        handler$eli001$xaeroworldmap$onHandleDisguisedChatMessag(arg0: $Component_, arg1: $ChatType$Bound_, arg2: $CallbackInfo): void;
        handler$ead000$xaerominimap$onHandleSystemChat(arg0: $Component_, arg1: boolean, arg2: $CallbackInfo): void;
        handler$eli001$xaeroworldmap$onHandleSystemChat(arg0: $Component_, arg1: boolean, arg2: $CallbackInfo): void;
        static $assertionsDisabled: boolean;
        constructor(minecraft: $Minecraft);
        set messageDelay(value: number);
    }
    export class $LoggedChatMessage {
        static system(message: $Component_, timestamp: $Instant): $LoggedChatMessage$System;
        static player(profile: $GameProfile, message: $PlayerChatMessage_, trustLevel: $ChatTrustLevel_): $LoggedChatMessage$Player;
    }
    export interface $LoggedChatMessage extends $LoggedChatEvent {
        canReport(uuid: $UUID_): boolean;
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
    }
    export class $ChatListener$Message extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatListener$Message}.
     */
    export type $ChatListener$Message_ = { signature?: $MessageSignature_, handler?: $BooleanSupplier_,  } | [signature?: $MessageSignature_, handler?: $BooleanSupplier_, ];
    export class $LoggedChatMessage$System extends $Record implements $LoggedChatMessage {
        type(): $LoggedChatEvent$Type;
        message(): $Component;
        timeStamp(): $Instant;
        canReport(uuid: $UUID_): boolean;
        toContentComponent(): $Component;
        toNarrationComponent(): $Component;
        static CODEC: $MapCodec<$LoggedChatMessage$System>;
        constructor(arg0: $Component_, arg1: $Instant);
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatMessage$System}.
     */
    export type $LoggedChatMessage$System_ = { message?: $Component_, timeStamp?: $Instant,  } | [message?: $Component_, timeStamp?: $Instant, ];
    export class $LoggedChatEvent {
        static CODEC: $Codec<$LoggedChatEvent>;
    }
    export interface $LoggedChatEvent {
        type(): $LoggedChatEvent$Type;
    }
    /**
     * Values that may be interpreted as {@link $LoggedChatEvent}.
     */
    export type $LoggedChatEvent_ = (() => $LoggedChatEvent$Type_);
    export class $ChatLog {
        end(): number;
        lookup(id: number): $LoggedChatEvent;
        start(): number;
        push(event: $LoggedChatEvent_): void;
        static codec(size: number): $Codec<$ChatLog>;
        constructor(size: number);
    }
}
