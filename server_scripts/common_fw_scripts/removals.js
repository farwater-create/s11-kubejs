const crushing = [
  "create:asurine",
  "create:crimsite",
  "create:ochrum",
  "create:veridium"
];

const all = [
  "advancedperipherals:chunk_controller"
];

ServerEvents.recipes((e) => {

  crushing.forEach((stone) => e.remove({ input: `${stone}`, type: "create:crushing" }));

  all.forEach((item) => e.remove({ output: `${item}` }));


});
