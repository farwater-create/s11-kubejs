ServerEvents.recipes(event => {
 event.remove({ id: 'createdieselgenerators:distillation/superheated_crude_oil' })
    event.remove({ id: 'createdieselgenerators:distillation/crude_oil' })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "createdieselgenerators:crude_oil"
            }
        ],
        "heat_requirement": "heated",
        "processing_time": 40,
        "results": [
            {
                "id": "kubejs:heavy_oil",
                "amount": 50
            },
            {
                "id": "kubejs:light_oil",
                "amount": 50
            },
            {
                "id": "kubejs:natural_gas",
                "amount": 1000
            },

        ]
    })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "kubejs:heavy_oil"
            }
        ],
        "heat_requirement": "superheated",
        "processing_time": 40,
        "results": [
            {
                "id": "kubejs:light_oil",
                "amount": 50
            },
            {
                "id": "kubejs:natural_gas",
                "amount": 1000
            },
        ]
    })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "kubejs:light_oil"
            }
        ],
        "heat_requirement": "heated",
        "processing_time": 40,
        "results": [
            {
                "id": "createdieselgenerators:gasoline",
                "amount": 50
            },
            {
                "id": "kubejs:natural_gas",
                "amount": 1000
            },
        ]
    })
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "kubejs:heavy_oil"
            }
        ],
        "results": [
            {
                "amount": 150,
                "id": "createdieselgenerators:diesel"
            },
            {
                "count": 3,
                "id": "createnuclear:coal_dust"
            }
        ]

    })
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "kubejs:light_oil"
            },
            {
                "count": 3,
                "item": "createnuclear:coal_dust"
            }
        ],
        "results": [
            {
                "amount": 150,
                "id": "kubejs:polymer_resin"
            },
            {
                "amount": 50,
                "id": "kubejs:heavy_oil"
            }
        ]

    })
    //polymer resin alternate
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "createdieselgenerators:biodiesel"
            }
        ],
        "heat_requirement": "superheated",
        "processing_time": 40,
        "results": [
            {
                "id": "kubejs:polymer_resin",
                "amount": 50
            },
            {
                "id": "kubejs:natural_gas",
                "amount": 1000
            },
        ]
    })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "immersiveengineering:biodiesel"
            }
        ],
        "heat_requirement": "superheated",
        "processing_time": 40,
        "results": [
            {
                "id": "kubejs:polymer_resin",
                "amount": 50
            },
            {
                "id": "kubejs:natural_gas",
                "amount": 1000
            },
        ]
    }
    )
    event.remove({ id: 'createdieselgenerators:mixing/biodiesel' });
    event.remove({ id: 'createaddition:mixing/bioethanol' });
    event.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {
                "item": "minecraft:sugar"
            },
            {
                "item": "create:cinder_flour"
            },
            {
                "item": "createaddition:biomass"
            },
            {
                "item": "createaddition:biomass"
            },
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "createdieselgenerators:ethanol"
            }
        ],
        "results": [
            {
                "amount": 200,
                "id": "createaddition:bioethanol"
            }
        ]
    })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "createaddition:bioethanol"
            }
        ],
        "heat_requirement": "superheated",
        "processing_time": 40,
        "results": [
            {
                "id": "createdieselgenerators:biodiesel",
                "amount": 100
            },
            {
                "id": "kubejs:natural_gas",
                "amount": 1000
            },
        ]
    }
    )
    event.remove({ output: 'createdieselgenerators:pumpjack_crank' })
    event.shaped(Item.of('createdieselgenerators:pumpjack_crank', 1),
        [
            'ZBZ',
            'AGA',
            'ZBZ'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'create:andesite_alloy_block',
            G: 'simulated:gyroscopic_mechanism',
            Z: 'createaddition:zinc_sheet'
        }

    )
})