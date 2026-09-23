ServerEvents.recipes(event => {

    event.remove({ type: 'createpropulsion:smelting/platinum_ingot_from_deepslate_platinum_ore' })
    event.remove({ type: 'createpropulsion:smelting/platinum_ingot_from_raw_platinum' })

})