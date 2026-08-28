import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/de/maxhenkel/voicechat/voice/client/speaker" {
    export class $Speaker {
    }
    export interface $Speaker {
        close(): void;
        open(): void;
        play(arg0: number[], arg1: number, arg2: $Vec3_ | null, arg3: string | null, arg4: number): void;
        play(arg0: number[], arg1: number, arg2: string | null): void;
    }
}
