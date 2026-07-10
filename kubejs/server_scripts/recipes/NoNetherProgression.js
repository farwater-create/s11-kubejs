ServerEvents.recipes(event => {
    //allowing people to beat the game without going to the nether to not lock saint and merling origin out of the progression
    event.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {
                "item": "minecraft:slime_ball"
            },
            {
                "type": "fluid_stack",
                "fluid": "minecraft:lava",
                "amount": 150
            }
        ],
        "processing_time": 600,
        "results": [
            {
                "id": "minecraft:magma_cream",
                "chance": 0.25
            }
        ]
    })
    event.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {
                "item": "minecraft:magma_cream"
            },
            {
                "type": "fluid_stack",
                "fluid": "createdieselgenerators:ethanol",
                "amount": 150
            }
        ],
        "processing_time": 1200,
        "results": [
            {
                "id": "minecraft:blaze_powder",
                "chance": 1
            }
        ]
    })
    event.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {
                "item": "minecraft:blaze_powder",
            },
            {
                "item": "minecraft:soul_sand",
            },
            {
                "item": "create:empty_blaze_burner"
            },
            {
                "type": "fluid_stack",
                "fluid": "createdieselgenerators:plant_oil",
                "amount": 200
            }
        ],
        "processing_time": 6000,
        "results": [
            {
                "id": "create:blaze_burner",
                "chance": 0.2
            }
        ]
    })
        event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:bone_block"
            },
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "immersiveengineering:creosote"
            }
        ],
        "results": [
            {
                "id": "minecraft:soul_soil"
            }
        ]
    })
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "minecraft:golden_carrot"
            }
        ],
        "results": [
            {
                "id": "minecraft:nether_wart",
                "chance":0.2
            }
        ]
    })
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "create:wheat_flour"
            }
        ],
        "results": [
            {
                "id": "create:cinder_flour",
                "chance":0.2
            }
        ]
    })
})