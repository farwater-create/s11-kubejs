ServerEvents.recipes(event => {
    //andesite more expensive
    event.remove({ output: 'create:andesite_alloy', not: { type: 'create:sequenced_assembly' } });
    event.shapeless(Item.of('create:andesite_alloy', 9), // arg 1: output
        [
            '1x create:andesite_alloy_block'
        ])
    event.shapeless(Item.of('create:andesite_alloy', 1),
        [
            '1x cataclysm:black_steel_nugget',
            '1x minecraft:andesite'
        ])
    event.shapeless(Item.of('create:andesite_alloy', 3),
        [
            '1x minecraft:iron_ingot',
            '8x minecraft:andesite'
        ])
    event.shaped(
        Item.of('create:andesite_alloy', 2),
        [
            'CCC',
            'LLL',
            'AAA'
        ],
        {
            C: 'minecraft:clay_ball',
            L: "immersiveengineering:nugget_lead",
            A: 'minecraft:andesite'
        }
    );
    event.recipes.create.mixing(
        [Item.of('create:andesite_alloy')],
        [Item.of("minecraft:clay_ball"), Item.of("immersiveengineering:nugget_lead"), Item.of("minecraft:andesite")]
    ).processingTime(50);
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:clay_ball"
            },
            {
                "type": "neoforge:single",
                "amount": 50,
                "fluid": "kubejs:molten_lead"
            },
            {
                "item": "minecraft:andesite"
            }
        ],
        "results": [
            {
                "amount": 200,
                "id": "kubejs:andesite_compound"

            }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 900,
                "fluid": "kubejs:andesite_compound"
            }
        ],
        "results": [
            {
                "id": "create:andesite_alloy_block"
            }
        ]

    })
})