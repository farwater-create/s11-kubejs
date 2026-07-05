ServerEvents.recipes(event => {
    //helper functions
    //melting
    
    //ore automation
    event.replaceInput({output:'create:deployer'},'create:electron_tube','create:polished_rose_quartz');
    //electron tubes
    event.remove({ output: 'create:electron_tube' })
    event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "createaddition:zinc_sheet"
            },
            "results": [
                {
                    "count": 3,
                    "id": "create:electron_tube"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createaddition:zinc_sheet"
                        },
                        {
                            "item": "create:polished_rose_quartz"
                        }
                    ],
                    "results": [
                        {
                            "id": "createaddition:zinc_sheet"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "createaddition:zinc_sheet"
                        },
                        {
                            "type": "neoforge:single",
                            "amount": 100,
                            "fluid": "kubejs:polymer_resin"
                        }
                    ],
                    "results": [
                        {
                            "id": "createaddition:zinc_sheet"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createaddition:zinc_sheet"
                        },
                        {
                            "item": "createaddition:copper_wire"
                        }
                    ],
                    "results": [
                        {
                            "id": "createaddition:zinc_sheet"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "createaddition:zinc_sheet"
                        }
                    ],
                    "results": [
                        {
                            "id": "createaddition:zinc_sheet"
                        }
                    ]
                }
            ],
            "loops": 3,
            "transitional_item": {
                "id": "createaddition:zinc_sheet"
            }
        }
    )
    //redstone_circuit
    event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "create:sturdy_sheet"
            },
            "results": [
                {
                    "id": "kubejs:redstone_circuit"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "create:sturdy_sheet"
                        },
                        {
                            "item": "create:electron_tube"
                        }
                    ],
                    "results": [
                        {
                            "id": "create:sturdy_sheet"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "create:sturdy_sheet"
                        },
                        {
                            "item": "createaddition:electrum_wire"
                        }
                    ],
                    "results": [
                        {
                            "id": "create:sturdy_sheet"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "create:sturdy_sheet"
                        },
                        {
                            "item": "createaddition:capacitor"
                        }
                    ],
                    "results": [
                        {
                            "id": "create:sturdy_sheet"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "create:sturdy_sheet"
                        },
                        {
                            "item": "minecraft:redstone"
                        }
                    ],
                    "results": [
                        {
                            "id": "create:sturdy_sheet"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "create:sturdy_sheet"
                        },
                        {
                            "type": "neoforge:single",
                            "amount": 100,
                            "fluid": "kubejs:molten_copper"
                        }
                    ],
                    "results": [
                        {
                            "id": "create:sturdy_sheet"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "create:sturdy_sheet"
                        },
                        {
                            "type": "neoforge:single",
                            "amount": 100,
                            "fluid": "kubejs:polymer_resin"
                        }
                    ],
                    "results": [
                        {
                            "id": "create:sturdy_sheet"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "create:sturdy_sheet"
                        }
                    ],
                    "results": [
                        {
                            "id": "create:sturdy_sheet"
                        }
                    ]
                }
            ],
            "loops": 3,
            "transitional_item": {
                "id": "create:sturdy_sheet"
            }
        }
    )
    //oil processing
    //nuclear enrichment
    
    //uses for redstone circuits
    event.replaceInput({ output: 'createaddition:tesla_coil' }, 'create:electron_tube', 'kubejs:redstone_circuit');
    event.replaceInput({ output: 'create:factory_gauge' }, 'create:stock_link', 'kubejs:redstone_circuit');
    //charging super experience
    event.custom({
        "type": "createaddition:charging",
        "energy": 20000,
        "ingredients": [
            {
                "item": "create:experience_block"
            }
        ],
        "max_charge_rate": 3600,
        "results": [
            {
                "id": "create_enchantment_industry:super_experience_nugget"
            }
        ]
    })
    event.replaceInput({ output: 'create_enchantment_industry:experience_cake_base' }, 'minecraft:egg', 'create_enchantment_industry:super_experience_nugget');
    //dragons breath
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "type": "neoforge:components",
                "amount": 25,
                "components": {
                    "create:potion_fluid_bottle_type": "regular",
                    "minecraft:potion_contents": {
                        "potion": "createnuclear:potion_of_radiation_1"
                    }
                },
                "fluids": "create:potion"
            },
            {
                "type": "neoforge:components",
                "amount": 25,
                "components": {
                    "create:potion_fluid_bottle_type": "regular",
                    "minecraft:potion_contents": {
                        "potion": "minecraft:swiftness"
                    }
                },
                "fluids": "create:potion"
            },
            {
                "item": "create_enchantment_industry:super_experience_nugget"
            }
        ],
        "results": [
            {
                "amount": 1,
                "id": "create_dragons_plus:dragons_breath"

            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:wither_skeleton_skull"
            },
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "create_dragons_plus:dragons_breath"
            }
        ],
        "results": [
            {
                "id": "minecraft:dragon_head"
            }
        ]
    })
    event.remove({ id: 'create_dragons_plus:ending/end_stone_from_cobblestone' })
    event.custom({
        "type": "createaddition:charging",
        "energy": 30000,
        "ingredients": [
            {
                "item": "minecraft:purpur_block"
            }
        ],
        "max_charge_rate": 3600,
        "results": [
            {
                "id": "minecraft:end_stone"
            }
        ]
    })
    event.custom({
        "type": "createaddition:charging",
        "energy": 30000,
        "ingredients": [
            {
                "item": "minecraft:chorus_fruit"
            }
        ],
        "max_charge_rate": 3600,
        "results": [
            {
                "id": "minecraft:chorus_flower"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:popped_chorus_fruit"
            },
            {
                "type": "neoforge:single",
                "amount": 50,
                "fluid": "aeronautics:levitite_blend"
            }
        ],
        "results": [
            {
                "id": "minecraft:purpur_block"
            }
        ]
    })
    event.shaped(Item.of('minecraft:elytra', 1),
        [
            'CCC',
            'PBP',
            'P P'
        ],
        {
            C: 'kubejs:redstone_circuit',
            P: 'minecraft:phantom_membrane',
            B: 'aeronautics:levitite_blend_bucket',
        }

    )
    //make gas burn
    event.custom({
        "type": "createaddition:liquid_burning",
        "burn_time": 600,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "kubejs:natural_gas"
            }
        ],
        "results": [],
        "superheated": true
    })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:obsidian"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "create:powdered_obsidian"
            }
        ]
    }
    )
    event.replaceInput({output:'create:smart_fluid_pipe'},'create:electron_tube','create:polished_rose_quartz');
    //ac compat
    /*
    event.remove({output:'alexscaves:uranium_rod'});
    event.replaceInput({input:'alexscaves:uranium_rod'},'alexscaves:uranium_rod','createnuclear:uranium_rod');
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "alexscaves:uranium_shard"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "chance": 0.5,
                "id": "createnuclear:uranium_powder"
            }
        ]
    })
    event.shaped(Item.of('alexscaves:uranium_rod', 5),
        [
            ' P ',
            ' U ',
            ' P '
    ],
        {
            P: 'createnuclear:lead_ingot',
            U: 'createnuclear:uranium_rod',
    })*/

}
)

