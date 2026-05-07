ServerEvents.recipes((e) => {

console.log('Adding mixing recipies');
    e.recipes.create.mixing(
    	[Item.of("create:asurine", 2)],
        [Item.of("create:asurine"), Item.of("minecraft:mossy_cobblestone")],
    ).processingTime(25).heated();

    e.recipes.create.mixing(
    	[Item.of("create:crimsite", 2)],
        [Item.of("create:crimsite"), Item.of("minecraft:blackstone")],
    ).processingTime(25).heated();

    e.recipes.create.mixing(
    	[Item.of("create:limestone", 2)],
        [Item.of("create:limestone"), Item.of("minecraft:bone_meal"), Item.of("minecraft:diroite")],
    ).processingTime(25);

    e.recipes.create.mixing(
    	[Item.of("create:ochrum", 2)],
        [Item.of("create:ochrum"), Item.of("minecraft:sandstone")],
    ).processingTime(25).heated();

    e.recipes.create.mixing(
    	[Item.of("create:scoria", 2)],
        [Item.of("create:scoria"), Item.of("minecraft:granite")],
    ).processingTime(25);

    e.recipes.create.mixing(
    	[Item.of("create:veridium", 2)],
        [Item.of("create:veridium"), Item.of("minecraft:cobbled_deepslate")],
    ).processingTime(25).heated();
});
