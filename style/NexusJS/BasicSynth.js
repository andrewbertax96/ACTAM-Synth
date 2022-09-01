let accentColorBase = "#353535";
let fillColorBase = "#F7F6EF";
let accentColor = "#e066ff";
let fillColor = "#353535";

Nexus.colors.accent = accentColorBase;
Nexus.colors.fill = fillColorBase;

/**************************************/
/****** Creating visual elements ******/
/**************************************/

let mixVolume = new Nexus.Dial('#mix',{
  'size': [28,28],
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "absolute" or "relative"
  'min': -25,
  'max': 5,
  'step': 0,
  'value': 0
});
let meter = new Nexus.Meter('#meter', {
 size: [30,90]
})
let oscilloscope = new Nexus.Oscilloscope('#oscilloscope',{
 'size': [175,170]
})
let spectrogram = new Nexus.Spectrogram('#spectrogram',{
 'size': [175,170]
})

let piano = new Nexus.Piano('#keyboard',{
  'size': [700,170],
  'mode': 'button',  // 'button', 'toggle', or 'impulse'
  'lowNote': 36,
  'highNote': 108
});
piano.on('change', piano_func);
piano.colorize("accent", accentColor)
piano.colorize("fill",fillColorBase)

let myWebAudioNode = Tone.Master;

meter.connect(myWebAudioNode)
oscilloscope.connect(myWebAudioNode)
spectrogram.connect(myWebAudioNode)

/*******************************************/
/****** Creating basic synth elements ******/
/*******************************************/

