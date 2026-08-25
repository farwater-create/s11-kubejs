ServerEvents.recipes(event => {

    const moltenMetalnoGrit = (item, crushed_item, block, fluid) => {

        event.recipes.create.mixing(
            Fluid.of(fluid, 100),
            item
        ).heated()

        event.recipes.create.mixing(
            Fluid.of(fluid, 150),
            crushed_item
        ).heated()

        event.recipes.create.mixing(
            Fluid.of(fluid, 200),
            crushed_item
        ).superheated()

        event.recipes.create.compacting(
            block,
            Fluid.of(fluid, 900)
        )
    }


    function moltenMetal(item, crushedItem, block, fluid, grit) {

        // IE Crushing
        event.custom(
            {
                type: 'immersiveengineering:crusher',
                energy: 54000,
                input: Ingredient.of(crushedItem).toJson(),
                result: Item.of(item).toJson(),
                secondaries: [
                    {
                        "chance": 0.33333334,
                        "output": {
                            "item": grit
                        }
                    }
                ]
            }
        )

        event.recipes.create.mixing(
            Fluid.of(fluid, 100),
            item
        ).heated()

        event.recipes.create.mixing(
            Fluid.of(fluid, 150),
            crushed_item
        ).heated()

        event.recipes.create.mixing(
            Fluid.of(fluid, 200),
            crushed_item
        ).superheated()

        event.recipes.create.mixing(
            Fluid.of(fluid, 150),
            grit
        ).heated()

        event.recipes.create.mixing(
            Fluid.of(fluid, 200),
            grit
        ).superheated()

        event.recipes.create.compacting(
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


    // Andesite alloy

    event.remove({
        output: 'create:andesite_alloy',
        not: {
            type: 'create:sequenced_assembly'
        }
    })

    event.shapeless(
        Item.of('create:andesite_alloy', 9),
        [
            'create:andesite_alloy_block'
        ]
    )

    event.shapeless(
        Item.of('create:andesite_alloy', 2),
        [
            '3x minecraft:clay_ball',
            '3x #c:nuggets/lead',
            '3x minecraft:andesite'
        ]
    )

    event.recipes.create.mixing(
        Fluid.of('kubejs:andesite_compound', 100),
        [
            'minecraft:clay_ball',
            'createnuclear:lead_nugget',
            'minecraft:andesite'
        ]
    )

    event.recipes.create.mixing(
        Fluid.of('kubejs:andesite_compound', 200),
        [
            'minecraft:clay_ball',
            Fluid.of('kubejs:molten_lead', 50),
            'minecraft:andesite'
        ]
    )

    event.recipes.create.compacting(
        'create:andesite_alloy_block',
        Fluid.of('kubejs:andesite_compound', 900)
    )


    // Molten brass

    event.remove({
        output: 'create:brass_ingot',
        not: [
            { type: 'minecraft:crafting_shaped' },
            { type: 'minecraft:crafting_shapeless' }
        ]
    })

    event.recipes.create.mixing(
        Fluid.of('kubejs:molten_brass', 900),
        [
            Fluid.of('kubejs:molten_copper', 450),
            Fluid.of('kubejs:molten_zinc', 450)
        ]
    ).superheated()

    event.recipes.create.compacting(
        'create:brass_block',
        Fluid.of('kubejs:molten_brass', 900)
    )
})