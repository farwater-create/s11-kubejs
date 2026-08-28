import { $IOException } from "@package/java/io";
import { $Executor_, $BlockingQueue } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID, $List, $Map, $UUID_ } from "@package/java/util";
import { $SecretPacket } from "@package/de/maxhenkel/voicechat/net";
import { $Consumer_, $Supplier_ } from "@package/java/util/function";
import { $Speaker } from "@package/de/maxhenkel/voicechat/voice/client/speaker";
import { $ClientVoicechatSocket } from "@package/de/maxhenkel/voicechat/api";
import { $ALCCapabilities, $ALCapabilities } from "@package/org/lwjgl/openal";
import { $Path_, $Path } from "@package/java/nio/file";
import { $InetAddress } from "@package/java/net";
import { $ServerConfig$Codec } from "@package/de/maxhenkel/voicechat/config";
import { $Secret, $NetworkMessage, $SoundPacket } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread, $Runnable_, $Exception } from "@package/java/lang";
export * as speaker from "@package/de/maxhenkel/voicechat/voice/client/speaker";

declare module "@package/de/maxhenkel/voicechat/voice/client" {
    export class $ClientVoicechat {
        connect(arg0: $InitializationData): void;
        close(): void;
        getConnection(): $ClientVoicechatConnection;
        toggleRecording(): boolean;
        getRecorder(): $AudioRecorder;
        setRecording(arg0: boolean): boolean;
        getStartTime(): number;
        getSoundManager(): $SoundManager;
        onVoiceChatConnected(arg0: $ClientVoicechatConnection): void;
        onVoiceChatDisconnected(): void;
        getAudioChannels(): $Map<$UUID, $AudioChannel>;
        processSoundPacket(arg0: $SoundPacket<any>): void;
        closeAudioChannel(arg0: $UUID_): boolean;
        getTalkCache(): $TalkCache;
        getMicThread(): $MicThread;
        reloadAudio(): void;
        reloadSoundManager(): void;
        closeMicThread(): void;
        getInitializationData(): $InitializationData;
        constructor();
        get connection(): $ClientVoicechatConnection;
        get recorder(): $AudioRecorder;
        set recording(value: boolean);
        get startTime(): number;
        get soundManager(): $SoundManager;
        get audioChannels(): $Map<$UUID, $AudioChannel>;
        get talkCache(): $TalkCache;
        get micThread(): $MicThread;
        get initializationData(): $InitializationData;
    }
    export class $AudioChannel extends $Thread {
        getQueue(): $BlockingQueue<$SoundPacket<never>>;
        isClosed(): boolean;
        getChannelId(): $UUID;
        getPacketBuffer(): $AudioPacketBuffer;
        addToQueue(arg0: $SoundPacket<never>): void;
        getSpeaker(): $Speaker;
        canKill(): boolean;
        closeAndKill(): void;
        getLostPackets(): number;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData, arg2: $UUID_);
        get queue(): $BlockingQueue<$SoundPacket<never>>;
        get closed(): boolean;
        get channelId(): $UUID;
        get packetBuffer(): $AudioPacketBuffer;
        get speaker(): $Speaker;
        get lostPackets(): number;
    }
    export class $AudioRecorder {
        getLocation(): $Path;
        close(): void;
        static create(): $AudioRecorder;
        getDuration(): string;
        getDuration(arg0: number): string;
        getStorage(): string;
        getStorage(arg0: number): string;
        getStartTime(): number;
        saveAndClose(): void;
        appendChunk(arg0: $UUID_, arg1: number, arg2: number[]): void;
        flushChunkThreaded(arg0: $UUID_): void;
        getRecordedPlayerCount(): number;
        constructor(arg0: $Path_, arg1: number);
        get location(): $Path;
        get startTime(): number;
        get recordedPlayerCount(): number;
    }
    export class $InitializationData {
        getKeepAlive(): number;
        groupsEnabled(): boolean;
        allowRecording(): boolean;
        getCodec(): $ServerConfig$Codec;
        getPlayerUUID(): $UUID;
        getSecret(): $Secret;
        getVoiceChatDistance(): number;
        getMtuSize(): number;
        getServerIP(): string;
        getServerPort(): number;
        constructor(arg0: string, arg1: $SecretPacket);
        get keepAlive(): number;
        get codec(): $ServerConfig$Codec;
        get playerUUID(): $UUID;
        get secret(): $Secret;
        get voiceChatDistance(): number;
        get mtuSize(): number;
        get serverIP(): string;
        get serverPort(): number;
    }
    export class $MicrophoneException extends $IOException {
        constructor(arg0: string);
        constructor(arg0: $Exception);
    }
    export class $AudioPacketBuffer {
        getSize(): number;
        clear(): void;
        poll(arg0: $BlockingQueue<$SoundPacket<never>>): $SoundPacket<never>;
        constructor(arg0: number);
        get size(): number;
    }
    export class $SoundManager {
        close(): void;
        static create(): $SoundManager;
        static create(arg0: string | null): $SoundManager;
        isClosed(): boolean;
        getMaxGain(): number;
        static getAlError(arg0: number): string;
        static getAllSpeakers(): $List<string>;
        static canEnumerateAll(): boolean;
        static canEnumerate(): boolean;
        runInContext(arg0: $Executor_, arg1: $Runnable_): void;
        openContext(): boolean;
        static getAlcError(arg0: number): string;
        static checkAlcError(arg0: number): boolean;
        static checkAlError(): boolean;
        closeContext(): void;
        static cleanDeviceName(arg0: string): string;
        constructor(arg0: string | null, arg1: number, arg2: number, arg3: $ALCCapabilities, arg4: $ALCapabilities, arg5: number);
        get closed(): boolean;
        get maxGain(): number;
        static get allSpeakers(): $List<string>;
    }
    export class $TalkCache {
        isWhispering(arg0: $Entity): boolean;
        isWhispering(arg0: $UUID_): boolean;
        updateLevel(arg0: $UUID_, arg1: string | null, arg2: boolean, arg3: number[]): void;
        isTalking(arg0: $UUID_): boolean;
        isTalking(arg0: $Entity): boolean;
        updateCategoryVolume(arg0: string, arg1: number): void;
        /**
         * @deprecated
         */
        updateTalking(arg0: $UUID_, arg1: boolean): void;
        setTimestampSupplier(arg0: $Supplier_<number>): void;
        getCategoryAudioLevel(arg0: string): number;
        getPlayerAudioLevel(arg0: $UUID_): number;
        constructor();
        set timestampSupplier(value: $Supplier_<number>);
    }
    export class $ClientVoicechatConnection extends $Thread {
        close(): void;
        getAddress(): $InetAddress;
        getData(): $InitializationData;
        isConnected(): boolean;
        disconnect(): void;
        isInitialized(): boolean;
        sendToServer(arg0: $NetworkMessage): boolean;
        getSocket(): $ClientVoicechatSocket;
        checkTimeout(): void;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat, arg1: $InitializationData);
        get address(): $InetAddress;
        get data(): $InitializationData;
        get connected(): boolean;
        get initialized(): boolean;
        get socket(): $ClientVoicechatSocket;
    }
    export class $MicThread extends $Thread {
        close(): void;
        isClosed(): boolean;
        isWhispering(): boolean;
        getError(arg0: $Consumer_<$MicrophoneException>): void;
        shouldTransmitAudio(): boolean;
        setMicrophoneLocked(arg0: boolean): void;
        isTalking(): boolean;
        pollProcessedAudio(arg0: boolean): number[];
        pollMic(): number[];
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $ClientVoicechat | null, arg1: $ClientVoicechatConnection | null, arg2: $Consumer_<$MicrophoneException>);
        get closed(): boolean;
        get whispering(): boolean;
        set microphoneLocked(value: boolean);
        get talking(): boolean;
    }
}
