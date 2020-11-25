const btn= document.querySelector('.talk');
const content=document.querySelector('.content');

const SpeechRecoginition =  window.webkitSpeechRecognition;
const recognition = new SpeechRecoginition();

// some replies
const greetings=[
    'Leave me alone',
    'I am great you lovable idiot'
];

const weather=[
    'It is shiny outside and dark on your inside',
    'You do not even go outside'
];

//to know that it has started
recognition.onstart = function(){
    console.log("Voice is activated, you can speak to microphone");
};

//the data/results 
recognition.onresult = function(e){

    const current=e.resultIndex;
    const transcript=e.results[current][0].transcript;

    content.textContent=transcript;
    readOutLoud(transcript);
}

// add the listener to the button
btn.addEventListener('click',() => {
    recognition.start();
    
});

// takes transcript and replies
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    if(message.includes('how are you')){
        speech.text=greetings[Math.floor(Math.random()*greetings.length)];
    }
    else if(message.includes('weather')){
        speech.text=weather[Math.floor(Math.random()*weather.length)];
    }
    else
        speech.text="What are you saying ";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}


// try{
//     const S
// }catch(e){

// }

