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
   console.log("pitch = " + pitch);
   
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

// Below is keyboard emulation for C4-C5 s-l keys
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

let tremolo = new Tone.Tremolo(13, 0.75).toMaster().start();
let vibrato = new Tone.Vibrato(5, 0.5).toMaster();
let chorus = new Tone.Chorus(4, 10, 0.5).toMaster();
let phaser = new Tone.Phaser(10, 3, 350).toMaster();
let reverb = new Tone.JCReverb(0.7).toMaster();
let pingpong  =  new Tone.PingPongDelay(0.2, 0.4).toMaster();

function updateSoundSettings()
{
    soundSettings = new sound_settings( );

    if ( osc1_onOff.state )
    {
        const type = osc1_shape.value;
        const detune = detune1.value;
        const volume = volume1.value;
        
        updateEnvelope1();
        soundSettings.addOscillatorShort(type, detune, volume, envelope1);
    }

    if ( osc2_onOff.state == true )
    {
         const type = osc2_shape.value;
         const detune = detune2.value;
         const volume = volume2.value;

         updateEnvelope2();
         soundSettings.addOscillatorShort(type, detune, volume, envelope2);
    }
    /*
    if ( document.getElementById("checkTremolo").checked == true )
    {
        soundSettings.addEffect(tremolo);
    }

    if ( document.getElementById("checkVibrato").checked == true )
    {
        soundSettings.addEffect(vibrato);
    }

    if ( document.getElementById("checkChorus").checked == true )
    {
        soundSettings.addEffect(chorus);
    }

    if ( document.getElementById("checkPhaser").checked == true )
    {
        soundSettings.addEffect(phaser);
    }

    if ( document.getElementById("checkReverb").checked == true )
    {
        soundSettings.addEffect(reverb);
    }

    if ( document.getElementById("checkPingPong").checked == true )
    {
        soundSettings.addEffect(pingpong);
    }*/
}

/*
document.getElementById("checkOscillator1").addEventListener("change", onOscillatorClicked);
document.getElementById("checkOscillator2").addEventListener("change", onOscillatorClicked);

function onOscillatorClicked( )
{
    updateSoundSettings();
}

document.getElementById("waveforms1").addEventListener("change", onWaveformClicked);
document.getElementById("waveforms2").addEventListener("change", onWaveformClicked);

function onWaveformClicked( )
{
    updateSoundSettings();
}

document.getElementById("attack1").addEventListener("change", onEnvelopeChanged);
document.getElementById("decay1").addEventListener("change", onEnvelopeChanged);
document.getElementById("sustain1").addEventListener("change", onEnvelopeChanged);
document.getElementById("release1").addEventListener("change", onEnvelopeChanged);
document.getElementById("attack2").addEventListener("change", onEnvelopeChanged);
document.getElementById("decay2").addEventListener("change", onEnvelopeChanged);
document.getElementById("sustain2").addEventListener("change", onEnvelopeChanged);
document.getElementById("release2").addEventListener("change", onEnvelopeChanged);

function onEnvelopeChanged()
{
    updateSoundSettings();
}

document.getElementById("detune1").addEventListener("change", onDetuneChanged);
document.getElementById("detune2").addEventListener("change", onDetuneChanged);

function onDetuneChanged()
{
    updateSoundSettings();
}*/

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

 /*
 function playSound(pitch, duration)
 {
   let synth = new Tone.MonoSynth();
   synth.toMaster().triggerAttackRelease(pitch, duration);
   return synth;
 }*/

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


/*volume1 = audioCtx.createGain();
volume1.gain.value = 0.125;
volume2 = audioCtx.createGain();
volume2.gain.value = 0.125;


for (let i = 0; i < nVoices; i++) {
   voicesCh1[i] = audioCtx.createOscillator();
   voicesCh2[i] = audioCtx.createOscillator();

   voicesCh1[i].start();
   voicesCh2[i].start();

   adsrCh1[i] = audioCtx.createGain();
   adsrCh2[i] = audioCtx.createGain();
   adsrCh1[i].gain.value = 0;
   adsrCh2[i].gain.value = 0;

   voicesCh1[i].connect(adsrCh1[i]);
   voicesCh2[i].connect(adsrCh2[i]);

   adsrCh1[i].connect(volume1);
   adsrCh2[i].connect(volume2);

   filterCh1[i] = audioCtx.createBiquadFilter();
   filterCh2[i] = audioCtx.createBiquadFilter();

   filterCh1[i].frequency.value = 5000;
   filterCh1[i].type = 'lowpass';

   filterCh2[i].frequency.value = 5000;
   filterCh2[i].type = 'lowpass';
}

volume1.connect(audioCtx.destination);
volume2.connect(audioCtx.destination);*/
