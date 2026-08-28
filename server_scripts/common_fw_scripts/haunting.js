ServerEvents.recipes(event => {
	console.log('Adding haunting recipies');
  event.recipes.create.haunting('minecraft:wither_skeleton_skull', 'minecraft:skeleton_skull')
})
