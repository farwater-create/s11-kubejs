ServerEvents.recipes(event => {
event.replaceInput({ output: 'createnuclear:enriched_soul_soil' }, 'minecraft:obsidian', 'createnuclear:uranium_rod');
    event.remove({ id: 'createnuclear:compacting/uranium_fluid_to_yellowcake' });
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 100,
                "fluid": "createnuclear:uranium"
            },
        ],
        "results": [
            {
                "id": "createnuclear:yellowcake",
            },
            {
                "id": "createnuclear:enriched_yellowcake",
                "chance": 0.01
            },
        ]
    })
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "createnuclear:raw_uranium"
            }
        ],
        "processing_time": 500,
        "results": [
            {
                "count":6,
                "id": "createnuclear:uranium_powder"
            }
        ]
    })
})