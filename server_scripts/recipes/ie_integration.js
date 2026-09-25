ServerEvents.recipes(event => {

    event.replaceInput({ output: 'immersiveengineering:component_steel' }, 'minecraft:copper_ingot', 'create:brass_ingot')
    //event.remove({ output: 'immersiveengineering:conveyor_basic' })
    event.replaceInput({ output: '#create:casings' }, '#c:stripped_logs', 'immersiveengineering:treated_wood_horizontal')
    event.replaceInput({ output: '#create:casings' }, '#c:stripped_wood', 'immersiveengineering:treated_wood_horizontal')
    event.remove({ output: 'immersiveengineering:resonanz_engineering' })
    
    // Fluid Pipe
    event.remove({ output: 'immersiveengineering:fluid_pipe' })
    event.shaped(
        Item.of('immersiveengineering:fluid_pipe', 2),
        [
            'P',
            'I',
            'P'
        ],
        {
            P: '#c:plates/steel',
            I: '#c:ingots/steel'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:fluid_pipe', 2),
        [
            'PIP'
        ],
        {
            P: '#c:plates/steel',
            I: '#c:ingots/steel'
        }
    )

    //region Machine Blocks

    event.remove({ output: 'immersiveengineering:basic_engineering' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                tag: 'immersiveengineering:treated_wood'
            },
            {
                tag: 'c:plates/lead'
            }
        ],
        results: [
            {
                id: 'immersiveengineering:basic_engineering'
            }
        ]
    })

    event.remove({ output: 'immersiveengineering:rs_engineering' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'abyssal_decor:deepbronze_block'
            },
            {
                item: 'create:electron_tube'
            }
        ],
        results: [
            {
                id: 'immersiveengineering:rs_engineering'
            }
        ]
    })

    event.remove({ output: 'immersiveengineering:light_engineering' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'abyssal_decor:deepbronze_block'
            },
            {
                item: 'immersiveengineering:component_iron'
            }
        ],
        results: [
            {
                id: 'immersiveengineering:light_engineering'
            }
        ]
    })

    event.remove({ output: 'immersiveengineering:heavy_engineering' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'abyssal_decor:deepbronze_block'
            },
            {
                item: 'immersiveengineering:component_steel'
            }
        ],
        results: [
            {
                id: 'immersiveengineering:heavy_engineering'
            }
        ]
    })

    event.remove({ output: 'immersiveengineering:radiator' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'immersiveengineering:heavy_engineering'
            },
            {
                tag: 'c:plates/constantan'
            }
        ],
        results: [
            {
                id: 'immersiveengineering:radiator'
            }
        ]
    })

    event.remove({ output: 'immersiveengineering:generator' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'immersiveengineering:heavy_engineering'
            },
            {
                item: 'immersiveengineering:coil_mv'
            }
        ],
        results: [
            {
                id: 'immersiveengineering:generator'
            }
        ]
    })

    //endregion Machine Blocks

    //region connectors

    let connector = [
        'immersiveengineering:connector_lv',
        'immersiveengineering:connector_lv_relay',
        'immersiveengineering:connector_mv',
        'immersiveengineering:connector_mv_relay',
        'immersiveengineering:connector_hv',
        'immersiveengineering:connector_hv_relay'
    ].forEach(item => {
        event.remove({output: item});
    })

    event.shaped(
        Item.of('immersiveengineering:connector_lv', 2),
        [
            'R',
            'A',
            'R'
        ],
        {
            A: 'create:andesite_alloy',
            R: '#c:rods/copper'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:connector_lv_relay', 4),
        [
            'R',
            'A'
        ],
        {
            A: 'create:andesite_alloy',
            R: '#c:rods/copper'
        }
    )

    event.shaped(
        Item.of('immersiveengineering:connector_mv', 2),
        [
            'R',
            'A',
            'R'
        ],
        {
            A: 'create:andesite_alloy',
            R: '#c:rods/electrum'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:connector_mv_relay', 4),
        [
            'R',
            'A'
        ],
        {
            A: 'create:andesite_alloy',
            R: '#c:rods/electrum'
        }
    )

    event.shaped(
        Item.of('immersiveengineering:connector_hv', 2),
        [
            'R',
            'A',
            'R'
        ],
        {
            A: 'create:andesite_alloy',
            R: '#c:rods/aluminum'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:connector_hv_relay', 4),
        [
            'R',
            'A'
        ],
        {
            A: ['immersiveengineering:insulating_glass', 'immersiveengineering:slag_glass'],
            R: '#c:rods/aluminum'
        }
    )

    //endregion connectors

    //region accumulator

    let accumulator = [
        'immersiveengineering:capacitor_lv',
        'immersiveengineering:capacitor_mv',
        'immersiveengineering:capacitor_hv'
    ].forEach(item => {
        event.remove({output: item});
    })

    event.shaped(
        Item.of('immersiveengineering:capacitor_lv', 1),
        [
            'BRB',
            'CAC'
        ],
        {
            A: 'immersiveengineering:basic_engineering',
            B: '#c:plates/electrum',
            C: 'createaddition:capacitor',
            R: 'immersiveengineering:redstone_acid_bucket'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:capacitor_mv', 1),
        [
            'BRB',
            'CAC'
        ],
        {
            A: 'immersiveengineering:capacitor_lv',
            B: '#c:plates/aluminum',
            C: 'immersiveengineering:plate_hop_graphite',
            R: 'immersiveengineering:component_electronic'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:capacitor_hv', 1),
        [
            'BRB',
            'CAC'
        ],
        {
            A: ['immersiveengineering:capacitor_lv', 'immersiveengineering:capacitor_mv'],
            B: '#c:plates/aluminum',
            C: 'cataclysm:ancient_metal_ingot',
            R: 'immersiveengineering:component_electronic_adv'
        }
    )
    event.shaped(
        Item.of('immersiveengineering:capacitor_hv', 2),
        [
            'R',
            'A',
            'B'
        ],
        {
            A: 'immersiveengineering:basic_engineering',
            B: 'cataclysm:ignitium_ingot',
            R: 'immersiveengineering:component_electronic_adv'
        }
    )
    
    //endregion accumulator

    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": {
            "tag": "c:plates/brass"
        },
        "energy": 120,
        "input0": {
            "amount": 8,
            "fluid": "kubejs:polymer_resin"
        },
        "result": {
            "amount": 8,
            "id": "immersiveengineering:phenolic_resin"
        }
    })
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": {
            "tag": "c:plates/zinc"
        },
        "energy": 120,
        "input0": {
            "amount": 8,
            "fluid": "immersiveengineering:phenolic_resin"
        },
        "result": {
            "amount": 8,
            "id": "kubejs:polymer_resin"
        }
    })

    event.custom({
        type: "immersiveengineering:coke_oven",
        creosote: 500,
        input: {
            basePredicate: {
              item: 'minecraft:charcoal'
            },
            count: 64
        },
        result: {
            tag: 'c:coal_coke'
        },
        time: 12000
    })
})