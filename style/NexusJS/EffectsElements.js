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
   'min': 1,
   'max': 10,
   'step': 1,
   'value': 4
});

let chorusDelayTime = new Nexus.Dial('#chorusDelayTime',{
  'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 1,
   'max': 20,
   'step': 0,
   'value': 10
});

let chorusDepth = new Nexus.Dial('#chorusDepth',{
  'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 100,
   'step': 1,
   'value': 50
});

let vibratoFreq = new Nexus.Dial('#vibratoFreq',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 1,
   'max': 10,
   'step': 1,
   'value': 5
});
let vibratoDepth = new Nexus.Dial('#vibratoDepth',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 100,
   'step': 1,
   'value': 50
});

let tremoloFreq = new Nexus.Dial('#tremoloFreq',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 5,
   'max': 15,
   'step': 1,
   'value': 12
});

let tremoloDepth = new Nexus.Dial('#tremoloDepth',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 100,
   'step': 1,
   'value': 75
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

let reverbDecay = new Nexus.Dial('#reverbDecay',{
   'size': [100,100],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 0.9,
   'step': 0,
   'value': 0.7
});

let pingpongDelay = new Nexus.Dial('#pingpongDelay',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 1,
   'step': 0,
   'value': 0.2
});

let pingpongFeedback = new Nexus.Dial('#pingpongFeedback',{
  'size': [40,40],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 0.7,
   'step': 0,
   'value': 0.3
});

let chorusLFO_number = new Nexus.Number('#chorusLFO_number',{
  'size': [45,20]
});

let chorusDelayTime_number = new Nexus.Number('#chorusDelayTime_number',{
  'size': [45,20]
});

let chorusDepth_number = new Nexus.Number('#chorusDepth_number',{
  'size': [45,20]
});

let vibratoFreq_number = new Nexus.Number('#vibratoFreq_number',{
  'size': [45,20]
});
let vibratoDepth_number = new Nexus.Number('#vibratoDepth_number',{
  'size': [45,20]
});

let tremoloFreq_number = new Nexus.Number('#tremoloFreq_number',{
  'size': [45,20]
});

let tremoloDepth_number = new Nexus.Number('#tremoloDepth_number',{
  'size': [45,20]
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

let reverbDecay_number = new Nexus.Number('#reverbDecay_number',{
  'size': [45,20]
});

let pingpongDelay_number = new Nexus.Number('#pingpongDelay_number',{
  'size': [45,20]
});

let pingpongFeedback_number = new Nexus.Number('#pingpongFeedback_number',{
  'size': [45,20]
});

chorusLFO_number.link(chorusLFO);
chorusDelayTime_number.link(chorusDelayTime);
chorusDepth_number.link(chorusDepth);
vibratoFreq_number.link(vibratoFreq);
vibratoDepth_number.link(vibratoDepth);
tremoloFreq_number.link(tremoloFreq);
tremoloDepth_number.link(tremoloDepth);
phaserFreq_number.link(phaserFreq);
phaserOctave_number.link(phaserOctave);
phaserBaseFreq_number.link(phaserBaseFreq);
reverbDecay_number.link(reverbDecay);
pingpongDelay_number.link(pingpongDelay);
pingpongFeedback_number.link(pingpongFeedback);

/*****************************************/
/***** Tremolo effect implementation *****/
/*****************************************/

tremolo_onOff.on("change", updateEffects);
tremoloFreq.on("change", onTremoloFreqChanged)
tremoloDepth.on("change", onTremoloDepthChanged);

function onTremoloDepthChanged( )
{
    newValue = tremoloDepth.value / 100;
    tremolo.set({
        depth: newValue
    });
}

function onTremoloFreqChanged()
{
    newValue = tremoloFreq.value;
    tremolo.set({
        frequency: newValue
    });
}

/*****************************************/
/***** Vibrato effect implementation *****/
/*****************************************/

vibrato_onOff.on("change", updateEffects);
vibratoFreq.on("change", onVibratoFreqChanged)
vibratoDepth.on("change", onVibratoDepthChanged);

function onVibratoDepthChanged( )
{
    newValue = vibratoDepth.value / 100;
    vibrato.set({
        depth: newValue
    });
}

function onVibratoFreqChanged()
{
    newValue = vibratoFreq.value;
    vibrato.set({
        frequency: newValue
    });
}

/*****************************************/
/***** Chorus effect implementation ******/
/*****************************************/

chorus_onOff.on("change", updateEffects);
chorusLFO.on("change", onChorusFreqChanged)
chorusDepth.on("change", onChorusDepthChanged);
chorusDelayTime.on("change", onChorusDelayChanged);

function onChorusDepthChanged( )
{
    newValue = chorusDepth.value / 100;
    chorus.set({
        depth: newValue
    });
}

function onChorusFreqChanged()
{
    newValue = chorusLFO.value;
    chorus.set({
        frequency: newValue
    });
}

function onChorusDelayChanged( )
{
    newValue = chorusDelayTime.value;
    chorus.set({
        delayTime: newValue
    });
}

/*****************************************/
/***** Reverb effect implementation *****/
/*****************************************/

reverb_onOff.on("change", updateEffects);
reverbDecay.on("change", onReverbChanged)

function onReverbChanged( )
{
    newValue = reverbDecay.value;
    reverb.set({
        roomSize: newValue
    });
}

/*****************************************/
/***** PingPong effect implementation *****/
/*****************************************/

delay_onOff.on("change", updateEffects);
pingpongDelay.on("change", onPingPongDelayChanged)
pingpongFeedback.on("change", onPingPongFeedbackChanged);

function onPingPongDelayChanged( )
{
    newValue = pingpongDelay.value;
    pingpong.set({
        delayTime: newValue
    });
}

function onPingPongFeedbackChanged()
{
    newValue = pingpongFeedback.value;
    pingpong.set({
        feedback: newValue
    });
}