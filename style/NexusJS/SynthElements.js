Nexus.colors.accent = "#fcb61d"
Nexus.colors.fill = "#555f68"

//Synth elements
let osc1_shape = new Nexus.Select('#osc1-shape',{
   'size': [100,30],
   'options': ['sine','triangle','square','sawtooth']
});
let osc1_onOff = new Nexus.Toggle('#osc1-onOff',{
   'size': [40,20],
   'state': false
});
let osc1_det = new Nexus.Number('#osc1-det',{
   'size': [45,30],
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
   'value': filterCh1[0].frequency.value
});
let osc1_vol = new Nexus.Dial('#osc1-vol',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 0.25,
   'step': 0,
   'value': volume1.gain.value
});
let osc2_shape = new Nexus.Select('#osc2-shape',{
   'size': [100,30],
   'options': ['sine','triangle','square','sawtooth']
});
let osc2_onOff = new Nexus.Toggle('#osc2-onOff',{
   'size': [40,20],
   'state': false
});
let osc2_det = new Nexus.Number('#osc2-det',{
   'size': [45,30],
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
   'value': filterCh2[0].frequency.value
});
let piano = new Nexus.Piano('#keyboard',{
   'size': [710,150],
   'mode': 'button',  // 'button', 'toggle', or 'impulse'
   'lowNote': 36,
   'highNote': 108
});
let osc2_vol = new Nexus.Dial('#osc2-vol',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 0.25,
   'step': 0,
   'value': volume2.gain.value
});
let osc_att = new Nexus.Dial('#osc-att',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let osc_dec = new Nexus.Dial('#osc-dec',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let osc_sus = new Nexus.Dial('#osc-sus',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0,
   'max': 1,
   'step': 0,
   'value': 0.5
});
let osc_rel = new Nexus.Dial('#osc-rel',{
   'size': [30,30],
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "absolute" or "relative"
   'min': 0.005,
   'max': 1,
   'step': 0,
   'value': 0.5
});

//
// NEXUS VARIABLES AND FUNCTIONS
//


osc1_vol.on('change', osc1_vol_func);
osc1_det.on('change', osc1_det_func);
osc2_det.on('change', osc2_det_func);
osc2_vol.on('change', osc2_vol_func);
fir1_toggle.on('change', fir1_OnOff_func);
fir2_toggle.on('change', fir2_OnOff_func);
fir1_cut.on('change', fir1_update_param );
fir1_type.on('change', fir1_update_param);
fir2_cut.on('change', fir2_update_param);
fir2_type.on('change', fir2_update_param);
osc_att.on('change', set_adsr);
osc_dec.on('change', set_adsr);
osc_sus.on('change', set_adsr);
osc_rel.on('change', set_adsr);
piano.on('change', piano_func);
