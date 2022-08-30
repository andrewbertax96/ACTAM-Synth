Nexus.context = Tone.context.rawContext;

navigator.requestMIDIAccess().then((midiAccess) => 
{
   Array.from(midiAccess.inputs).forEach
   (
      (input) => { input[1].onmidimessage = processMidiMessage }
   )
})

 function processMidiMessage( msg ) 
 {
   const [command, key, velocity] = msg.data;
   if (command === 145) 
   {
     console.log('KEY UP: ' + key);
     midiNoteOn(key);
   } 
   else if (command === 129) 
   {
     console.log('KEY DOWN: ' + key);
     midiNoteOff(key);
   }
 }

 function midiNoteOn(key)
 {
   let pitch = pitchFromMidiNote(key);
   onClickedPlaySound(pitch, "8n");
 }

 function midiNoteOff(key)
 {
//TODO::
 }

 function pitchFromMidiNote(key)
 {
   let pitch = Math.pow(2, (key - 69)/12)*440;
   return pitch;
 }

 function onClickedPlaySound( pitch, duration )
{   
    if (soundSettings === undefined)
    {
        updateSoundSettings();
    }

    playSound(pitch, duration, soundSettings);
}

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

// Keyboard emulation for C4-C5 s-l keys
let emulatedKeys = {
   s: 60,
   e: 61,
   d: 62,
   r: 63,
   f: 64,
   g: 65,
   y: 66,
   h: 67,
   u: 68,
   j: 69,
   i: 70,
   k: 71,
   l: 72
 }
 
 document.addEventListener('keydown', function(e) {
   if (emulatedKeys.hasOwnProperty(e.key)) {
      midiNoteOn(emulatedKeys[e.key]);
   }
 });
 
 document.addEventListener('keyup', function(e) {
   if (emulatedKeys.hasOwnProperty(e.key)) {
      midiNoteOff();
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

        let filter = fir1_toggle.state == true ? filter1 : undefined;
        /*if (fir1_toggle.state == true)
        {
          filter = filter1;
        }*/
        soundSettings.addOscillatorShort(type, detune, volume, envelope1, filter);
    }

    if ( osc2_onOff.state == true )
    {
         const type = osc2_shape.value;
         const detune = detune2.value;
         const volume = volume2.value;

         updateEnvelope2();
         let filter = fir2_toggle.state == true ? filter2 : undefined;
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

/*************************************/
/********* MIDI Keyboard *************/
/*************************************/

/* Note: MIDIAccess provides methods for listing MIDI input and output devices, 
and obtaining access to those devices.*/
/*navigator.requestMIDIAccess().then(function(access)
{
   console.log('access', access);
   replaceElements(Array.from(access.inputs.values()));
   access.onstatechange = function(e) //onstatechange is fired every time a new device is connected
   {
      replaceElements(Array.from(this.inputs.values()));
   }
})*/

/*audioCtx = new AudioContext();


document.onclick = async function () {
   await audioCtx.resume();
   document.onclick = undefined;
}
*/

let nVoices = 4;
let voicesCh1 = new Array(nVoices);
let voicesCh2 = new Array(nVoices);
let adsrCh1 = new Array(nVoices);
let adsrCh2 = new Array(nVoices);
let filterCh1 = new Array(nVoices);
let filterCh2 = new Array(nVoices);