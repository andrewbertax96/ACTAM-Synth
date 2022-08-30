/***********************************************/
/***** sound_settings class implementation *****/
/***********************************************/

class sound_settings {
    //array of MonoSynths
    #oscillators = [];

    //array of Effects
    #effects = [];

    addOscillatorShort(type, detune, volume, envelope, filter) 
    {
        let synthOptions = 
        {
            type: type,
            detune: detune, //0-1200 semitone cents, a Cent is 1/100th of a semitone
            volume: volume,
            envelope: envelope,
            filter: filter
        };

        this.#oscillators.push(synthOptions);
    }

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

    removeEffect( effect )
    {
        if(this.#effects.includes(effect)) 
        {
            console.log("removing effect: " + effect);

            let index = this.#effects.indexOf(effect)
            this.#effects.splice(index, 1);
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

  //let synth;
  function playSound(pitch, duration, soundSettings)
  {
    let synth = createSynth(soundSettings);
    if (synth == null)
    {
        return synth;
    }

    synth = addEffects(synth, soundSettings);

    if (synth instanceof Tone.DuoSynth)
    {
        synth.volume.value = mixVolume.value;
    }
    else
    {
        synth.volume.value += mixVolume.value;
    }
    synth.toMaster().triggerAttackRelease(pitch, duration);
    return synth;
  }

  function createSynth(soundSettings)
  {
    const oscCount = soundSettings.getOscillatorCount();
    if (oscCount == 1)
    {
        const settings = soundSettings.getOscillatorAtIndex(0);
        const synth = new Tone.MonoSynth();
        synth.oscillator.type = settings.type;
        synth.set
        ({
            detune: settings.detune,
            volume: settings.volume,
        });

        setEnvelope(synth, settings.envelope);

        if (settings.filter != undefined)
        {
            synth.filter.type = settings.filter.type;
            synth.filter.frequency.value = settings.filter.frequency.value;
            synth.filter.gain.value = settings.filter.gain.value;

            console.log("synth filter: " + synth.filter.type + synth.filter.gain.value);
            console.log("settings filter: " + settings.filter.type + settings.filter.gain.value);
        }

        return synth;
    }
    else if (oscCount == 2)
    {
        const settings1 = soundSettings.getOscillatorAtIndex(0);
        const settings2 = soundSettings.getOscillatorAtIndex(1);

        const duoSynth = new Tone.DuoSynth();
        setEnvelope(duoSynth.voice0, settings1.envelope);

        duoSynth.voice0.oscillator.type = settings1.type;
        duoSynth.voice0.filter = settings1.filter;
        duoSynth.voice0.set({
            detune: settings1.detune,
            volume: settings1.volume
        });
        setEnvelope(duoSynth.voice1, settings2.envelope);

        duoSynth.voice1.oscillator.type = settings2.type;
        duoSynth.voice1.filter = settings2.filter;
        duoSynth.voice1.set({
            detune: settings2.detune,
            volume: settings2.volume
        });

        duoSynth.harmonicity.value = 1;
        duoSynth.vibratoAmount.value = 0;
        
        return duoSynth;
    }
  }

function setEnvelope(synth, envelope)
{
    synth.envelope.attack = envelope.attack;
    synth.envelope.decay = envelope.decay;
    synth.envelope.sustain = envelope.sustain;
    synth.envelope.release = envelope.release;
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