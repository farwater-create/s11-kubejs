import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $UUID_, $UUID } from "@package/java/util";
import { $ClientVoicechatConnection } from "@package/de/maxhenkel/voicechat/voice/client";

declare module "@package/de/maxhenkel/voicechat/events" {
    export class $VoiceChatCompatibilityCheckSucceededEvent extends $Event {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $ServerVoiceChatConnectedEvent extends $Event {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $ClientVoiceChatConnectedEvent extends $Event {
        getClient(): $ClientVoicechatConnection;
        constructor(arg0: $ClientVoicechatConnection);
        get client(): $ClientVoicechatConnection;
    }
    export class $ServerVoiceChatDisconnectedEvent extends $Event {
        getPlayerID(): $UUID;
        constructor(arg0: $UUID_);
        get playerID(): $UUID;
    }
    export class $ClientVoiceChatDisconnectedEvent extends $Event {
        constructor();
    }
}
