ServerEvents.recipes(event => {
    global.disabledItems.forEach(item => {
        event.remove({ output: item })
    })
})