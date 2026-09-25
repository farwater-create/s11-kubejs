ServerEvents.recipes(event => {

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_copper'
        },
        result: {
            basePredicate: {
                item: 'immersiveengineering:dust_copper',
            },
            count: 2
        },
        secondaries: [
            {
                chance: 0.05,
                output: {
                    item: 'immersiveengineering:dust_gold'
                }
            }
        ]
    })

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_iron'
        },
        result: {
            basePredicate: {
                item: 'immersiveengineering:dust_iron'
            },
            count: 2
        },
        secondaries: [
            {
                chance: 0.05,
                output: {
                    item: 'immersiveengineering:dust_nickel'
                }
            }
        ]
    })

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_gold'
        },
        result: {
            basePredicate: {
                item: 'immersiveengineering:dust_gold'
            },
            count: 2
        },
        secondaries: [
            {
                chance: 0.04,
                output: {
                    item: 'immersiveengineering:dust_silver'
                }
            }
        ]
    })

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_zinc'
        },
        result: {
            basePredicate: {
                item: 'create:zinc_nugget'
            },
            count: 18
        },
        secondaries: []
    })

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_platinum'
        },
        result: {
            basePredicate: {
                item: 'createpropulsion:platinum_nugget'
            },
            count: 18
        },
        secondaries: [
            {
                chance: 0.2,
                output: {
                    item: 'immersiveengineering:dust_gold'
                }
            }
        ]
    })

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_lead'
        },
        result: {
            basePredicate: {
                item: 'immersiveengineering:dust_lead'
            },
            count: 2
        },
        secondaries: [
            {
                chance: 0.1,
                output: {
                    item: 'immersiveengineering:dust_silver'
                }
            }
        ]
    })

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_silver'
        },
        result: {
            basePredicate: {
                item: 'immersiveengineering:dust_silver'
            },
            count: 2
        },
        secondaries: [
            {
                chance: 0.1,
                output: {
                    item: 'immersiveengineering:dust_lead'
                }
            }
        ]
    })

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_nickel'
        },
        result: {
            basePredicate: {
                item: 'immersiveengineering:dust_nickel'
            },
            count: 2
        },
        secondaries: [
            {
                chance: 0.1,
                output: {
                    item: 'immersiveengineering:dust_iron'
                }
            }
        ]
    })

    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
            item: 'create:crushed_raw_uranium'
        },
        result: {
            basePredicate: {
                item: 'immersiveengineering:dust_uranium'
            },
            count: 2
        },
        secondaries: [
            {
                chance: 0.1,
                output: {
                    item: 'immersiveengineering:dust_uranium'
                }
            }
        ]
    })

})