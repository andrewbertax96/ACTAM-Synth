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
   'options': ['lowpass','highpass','bandpass']
});
let fir1_cut = new Nexus.Dial('#fir1-cut',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   'value': 0 //TODO: filterCh1[0].frequency.value
});
let fir1_gain = new Nexus.Dial('#fir1-gain',{
  'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   'value': 0 //TODO: filterCh1[0].frequency.value
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
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
});
let fir1_gain_number = new Nexus.Number('#fir1_gain_number',{
  'size': [30,15],
  'value': 0,
  'min': 20,
  'max': 5000,
  'step': 1
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
   'max': 5000,
   'step': 0,
   'value': 0 //TODO: filterCh2[0].frequency.value
});
let fir2_gain = new Nexus.Dial('#fir2-gain',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 20,
   'max': 5000,
   'step': 0,
   'value': 0 //TODO: filterCh2[0].frequency.value
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

let mixVolume = new Nexus.Dial('#mix',{
   'size': [30,30],
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
let piano = new Nexus.Piano('#keyboard',{
   'size': [700,180],
   'mode': 'button',  // 'button', 'toggle', or 'impulse'
   'lowNote': 36,
   'highNote': 108
});
let oscilloscope = new Nexus.Oscilloscope('#oscilloscope',{
  'size': [175,180]
})
let spectrogram = new Nexus.Spectrogram('#spectrogram',{
  'size': [175,180]
})

/*****************************/
/***** Events processing *****/
/*****************************/

osc1_shape.on('change', updateSoundSettings);
osc1_onOff.on('change', updateSoundSettings);
osc2_shape.on('change', updateSoundSettings);
osc2_onOff.on('change', updateSoundSettings);

volume1.on('change', updateSoundSettings);
detune1.on('change', updateSoundSettings);
detune2.on('change', updateSoundSettings);
volume2.on('change', updateSoundSettings);

fir1_toggle.on('change', fir1_OnOff_func);
fir2_toggle.on('change', fir2_OnOff_func);
fir1_cut.on('change', fir1_update_param );
fir1_type.on('change', fir1_update_param);
fir2_cut.on('change', fir2_update_param);
fir2_type.on('change', fir2_update_param);

attack1.on('change', updateEnvelope1);
decay1.on('change', updateEnvelope1);
sustain1.on('change', updateEnvelope1);
release1.on('change', updateEnvelope1);

attack2.on('change', updateEnvelope2);
decay2.on('change', updateEnvelope2);
sustain2.on('change', updateEnvelope2);
release2.on('change', updateEnvelope2);
piano.on('change', piano_func);

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

function updateEnvelope1( )
{
   envelope1.attack = attack1.value;
   envelope1.decay = decay1.value;
   envelope1.sustain = sustain1.value;
   envelope1.release = release1.value;
}

function updateEnvelope2( )
{
   envelope2.attack = attack2.value;
   envelope2.decay = decay2.value;
   envelope2.sustain = sustain2.value;
   envelope2.release = release2.value;
}

function fir1_OnOff_func(){
   if(fir1_toggle.state){
      /*for (let i = 0; i < nVoices; i++) {
         voicesCh1[i].disconnect(adsrCh1[i]);
         harmVoicesCh1[i].disconnect(adsrHarmCh1[i]);
         voicesCh1[i].connect(filterCh1[i]);
         harmVoicesCh1[i].connect(filterHarmCh1[i]);
         filterCh1[i].connect(adsrCh1[i]);
         filterHarmCh1[i].connect(adsrHarmCh1[i]);
      }*/
   } else {
      /*for (let i = 0; i < nVoices; i++) {
         voicesCh1[i].disconnect(filterCh1[i]);
         harmVoicesCh1[i].disconnect(filterHarmCh1[i]);
         filterCh1[i].disconnect(adsrCh1[i]);
         filterHarmCh1[i].disconnect(adsrHarmCh1[i]);
         voicesCh1[i].connect(adsrCh1[i]);
         harmVoicesCh1[i].connect(adsrHarmCh1[i]);
      }*/
   }
}

function fir2_OnOff_func(){
   if(fir2_toggle.state){
      /*for (let i = 0; i < nVoices; i++) {
         voicesCh2[i].disconnect(adsrCh2[i]);
         harmVoicesCh2[i].disconnect(adsrHarmCh2[i]);
         voicesCh2[i].connect(filterCh2[i]);
         harmVoicesCh2[i].connect(filterHarmCh2[i]);
         filterCh2[i].connect(adsrCh2[i]);
         filterHarmCh2[i].connect(adsrHarmCh2[i]);
      }*/
   } else{
      /*for (let i = 0; i < nVoices; i++) {
         /*voicesCh2[i].disconnect(filterCh2[i]);
         harmVoicesCh2[i].disconnect(filterHarmCh2[i]);
         filterCh2[i].disconnect(adsrCh2[i]);
         filterHarmCh2[i].disconnect(adsrHarmCh2[i]);
         voicesCh2[i].connect(adsrCh2[i]);
         harmVoicesCh2[i].connect(adsrHarmCh2[i]);
      }*/
   }
}

function fir1_update_param(){
   for (let i = 0; i < nVoices; i++) {
     /* filterCh1[i].type = fir1_type.value;
      filterCh1[i].frequency.value = fir1_cut.value;
      filterHarmCh1[i].type = fir1_type.value;
      filterHarmCh1[i].frequency.value = fir1_cut.value;*/
   }
}

function fir2_update_param(){
   for (let i = 0; i < nVoices; i++) {
     /*filterCh2[i].type = fir2_type.value;
     filterCh2[i].frequency.value = fir2_cut.value;
     filterHarmCh2[i].type = fir2_type.value;
     filterHarmCh2[i].frequency.value = fir2_cut.value;*/
  }
}

let myWebAudioNode = Tone.Master;

meter.connect(myWebAudioNode)
oscilloscope.connect(myWebAudioNode)
spectrogram.connect(myWebAudioNode)
