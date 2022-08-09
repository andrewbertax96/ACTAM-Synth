//Pedal Box elements
let chorus_onOff = new Nexus.Toggle('#chorus-onOff',{
   'size': [40,20],
   'state': false
});
let vibrato_onOff = new Nexus.Toggle('#vibrato-onOff',{
   'size': [40,20],
   'state': false
});
let tremolo_onOff = new Nexus.Toggle('#tremolo-onOff',{
   'size': [40,20],
   'state': false
});
let phaser_onOff = new Nexus.Toggle('#phaser-onOff',{
   'size': [40,20],
   'state': false
});
let delay_onOff = new Nexus.Toggle('#delay-onOff',{
   'size': [40,20],
   'state': false
});
let reverb_onOff = new Nexus.Toggle('#reverb-onOff',{
   'size': [40,20],
   'state': false
});

let chorusLFO = new Nexus.Dial('#chorusLFO',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let chorusDelayTime = new Nexus.Dial('#chorusDelayTime',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let chorusDepths = new Nexus.Dial('#chorusDepths',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let number = new Nexus.Number('#number',{
  'size': [30,30],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
number.link(chorusLFO);
