//JEIEvents.hideItems(event => {
//    event.hide(global.disabledItems)
//})

RecipeViewerEvents.removeEntries('item', event => {
    global.disabledItems.forEach(item => {
        event.remove(item)
    })
})

ItemEvents.modifyTooltips(event => {

    global.disabledItems.forEach(item => {
		event.add(item, Text.red('✖ Disabled Item'))
		//event.add(item, Text.gray('This item has been disabled in this pack.'))
    })

})
