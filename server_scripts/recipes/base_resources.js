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

    global.moltenMetal(create,
              ['minecraft:copper_ingot', 'create:zinc_ingot'],
        ['create:crushed_raw_copper', 'create:crushed_raw_zinc'],
        'kubejs:molten_brass', brass, brassBlock
        );

    event.remove({type: 'create:automated_packing', input: brass});

    //endregion brass


    let craftOnly = [

        'abyssal_decor:deepbronze_ingot',
        'abyssal_decor:bellmetal_ingot',
        'abyssal_decor:moonsilver_ingot',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:dust_constantan',
        'immersiveengineering:ingot_steel',
        'immersiveengineering:dust_steel',

    ];

    craftOnly.forEach(item => {
        event.remove({output: item});
    })

    event.recipes.create.crushing('immersiveengineering:dust_gold', 'minecraft:gold_ingot');
    event.recipes.create.crushing('immersiveengineering:dust_silver', 'immersiveengineering:ingot_silver');
    event.remove({input: 'immersiveengineering:grit_electrum', output: 'immersiveengineering:ingot_electrum'});
    event.remove({input: 'immersiveengineering:ingot_silver', output: 'immersiveengineering:ingot_electrum'});
    event.replaceInput(
        { input: 'minecraft:gold_ingot', output: 'immersiveengineering:ingot_electrum' },
        'minecraft:gold_ingot',
        'immersiveengineering:grit_electrum'
    );

});