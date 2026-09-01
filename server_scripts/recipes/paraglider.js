ServerEvents.recipes(event => {

    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
              item: 'minecraft:chiseled_tuff'
            },
            {
              item: 'paraglider:spirit_orb'
            }
        ],
        results: [
            {
              id: 'paraglider:goddess_statue'
            }
        ]
    })

})
