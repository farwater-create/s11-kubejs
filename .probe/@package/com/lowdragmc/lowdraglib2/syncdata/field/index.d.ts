import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $IRef } from "@package/com/lowdragmc/lowdraglib2/syncdata/ref";
import { $Field, $Method, $Type } from "@package/java/lang/reflect";
import { $Object, $Class } from "@package/java/lang";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/field" {
    export class $ManagedKey {
        getName(): string;
        getFieldAccessor(): $IAccessor<never>;
        getContentType(): $Type;
        isDrop(): boolean;
        getPersistentKey(): string;
        isReadOnlyManaged(): boolean;
        getRawField(): $Field;
        isLazy(): boolean;
        createRef(arg0: $Object): $IRef<never>;
        isDestSync(): boolean;
        isPersist(): boolean;
        setPersistentKey(arg0: string): void;
        setRedOnlyManaged(arg0: $Method, arg1: $Method, arg2: $Method): void;
        getDeserializeMethod(): $Method;
        getSerializeMethod(): $Method;
        getOnDirtyMethod(): $Method;
        static getClazzType(arg0: $Type): $Class<never>;
        getClazzType(): $Class<never>;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: $Type, arg6: $Field);
        get name(): string;
        get fieldAccessor(): $IAccessor<never>;
        get contentType(): $Type;
        get drop(): boolean;
        get readOnlyManaged(): boolean;
        get rawField(): $Field;
        get lazy(): boolean;
        get destSync(): boolean;
        get persist(): boolean;
        get deserializeMethod(): $Method;
        get serializeMethod(): $Method;
        get onDirtyMethod(): $Method;
    }
}
