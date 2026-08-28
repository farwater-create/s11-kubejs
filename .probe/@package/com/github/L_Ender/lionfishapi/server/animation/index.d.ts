
declare module "@package/com/github/L_Ender/lionfishapi/server/animation" {
    export class $Animation {
        static create(arg0: number): $Animation;
        /**
         * @deprecated
         */
        static create(arg0: number, arg1: number): $Animation;
        /**
         * @deprecated
         */
        getID(): number;
        getDuration(): number;
        setLooping(arg0: boolean): $Animation;
        doesLoop(): boolean;
        get ID(): number;
        get duration(): number;
        set looping(value: boolean);
    }
}
