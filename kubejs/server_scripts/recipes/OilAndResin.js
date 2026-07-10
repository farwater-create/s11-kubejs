ServerEvents.recipes(event => {
 event.remove({ id: 'createdieselgenerators:distillation/superheated_crude_oil' })
    event.remove({ id: 'createdieselgenerators:distillation/crude_oil' })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 400,
                "fluid": "createdieselgenerators:crude_oil"
            }
        ],
        "heat_requirement": "heated",
        "processing_time": 40,
        "results": [
            {
                "id": "immersivepetroleum:diesel",
                "amount": 50
            },
            {
                "id": "immersivepetroleum:gasoline",
                "amount": 50
            },
            {
                "id": "immersiveengineering:phenolic_resin",
                "amount": 50
            }
        ]
    })
    event.remove({output:'createpropulsion:turpentine'})
    event.remove({type:'createaddition:liquid_burning',input:'#c:gasoline'})
    event.custom({
  "type": "createaddition:liquid_burning",
  "burn_time": 24000,
  "ingredients": [
    {
      "type": "neoforge:tag",
      "amount": 1000,
      "tag": "immersivepetroleum:gasoline"
    }
  ],
  "results": [],
  "superheated": true
})
    event.remove({type:'createaddition:liquid_burning',input:'minecraft:lava'})
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