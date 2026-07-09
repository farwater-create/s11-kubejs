ServerEvents.recipes(event => {
event.remove({output:'create_new_age:radioactive_thorium'});
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
                "count":10,
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
event.custom(   {//efficient recipe
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create_new_age:thorium"
        },
        "results": [
            {
                "chance": 1,
                "count":21,
                "id": "create_new_age:radioactive_thorium"
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
});