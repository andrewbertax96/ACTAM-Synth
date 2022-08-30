Nexus.context = Tone.context.rawContext;

/*************************************/
/********* MIDI Keyboard *************/
/*************************************/

navigator.requestMIDIAccess().then((midiAccess) =>
{
   Array.from(midiAccess.inputs).forEach
   (
      (input) => { console.log("input: " + input); input[1].onmidimessage = processMidiMessage }
   )
})

 function processMidiMessage( msg )
 {    
   const [command, key, velocity] = msg.data;

   if (command === 144)
   {
     console.log('note on: ' + key);
     midiNoteOn(key);
   }
   else if (command === 128)
   {
     console.log('note off: ' + key);
     midiNoteOff(key);
   }
 }

 let activeSynths = new Map();

 function midiNoteOn(key)
 {
   if (activeSynths.has(key))
   {
      return;
   }

   let pitch = pitchFromMidiNote(key);
   let synth = onPlaySound(pitch, "8n");

   if (synth != null)
   {
    activeSynths.set(key, synth);
   }
 }

 function midiNoteOff(key)
 {
  let synth = activeSynths.get(key);
  if (synth != null)
  {
      onStopSound(synth);
  }
  activeSynths.delete(key);
 }

 function pitchFromMidiNote(key)
 {
   let pitch = Math.pow(2, (key - 69)/12)*440;
   return pitch;
 }

 function onPlaySound( pitch, duration )
{
    if (soundSettings == null)
    {
        updateSoundSettings();
    }

    return playSound(pitch, duration, soundSettings);
}

function onStopSound(synth)
{
  stopSound(synth);
}

/*************************************/
/********* NEXUS Piano  **************/
/*************************************/

function piano_func( msg )
{
   if (msg.state)
   {
      midiNoteOn(msg.note);
   }
   else
   {
      midiNoteOff(msg.note);
   }
}

/********************************************************************/
/******* Keyboard emulation for C2-C8 octaves with s-l keys *********/
/******************* (and z-x for switching octaves) ****************/

let baseOctave = 60; //C4 octave, by default
let emulatedKeys = {
   s: 0, 
   e: 1,
   d: 2,
   r: 3,
   f: 4,
   g: 5,
   y: 6,
   h: 7,
   u: 8,
   j: 9,
   i: 10,
   k: 11,
   l: 12
 }

 document.addEventListener('keydown', function(e) {
   if (emulatedKeys.hasOwnProperty(e.key)) {
      midiNoteOn(baseOctave + emulatedKeys[e.key]);
   }

   if (e.key === "z" && baseOctave - 12 >= 36){
    baseOctave = baseOctave - 12;
   } else if (e.key === "x" && baseOctave + 12 <= 108) {
    baseOctave = baseOctave + 12;
   }

 });

 document.addEventListener('keyup', function(e) {
   if (emulatedKeys.hasOwnProperty(e.key)) {
      midiNoteOff(baseOctave + emulatedKeys[e.key]);
   }
 });

let soundSettings;

let tremolo = new Tone.Tremolo(12, 0.75).toMaster().start();
let vibrato = new Tone.Vibrato(5, 0.5).toMaster();
let chorus = new Tone.Chorus(4, 10, 0.5).toMaster();
let phaser = new Tone.Phaser(10, 3, 350).toMaster();
let reverb = new Tone.JCReverb(0.7).toMaster();
let pingpong  =  new Tone.PingPongDelay(0.2, 0.3).toMaster();

function updateSoundSettings()
{
    soundSettings = new sound_settings( );

    if ( osc1_onOff.state )
    {
        const type = osc1_shape.value;
        const detune = detune1.value;
        const volume = volume1.value;

        updateEnvelope1();

        let filter;
        if (fir1_toggle.state == true)
        {
          filter = filter1;
        }
        soundSettings.addOscillatorShort(type, detune, volume, envelope1, filter);
    }

    if ( osc2_onOff.state == true )
    {
         const type = osc2_shape.value;
         const detune = detune2.value;
         const volume = volume2.value;

         updateEnvelope2();
         let filter;
         if (fir2_toggle.state == true)
         {
           filter = filter2;
         }
         soundSettings.addOscillatorShort(type, detune, volume, envelope2, filter);
    }

    updateEffects( );
}

function updateEffects( )
{
  if (soundSettings == undefined)
  {
      return;
  }

  /* add or remove Tremolo */
  if ( tremolo_onOff.state == true )
  {
    soundSettings.addEffect(tremolo);
  }
  else
  {
    soundSettings.removeEffect(tremolo);
  }

  /* add or remove Vibrato */
  if ( vibrato_onOff.state == true )
  {
    soundSettings.addEffect(vibrato);
  }
  else
  {
    soundSettings.removeEffect(vibrato);
  }

  /* add or remove Chorus */
  if ( chorus_onOff.state == true )
  {
    soundSettings.addEffect(chorus);
  }
  else
  {
    soundSettings.removeEffect(chorus);
  }

  /* add or remove Phaser */
  if ( phaser_onOff.state == true )
  {
    soundSettings.addEffect(phaser);
  }
  else
  {
    soundSettings.removeEffect(phaser);
  }

  /* add or remove Reverb */
  if ( reverb_onOff.state == true )
  {
    soundSettings.addEffect(reverb);
  }
  else
  {
    soundSettings.removeEffect(reverb);
  }

  /* add or remove PingPong delay */
  if ( delay_onOff.state == true )
  {
    soundSettings.addEffect(pingpong);
  }
  else
  {
    soundSettings.removeEffect(pingpong);
  }
}
