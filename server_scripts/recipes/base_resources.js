ServerEvents.recipes(event => {

    let recipes = event.recipes;
    let create = recipes.create;
    
    // Andesite alloy

    event.shapeless(
        Item.of('create:andesite_alloy', 4),
        [
            '3x minecraft:clay_ball',
            '3x #c:nuggets/lead',
            '3x minecraft:andesite'
        ]
    )

    create.mixing(
        Fluid.of('kubejs:andesite_compound', 100),
        [
            'minecraft:clay_ball',
            '#c:nuggets/lead',
            'minecraft:andesite'
        ]
    )

    create.mixing(
        Fluid.of('kubejs:andesite_compound', 200),
        [
            'minecraft:clay_ball',
            Fluid.of('kubejs:molten_lead', 50),
            'minecraft:andesite'
        ]
    )

    create.compacting(
        'create:andesite_alloy_block',
        Fluid.of('kubejs:andesite_compound', 900)
    )

    // Steel

    event.remove({ type: 'immersiveengineering:ingot_steel' })


});