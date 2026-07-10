ServerEvents.recipes(event => {
    event.remove({ output: 'create_new_age:radioactive_thorium' });
    event.custom(//inefficient recipe
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "create_new_age:thorium"
            },
            "results": [
                {
                    "chance": 1,
                    "id": "create_new_age:radioactive_thorium"
                },
                {
                    "chance": 100,
                    "count": 10,
                    "id": "create:experience_nugget"
                }
            ],
            "sequence": [
                {
                    "type": "create:filling",
                    "ingredients": [
                        {
                            "item": "create_new_age:thorium"
                        },
                        {
                            "type": "neoforge:single",
                            "amount": 100,
                            "fluid": "immersiveengineering:redstone_acid"
                        }
                    ],
                    "results": [
                        {
                            "id": "create_new_age:thorium"
                        }
                    ]
                },
                {
                    "type": "create_new_age:energising",
                    "energy_needed": 1000,
                    "ingredients": [
                        {
                            "item": "create_new_age:thorium"
                        }
                    ],
                    "results": [
                        {
                            "id": "create_new_age:thorium"
                        }
                    ]
                },
                {
                    "type": "create:pressing",
                    "ingredients": [
                        {
                            "item": "create_new_age:thorium"
                        }
                    ],
                    "results": [
                        {
                            "id": "create_new_age:thorium"
                        }
                    ]
                }
            ],
            "loops": 1,
            "transitional_item": {
                "id": "create_new_age:thorium"
            }
        })
    event.custom({//efficient recipe
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create_new_age:thorium"
        },
        "results": [
            {
                "chance": 1,
                "count": 21,
                "id": "create_new_age:radioactive_thorium"
            }
        ],
        "sequence": [
            {
                "type": "create_new_age:energising",
                "energy_needed": 500,
                "ingredients": [
                    {
                        "item": "create_new_age:thorium"
                    }
                ],
                "results": [
                    {
                        "id": "create_new_age:thorium"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "create_new_age:thorium"
                    },
                    {
                        "type": "neoforge:single",
                        "amount": 5,
                        "fluid": "immersiveengineering:redstone_acid"
                    }
                ],
                "results": [
                    {
                        "id": "create_new_age:thorium"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create_new_age:thorium"
                    },
                    {
                        "item": "create_new_age:radioactive_thorium"
                    }
                ],
                "results": [
                    {
                        "id": "create_new_age:thorium"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "create_new_age:thorium"
                    }
                ],
                "results": [
                    {
                        "id": "create_new_age:thorium"
                    }
                ]
            }
        ],
        "loops": 20,
        "transitional_item": {
            "id": "create_new_age:thorium"

        }
    }
    )
    event.shapeless(
        Item.of('create_new_age:nuclear_fuel', 1),
        [
            '1x #c:plates/lead',
            '1x #c:ingots/uranium'
        ]
    )
    event.shapeless(
        Item.of('create_new_age:reactor_casing', 1),
        [
            '1x #c:plates/lead',
            '1x minecraft:bricks'
        ]
    )
    event.replaceInput({ output: 'create_new_age:reactor_fuel_acceptor' }, 'create:brass_funnel', 'create_new_age:nuclear_fuel')
    event.remove({ output: 'create_new_age:reactor_rod' })
    event.shaped(
        Item.of('create_new_age:reactor_rod',3),
        [
            'GFG',
            'CFC',
            'GFG'
        ],
        {
            F:'create_new_age:nuclear_fuel',
            C:'create_new_age:reactor_casing',
            G:'#c:plates/gold'
        }
    )
});