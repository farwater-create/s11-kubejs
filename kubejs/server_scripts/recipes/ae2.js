ServerEvents.recipes(event => {
    event.remove({output:'ae2:inscriber'});
        event.shaped(
        Item.of('ae2:inscriber', 1),
        [
            'SRS',
            'S S',
            'CLE'
        ],
        {
            C: 'ae2:calculation_processor',
            R: 'kubejs:redstone_circuit',
            S: 'immersiveengineering:ingot_steel',
            L: 'ae2:logic_processor',
            E: 'ae2:engineering_processor'
        }
    )
    // Disabled, Create Nuclear Deletion
    //event.custom({
    //    "type": "create:filling",
    //    "ingredients": [
    //        {
    //            "item": "ae2:certus_quartz_dust"
    //        },
    //        {
    //            "type": "neoforge:single",
    //            "amount": 10,
    //            "fluid": "createnuclear:uranium"
    //        }
    //    ],
    //    "results": [
    //        {
    //            "chance":0.3,
    //            "id": "ae2:fluix_crystal"
    //        }
    //    ]
    //})
    event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "ae2:silicon"
            },
            "results": [
                {
                    "chance": 1,
                    "id": "ae2:calculation_processor"
                },
                {
                    "chance": 1,
                    "id": "ae2:certus_quartz_dust"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_calculation_processor"
                        },
                        {
                            "item": "ae2:certus_quartz_crystal"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_calculation_processor"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_calculation_processor"
                        },
                        {
                            "type": "neoforge:single",
                            "amount": 100,
                            "fluid": "kubejs:molten_gold"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_calculation_processor"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_calculation_processor"
                        },
                        {
                            "item": "minecraft:redstone"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_calculation_processor"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_calculation_processor"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_calculation_processor"
                        }
                    ]
                }
            ],
            "loops": 3,
            "transitional_item": {
                "id": "createappliedkinetics:incomplete_calculation_processor"
            }
        }
    )
    event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "ae2:silicon"
            },
            "results": [
                {
                    "chance": 1,
                    "id": "ae2:engineering_processor"
                },
                {
                    "chance": 1,
                    "id": "minecraft:diamond"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_engineering_processor"
                        },
                        {
                            "item": "minecraft:diamond"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_engineering_processor"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_engineering_processor"
                        },
                        {
                            "type": "neoforge:single",
                            "amount": 200,
                            "fluid": "kubejs:molten_copper"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_engineering_processor"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_engineering_processor"
                        },
                        {
                            "item": "minecraft:redstone"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_engineering_processor"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_engineering_processor"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_engineering_processor"
                        }
                    ]
                }
            ],
            "loops": 3,
            "transitional_item": {
                "id": "createappliedkinetics:incomplete_engineering_processor"
            }
        }
    )
    event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "ae2:silicon"
            },
            "results": [
                {
                    "chance": 1,
                    "id": "ae2:logic_processor"
                },
                {
                    "chance": 1,
                    "id": "immersiveengineering:wirecoil_electrum"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_logic_processor"
                        },
                        {
                            "item": "immersiveengineering:wirecoil_electrum"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_logic_processor"
                        }
                    ]
                },
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_logic_processor"
                        },
                        {
                            "type": "neoforge:single",
                            "amount": 200,
                            "fluid": "kubejs:andesite_compound"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_logic_processor"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_logic_processor"
                        },
                        {
                            "item": "minecraft:redstone"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_logic_processor"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "createappliedkinetics:incomplete_logic_processor"
                        }
                    ],
                    "results": [
                        {
                            "id": "createappliedkinetics:incomplete_logic_processor"
                        }
                    ]
                }
            ],
            "loops": 3,
            "transitional_item": {
                "id": "createappliedkinetics:incomplete_logic_processor"
            }
        }
    )
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "ae2:certus_quartz_crystal"
            },
            {
                "item": "ae2:quartz_block"
            },
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "ae2:damaged_budding_quartz"
            }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "ae2:certus_quartz_crystal"
            },
            {
                "item": "ae2:damaged_budding_quartz"
            },
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "ae2:chipped_budding_quartz"
            }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "ae2:certus_quartz_crystal"
            },
            {
                "item": "ae2:chipped_budding_quartz"
            },
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "id": "ae2:flawed_budding_quartz"
            }
        ]
    })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "ae2:flawed_budding_quartz"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "ae2:certus_quartz_crystal"
            },
            {
                "chance":0.9,
                "id": "ae2:flawed_budding_quartz"
            }
        ]
    })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "ae2:flawless_budding_quartz"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "ae2:certus_quartz_crystal"
            },
            {
                "id": "ae2:flawed_budding_quartz"
            }
        ]
    })
    
})