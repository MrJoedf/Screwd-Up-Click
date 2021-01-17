
/*format from https://stackoverflow.com/questions/25157513/javascript-pitch-shift-with-time-stretch*/

function playSound(file, speed=1, pitchShift=1, loop=false, autoplay=true) {
    /*
    Use the play() method to start the audio. if pitchShift is true
    use the stop() method to stop the audio and destroy the object.
    If pitchShift is false use the pause() method to pause and set
    the attribute currentTime to 0 to reset the time.
    */
    if(pitchShift) {
    
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        source = audioCtx.createBufferSource();
        request = new XMLHttpRequest();

        request.open('GET', file, true);

        request.responseType = 'arraybuffer';


        request.onload = function() {
            var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function(buffer) {
            myBuffer = buffer;
            songLength = buffer.duration;
            source.buffer = myBuffer;
            source.playbackRate.value = speed;
            source.connect(audioCtx.destination);
            source.loop = loop;
        },

        function(e){"Error with decoding audio data" + e.error});

        }

        request.send();
        source.play=source.start
    } else {
        source=new Audio(file)
        source.playbackRate=speed
        source.loop=loop
    }
    if(autoplay) {
        source.play()
    }
    return source
}
var source

function play(URL) {
  if(URL){
    source=playSound(URL, pitch=0.8);
  }else{
    console.error("NO SONG SELECTED");
  }
}

var file; 

audio_file.onchange = function(){
  var files = this.files;
  file = URL.createObjectURL(files[0]);
  var obj = document.createElement('audio');
  console.log(obj.playbackRate);
};


document.getElementById("screwPlay").onclick=function(){
  play(file);
}

