ServerEvents.recipes(event => {
    event.remove({ type: 'createdieselgenerators:hammering' })
    event.remove({ not: { type: 'immersiveengineering:metal_press' }, output: 'create:brass_sheet' })
    event.replaceInput({ output: 'immersiveengineering:component_steel' }, 'minecraft:copper_ingot', 'create:brass_ingot')
    //event.remove({ output: 'immersiveengineering:conveyor_basic' })
    event.replaceInput({ output: '#create:casings' }, '#c:stripped_logs', 'immersiveengineering:treated_wood_horizontal')
    event.replaceInput({ output: '#create:casings' }, '#c:stripped_wood', 'immersiveengineering:treated_wood_horizontal')
    event.replaceInput({},'createnuclear:steel_ingot','immersiveengineering:ingot_steel');
    event.remove({ output: 'createnuclear:steel_ingot' })
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

    
})