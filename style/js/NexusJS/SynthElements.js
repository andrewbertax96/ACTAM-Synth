Nexus.colors.accent = "#353535"
Nexus.colors.fill = "#F7F6EF"

//Synth elements
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
   'options': ['lowshelf','highpass','bandpass']
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
/***** Events processing *****/
/*****************************/

let accentColorBase = "#353535";
let fillColorBase = "#F7F6EF";
let accentColor = "darkorange";
let fillColor = "#blue";

osc1_shape.on('change', updateSoundSettings);
osc1_onOff.on('change',function(changeColors) {
  if(osc1_onOff.state == true){
    osc1_onOff.colorize("accent","darkorange")
    osc1_onOff.colorize("fill","#blue")
    detune1.colorize("accent","darkorange")
    detune1.colorize("fill","#blue")
    volume1.colorize("accent","darkorange")
    volume1.colorize("fill","#blue")
    if(fir1_toggle.state == true){
      fir1_toggle.colorize("accent",accentColor)
      fir1_toggle.colorize("fill",fillColor)
      fir1_cut.colorize("accent",accentColor)
      fir1_cut.colorize("fill",fillColor)
      fir1_gain.colorize("accent",accentColor)
      fir1_gain.colorize("fill",fillColor)
    }
    if(env1_onOff.state == true){
      env1_onOff.colorize("accent",accentColor)
      env1_onOff.colorize("fill",fillColor)
      attack1.colorize("accent",accentColor)
      attack1.colorize("fill",fillColor)
      decay1.colorize("accent",accentColor)
      decay1.colorize("fill",fillColor)
      sustain1.colorize("accent",accentColor)
      sustain1.colorize("fill",fillColor)
      release1.colorize("accent",accentColor)
      release1.colorize("fill",fillColor)
    }
  }
  else{
    osc1_onOff.colorize("accent","#353535")
    osc1_onOff.colorize("fill","#F7F6EF")
    detune1.colorize("accent","#353535")
    detune1.colorize("fill","#F7F6EF")
    volume1.colorize("accent","#353535")
    volume1.colorize("fill","#F7F6EF")
    if(fir1_toggle.state == true){
      fir1_toggle.colorize("accent",accentColorBase)
      fir1_toggle.colorize("fill",fillColorBase)
      fir1_cut.colorize("accent",accentColorBase)
      fir1_cut.colorize("fill",fillColorBase)
      fir1_gain.colorize("accent",accentColorBase)
      fir1_gain.colorize("fill",fillColorBase)
    }
    if(env1_onOff.state == true){
      env1_onOff.colorize("accent",accentColorBase)
      env1_onOff.colorize("fill",fillColorBase)
      attack1.colorize("accent",accentColorBase)
      attack1.colorize("fill",fillColorBase)
      decay1.colorize("accent",accentColorBase)
      decay1.colorize("fill",fillColorBase)
      sustain1.colorize("accent",accentColorBase)
      sustain1.colorize("fill",fillColorBase)
      release1.colorize("accent",accentColorBase)
      release1.colorize("fill",fillColorBase)
    }
  }
})
osc1_onOff.on('change', updateSoundSettings);

