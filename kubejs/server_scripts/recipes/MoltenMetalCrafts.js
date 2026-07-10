ServerEvents.recipes(event => {
        const moltenMetalnoGrit = (item, crushed_item, block, fluid) => {
        event.custom({
            "type": "create:mixing",
            "heat_requirement": "heated",
            "ingredients": [
                {
                    "item": item
                }
            ],
            "results": [
                {
                    "amount": 100,
                    "id": fluid
                }
            ]
        })
        event.custom({
            "type": "create:mixing",
            "heat_requirement": "heated",
            "ingredients": [
                {
                    "item": crushed_item
                }
            ],
            "results": [
                {
                    "amount": 150,
                    "id": fluid

                }
            ]
        })
        event.custom({
            "type": "create:mixing",
            "heat_requirement": "superheated",
            "ingredients": [
                {
                    "item": crushed_item
                }
            ],
            "results": [
                {
                    "amount": 200,
                    "id": fluid

                }
            ]
        })
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "type": "neoforge:single",
                    "amount": 900,
                    "fluid": fluid
                }
            ],
            "results": [
                {
                    "id": block
                }
            ]
        })
    }
    const moltenMetal = (item, crushed_item, block, fluid, grit) => {
        event.custom(
            {
                "type": "immersiveengineering:crusher",
                "energy": 54000,
                "input": {
                    "item": crushed_item
                },
                "result": {
                    "item": grit
                },
                "secondaries": [
                    {
                        "chance": 0.33333334,
                        "output": {
                            "item": grit
                        }
                    }
                ]
            }
        )
        event.custom({
            "type": "create:mixing",
            "heat_requirement": "heated",
            "ingredients": [
                {
                    "item": item
                }
            ],
            "results": [
                {
                    "amount": 100,
                    "id": fluid
                }
            ]
        })
        event.custom({
            "type": "create:mixing",
            "heat_requirement": "heated",
            "ingredients": [
                {
                    "item": crushed_item
                }
            ],
            "results": [
                {
                    "amount": 150,
                    "id": fluid

                }
            ]
        })
        event.custom({
            "type": "create:mixing",
            "heat_requirement": "superheated",
            "ingredients": [
                {
                    "item": crushed_item
                }
            ],
            "results": [
                {
                    "amount": 200,
                    "id": fluid

                }
            ]
        })
        event.custom({
            "type": "create:mixing",
            "heat_requirement": "heated",
            "ingredients": [
                {
                    "item": grit
                }
            ],
            "results": [
                {
                    "amount": 150,
                    "id": fluid

                }
            ]
        })
        event.custom({
            "type": "create:mixing",
            "heat_requirement": "superheated",
            "ingredients": [
                {
                    "item": grit
                }
            ],
            "results": [
                {
                    "amount": 200,
                    "id": fluid

                }
            ]
        })
        event.custom({
            "type": "create:compacting",
            "ingredients": [
                {
                    "type": "neoforge:single",
                    "amount": 900,
                    "fluid": fluid
                }
            ],
            "results": [
                {
                    "id": block
                }
            ]

        })
    }
    //moltenMetal("createnuclear:lead_ingot", "create:crushed_raw_lead", "createnuclear:lead_block", "kubejs:molten_lead", "immersiveengineering:dust_lead");
    moltenMetal("minecraft:iron_ingot", "create:crushed_raw_iron", "minecraft:iron_block", "kubejs:molten_iron", "immersiveengineering:dust_iron");
    moltenMetal("minecraft:copper_ingot", "create:crushed_raw_copper", "minecraft:copper_block", "kubejs:molten_copper", "immersiveengineering:dust_copper");
    moltenMetal("minecraft:gold_ingot", "create:crushed_raw_gold", "minecraft:gold_block", "kubejs:molten_gold", "immersiveengineering:dust_gold");
    moltenMetalnoGrit("create:zinc_ingot", "create:crushed_raw_zinc", "create:zinc_block", "kubejs:molten_zinc");

    //molten brass
    event.remove({ output: 'create:brass_ingot', not: [{ type: 'minecraft:crafting_shaped' }, { type: 'minecraft:crafting_shapeless' }] });
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 450,
                "fluid": "kubejs:molten_copper"
            },
            {
                "type": "neoforge:single",
                "amount": 450,
                "fluid": "kubejs:molten_zinc"
            }
        ],
        "results": [
            {
                "amount": 900,
                "id": "kubejs:molten_brass"
            }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 900,
                "fluid": "kubejs:molten_brass"
            }
        ],
        "results": [
            {
                "id": "create:brass_block"
            }
        ]
    })
})