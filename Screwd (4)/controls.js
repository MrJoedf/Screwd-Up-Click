


function init() {
  var transpose = false;

  var enabled = document.getElementById('enabled');

  var pitch = document.getElementById('pitch');
  var pitchValue = document.getElementById('pitch-value');
  var pitchShiftTypeSelect = document.getElementById('pitch-shift-type');
  var pitchReset = document.getElementById('pitch-reset');

  function setPitchValue(_pitchValue) {
    pitch.value = _pitchValue;
    pitchValue.textContent = _pitchValue;
  }

  function setPlaybackRate(_playbackRate) {
    playbackRate.value = _playbackRate;
    playbackRateValue.textContent = _playbackRate;
  }

  function setPitchShiftTypeSmooth() {
    pitch.max = 1;
    pitch.min = -1;
    pitch.step = 0.01;
    pitchShiftTypeSelect.selectedIndex = 0;
    transpose = false;
  }

  function setPitchShiftTypeSemiTone() {
    pitch.max = 24;
    pitch.min = -24;
    pitch.step = 1;
    pitchShiftTypeSelect.selectedIndex = 1;
    transpose = true;
  }



}