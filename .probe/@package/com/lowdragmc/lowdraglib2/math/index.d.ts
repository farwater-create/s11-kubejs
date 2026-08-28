import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Vec2 } from "@package/net/minecraft/world/phys";
import { $Vector2f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as interpolate from "@package/com/lowdragmc/lowdraglib2/math/interpolate";

declare module "@package/com/lowdragmc/lowdraglib2/math" {
    export class $Position {
        add(arg0: $Position): $Position;
        add(arg0: $Size): $Position;
        add(arg0: number, arg1: number): $Position;
        static of(arg0: number, arg1: number): $Position;
        subtract(arg0: $Position): $Position;
        getX(): number;
        getY(): number;
        addX(arg0: number): $Position;
        addY(arg0: number): $Position;
        vector2f(): $Vector2f;
        vec2(): $Vec2;
        static ORIGIN: $Position;
        static CODEC: $Codec<$Position>;
        x: number;
        y: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Position>;
    }
    export class $PositionedRect {
        getSize(): $Size;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        static of(arg0: $Position, arg1: $Position): $PositionedRect;
        static of(arg0: $Position, arg1: $Size): $PositionedRect;
        intersects(arg0: $PositionedRect): boolean;
        intersects(arg0: $Position): boolean;
        getPosition(): $Position;
        size: $Size;
        position: $Position;
    }
    export class $Size {
        add(arg0: number, arg1: number): $Size;
        static add(arg0: $Position): $Size;
        add(arg0: $Size): $Size;
        static of(arg0: number, arg1: number): $Size;
        getWidth(): number;
        getHeight(): number;
        subtract(arg0: $Size): $Size;
        addWidth(arg0: number): $Size;
        addHeight(arg0: number): $Size;
        static ZERO: $Size;
        static CODEC: $Codec<$Size>;
        width: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Size>;
        height: number;
    }
    export class $Rect {
        expand(arg0: number, arg1: number): $Rect;
        expand(arg0: number): $Rect;
        static of(arg0: $Position, arg1: $Size): $Rect;
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        move(arg0: $Size): $Rect;
        move(arg0: number, arg1: number): $Rect;
        move(arg0: $Position): $Rect;
        getWidth(): number;
        getHeight(): number;
        intersects(arg0: $Rect): $Rect;
        getDown(): number;
        getUp(): number;
        getRight(): number;
        getLeft(): number;
        isCollide(arg0: $Rect): boolean;
        withDownFixedHeight(arg0: number): $Rect;
        withRightFixedWidth(arg0: number): $Rect;
        toLeftCenter(): $Position;
        getHeightCenter(): number;
        toRightDown(): $Position;
        withUpFixedHeight(arg0: number): $Rect;
        moveHorizontal(arg0: number): $Rect;
        toDownCenter(): $Position;
        moveVertical(arg0: number): $Rect;
        toRightCenter(): $Position;
        verticalExpand(arg0: number): $Rect;
        verticalExpand(arg0: number, arg1: number): $Rect;
        withLeftFixedWidth(arg0: number): $Rect;
        horizontalExpand(arg0: number, arg1: number): $Rect;
        horizontalExpand(arg0: number): $Rect;
        expandRight(arg0: number): $Rect;
        getWidthCenter(): number;
        toLeftDown(): $Position;
        static ofRelative(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        downAnd(arg0: number): $Position;
        toRightUp(): $Position;
        leftAnd(arg0: number): $Position;
        expandUp(arg0: number): $Rect;
        expandDown(arg0: number): $Rect;
        withDown(arg0: number): $Rect;
        expandLeft(arg0: number): $Rect;
        upAnd(arg0: number): $Position;
        unions(arg0: $Rect): $Rect;
        static ofAbsolute(arg0: number, arg1: number, arg2: number, arg3: number): $Rect;
        withUp(arg0: number): $Rect;
        toLeftUp(): $Position;
        toUpCenter(): $Position;
        rightAnd(arg0: number): $Position;
        withRight(arg0: number): $Rect;
        withLeft(arg0: number): $Rect;
        static ZERO: $Rect;
        left: number;
        up: number;
        right: number;
        down: number;
        get width(): number;
        get height(): number;
        get heightCenter(): number;
        get widthCenter(): number;
    }
}
