import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $List, $Map_, $Map } from "@package/java/util";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $CreateLuaTable } from "@package/com/simibubi/create/compat/computercraft/implementation";
import { $PackagerBlockEntity } from "@package/com/simibubi/create/content/logistics/packager";

declare module "@package/com/simibubi/create/compat/computercraft/implementation/luaObjects" {
    export class $LuaComparable {
    }
    export interface $LuaComparable {
        getTableRepresentation(): $Map<never, never>;
        get tableRepresentation(): $Map<never, never>;
    }
    /**
     * Values that may be interpreted as {@link $LuaComparable}.
     */
    export type $LuaComparable_ = (() => $Map_<never, never>);
    export class $LuaItemStack implements $LuaComparable {
        getTableRepresentation(): $Map<never, never>;
        constructor(arg0: $ItemStack_);
        get tableRepresentation(): $Map<never, never>;
    }
    export class $PackageLuaObject implements $LuaComparable {
        list(): $Map<number, $Map<string, never>>;
        getAddress(): string;
        getItemDetail(arg0: number): $Map<string, never>;
        hasOrderData(): boolean;
        isEditable(): boolean;
        setAddress(arg0: string): void;
        getOrderData(): $PackageOrderLuaObject;
        getLuaItemStacks(): $List<$LuaItemStack>;
        getTableRepresentation(): $Map<never, never>;
        address: string;
        blockEntity: $PackagerBlockEntity;
        box: $ItemStack;
        constructor(arg0: $PackagerBlockEntity, arg1: $ItemStack_);
        get editable(): boolean;
        get orderData(): $PackageOrderLuaObject;
        get luaItemStacks(): $List<$LuaItemStack>;
        get tableRepresentation(): $Map<never, never>;
    }
    export class $LuaBigItemStack implements $LuaComparable {
        getTableRepresentation(): $Map<never, never>;
        constructor(arg0: $BigItemStack);
        get tableRepresentation(): $Map<never, never>;
    }
    export class $PackageOrderLuaObject implements $LuaComparable {
        list(): $CreateLuaTable;
        isFinal(): boolean;
        getIndex(): number;
        getItemDetail(arg0: number): $CreateLuaTable;
        getLinkIndex(): number;
        isFinalLink(): boolean;
        getLuaItemStacks(): $List<$LuaBigItemStack>;
        getOrderID(): number;
        getCrafts(): $CreateLuaTable;
        getTableRepresentation(): $Map<never, never>;
        constructor(arg0: $PackageLuaObject);
        get final(): boolean;
        get index(): number;
        get linkIndex(): number;
        get finalLink(): boolean;
        get luaItemStacks(): $List<$LuaBigItemStack>;
        get orderID(): number;
        get crafts(): $CreateLuaTable;
        get tableRepresentation(): $Map<never, never>;
    }
}
