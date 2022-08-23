
/*audioCtx = new AudioContext();


document.onclick = async function () {
   await audioCtx.resume();
   document.onclick = undefined;
}


let nVoices = 4;
let voicesCh1 = new Array(nVoices);
let voicesCh2 = new Array(nVoices);
let adsrCh1 = new Array(nVoices);
let adsrCh2 = new Array(nVoices);
let filterCh1 = new Array(nVoices);
let filterCh2 = new Array(nVoices);


volume1 = audioCtx.createGain();
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
