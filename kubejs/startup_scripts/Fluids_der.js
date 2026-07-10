// Visit the wiki for more info - https://kubejs.com/
StartupEvents.registry('fluid', event => {
    event.create('molten_brass','thick')
    .displayName('Molten Brass')
    .tint(0xe7c479)

    event.create('molten_copper','thick')
    .tint(0xbe5123)
    .displayName('Molten Copper')

    event.create('molten_gold','thick')
    .tint(0xe4a758)
    .displayName('Molten Gold')

    event.create('molten_iron','thick')
    .tint(0xa43b0e)
    .displayName('Molten Iron')

    event.create('molten_zinc','thick')
    .tint(0x8b96a7)
    .displayName('Molten Zinc')

    event.create('molten_lead','thick')
    .tint(0x132e38)
    .displayName('Molten Lead')

    event.create('andesite_compound','thick')
    .tint(0x1d4653)
    .displayName('Andesite Compound')
    
    //removed due to IE and IP added to pack
    /*event.create('polymer_resin','thick')
    .tint(0x95adc1)
    .displayName('Poylmer Resin')

    event.create('light_oil','thin')
    .tint(0x955a2d)
    .displayName('Light Oil')
    
    event.create('heavy_oil','thick')
    .tint(0x281f27)
    .displayName('Heavy Oil')

    event.create("natural_gas",'thin')
    .tint(0xa87a7b)
    .displayName("Natural Gas")
    .noBucket() 
    .noBlock() */

})

