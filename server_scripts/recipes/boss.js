ServerEvents.recipes(event => {
    event.custom({//witherite for cheaper steel
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {
            "tag": "c:ingots/iron"
        },
        "mold": "cataclysm:witherite_block",
        "result": {
            "item": "immersiveengineering:ingot_steel"
        }
    })
    event.custom({//ancient metal for coal liquification
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item":"immersiveengineering:coal_coke"
            },
            {
                "item":"cataclysm:ancient_metal_ingot"
            }
        ],
        "results": [
            {
                "amount": 150,
                "id": "createdieselgenerators:crude_oil"
            },
            {
                "id":"cataclysm:ancient_metal_ingot"
            }
        ]
    })
    event.custom({//monstrous horn for netherite automation
        "type": "create:compacting",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item":"minecraft:crying_obsidian",
                "count":3
            },
            {
                "item":"minecraft:gold_ingot",
                "count":3
            },
            {
                "item":"cataclysm:monstrous_horn"
            }
        ],
        "results": [
            {
                "chance":0.3,
                "id": "minecraft:ancient_debris"
            },
            {
                "id":"cataclysm:monstrous_horn"
            }
        ]
    })
    event.custom({//essence of the storm for god apples
        "type": "create:mixing",
        "ingredients": [
            {
                "item":"minecraft:golden_apple"
            },
            {
                "type": "neoforge:single",
                "fluid":"create_enchantment_industry:experience",
                "amount":1000
            },
            
            {
                "item":"cataclysm:essence_of_the_storm"
            }
        ],
        "results": [
            {
                "chance":0.2,
                "id": "minecraft:enchanted_golden_apple"
            },
            {
                "id":"cataclysm:essence_of_the_storm"
            }
        ]
    })
    event.custom({//ignitium for cheaper steel
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {
            "tag": "c:storage_blocks/coal_coke",

        },
        "mold": "cataclysm:ignitium_block",
        "result": {
            "item": "minecraft:diamond",
            "count":3
        }
    })
    event.custom({//cursium for super experience
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "create_enchantment_industry:experience"
            },
            {
                "item":"cataclysm:cursium_ingot"
            }
        ],
        "results": [
            {
                "id":"create_enchantment_industry:super_experience_nugget"
            },
            {
                "id":"cataclysm:cursium_ingot"
            }
        ]
    })
    event.custom({//tidal claws for water
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
                "item":"cataclysm:tidal_claws"
            }
        ],
        "results": [
            {
                "id":"minecraft:water",
                "amount":1000
            },
            {
                "id":"cataclysm:tidal_claws"
            }
        ]
    })
    event.custom({//monstrous horn for netherite automation
        "type": "create:compacting",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item":"minecraft:enchanted_golden_apple",
                "count":1
            },
            {
                "item":"minecraft:chorus_fruit",
                "count":12
            },
            {
                "item":"minecraft:netherite_ingot",
            },
            {
                "item":"minecraft:netherite_upgrade_smithing_template",
            },
            {
                "item":"cataclysm:void_core"
            }
        ],
        "results": [
            {
                "id": "paraglider:heart_container"
            },
            {
                "id":"cataclysm:void_core"
            }
        ]
    })
})