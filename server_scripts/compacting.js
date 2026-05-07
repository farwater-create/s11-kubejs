// TODO: Rework sherd recipe
// ServerEvents.recipes(event => {
// 	const sherds = [
//         "angler",
//         "archer",
//         "arms_up",
//         "blade",
//         "brewer",
//         "burn",
//         "danger",
//         "flow",
//         "explorer",
//         "friend",
//         "guster",
//         "heart",
//         "heartbreak",
//         "howl",
//         "miner",
//         "mourner",
//         "plenty",
//         "prize",
//         "scrape",
//         "sheaf",
//         "shelter",
//         "skull",
//         "snort"
//     ]

//     sherds.forEach((inputSherd) => {
//       sherds.forEach((outputSherd) => {
//         if (inputSherd !== outputSherd) {
//           event.recipes.create.compacting([Item.of(`minecraft:${outputSherd}_pottery_sherd`), Item.of(`minecraft:${outputSherd}_pottery_sherd`).withChance(0.5)], [`minecraft:${outputSherd}_pottery_sherd`, "minecraft:brick"]);
//         }
//       });
//     });
// })
