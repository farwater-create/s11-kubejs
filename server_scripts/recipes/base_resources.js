ServerEvents.recipes(event => {

    let recipes = event.recipes;
    let create = recipes.create;
    
    //region Andesite alloy

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
    );

    create.mixing(
        Fluid.of('kubejs:andesite_compound', 200),
        [
            'minecraft:clay_ball',
            Fluid.of('kubejs:molten_lead', 50),
            'minecraft:andesite'
        ]
    );

    create.compacting(
        'create:andesite_alloy_block',
        Fluid.of('kubejs:andesite_compound', 900)
    );

    create.mixing(
        Fluid.of('kubejs:andesite_compound', 200),
        [
            'minecraft:clay_ball',
            Fluid.of('kubejs:molten_lead', 50),
            'minecraft:andesite'
        ]
    );
    //endregion Andesite alloy

    //region brass

    let brass = 'create:brass_ingot';
    let brassBlock = 'create:brass_block';
    let brassNugget = 'create:brass_nugget';

    global.removeMetalRecipe(event, brass);
    global.removeMetalRecipe(event, brassBlock);
    global.removeMetalRecipe(event, brassNugget);

    global.moltenMetal(event,
              ['minecraft:copper_ingot', 'create:zinc_ingot'],
        ['create:crushed_raw_copper', 'create:crushed_raw_zinc'],
        'kubejs:molten_brass', brass, brassBlock
        );

    event.remove({type: 'create:automated_packing', input: brass});

    //endregion brass

});