ServerEvents.recipes(event => {
    
    function bigCannonsMelting(output, input, time) {

        event.custom({
            type: 'createbigcannons:melting',
            heat_requirement: 'heated',
            ingredients: input.map(item => Ingredient.of(item).toJson()),
            processing_time: time,
            results: [
                output.toJson()
            ]
        })
    }

    // Copper
    bigCannonsMelting(
        Fluid.of('kubejs:molten_copper', 10),
        [Ingredient.of('#c:nuggets/copper')],
        40
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_copper', 90),
        [Ingredient.of('#c:ingots/copper')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_copper', 810),
        [Ingredient.of('#c:storage_blocks/copper')],
        810
    )
    
    bigCannonsMelting(
        Fluid.of('kubejs:molten_copper', 90),
        [Ingredient.of('#c:plates/copper')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_copper', 45),
        [Ingredient.of('#c:rods/copper')],
        90
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_copper', 45),
        [Ingredient.of('#c:wires/copper')],
        90
    )

    // Iron
    bigCannonsMelting(
        Fluid.of('kubejs:molten_iron', 10),
        [Ingredient.of('#c:nuggets/iron')],
        40
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_iron', 90),
        [Ingredient.of('#c:ingots/iron')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_iron', 810),
        [Ingredient.of('#c:storage_blocks/iron')],
        810
    )
    
    bigCannonsMelting(
        Fluid.of('kubejs:molten_iron', 90),
        [Ingredient.of('#c:plates/iron')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_iron', 45),
        [Ingredient.of('#c:rods/iron')],
        90
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_iron', 45),
        [Ingredient.of('#c:wires/iron')],
        90
    )

    // Gold
    bigCannonsMelting(
        Fluid.of('kubejs:molten_gold', 10),
        [Ingredient.of('#c:nuggets/gold')],
        40
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_gold', 90),
        [Ingredient.of('#c:ingots/gold')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_gold', 810),
        [Ingredient.of('#c:storage_blocks/gold')],
        810
    )
    
    bigCannonsMelting(
        Fluid.of('kubejs:molten_gold', 90),
        [Ingredient.of('#c:plates/gold')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_gold', 45),
        [Ingredient.of('#c:rods/gold')],
        90
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_gold', 45),
        [Ingredient.of('#c:wires/gold')],
        90
    )

    // Zinc
    bigCannonsMelting(
        Fluid.of('kubejs:molten_zinc', 10),
        [Ingredient.of('#c:nuggets/zinc')],
        40
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_zinc', 90),
        [Ingredient.of('#c:ingots/zinc')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_zinc', 810),
        [Ingredient.of('#c:storage_blocks/zinc')],
        810
    )
    
    bigCannonsMelting(
        Fluid.of('kubejs:molten_zinc', 90),
        [Ingredient.of('#c:plates/zinc')],
        180
    )

    // Brass
    bigCannonsMelting(
        Fluid.of('kubejs:molten_brass', 10),
        [Ingredient.of('#c:nuggets/brass')],
        40
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_brass', 90),
        [Ingredient.of('#c:ingots/brass')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_brass', 810),
        [Ingredient.of('#c:storage_blocks/brass')],
        810
    )
    
    bigCannonsMelting(
        Fluid.of('kubejs:molten_brass', 90),
        [Ingredient.of('#c:plates/brass')],
        180
    )
    bigCannonsMelting(
        Fluid.of('kubejs:molten_brass', 45),
        [Ingredient.of('#c:rods/brass')],
        90
    )
})