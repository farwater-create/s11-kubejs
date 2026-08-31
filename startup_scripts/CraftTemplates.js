

global.removeMetalRecipe = (event, metal) => {
    //for keeping ingot to/from block recipe
    event.remove({
        output: metal,
        not: { any: [
            {type: 'minecraft:crafting_shaped'},
            {type: 'minecraft:crafting_shapeless'}
        ]
    }});
};

global.moltenMetal = (event, inputs, inputs_crushed, fluid, ingot, block) => {

    create.mixing(
        Fluid.of(fluid, 100),
        item
    ).heated()

    create.mixing(
        Fluid.of(fluid, 150),
        crushed_item
    ).heated()

    create.mixing(
        Fluid.of(fluid, 200),
        crushed_item
    ).superheated()

    create.compacting(
        block,
        Fluid.of(fluid, 900)
    )

    create.compacting(
        ingot,
        Fluid.of(fluid, 100)
    )
};