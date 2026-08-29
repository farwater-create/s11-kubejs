ServerEvents.recipes(event => {

    let recipes = event.recipes;
    let create = recipes.create;

    const moltenMetalnoGrit = (item, crushed_item, block, fluid) => {

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
    }


    function moltenMetal(item, crushedItem, block, fluid, grit) {

        // IE Crushing
        event.custom({
            type: 'immersiveengineering:crusher',
            energy: 54000,
            input: Ingredient.of(crushedItem).toJson(),
            result: Item.of(item).toJson(),
            secondaries: [
                {
                    chance: 0.33333334,
                    output: {
                        item: grit
                    }
                }
            ]
        })

        create.mixing(
            Fluid.of(fluid, 100),
            item
        ).heated()

        create.mixing(
            Fluid.of(fluid, 150),
            crushedItem
        ).heated()

        create.mixing(
            Fluid.of(fluid, 200),
            crushedItem
        ).superheated()

        create.mixing(
            Fluid.of(fluid, 150),
            grit
        ).heated()

        create.mixing(
            Fluid.of(fluid, 200),
            grit
        ).superheated()

        create.compacting(
            block,
            Fluid.of(fluid, 900)
        )
    }


    // Molten metals

    moltenMetal(
        'immersiveengineering:ingot_lead',
        'create:crushed_raw_lead',
        'immersiveengineering:storage_lead',
        'kubejs:molten_lead',
        'immersiveengineering:dust_lead'
    )

    moltenMetal(
        'minecraft:iron_ingot',
        'create:crushed_raw_iron',
        'minecraft:iron_block',
        'kubejs:molten_iron',
        'immersiveengineering:dust_iron'
    )

    moltenMetal(
        'minecraft:copper_ingot',
        'create:crushed_raw_copper',
        'minecraft:copper_block',
        'kubejs:molten_copper',
        'immersiveengineering:dust_copper'
    )

    moltenMetal(
        'minecraft:gold_ingot',
        'create:crushed_raw_gold',
        'minecraft:gold_block',
        'kubejs:molten_gold',
        'immersiveengineering:dust_gold'
    )

    moltenMetalnoGrit(
        'create:zinc_ingot',
        'create:crushed_raw_zinc',
        'create:zinc_block',
        'kubejs:molten_zinc'
    )


    // Molten brass

    event.remove({
        output: 'create:brass_ingot',
        not: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
        ]
    })

    create.mixing(
        Fluid.of('kubejs:molten_brass', 900),
        [
            Fluid.of('kubejs:molten_copper', 450),
            Fluid.of('kubejs:molten_zinc', 450)
        ]
    ).superheated()

    create.compacting(
        'create:brass_block',
        Fluid.of('kubejs:molten_brass', 900)
    )
})