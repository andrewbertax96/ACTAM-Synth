export default class sound_settings {
    //array of MonoSynths
    #oscillators = [];

    //array of Effects
    #effects = [];

    addOscillator(type, attack, decay, sustain, release, detune, f_type, f_freq, f_gain, volume) 
    {
        let synthOptions = {
            oscillator: {
                type: type
            },
            envelope: {
                attack: attack,
                decay: decay,
                sustain: sustain,
                release: release
            },
            //0-1200 semitone cents, a Cent is 1/100th of a semitone
            detune: detune,
            volume: volume,
            /*filter: 
				{
					gain: f_gain,
					frequency: f_freq,
					type: f_type,
				},*/
        };
        this.#oscillators.push(synthOptions);
    }

    addEffect( effect )
    {
        console.log("adding effect: " + effect);
        if ( !this.#effects.includes(effect) )
        {
            this.#effects.push(effect);
        }
    }

    getOscillatorAtIndex(index)
    {
        if (this.#oscillators.length > index)
        {
            return this.#oscillators[index];
        }

        assert(false, "Array index out of range");
        return undefined;
    }

    getOscillatorCount()
    {
        return this.#oscillators.length;
    }

    getEffects()
    {
        return this.#effects;
    }

    getEffectCount()
    {
        return this.#effects.length;
    }
  }

  let synth;
  export function playSound(pitch, duration, soundSettings)
  {
    synth = createSynth(soundSettings);
    synth = addEffects(synth, soundSettings);

    synth.toMaster().triggerAttackRelease(pitch, duration);
    return synth;
  }

  function createSynth(soundSettings)
  {
    const oscCount = soundSettings.getOscillatorCount();
    if (oscCount == 1)
    {
        const synthSettings = soundSettings.getOscillatorAtIndex(0);

        const synth = new Tone.MonoSynth(synthSettings);
        const detune = synthSettings.detune;
        synth.set
        ({
            detune: detune
        });

        return synth;
    }
    else if (oscCount == 2)
    {
        const synthSettings1 = soundSettings.getOscillatorAtIndex(0);
        const synthSettings2 = soundSettings.getOscillatorAtIndex(1);

        const duoSynth = new Tone.DuoSynth();
        duoSynth.voice0.oscillator.envelope = synthSettings1.envelope;
        duoSynth.voice0.oscillator.type = synthSettings1.oscillator.type;
        duoSynth.voice0.oscillator.volume = synthSettings1.volume;

        let detune = synthSettings1.detune;
        duoSynth.voice0.set({
            detune: detune
        });
        //duoSynth.voice0.oscillator.filter = synthSettings1.filter;

        duoSynth.voice1.oscillator.envelope = synthSettings2.envelope;
        duoSynth.voice1.oscillator.type = synthSettings2.oscillator.type;
        duoSynth.voice1.oscillator.volume = synthSettings2.volume;
        //duoSynth.voice1.oscillator.filter = synthSettings2.filter;

        detune = synthSettings2.detune;
        duoSynth.voice1.set({
            detune: detune
        });

        duoSynth.harmonicity.value = 1;
        duoSynth.vibratoAmount.value = 0;
        
        return duoSynth;
    }
  }

function addEffects(synth, soundSettings)
  {
    if (soundSettings.getEffectCount() > 0 )
    {
        for (const effect of soundSettings.getEffects()) 
        {
            synth.connect(effect);
        }
    }
    return synth;
  }