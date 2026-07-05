// @ULSTICK
/*
  - Made Energizing Rods not requiring its predecesor to craft
*/

ServerEvents.recipes(event => {

	// ----- Basic -----
	// Energizing Rod
	event.remove({ id: 'powah:crafting/energizing_rod_basic' })
	event.shaped(
		Item.of('powah:energizing_rod_basic', 1),
		[
			' Q ',
			'CDC',
			' R '
		],
		{
			D: 'powah:dielectric_casing',
			R: ['powah:dielectric_rod', 'powah:energizing_rod_starter'],
			Q: '#c:storage_blocks/quartz',
			C: 'powah:capacitor_basic'
		}
	).id('kjs:powah/energizing_rod_basic')

	// ----- Hardened -----
	event.remove({ id: 'powah:energizing/energized_steel' })
	event.custom({
		type: 'powah:energizing',
		energy: 10000,
		ingredients: [
			{
			tag: 'c:ingots/steel'
			},
			{
			tag: 'c:ingots/aluminum'
			}
		],
		result: {
			count: 2,
			id: 'powah:steel_energized'
		}
	}).id('kjs:powah/steel_energized')

	// Energizing Rod
	event.remove({ id: 'powah:crafting/energizing_rod_hardened' })
	event.shaped(
		Item.of('powah:energizing_rod_hardened', 1),
		[
			' Q ',
			'CDC',
			' R '
		],
		{
			D: 'powah:dielectric_casing',
			R: ['powah:dielectric_rod', 'powah:energizing_rod_basic'],
			Q: '#c:storage_blocks/quartz',
			C: 'powah:capacitor_hardened'
		}
	).id('kjs:powah/energizing_rod_hardened')

	// ----- Blazing -----
	// Energizing Rod
	event.remove({ id: 'powah:crafting/energizing_rod_blazing' })
	event.shaped(
		Item.of('powah:energizing_rod_blazing', 1),
		[
			' Q ',
			'CDC',
			' R '
		],
		{
			D: 'powah:dielectric_casing',
			R: ['powah:dielectric_rod', 'powah:energizing_rod_hardened'],
			Q: '#c:storage_blocks/certus_quartz',
			C: 'powah:capacitor_blazing'
		}
	).id('kjs:powah/energizing_rod_blazing')

	// ----- Niotic -----
	// Energizing Rod
	event.remove({ id: 'powah:crafting/energizing_rod_niotic' })
	event.shaped(
		Item.of('powah:energizing_rod_niotic', 1),
		[
			' Q ',
			'CDC',
			' R '
		],
		{
			D: 'powah:dielectric_casing',
			R: ['powah:dielectric_rod', 'powah:energizing_rod_blazing'],
			Q: '#c:storage_blocks/certus_quartz',
			C: 'powah:capacitor_niotic'
		}
	).id('kjs:powah/energizing_rod_niotic')

	// ----- Spirited -----
	// Energizing Rod
	event.remove({ id: 'powah:crafting/energizing_rod_spirited' })
	event.shaped(
		Item.of('powah:energizing_rod_spirited', 1),
		[
			' Q ',
			'CDC',
			' R '
		],
		{
			D: 'powah:dielectric_casing',
			R: ['powah:dielectric_rod', 'powah:energizing_rod_niotic'],
			Q: 'ae2:fluix_block',
			C: 'powah:capacitor_spirited'
		}
	).id('kjs:powah/energizing_rod_spirited')

	// ----- Nitro -----
	// Energizing Rod
	event.remove({ id: 'powah:crafting/energizing_rod_nitro' })
	event.shaped(
		Item.of('powah:energizing_rod_nitro', 1),
		[
			' Q ',
			'CDC',
			' R '
		],
		{
			D: 'powah:dielectric_casing',
			R: ['powah:dielectric_rod', 'powah:energizing_rod_spirited'],
			Q: 'ae2:fluix_block',
			C: 'powah:capacitor_nitro'
		}
	).id('kjs:powah/energizing_rod_nitro')

})