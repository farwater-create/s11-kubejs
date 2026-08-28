import { $Logger } from "@package/org/slf4j";

declare module "@package/com/mojang/text2speech" {
    export class $Narrator {
        static getNarrator(): $Narrator;
        static LOGGER: $Logger;
        static EMPTY: $Narrator;
        static get narrator(): $Narrator;
    }
    export interface $Narrator {
        clear(): void;
        destroy(): void;
        say(arg0: string, arg1: boolean): void;
        active(): boolean;
    }
}
