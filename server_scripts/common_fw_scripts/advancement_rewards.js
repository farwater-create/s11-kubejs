
PlayerEvents.advancement(event => {
    const player = event.entity;
    const advancement = event.advancement;

    
    if (advancement.getId() === 'minecraft:end/root') {
	
        player.give(Item.of('minecraft:end_crystal', 4));

	}

});
