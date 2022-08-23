import sound_settings, {playSound} from "./sound_settings_13.8.4.js";

let soundSettings;
let tremolo = new Tone.Tremolo(13, 0.75).toMaster().start();
let vibrato = new Tone.Vibrato(5, 0.5).toMaster();
let chorus = new Tone.Chorus(4, 10, 0.5).toMaster();
let phaser = new Tone.Phaser(10, 3, 350).toMaster();
let reverb = new Tone.JCReverb(0.7).toMaster();
let pingpong  =  new Tone.PingPongDelay(0.2, 0.4).toMaster();

window.addEventListener("keydown", function (event) 
{
    //C4 frequency
    let pitch = 261.63;
    let step = 0;
    if (event.key == "d") 
    {
        step = 0;
    } 
    else if (event.key == "r")
    {
        step = 1;
    }
    else if (event.key == "f")
    {
        step = 2;
    }
    else if (event.key == "t")
    {
        step = 3;
    }
    else if (event.key == "g")
    {
        step = 4;
    }
    if (event.key == "h") 
    {
        step = 5;
    } 
    else if (event.key == "u")
    {
        step = 6;
    }
    else if (event.key == "j")
    {
        step = 7;
    }
    else if (event.key == "i")
    {
        step = 8;
    }
    else if (event.key == "k")
    {
        step = 9;
    }
    else if (event.key == "o")
    {
        step = 10;
    }
    else if (event.key == "l")
    {
        step = 11;
    }
    pitch = pitch * Math.pow(2, step/12); 

    console.log("onKeydown event: pitch = " + pitch);
    onClickedPlaySound(pitch, "8n");
}
);

function updateSoundSettings()
{
    soundSettings = new sound_settings( );

    if ( document.getElementById("checkOscillator1").checked == true )
    {
        const type = document.getElementById("waveforms1").value;
        const detune = document.getElementById("detune1").value;
        
        const attack = document.getElementById("attack1").value;
        const decay = document.getElementById("decay1").value;
        const sustain = document.getElementById("sustain1").value;
        const release = parseFloat(document.getElementById("release1").value);

        soundSettings.addOscillator(type, attack, decay, sustain, release, detune, 'lowpass',0,0, -5);
    }

    if ( document.getElementById("checkOscillator2").checked == true )
    {
        const type = document.getElementById("waveforms2").value;
        const detune = document.getElementById("detune2").value;

        const attack = document.getElementById("attack2").value;
        const decay = document.getElementById("decay2").value;
        const sustain = document.getElementById("sustain2").value;
        const release = parseFloat(document.getElementById("release2").value);

        soundSettings.addOscillator(type, attack, decay, sustain, release, detune, 'lowpass',0,0, -10);
    }

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
    }
}

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
}

function onClickedPlaySound( pitch, duration )
{   
    if (soundSettings == null || soundSettings == undefined)
    {
        updateSoundSettings();
    }

    playSound(pitch, duration, soundSettings);
}

document.getElementById("checkTremolo").addEventListener("change", onSettingsChanged);
document.getElementById("checkVibrato").addEventListener("change", onSettingsChanged);
document.getElementById("checkChorus").addEventListener("change", onSettingsChanged);
document.getElementById("checkPhaser").addEventListener("change", onSettingsChanged);
document.getElementById("checkReverb").addEventListener("change", onSettingsChanged);
document.getElementById("checkPingPong").addEventListener("change", onSettingsChanged);

function onSettingsChanged( )
{
    updateSoundSettings();
}

/*****************************************/
/***** Tremolo effect implementation *****/
/*****************************************/

tremoloDepthSlider = document.getElementById("tremolo_depth");
tremoloDepthSlider.addEventListener("change", onTremoloDepthChanged);

function onTremoloDepthChanged( )
{
    newValue = tremoloDepthSlider.value / 100;
    tremolo.set({
        depth: newValue
    });
}

tremoloFreqSlider = document.getElementById("tremolo_freq");
tremoloFreqSlider.addEventListener("change", onTremoloFreqChanged );


function onTremoloFreqChanged()
{
    newValue = tremoloFreqSlider.value;
    tremolo.set({
        frequency: newValue
    });
}