osc2_shape.on('change', updateSoundSettings);
osc2_onOff.on('change',function(changeColors) {
  if(osc2_onOff.state == true){
    osc2_onOff.colorize("accent",accentColor)
    osc2_onOff.colorize("fill",fillColor)
    detune2.colorize("accent",accentColor)
    detune2.colorize("fill",fillColor)
    volume2.colorize("accent",accentColor)
    volume2.colorize("fill",fillColor)
    if(fir2_toggle.state == true){
      fir2_toggle.colorize("accent",accentColor)
      fir2_toggle.colorize("fill",fillColor)
      fir2_cut.colorize("accent",accentColor)
      fir2_cut.colorize("fill",fillColor)
      fir2_gain.colorize("accent",accentColor)
      fir2_gain.colorize("fill",fillColor)
    }
    if(env2_onOff.state == true){
      env2_onOff.colorize("accent",accentColor)
      env2_onOff.colorize("fill",fillColor)
      attack2.colorize("accent",accentColor)
      attack2.colorize("fill",fillColor)
      decay2.colorize("accent",accentColor)
      decay2.colorize("fill",fillColor)
      sustain2.colorize("accent",accentColor)
      sustain2.colorize("fill",fillColor)
      release2.colorize("accent",accentColor)
      release2.colorize("fill",fillColor)
    }
  }
  else{
    osc2_onOff.colorize("accent",accentColorBase)
    osc2_onOff.colorize("fill",fillColorBase)
    detune2.colorize("accent",accentColorBase)
    detune2.colorize("fill",fillColorBase)
    volume2.colorize("accent",accentColorBase)
    volume2.colorize("fill",fillColorBase)
    if(fir2_toggle.state == true){
      fir2_toggle.colorize("accent",accentColorBase)
      fir2_toggle.colorize("fill",fillColorBase)
      fir2_cut.colorize("accent",accentColorBase)
      fir2_cut.colorize("fill",fillColorBase)
      fir2_gain.colorize("accent",accentColorBase)
      fir2_gain.colorize("fill",fillColorBase)
    }
    if(env2_onOff.state == true){
      env2_onOff.colorize("accent",accentColorBase)
      env2_onOff.colorize("fill",fillColorBase)
      attack2.colorize("accent",accentColorBase)
      attack2.colorize("fill",fillColorBase)
      decay2.colorize("accent",accentColorBase)
      decay2.colorize("fill",fillColorBase)
      sustain2.colorize("accent",accentColorBase)
      sustain2.colorize("fill",fillColorBase)
      release2.colorize("accent",accentColorBase)
      release2.colorize("fill",fillColorBase)
    }
  }
})
osc2_onOff.on('change', updateSoundSettings);

volume1.on('change', updateSoundSettings);
detune1.on('change', updateSoundSettings);
detune2.on('change', updateSoundSettings);
volume2.on('change', updateSoundSettings);

fir1_toggle.on('change', updateSoundSettings);
fir2_toggle.on('change', updateSoundSettings);

fir1_cut.on('change', updateFilter1);
fir1_type.on('change', updateFilter1);
fir1_gain.on('change', updateFilter1);

fir2_cut.on('change', updateFilter2);
fir2_type.on('change', updateFilter2);
fir2_gain.on('change', updateFilter2);

fir1_toggle.on('change',function(changeColors) {
  if(fir1_toggle.state == true && osc1_onOff.state == true){
    fir1_toggle.colorize("accent",accentColor)
    fir1_toggle.colorize("fill",fillColor)
    fir1_cut.colorize("accent",accentColor)
    fir1_cut.colorize("fill",fillColor)
    fir1_gain.colorize("accent",accentColor)
    fir1_gain.colorize("fill",fillColor)
  }
  if(fir1_toggle.state == true && osc1_onOff.state == false) {
    fir1_toggle.colorize("accent",accentColorBase)
    fir1_toggle.colorize("fill",fillColorBase)
    fir1_cut.colorize("accent",accentColorBase)
    fir1_cut.colorize("fill",fillColorBase)
    fir1_gain.colorize("accent",accentColorBase)
    fir1_gain.colorize("fill",fillColorBase)
  }
  if(fir2_toggle.state == false && osc2_onOff.state == true){
    fir2_toggle.colorize("accent",accentColorBase)
    fir2_toggle.colorize("fill",fillColorBase)
    fir2_cut.colorize("accent",accentColorBase)
    fir2_cut.colorize("fill",fillColorBase)
    fir2_gain.colorize("accent",accentColorBase)
    fir2_gain.colorize("fill",fillColorBase)
  }
})

