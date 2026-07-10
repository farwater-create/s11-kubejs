ItemEvents.modification(event => {
    // Overrides the burn time of a lava bucket to 0 ticks
    event.modify('minecraft:lava_bucket', item => {
        item.burnTime = 1
    })
})