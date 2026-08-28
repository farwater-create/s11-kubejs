import { $MolangObject } from "@package/gg/moonflower/molangcompiler/api/object";
import { $Collection } from "@package/java/util";

declare module "@package/gg/moonflower/molangcompiler/api" {
    export class $MolangEnvironment {
        static immutable(arg0: $MolangEnvironment): $MolangEnvironment;
    }
    export interface $MolangEnvironment {
        getParameters(): number;
        get(arg0: string): $MolangObject;
        loadLibrary(arg0: string, arg1: $MolangObject): void;
        loadLibrary(arg0: string, arg1: $MolangObject, ...arg2: string[]): void;
        resolve(arg0: $MolangExpression): number;
        copy(): $MolangEnvironment;
        has(arg0: string): boolean;
        canEdit(): boolean;
        getObjects(): $Collection<string>;
        getThis(): number;
        loadAlias(arg0: string, arg1: string, ...arg2: string[]): void;
        getParameter(arg0: number): number;
        safeResolve(arg0: $MolangExpression): number;
        edit(): $MolangEnvironmentBuilder<$MolangEnvironment>;
        clearParameters(): void;
        setThisValue(arg0: number): void;
        hasParameter(arg0: number): boolean;
        loadParameter(arg0: number): void;
        get parameters(): number;
        get objects(): $Collection<string>;
        get this(): number;
        set thisValue(value: number);
    }
}
