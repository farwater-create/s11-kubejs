ServerEvents.recipes((e) => {
    console.log('Adding mixing recipies');
    e.recipes.create.mixing(
        [Item.of("minecraft:netherrack", 4)],
        [Item.of("minecraft:blackstone", 4), Item.of("create:cinder_flour"), Item.of("minecraft:nether_wart")],
    ).processingTime(100);

    e.recipes.create.mixing(
        [Item.of("minecraft:magma_block"), Item.of("minecraft:magma_cream", 4)],
        [Item.of("minecraft:cobblestone"), Item.of("minecraft:magma_cream", 4)],
    ).processingTime(1200).heated();

    e.remove({ input: '#c:cobblestone', type: "create:mixing" });
    e.recipes.create.mixing(
        [Fluid.of('minecraft:lava', 1000)],
        [Item.of("minecraft:magma_block")],
    ).processingTime(200).superheated();

    e.recipes.create.mixing(
        [Item.of('minecraft:calcite')],
        [Item.of("minecraft:diorite"), Item.of("minecraft:bone_meal")],
    ).processingTime(120);

});
