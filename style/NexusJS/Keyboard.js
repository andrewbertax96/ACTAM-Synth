
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
let oscilloscope = new Nexus.Oscilloscope('#oscilloscope',{
  'size': [175,180]
})
let spectrogram = new Nexus.Spectrogram('#spectrogram',{
  'size': [175,180]
})

Nexus.colors.accent = "darkorange"
Nexus.colors.fill = "#F7F6EF"
let piano = new Nexus.Piano('#keyboard',{
   'size': [700,180],
   'mode': 'button',  // 'button', 'toggle', or 'impulse'
   'lowNote': 36,
   'highNote': 108
});
let myWebAudioNode = Tone.Master;

meter.connect(myWebAudioNode)
oscilloscope.connect(myWebAudioNode)
spectrogram.connect(myWebAudioNode)
piano.on('change', piano_func);

//
// COMPUTER KEYBOARD
//
/*
let key2notes = [
   {key: 65, note: 60}, // C
   {key: 87, note: 61}, // C#
   {key: 83, note: 62}, // D
   {key: 69, note: 63}, // D#
   {key: 68, note: 64}, // E
   {key: 70, note: 65}, // F
   {key: 84, note: 66}, // F#
   {key: 71, note: 67}, // G
   {key: 89, note: 68}, // G#
   {key: 72, note: 69}, // A
   {key: 85, note: 70}, // A#
   {key: 74, note: 71}, // B
   {key: 75, note: 72}, // C
  ];

  let allowedKeys = key2notes.map(obj => obj.key);
  let notes = key2notes.map(obj => obj.note);

  let activeVoices =  {};
  let fired = false;

  document.onkeydown = function(ev) {

     if (allowedKeys.includes(ev.keyCode)) {
        let noteIndex = allowedKeys.indexOf(ev.keyCode);
        let midiNote = notes[noteIndex];

        //chord
        if (onOffChord && !fired) {
           fired = true;
           noteChordOn(midiNote + 12*octaveIndex);
        } else {

           let firstFree = undefined;
           let voiceIndex = undefined;

           if(activeVoices[midiNote + 12*octaveIndex] === undefined) {
              if(osc2_onOff.state && !osc1_onOff.state) {
                 firstFree = adsrCh2.filter(x => x.gain.value == 0);
                 voiceIndex = adsrCh2.indexOf(firstFree[0]);
              } else {
                 firstFree = adsrCh1.filter(x => x.gain.value == 0);
                 voiceIndex = adsrCh1.indexOf(firstFree[0]);
              }
              if(voiceIndex < 0 || voiceIndex > 3) return;
              activeVoices[midiNote + 12*octaveIndex] = voiceIndex;
              if (onOffHarm) {
                 noteHarmOn(midiNote + 12*octaveIndex, voiceIndex)
              } else {
                 noteSynthOn(midiNote + 12*octaveIndex, voiceIndex);
              }
           }
        }
     } else if (ev.keyCode === 88) { // X: octave up
        octaveIndex < maxOctave ? octaveIndex++ : octaveIndex = maxOctave;
     } else if (ev.keyCode === 90) { // Z: octave down
        octaveIndex > minOctave ? octaveIndex-- : octaveIndex = minOctave;
     }
  }


  document.onkeyup = function(ev) {
     if (allowedKeys.includes(ev.keyCode)) {
        let noteIndex = allowedKeys.indexOf(ev.keyCode);
        let midiNote = notes[noteIndex];
        if (onOffChord) {
           fired = false;
           noteChordOff();
        } else {
           let voiceIndex = activeVoices[midiNote + 12*octaveIndex];
           if(voiceIndex < 0 || voiceIndex > 3) return;
           delete activeVoices[midiNote + 12*octaveIndex];
           if (onOffHarm) {
              noteHarmOff(voiceIndex)
           } else {
              noteSynthOff(voiceIndex);
           }
        }
     }
  }

  */
  //
  // ON-SCREEN KEYBOARD
  //

  /*
  function piano_func(v) {
     if (v.state) {

           let firstFree = undefined;
           let voiceIndex = undefined;

           if(activeVoices[v.note] === undefined) {
              if(osc2_onOff.state && !osc1_onOff.state) {
                 firstFree = adsrCh2.filter(x => x.gain.value == 0);
                 voiceIndex = adsrCh2.indexOf(firstFree[0]);
              } else {
                 firstFree = adsrCh1.filter(x => x.gain.value == 0);
                 voiceIndex = adsrCh1.indexOf(firstFree[0]);
              }
              if(voiceIndex < 0 || voiceIndex > 3) return;
              activeVoices[v.note] = voiceIndex;
              if (onOffHarm) {
                 noteHarmOn(v.note, voiceIndex)
              } else {
                 noteSynthOn(v.note, voiceIndex);
              }
           }
     } else {
        if (onOffChord) {
           //fired = false;
           noteChordOff();
        } else {
           let voiceIndex = activeVoices[v.note + 12*octaveIndex];
           if(voiceIndex < 0 || voiceIndex > 3) return;
           delete activeVoices[v.note + 12*octaveIndex];
           if (onOffHarm) {
              noteHarmOff(voiceIndex)
           } else {
              noteSynthOff(voiceIndex);
           }
        }
     }
  }


  // note on synth
  function noteSynthOn(midiNote, voiceIndex) {

     freq = (440 / 32) * (2 ** ((midiNote - 9) / 12));

     if(osc1_onOff.state) {
        voicesCh1[voiceIndex].type = osc1_shape.value;
        voicesCh1[voiceIndex].frequency.value = freq;

        adsrCh1[voiceIndex].gain.value = 0;
        noteOnTime1 = audioCtx.currentTime;

        adsrCh1[voiceIndex].gain.linearRampToValueAtTime(1,noteOnTime1 + att1);
        adsrCh1[voiceIndex].gain.linearRampToValueAtTime(sus1 , noteOnTime1 + att1 + dec1);
     }

     if(osc2_onOff.state) {
        voicesCh2[voiceIndex].type = osc2_shape.value;
        voicesCh2[voiceIndex].frequency.value = freq;

        adsrCh2[voiceIndex].gain.value = 0;
        noteOnTime2 = audioCtx.currentTime;

        adsrCh2[voiceIndex].gain.linearRampToValueAtTime(1,noteOnTime2 + att2);
        adsrCh2[voiceIndex].gain.linearRampToValueAtTime(sus2 , noteOnTime2 + att2 + dec2);
     }
  }
  //
  // NOTE OFF FUNCTIONS
  //


  function noteSynthOff(voiceIndex) {
     if(osc1_onOff.state) {
        sustain1 = adsrCh1[voiceIndex].gain.value;
        noteOffTime1 = audioCtx.currentTime;

        adsrCh1[voiceIndex].gain.cancelScheduledValues(noteOffTime1);
        adsrCh1[voiceIndex].gain.value = sustain1;

        adsrCh1[voiceIndex].gain.linearRampToValueAtTime(0 , audioCtx.currentTime + rel1);
     }

     if(osc2_onOff.state) {
        sustain2 = adsrCh2[voiceIndex].gain.value;
        noteOffTime2 = audioCtx.currentTime;

        adsrCh2[voiceIndex].gain.cancelScheduledValues(noteOffTime2);
        adsrCh2[voiceIndex].gain.value = sustain2;

        adsrCh2[voiceIndex].gain.linearRampToValueAtTime(0 , audioCtx.currentTime + rel2);
     }
  }



  //
  // MIDI KEYBAORD
  //

  /*
  WebMidi.enable(function(err) {
     if (err) {
        console.log("An error occurred", err);
     }

     WebMidi.inputs[0].addListener("noteon", "all", function(e) {

        let midiNote = e.note.number;

        if (onOffChord && !fired) {
           fired = true;
           noteChordOn(midiNote);
        } else {
           let firstFree = undefined;
           let voiceIndex = undefined;

           if(activeVoices[v.note] === undefined) {
              if(osc2_onOff.state && !osc1_onOff.state) {
                 firstFree = adsrCh2.filter(x => x.gain.value == 0);
                 voiceIndex = adsrCh2.indexOf(firstFree[0]);
              } else {
                 firstFree = adsrCh1.filter(x => x.gain.value == 0);
                 voiceIndex = adsrCh1.indexOf(firstFree[0]);
              }
              if(voiceIndex < 0 || voiceIndex > 3) return;
              activeVoices[midiNote] = voiceIndex;
              if (onOffHarm) {
                 noteHarmOn(midiNote, voiceIndex)
              } else {
                 noteSynthOn(midiNote, voiceIndex);
              }
           }
        }
     });

     WebMidi.inputs[0].addListener("noteoff", "all", function(e){

        let midiNote = e.note.number;

        if (onOffChord) {
           fired = false;
           noteChordOff();
        } else {
           let voiceIndex = activeVoices[midiNote];
           if(voiceIndex < 0 || voiceIndex > 3) return;
           delete activeVoices[midiNote];
           if (onOffHarm) {
              noteHarmOff(voiceIndex)
           } else {
              noteSynthOff(voiceIndex);
           }
        }
     });
  });

  */
