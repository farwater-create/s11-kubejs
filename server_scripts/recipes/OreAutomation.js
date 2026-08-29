ServerEvents.recipes(event => {

    // Gravel milling
    event.remove({
        type: 'create:milling',
        input: 'minecraft:gravel'
    })

    event.recipes.create.milling(
        [
            'minecraft:flint',
            CreateItem.of('minecraft:sand', 0.5)
        ],
        'minecraft:gravel'
    ).processingTime(500)

    // Lava + flint -> deepslate
    event.recipes.create.compacting(
        'minecraft:deepslate',
        [
            Fluid.of('minecraft:lava', 100),
            Item.of('minecraft:flint', 4)
        ]
    )

    // Cinder flour + cobblestone + lava -> netherrack
    event.recipes.create.compacting(
        'minecraft:netherrack',
        [
            Fluid.of('minecraft:lava', 10),
            'create:cinder_flour',
            'minecraft:cobblestone'
        ]
    )

    // Deepslate + terracotta + polished cut dripstone -> pointed dripstone
    event.recipes.create.mixing(
        Item.of('minecraft:pointed_dripstone', 16),
        [
            'minecraft:deepslate',
            'minecraft:terracotta',
            'create:polished_cut_dripstone'
        ]
    ).heated()


    // Dripstone -> copper veridium
    event.recipes.create.filling(
        Item.of('create:veridium', 3),
        [
            'minecraft:dripstone_block',
            Fluid.of('kubejs:molten_copper', 10)
        ]
    )


    // Dripstone -> gold ochrum
    event.recipes.create.filling(
        Item.of('create:ochrum', 3),
        [
            'minecraft:dripstone_block',
            Fluid.of('kubejs:molten_gold', 10)
        ]
    )


    // Dripstone -> zinc asurine
    event.recipes.create.filling(
        Item.of('create:asurine', 3),
        [
            'minecraft:dripstone_block',
            Fluid.of('kubejs:molten_zinc', 10)
        ]
    )


    // Dripstone -> iron crimsite
    event.recipes.create.filling(
        Item.of('create:crimsite', 3),
        [
            'minecraft:dripstone_block',
            Fluid.of('kubejs:molten_iron', 10)
        ]
    )


    // Dripstone -> lead scorchia
    event.recipes.create.filling(
        Item.of('create:scorchia', 3),
        [
            'minecraft:dripstone_block',
            Fluid.of('kubejs:molten_lead', 10)
        ]
    )

    // Scorchia crushing
    event.recipes.create.crushing(
        [
            CreateItem.of('create:crushed_raw_lead', 0.4),
            CreateItem.of('immersiveengineering:nugget_lead', 0.2)
        ],
        'create:scorchia'
    ).processingTime(250)


    // Crimsite milling
    event.recipes.create.milling(
        [
            'minecraft:sand',
            CreateItem.of('create:crushed_raw_iron', 0.3)
        ],
        'create:crimsite'
    ).processingTime(500)


    // Ochrum milling
    event.recipes.create.milling(
        [
            'minecraft:sand',
            CreateItem.of('create:crushed_raw_gold', 0.2)
        ],
        'create:ochrum'
    ).processingTime(500)


    // Veridium milling
    event.recipes.create.milling(
        [
            'minecraft:sand',
            CreateItem.of('create:crushed_raw_copper', 0.5)
        ],
        'create:veridium'
    ).processingTime(500)


    // Asurine milling
    event.recipes.create.milling(
        [
            'minecraft:sand',
            CreateItem.of('create:crushed_raw_zinc', 0.2)
        ],
        'create:asurine'
    ).processingTime(500)


    // Scorchia milling
    event.recipes.create.milling(
        [
            'minecraft:sand',
            CreateItem.of('create:crushed_raw_lead', 0.3)
        ],
        'create:scorchia'
    ).processingTime(500)

})