env1_onOff.on('change',function(changeColors) {
  if(env1_onOff.state == true && osc1_onOff.state == true){
    env1_onOff.colorize("accent",accentColor)
    env1_onOff.colorize("fill",fillColor)
    attack1.colorize("accent",accentColor)
    attack1.colorize("fill",fillColor)
    decay1.colorize("accent",accentColor)
    decay1.colorize("fill",fillColor)
    sustain1.colorize("accent",accentColor)
    sustain1.colorize("fill",fillColor)
    release1.colorize("accent",accentColor)
    release1.colorize("fill",fillColor)
  }
  if(env1_onOff.state == true && osc1_onOff.state == false){
    env1_onOff.colorize("accent",accentColorBase)
    env1_onOff.colorize("fill",fillColorBase)
    attack1.colorize("accent",accentColorBase)
    attack1.colorize("fill",fillColorBase)
    decay1.colorize("accent",accentColorBase)
    decay1.colorize("fill",fillColorBase)
    sustain1.colorize("accent",accentColorBase)
    sustain1.colorize("fill",fillColorBase)
    release1.colorize("accent",accentColorBase)
    release1.colorize("fill",fillColorBase)
  }
  if(env1_onOff.state == false && osc1_onOff.state == true){
    env1_onOff.colorize("accent",accentColorBase)
    env1_onOff.colorize("fill",fillColorBase)
    attack1.colorize("accent",accentColorBase)
    attack1.colorize("fill",fillColorBase)
    decay1.colorize("accent",accentColorBase)
    decay1.colorize("fill",fillColorBase)
    sustain1.colorize("accent",accentColorBase)
    sustain1.colorize("fill",fillColorBase)
    release1.colorize("accent",accentColorBase)
    release1.colorize("fill",fillColorBase)
  }
})
attack1.on('change', updateEnvelope1);
decay1.on('change', updateEnvelope1);
sustain1.on('change', updateEnvelope1);
release1.on('change', updateEnvelope1);

env2_onOff.on('change',function(changeColors) {
  if(env2_onOff.state == true && osc2_onOff.state == true){
    env2_onOff.colorize("accent",accentColor)
    env2_onOff.colorize("fill",fillColor)
    attack2.colorize("accent",accentColor)
    attack2.colorize("fill",fillColor)
    decay2.colorize("accent",accentColor)
    decay2.colorize("fill",fillColor)
    sustain2.colorize("accent",accentColor)
    sustain2.colorize("fill",fillColor)
    release2.colorize("accent",accentColor)
    release2.colorize("fill",fillColor)
  }
  if(env2_onOff.state == true && osc2_onOff.state == false){
    env2_onOff.colorize("accent",accentColorBase)
    env2_onOff.colorize("fill",fillColorBase)
    attack2.colorize("accent",accentColorBase)
    attack2.colorize("fill",fillColorBase)
    decay2.colorize("accent",accentColorBase)
    decay2.colorize("fill",fillColorBase)
    sustain2.colorize("accent",accentColorBase)
    sustain2.colorize("fill",fillColorBase)
    release2.colorize("accent",accentColorBase)
    release2.colorize("fill",fillColorBase)
  }
  if(env2_onOff.state == false && osc2_onOff.state == true){
    env2_onOff.colorize("accent",accentColorBase)
    env2_onOff.colorize("fill",fillColorBase)
    attack2.colorize("accent",accentColorBase)
    attack2.colorize("fill",fillColorBase)
    decay2.colorize("accent",accentColorBase)
    decay2.colorize("fill",fillColorBase)
    sustain2.colorize("accent",accentColorBase)
    sustain2.colorize("fill",fillColorBase)
    release2.colorize("accent",accentColorBase)
    release2.colorize("fill",fillColorBase)
  }
})
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
   envelope1.attack = attack1.value;
   envelope1.decay = decay1.value;
   envelope1.sustain = sustain1.value;
   envelope1.release = release1.value;
}
function updateEnvelope2( ){
   envelope2.attack = attack2.value;
   envelope2.decay = decay2.value;
   envelope2.sustain = sustain2.value;
   envelope2.release = release2.value;
}
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