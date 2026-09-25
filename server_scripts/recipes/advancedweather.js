ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'advancedweather', input: '#c:plates/aluminum', }, '#c:plates/aluminum', '#c:plates/silver')

    event.recipes.create.crushing(
        [
            CreateItem.of('advancedweather:raw_cinnabar', 0.1)
        ],
        Ingredient.of('minecraft:basalt')
    )
})