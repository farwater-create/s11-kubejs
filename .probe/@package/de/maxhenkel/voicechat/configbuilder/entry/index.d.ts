import { $Config } from "@package/de/maxhenkel/voicechat/configbuilder";

declare module "@package/de/maxhenkel/voicechat/configbuilder/entry" {
    export class $ConfigEntry<T> {
    }
    export interface $ConfigEntry<T> {
        reset(): $ConfigEntry<T>;
        get(): T;
        getDefault(): T;
        getKey(): string;
        set(arg0: T): $ConfigEntry<T>;
        save(): $ConfigEntry<T>;
        comment(...arg0: string[]): $ConfigEntry<T>;
        getConfig(): $Config;
        getComments(): string[];
        saveSync(): $ConfigEntry<T>;
        get default(): T;
        get key(): string;
        get config(): $Config;
        get comments(): string[];
    }
}
