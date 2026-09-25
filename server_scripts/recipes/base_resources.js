ServerEvents.recipes(event => {

    let recipes = event.recipes;
    let create = recipes.create;

    //region Andesite alloy

    event.shapeless(
        Item.of('create:andesite_alloy', 6),
        [
            '3x minecraft:clay_ball',
            '3x #c:nuggets/lead',
            '3x minecraft:andesite'
        ]
    ).id('kubejs:base_resources/andesite_alloy_from_lead_manual_only')

    create.mixing(
        Fluid.of('kubejs:andesite_compound', 180),
        [
            'minecraft:clay_ball',
            'minecraft:andesite',
            Ingredient.of('#c:nuggets/lead')
        ]
    ).heated();

    create.mixing(
        Fluid.of('kubejs:andesite_compound', 180),
        [
            'minecraft:clay_ball',
            'minecraft:andesite',
            Fluid.of('kubejs:molten_lead', 10)
        ]
    );

    create.compacting(
        'create:andesite_alloy',
        Fluid.of('kubejs:andesite_compound', 90)
    );

    //endregion Andesite alloy

    event.remove({input: 'minecraft:iron_ingot', output: 'abyssal_decor:moonsilver_ingot'});
    event.remove({input: 'minecraft:gold_ingot', output: 'abyssal_decor:seabrass_ingot'});
    event.remove({input: 'abyssal_decor:seabrass_ingot', output: 'abyssal_decor:deepbronze_ingot'});
    event.replaceInput(
        {output: 'abyssal_decor:bellmetal_ingot'},
        'abyssal_decor:seabrass_ingot',
        Ingredient.of('createbigcannons:cast_iron_ingot')
    );

    event.recipes.create.crushing('immersiveengineering:dust_gold', 'minecraft:gold_ingot');
    event.recipes.create.crushing('immersiveengineering:dust_silver', 'immersiveengineering:ingot_silver');
    event.remove({output: 'immersiveengineering:ingot_electrum'});

    event.shapeless(
        Item.of('immersiveengineering:ingot_electrum', 1),
        [
            '9x immersiveengineering:nugget_electrum'
        ]
    );
    event.shapeless(
        Item.of('immersiveengineering:ingot_electrum', 9),
        ['immersiveengineering:storage_electrum']
    )

    event.custom({
        "type": "immersiveengineering:alloy",
            "input0": {
            "item": "immersiveengineering:dust_gold"
        },
        "input1": {
            "item": "immersiveengineering:dust_silver"
        },
        "result": {
            "basePredicate": {
                "tag": "c:ingots/electrum"
            },
            "count": 2
        }
    });

    event.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "item": "immersiveengineering:dust_electrum"
        },
        "input1": {
            "item": "immersiveengineering:dust_electrum"
        },
        "result": {
            "basePredicate": {
                "tag": "c:ingots/electrum"
            },
            "count": 2
        }
    });

    create.mixing(
        ['abyssal_decor:seabrass_ingot', 'abyssal_decor:seabrass_catalyst',
            CreateItem.of('minecraft:prismarine_crystals', 0.95)],

        [Fluid.of('kubejs:molten_brass', 90), 'abyssal_decor:seabrass_catalyst',
            'minecraft:prismarine_crystals']
    );
});