/*****************************************/
/***** Vibrato effect implementation *****/
/*****************************************/

vibratoDepthSlider = document.getElementById("vibrato_depth");
vibratoDepthSlider.addEventListener("change", onVibratoDepthChanged);

function onVibratoDepthChanged( )
{
    newValue = vibratoDepthSlider.value / 100;
    vibrato.set({
        depth: newValue
    });
}

vibratoFreqSlider = document.getElementById("vibrato_freq");
vibratoFreqSlider.addEventListener("change", onVibratoFreqChanged );


function onVibratoFreqChanged()
{
    newValue = vibratoFreqSlider.value;
    vibrato.set({
        frequency: newValue
    });
}

/*****************************************/
/***** Chorus effect implementation *****/
/*****************************************/

chorusDepthSlider = document.getElementById("chorus_depth");
chorusDepthSlider.addEventListener("change", onChorusDepthChanged);

function onChorusDepthChanged( )
{
    newValue = chorusDepthSlider.value / 100;
    chorus.set({
        depth: newValue
    });
}

chorusFreqSlider = document.getElementById("chorus_freq");
chorusFreqSlider.addEventListener("change", onChorusFreqChanged );

function onChorusFreqChanged()
{
    newValue = chorusFreqSlider.value;
    chorus.set({
        frequency: newValue
    });
}

chorusDelaySlider = document.getElementById("chorus_delay");
chorusDelaySlider.addEventListener("change", onChorusDelayChanged);

function onChorusDelayChanged( )
{
    newValue = chorusDelaySlider.value;
    chorus.set({
        delayTime: newValue
    });
}
/*
chorusFeedbackSlider = document.getElementById("chorus_feedback");
chorusFeedbackSlider.addEventListener("input", onChorusFeedbackChanged );
chorusFeedbackSlider.addEventListener("change", onChorusFeedbackChanged );

function onChorusFeedbackChanged()
{
    newValue = chorusFeedbackSlider.value / 100;
    chorus.set({
        feedback: newValue
    });
}*/

/*****************************************/
/***** Phaser effect implementation *****/
/*****************************************/

phaserBaseFreqSlider = document.getElementById("phaser_base_freq");
phaserBaseFreqSlider.addEventListener("change", onPhaserBaseFreqChanged);

function onPhaserBaseFreqChanged( )
{
    newValue = phaserBaseFreqSlider.value;
    phaser.set({
        baseFrequency: newValue
    });
}

phaserFreqSlider = document.getElementById("phaser_freq");
phaserFreqSlider.addEventListener("change", onPhaserFreqChanged );

function onPhaserFreqChanged()
{
    newValue = phaserFreqSlider.value;
    phaser.set({
        frequency: newValue
    });
}

phaserOctavesSlider = document.getElementById("phaser_octaves");
phaserOctavesSlider.addEventListener("change", onPhaserOctavesChanged );

function onPhaserOctavesChanged()
{
    newValue = phaserOctavesSlider.value;
    phaser.set({
        octaves: newValue
    });
}

/*****************************************/
/***** Reverb effect implementation *****/
/*****************************************/

reverbDecaySlider = document.getElementById("reverb_decay");
reverbDecaySlider.addEventListener("change", onReverbChanged);

function onReverbChanged( )
{
    newValue = reverbDecaySlider.value;
    reverb.set({
        roomSize: newValue
    });
}

/*****************************************/
/***** PingPong effect implementation *****/
/*****************************************/

pingpongDelaySlider = document.getElementById("pingpong_delay");
pingpongDelaySlider.addEventListener("change", onPingPongDelayChanged);

function onPingPongDelayChanged( )
{
    newValue = pingpongDelaySlider.value;
    pingpong.set({
        delayTime: newValue
    });
}

pingpongFeedbackSlider = document.getElementById("pingpong_feedback");
pingpongFeedbackSlider.addEventListener("change", onPingPongFeedbackChanged );

function onPingPongFeedbackChanged()
{
    newValue = pingpongFeedbackSlider.value / 100;
    pingpong.set({
        feedback: newValue
    });
}

