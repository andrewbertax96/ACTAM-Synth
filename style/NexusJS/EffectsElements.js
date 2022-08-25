Nexus.colors.accent = "#353535"
Nexus.colors.fill = "#F7F6EF"
//Pedal Box elements
let chorus_onOff = new Nexus.Toggle('#chorus_onOff',{
   'size': [89,15],
   'state': false
});
let vibrato_onOff = new Nexus.Toggle('#vibrato_onOff',{
  'size': [89,15],
   'state': false
});
let tremolo_onOff = new Nexus.Toggle('#tremolo_onOff',{
  'size': [89,15],
   'state': false
});
let phaser_onOff = new Nexus.Toggle('#phaser_onOff',{
  'size': [89,15],
   'state': false
});
let delay_onOff = new Nexus.Toggle('#delay_onOff',{
  'size': [89,15],
   'state': false
});
let reverb_onOff = new Nexus.Toggle('#reverb_onOff',{
  'size': [89,15],
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
let vibratoFreq = new Nexus.Dial('#vibratoFreq',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let vibratoDepths = new Nexus.Dial('#vibratoDepths',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let tremoloFreq = new Nexus.Dial('#tremoloFreq',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let tremoloDepths = new Nexus.Dial('#tremoloDepths',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let phaserFreq = new Nexus.Dial('#phaserFreq',{
  'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let phaserOctave = new Nexus.Dial('#phaserOctave',{
  'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let phaserBaseFreq = new Nexus.Dial('#phaserBaseFreq',{
  'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let delayTune = new Nexus.Dial('#delayTune',{
   'size': [100,100],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let reverbDecay = new Nexus.Dial('#reverbDecay',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});
let reverbSeconds = new Nexus.Dial('#reverbSeconds',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   //'value': filterCh1[0].frequency.value
});


let chorusLFO_number = new Nexus.Number('#chorusLFO_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let chorusDelayTime_number = new Nexus.Number('#chorusDelayTime_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let chorusDepths_number = new Nexus.Number('#chorusDepths_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let vibratoFreq_number = new Nexus.Number('#vibratoFreq_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let vibratoDepths_number = new Nexus.Number('#vibratoDepths_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let tremoloFreq_number = new Nexus.Number('#tremoloFreq_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let tremoloDepths_number = new Nexus.Number('#tremoloDepths_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let phaserFreq_number = new Nexus.Number('#phaserFreq_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let phaserOctave_number = new Nexus.Number('#phaserOctave_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let phaserBaseFreq_number = new Nexus.Number('#phaserBaseFreq_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let delayTune_number = new Nexus.Number('#delayTune_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let reverbDecay_number = new Nexus.Number('#reverbDecay_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let reverbSeconds_number = new Nexus.Number('#reverbSeconds_number',{
  'size': [45,20],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});

chorusLFO_number.link(chorusLFO);
chorusDelayTime_number.link(chorusDelayTime);
chorusDepths_number.link(chorusDepths);
vibratoFreq_number.link(vibratoFreq);
vibratoDepths_number.link(vibratoDepths);
tremoloFreq_number.link(tremoloFreq);
tremoloDepths_number.link(tremoloDepths);
phaserFreq_number.link(phaserFreq);
phaserOctave_number.link(phaserOctave);
phaserBaseFreq_number.link(phaserBaseFreq);
delayTune_number.link(delayTune);
reverbDecay_number.link(reverbDecay);
reverbSeconds_number.link(reverbSeconds);
