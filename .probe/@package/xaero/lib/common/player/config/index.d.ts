
declare module "@package/xaero/lib/common/player/config" {
    export class $ServerPlayerConfigChannelData {
        getEnforcedConfigProfilePermission(): string;
        hasServerProfileEditPermission(): boolean;
        isUsingConfigProfilePermission(): boolean;
        setCachedEnforcedConfigProfilePermission(arg0: string): void;
        setCachedUsingConfigProfilePermission(arg0: boolean): void;
        setCachedHasServerProfileEditPermission(arg0: boolean): void;
        constructor();
        get enforcedConfigProfilePermission(): string;
        get usingConfigProfilePermission(): boolean;
        set cachedEnforcedConfigProfilePermission(value: string);
        set cachedUsingConfigProfilePermission(value: boolean);
        set cachedHasServerProfileEditPermission(value: boolean);
    }
}