let osc1_shape = new Nexus.Select('#osc1-shape',{
   'size': [100,30],
   'options': ['sine','triangle','square','sawtooth']
});
let osc1_onOff = new Nexus.Toggle('#osc1-onOff',{
   'size': [40,20],
   'state': false
});
let detune1 = new Nexus.Dial('#osc1-det',{
   'size': [35,35],
   'min': -200,
   'max': 200,
   'step': 1,
   'value': 0
});
let fir1_toggle = new Nexus.Toggle('#fir1-toggle',{
   'size': [40,20],
   'state': false
});
let fir1_type = new Nexus.Select('#fir1-type',{
   'size': [100,30],
   'options': ['lowpass','highpass','bandpass'],
});
let fir1_cut = new Nexus.Dial('#fir1-cut',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 20000,
   'step': 0,
   'value': 350
});
let fir1_gain = new Nexus.Dial('#fir1-gain',{
  'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 1,
   'step': 0,
   'value': 0
});
let env1_onOff = new Nexus.Toggle('#env1-onOff',{
   'size': [39,20],
   'state': false
});
let attack1 = new Nexus.Dial('#osc1-att',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let decay1 = new Nexus.Dial('#osc1-dec',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let sustain1 = new Nexus.Dial('#osc1-sus',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let release1 = new Nexus.Dial('#osc1-rel',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let volume1 = new Nexus.Dial('#osc1-vol',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': -25,
   'max': 5,
   'step': 0,
   'value': -5
});
let detune1_number = new Nexus.Number('#detune1_number',{
  'size': [40,18],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});

let fir1_cut_number = new Nexus.Number('#fir1_cut_number',{
  'size': [30,15]
});

let fir1_gain_number = new Nexus.Number('#fir1_gain_number',{
  'size': [30,15]
});

let attack1_number = new Nexus.Number('#osc1_att_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let decay1_number = new Nexus.Number('#osc1_dec_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let sustain1_number = new Nexus.Number('#osc1_sus_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let release1_number = new Nexus.Number('#osc1_rel_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});

detune1_number.link(detune1);
fir1_cut_number.link(fir1_cut);
fir1_gain_number.link(fir1_gain);
attack1_number.link(attack1);
decay1_number.link(decay1);
sustain1_number.link(sustain1);
release1_number.link(release1);

let osc2_shape = new Nexus.Select('#osc2-shape',{
   'size': [100,30],
   'options': ['sine','triangle','square','sawtooth']
});
let osc2_onOff = new Nexus.Toggle('#osc2-onOff',{
   'size': [40,20],
   'state': false
});
let detune2 = new Nexus.Dial('#osc2-det',{
   'size': [35,35],
   'min': -200,
   'max': 200,
   'step': 1,
   'value': 0
});
let fir2_toggle = new Nexus.Toggle('#fir2-toggle',{
   'size': [40,20],
   'state': false
});
let fir2_type = new Nexus.Select('#fir2-type',{
   'size': [100,30],
   'options': ['lowpass','highpass','bandpass']
});
let fir2_cut = new Nexus.Dial('#fir2-cut',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 20000,
   'step': 0,
   'value': 350
});
let fir2_gain = new Nexus.Dial('#fir2-gain',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 1,
   'step': 0,
   'value': 0
});
let env2_onOff = new Nexus.Toggle('#env2-onOff',{
  'size': [39,20],
   'state': false
});
let attack2 = new Nexus.Dial('#osc2-att',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let decay2 = new Nexus.Dial('#osc2-dec',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let sustain2 = new Nexus.Dial('#osc2-sus',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let release2 = new Nexus.Dial('#osc2-rel',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let volume2 = new Nexus.Dial('#osc2-vol',{
  'size': [35,35],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': -25,
   'max': 5,
   'step': 0,
   'value': -5
});
let detune2_number = new Nexus.Number('#detune2_number',{
  'size': [40,18],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let fir2_cut_number = new Nexus.Number('#fir2_cut_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let fir2_gain_number = new Nexus.Number('#fir2_gain_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let attack2_number = new Nexus.Number('#osc2_att_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let decay2_number = new Nexus.Number('#osc2_dec_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let sustain2_number = new Nexus.Number('#osc2_sus_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let release2_number = new Nexus.Number('#osc2_rel_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});

detune2_number.link(detune2);
fir2_cut_number.link(fir2_cut);
fir2_gain_number.link(fir2_gain);
attack2_number.link(attack2);
decay2_number.link(decay2);
sustain2_number.link(sustain2);
release2_number.link(release2);


/*****************************/
/****** Changing colors ******/
/*****************************/

osc1_onOff.on('change',function() {
  updateOsc1Colors();
  updateFir1Colors();
  updateEnvelope1Colors();
})

osc2_onOff.on('change',function() {
  updateOsc2Colors();
  updateFir2Colors();
  updateEnvelope2Colors();
})

env1_onOff.on('change',function(changeColors) {
  updateEnvelope1Colors();
})

env2_onOff.on('change',function(changeColors) {
  updateEnvelope2Colors();
})

fir1_toggle.on('change',function() {
  updateFir1Colors();
});

fir2_toggle.on('change',function() {
  updateFir2Colors ();
});

function updateOsc1Colors()
{
  let isActive = osc1_onOff.state == true

  osc1_onOff.colorize("accent", isActive ? accentColor : accentColorBase)
  osc1_onOff.colorize("fill", isActive ? fillColor : fillColorBase)
  
  detune1.colorize("accent", isActive ? accentColor : accentColorBase)
  detune1.colorize("fill", isActive ? fillColor : fillColorBase)

  volume1.colorize("accent", isActive ? accentColor : accentColorBase)
  volume1.colorize("fill", isActive ? fillColor : fillColorBase)
}

function updateOsc2Colors()
{
  let isActive = osc2_onOff.state == true

  osc2_onOff.colorize("accent", isActive ? accentColor : accentColorBase)
  osc2_onOff.colorize("fill", isActive ? fillColor : fillColorBase)

  detune2.colorize("accent", isActive ? accentColor : accentColorBase)
  detune2.colorize("fill", isActive ? fillColor : fillColorBase)

  volume2.colorize("accent", isActive ? accentColor : accentColorBase)
  volume2.colorize("fill", isActive ? fillColor : fillColorBase)
}

function updateFir1Colors()
{
  let isActive = (fir1_toggle.state == true && osc1_onOff.state == true);

  fir1_toggle.colorize("accent", isActive ? accentColor : accentColorBase)
  fir1_toggle.colorize("fill", isActive ? fillColor : fillColorBase)

  fir1_cut.colorize("accent", isActive ? accentColor : accentColorBase)
  fir1_cut.colorize("fill", isActive ? fillColor : fillColorBase)

  fir1_gain.colorize("accent", isActive ? accentColor : accentColorBase)
  fir1_gain.colorize("fill", isActive ? fillColor : fillColorBase)
}

function updateFir2Colors()
{
  let isActive = (fir2_toggle.state == true && osc2_onOff.state == true);

  fir2_toggle.colorize("accent", isActive ? accentColor : accentColorBase)
  fir2_toggle.colorize("fill", isActive ? fillColor : fillColorBase)

  fir2_cut.colorize("accent", isActive ? accentColor : accentColorBase)
  fir2_cut.colorize("fill", isActive ? fillColor : fillColorBase)

  fir2_gain.colorize("accent", isActive ? accentColor : accentColorBase)
  fir2_gain.colorize("fill", isActive ? fillColor : fillColorBase)
}

function updateEnvelope1Colors()
{
  let isActive = (env1_onOff.state == true && osc1_onOff.state == true)

  env1_onOff.colorize("accent", isActive ? accentColor : accentColorBase)
  env1_onOff.colorize("fill", isActive ? fillColor : fillColorBase)

  attack1.colorize("accent",isActive ? accentColor : accentColorBase)
  attack1.colorize("fill",isActive ? fillColor : fillColorBase)

  decay1.colorize("accent",isActive ? accentColor : accentColorBase)
  decay1.colorize("fill",isActive ? fillColor : fillColorBase)

  sustain1.colorize("accent",isActive ? accentColor : accentColorBase)
  sustain1.colorize("fill",isActive ? fillColor : fillColorBase)

  release1.colorize("accent",isActive ? accentColor : accentColorBase)
  release1.colorize("fill",isActive ? fillColor : fillColorBase)
}

function updateEnvelope2Colors()
{
  let isActive = (env2_onOff.state == true && osc2_onOff.state == true)

  env2_onOff.colorize("accent", isActive ? accentColor : accentColorBase)
  env2_onOff.colorize("fill", isActive ? fillColor : fillColorBase)

  attack2.colorize("accent",isActive ? accentColor : accentColorBase)
  attack2.colorize("fill",isActive ? fillColor : fillColorBase)

  decay2.colorize("accent",isActive ? accentColor : accentColorBase)
  decay2.colorize("fill",isActive ? fillColor : fillColorBase)

  sustain2.colorize("accent",isActive ? accentColor : accentColorBase)
  sustain2.colorize("fill",isActive ? fillColor : fillColorBase)

  release2.colorize("accent",isActive ? accentColor : accentColorBase)
  release2.colorize("fill",isActive ? fillColor : fillColorBase)
}

/***********************************/
/***** Updating sound settings *****/
/***********************************/

osc1_shape.on('change', updateSoundSettings);
osc1_onOff.on('change', updateSoundSettings);

osc2_shape.on('change', updateSoundSettings);
osc2_onOff.on('change', updateSoundSettings);

volume1.on('change', updateSoundSettings);
detune1.on('change', updateSoundSettings);

detune2.on('change', updateSoundSettings);
volume2.on('change', updateSoundSettings);

fir1_toggle.on('change', updateSoundSettings);
fir2_toggle.on('change', updateSoundSettings);

/*****************************/
/***** Updating envelope *****/
/*****************************/
env1_onOff.on('change', updateEnvelope1);
attack1.on('change', updateEnvelope1);
decay1.on('change', updateEnvelope1);
sustain1.on('change', updateEnvelope1);
release1.on('change', updateEnvelope1);

env2_onOff.on('change', updateEnvelope2);
attack2.on('change', updateEnvelope2);
decay2.on('change', updateEnvelope2);
sustain2.on('change', updateEnvelope2);
release2.on('change', updateEnvelope2);

let envelope1 =  new Tone.Envelope({
   attack: 0.5,
   decay: 0.5,
   sustain: 0.5,
   release: 0.5,
});
let envelope2 =  new Tone.Envelope({
   attack: 0.5,
   decay: 0.5,
   sustain: 0.5,
   release: 0.5,
});

function updateEnvelope1( ){
  let isOn = env1_onOff.state == true;

   envelope1.attack = isOn ? attack1.value : 0.5;
   envelope1.decay = isOn ? decay1.value : 0.5;
   envelope1.sustain = isOn ? sustain1.value : 0.5;
   envelope1.release = isOn ? release1.value : 0.5;
}

function updateEnvelope2( ){
  let isOn = env2_onOff.state == true;

   envelope2.attack = isOn ? attack2.value : 0.5;
   envelope2.decay = isOn ? decay2.value : 0.5;
   envelope2.sustain = isOn ? sustain2.value : 0.5;
   envelope2.release = isOn ? release2.value : 0.5;
}

/*****************************/
/***** Updating filters *****/
/*****************************/

fir1_cut.on('change', updateFilter1);
fir1_type.on('change', updateFilter1);
fir1_gain.on('change', updateFilter1);

fir2_cut.on('change', updateFilter2);
fir2_type.on('change', updateFilter2);
fir2_gain.on('change', updateFilter2);

let filter1 =  new Tone.Filter({
  type: 'lowpass',
  frequency: 350,
  gain: 0
}).toMaster();

let filter2 =  new Tone.Filter({
  type: 'lowpass',
  frequency: 350,
  gain: 0
}).toMaster();

function updateFilter1( )
{
  console.log("updateFilter1");

   filter1.type = fir1_type.value;
   filter1.frequency.value = fir1_cut.value;
   filter1.gain.value = fir1_gain.value;
}

function updateFilter2( )
{
   filter2.type = fir2_type.value;
   filter2.frequency.value = fir2_cut.value;
   filter2.gain.value = fir2_gain.value;
}
