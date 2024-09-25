let langOption = document.querySelectorAll(`select`);
let fromText = document.querySelector('.fromText');
let transText = document.querySelector('.toTranslate');
let fromVoice = document.querySelector('.from');
let toVoice = document.querySelector('.to');
let cpyBtn = document.querySelector('.bx-copy');
let countValue = document.querySelector('.code_length');
let exchangeLang = document.querySelector('.bx-transfer');
let speaSpeaker = document.querySelector('.bx-speaker');
 let stopButton = document.querySelector('.bx-stop');
let clearBtn = document.querySelector(".clsbtns2");

let recognition = null;

langOption.forEach((get, con) => {
    for (let countryCode in language) {

        let selected;
        if (con == 0 && countryCode == "en-IN") {
            selected = "selected";
        } else if (con == 1 && countryCode == "hi-IN") {
            selected = "selected";
        }
        let option = `<option value="${countryCode}"${selected}>${language[countryCode]}</option>`;
        get.insertAdjacentHTML('beforeend', option);
    }
});

 

fromText.addEventListener('input', function() {
    let content = fromText.value;
    fromContent = langOption[0].value;
    transContent = langOption[1].value;
    let transLINK = `https://api.mymemory.translated.net/get?q=${content}&langpair=${fromContent}|${transContent}`;
    fetch(transLINK)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        transText.value = data.responseData.translatedText;
    })
    .catch(error => {
        console.error('Translation error:', error);
    });

});
function speechToText() {
    let content = fromText.value;
    fromContent = langOption[0].value;
    transContent = langOption[1].value;

    let transLINK = `https://api.mymemory.translated.net/get?q=${content}&langpair=${fromContent}|${transContent}`;
    
    fetch(transLINK)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        transText.value = data.responseData.translatedText;
    })
    .catch(error => {
        console.error('Translation error:', error);
    });

};

fromVoice.addEventListener('click', function () {
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(fromText.value);
    fromTalk.lang = langOption[0].value;
    speechSynthesis.speak(fromTalk);
});

toVoice.addEventListener('click', function () {
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(transText.value);
    fromTalk.lang = langOption[1].value;
    speechSynthesis.speak(fromTalk);
});

cpyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(transText.value);
});

fromText.addEventListener('keyup', function () {
    countValue.innerHTML = `${fromText.value.length}/5,000`;
});

exchangeLang.addEventListener('click', function () {
    let tempText = fromText.value;
    fromText.value = transText.value;
    transText.value = tempText;

    let tempOpt = langOption[0].value;
    langOption[0].value = langOption[1].value;
    langOption[1].value = tempOpt;
});

clearBtn.addEventListener("click", () => {
    fromText.value = '';
    transText.value = '';
});


// ... Your code for language selection, translation, speech synthesis, etc.

// Add an event listener to the speaSpeaker button for speech-to-text
speaSpeaker.addEventListener('click', function () {
    startSpeechRecognition();
});

// Add an event listener to the stopButton for stopping speech recognition
stopButton.addEventListener('click', function () {
    stopSpeechRecognition();
});

// Function to start speech recognition
function startSpeechRecognition() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        recognition.lang = langOption[0].value;

        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;

            fromText.value = transcript;

            speechToText();
        };

        recognition.onerror = function (event) {
            console.error('Speech recognition error:', event.error);
        };

        // Handle the end of speech recognition
        recognition.onend = function () {
            // Optionally, you can restart recognition if needed
            // startSpeechRecognition();
        };

        recognition.start();
    } else {
        alert('Speech recognition is not supported in this browser.');
    }
}

// Function to stop speech recognition
function stopSpeechRecognition() {
    if (recognition) {
        recognition.stop();
    }
}


