

global.removeMetalRecipe = (event, metal) => {
    //for keeping ingot to/from block recipe
    event.remove({
        output: metal,
        not: [
            {type: 'minecraft:crafting_shaped'},
            {type: 'minecraft:crafting_shapeless'}
        ]
    });
};

global.moltenMetal = (event, inputs, inputs_crushed, fluid, ingot, block) => {

    let c = event.recipes.create;

    c.mixing(
        Fluid.of(fluid, 100),
        item
    ).heated()

    c.mixing(
        Fluid.of(fluid, 150),
        crushed_item
    ).heated()

    c.mixing(
        Fluid.of(fluid, 200),
        crushed_item
    ).superheated()

    c.compacting(
        block,
        Fluid.of(fluid, 900)
    )

    c.compacting(
        ingot,
        Fluid.of(fluid, 100)
    )
};