function loadScript(fileJS){
  const script = document.createElement("script");
  script.src = fileJS;
  document.body.append(script);
}
loadScript("NexusJS/EffectsElements.js");
loadScript("NexusJS/SynthElements.js");
loadScript("NexusJS/Keyboard.js");
