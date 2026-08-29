ServerEvents.recipes(event => {
event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 50,
                "fluid": "minecraft:lava"
            },
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "count": 10,
                "id": "minecraft:cobblestone"
            }
        ]
    })
    event.remove({ type: 'create:milling', input: 'minecraft:gravel' })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:gravel"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "minecraft:flint"
            },
            {
                "chance": 0.5,
                "id": "minecraft:sand"
            }
        ]
    }
    )
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "minecraft:lava"
            },
            {
                "amount": 4,
                "item": "minecraft:flint"
            }
        ],
        "results": [
            {
                "id": "minecraft:deepslate"
            }
        ]
    })
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 10,
                "fluid": "minecraft:lava"
            },
            {
                "item": "create:cinder_flour"
            },
            {
                "item": "minecraft:cobblestone"
            }
        ],
        "results": [
            {
                "id": "minecraft:netherrack"
            }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:deepslate"
            },
            {
                "item": "minecraft:terracotta"
            },
            {
                "item": "create:polished_cut_dripstone"
            }
        ],
        "results": [
            {
                "count": 16,
                "id": "minecraft:pointed_dripstone"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:dripstone_block"
            },
            {
                "type": "neoforge:single",
                "amount": 10,
                "fluid": "kubejs:molten_copper"
            }
        ],
        "results": [
            {
                "count": 3,
                "id": "create:veridium"
            }
        ]
    }
    )
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:dripstone_block"
            },
            {
                "type": "neoforge:single",
                "amount": 10,
                "fluid": "kubejs:molten_gold"
            }
        ],
        "results": [
            {
                "count": 3,
                "id": "create:ochrum"
            }
        ]
    }
    )
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:dripstone_block"
            },
            {
                "type": "neoforge:single",
                "amount": 10,
                "fluid": "kubejs:molten_zinc"
            }
        ],
        "results": [
            {
                "count": 3,
                "id": "create:asurine"
            }
        ]
    }
    )
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:dripstone_block"
            },
            {
                "type": "neoforge:single",
                "amount": 10,
                "fluid": "kubejs:molten_iron"
            }
        ],
        "results": [
            {
                "count": 3,
                "id": "create:crimsite"
            }
        ]
    }
    )
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:dripstone_block"
            },
            {
                "type": "neoforge:single",
                "amount": 10,
                "fluid": "kubejs:molten_lead"
            }
        ],
        "results": [
            {
                "count": 3,
                "id": "create:scorchia"
            }
        ]
    }
    )
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "create:scorchia"
            }
        ],
        "processing_time": 250,
        "results": [
            {
                "chance": 0.4,
                "id": "create:crushed_raw_lead"
            },
            {
                "chance": 0.2,
                "id": "createnuclear:lead_nugget"
            }
        ]
    })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "create:crimsite"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "minecraft:sand"
            },
            {
                "chance": 0.3,
                "id": "create:crushed_raw_iron"
            }
        ]
    }
    )
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "create:ochrum"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "minecraft:sand"
            },
            {
                "chance": 0.2,
                "id": "create:crushed_raw_gold"
            }
        ]
    }
    )
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "create:veridium"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "minecraft:sand"
            },
            {
                "chance": 0.5,
                "id": "create:crushed_raw_copper"
            }
        ]
    }
    )
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "create:asurine"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "minecraft:sand"
            },
            {
                "chance": 0.2,
                "id": "create:crushed_raw_zinc"
            }
        ]
    }
    )
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "create:scorchia"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "id": "minecraft:sand"
            },
            {
                "chance": 0.3,
                "id": "create:crushed_raw_lead"
            }
        ]
    }
    )
        //coal dust and more ore automation
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "tag": "minecraft:coals"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "chance": 0.2,
                "id": "createnuclear:coal_dust"
            }
        ]
    }
    )
})