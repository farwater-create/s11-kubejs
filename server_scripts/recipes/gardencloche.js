function saplingGardenCloche(event, input, output, soil) {
    event.custom({
        type: 'immersiveengineering:cloche',
        input: {
            item: input
        },
        results: [
            {
                count: 4,
                id: output
            },
            {
                chance: 0.25,
                output: {
                    id: input
                }
            }
        ],
        render: {
          type: 'immersiveengineering:generic',
          block: input
        },
        soil: {
          item: soil
        },
        time: 1200
    })
}
function saplingGardenClocheEx(event, input, output, soil, extra) {
    event.custom({
        type: 'immersiveengineering:cloche',
        input: {
            item: input
        },
        results: [
            {
                count: 4,
                id: output
            },
            {
                chance: 0.25,
                output: {
                    id: input
                }
            },
            {
                chance: 0.1,
                output: {
                    id: extra
                }
            }
        ],
        render: {
          type: 'immersiveengineering:generic',
          block: input
        },
        soil: {
          item: soil
        },
        time: 2400
    })
}

ServerEvents.recipes(event => {

    saplingGardenClocheEx(event, 'minecraft:oak_sapling', 'minecraft:oak_log', 'minecraft:dirt', 'minecraft:apple')
    saplingGardenCloche(event, 'minecraft:spruce_sapling', 'minecraft:spruce_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'minecraft:birch_sapling', 'minecraft:birch_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'minecraft:jungle_sapling', 'minecraft:jungle_log', 'minecraft:dirt')
    saplingGardenClocheEx(event, 'minecraft:acacia_sapling', 'minecraft:acacia_log', 'minecraft:dirt', 'alexmobs:acacia_blossom')
    saplingGardenClocheEx(event, 'minecraft:dark_oak_sapling', 'minecraft:dark_oak_log', 'minecraft:dirt', 'minecraft:apple')
    saplingGardenCloche(event, 'minecraft:cherry_sapling', 'minecraft:cherry_log', 'minecraft:dirt')
    saplingGardenClocheEx(event, 'minecraft:mangrove_propagule', 'minecraft:mangrove_log', 'minecraft:dirt', 'minecraft:mangrove_roots')
    saplingGardenCloche(event, 'natures_spirit:redwood_sapling', 'natures_spirit:redwood_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:sugi_sapling', 'natures_spirit:sugi_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:purple_wisteria_sapling', 'natures_spirit:wisteria_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:white_wisteria_sapling', 'natures_spirit:wisteria_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:blue_wisteria_sapling', 'natures_spirit:wisteria_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:pink_wisteria_sapling', 'natures_spirit:wisteria_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:fir_sapling', 'natures_spirit:fir_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:willow_sapling', 'natures_spirit:willow_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:aspen_sapling', 'natures_spirit:aspen_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:willow_sapling', 'natures_spirit:willow_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:red_maple_sapling', 'natures_spirit:maple_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:orange_maple_sapling', 'natures_spirit:maple_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:yellow_maple_sapling', 'natures_spirit:maple_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:cypress_sapling', 'natures_spirit:cypress_log', 'minecraft:dirt')
    saplingGardenClocheEx(event, 'natures_spirit:olive_sapling', 'natures_spirit:olive_log', 'minecraft:dirt', 'natures_spirit:olives')
    saplingGardenCloche(event, 'natures_spirit:joshua_sapling', 'natures_spirit:joshua_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:ghaf_sapling', 'natures_spirit:ghaf_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:palo_verde_sapling', 'natures_spirit:palo_verde_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:cedar_sapling', 'natures_spirit:cedar_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:larch_sapling', 'natures_spirit:larch_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:mahogany_sapling', 'natures_spirit:mahogany_log', 'minecraft:dirt')
    saplingGardenCloche(event, 'natures_spirit:saxaul_sapling', 'natures_spirit:saxaul_log', 'minecraft:dirt')
    saplingGardenClocheEx(event, 'vinery:dark_cherry_sapling', 'vinery:dark_cherry_log', 'minecraft:dirt', 'vinery:cherry')
    saplingGardenClocheEx(event, 'vinery:apple_tree_sapling', 'vinery:apple_tree_log', 'minecraft:dirt', 'minecraft:apple')

})