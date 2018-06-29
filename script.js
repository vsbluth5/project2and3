// tmdb-api-key dfbfd7bf987c6d0a4b6f886cb260fffd

console.log("Script is running");

let questions = document.querySelectorAll('.question');
let theInput = document.querySelector('#uguess');
console.log(theInput);
let resultDiv = document.querySelector('#result');
let counter = 0;
resultDiv.innerHTML = `Number of movies correct: ${counter}/10`;

let ans1 = document.querySelector('#answer1')
let qst1 = document.querySelector('#question1')
let ans2 = document.querySelector('#answer2')
let qst2 = document.querySelector('#question2')
let ans3 = document.querySelector('#answer3')
let qst3 = document.querySelector('#question3')
let ans4 = document.querySelector('#answer4')
let qst4 = document.querySelector('#question4')
let ans5 = document.querySelector('#answer5')
let qst5 = document.querySelector('#question5')
let ans6 = document.querySelector('#answer6')
let qst6 = document.querySelector('#question6')
let ans7 = document.querySelector('#answer7')
let qst7 = document.querySelector('#question7')
let ans8 = document.querySelector('#answer8')
let qst8 = document.querySelector('#question8')
let ans9 = document.querySelector('#answer9')
let qst9 = document.querySelector('#question9')
let ans10 = document.querySelector('#answer10')
let qst10 = document.querySelector('#question10')


theInput.addEventListener('change', e => {
    // let x = document.getElementById("uguess");
    let x = theInput.value;
    x = x.toUpperCase();
    if (x === "THE DEERHUNTER") {
        ans1.innerHTML = 'The Deerhunter';
        qst1.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "KRAMER VS KRAMER") {
        ans2.innerHTML = 'Kramer vs Kramer';
        qst2.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "SOPHIE'S CHOICE") {
        ans3.innerHTML = 'Sophie Choice'; // Can't put in apostrophe
        qst3.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "SILKWOOD") {
        ans4.innerHTML = 'Silkwood';
        qst4.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "OUT OF AFRICA") {
        ans5.innerHTML = 'Out of Africa';
        qst5.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "HEARTBURN") {
        ans6.innerHTML = 'Heartburn';
        qst6.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "POSTCARDS FROM THE EDGE") {
        ans7.innerHTML = 'Postcards from the Edge';
        qst7.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "THE DEVIL WEARS PRADA") {
        ans8.innerHTML = 'The Devil Wears Prada';
        qst8.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "MAMMA MIA!") {
        ans9.innerHTML = 'Mamma Mia!';
        qst9.classList.remove('active');
        sendApiRequest();
    }
    else if (x === "INTO THE WOODS") {
        ans10.innerHTML = 'Into The Woods';
        qst10.classList.remove('active');
        sendApiRequest();
    }
    counter = 0;
    questions.forEach(qst => {
        if (!qst.classList.contains('active')) {
            counter += 1
        }
    })
    document.getElementById('uguess').value = ''
    resultDiv.innerHTML = `Number of movies correct: ${counter}/10`;
})

function sendApiRequest() {
    
       fetch("https://api.giphy.com/v1/gifs/search?api_key=GpJ1t8MrfqMR5DRO29FQQ9EKKPJ9qajd&q=Meryl+Streep&limit=10&offset=0&rating=G&lang=en")
        .then(function(data) {
            return data.json();
        })
        .then(function(json) {
            console.log(json);
            // Pass the JSON on to the next function.
            getImageURLfrom(json);

        });
}

// Get a specific image URL ending in .gif from your JSON search results. Pass it on to the next function.
function getImageURLfrom(myJSON) {
    let r = Math.floor(Math.random() * 10);
    // console.log(myJSON.results["0"].poster_path);
   console.log(myJSON.data[r].images.fixed_height.url);
   addImageToScreen(myJSON.data[r].images.fixed_height.url);
}

// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {
    let img = document.querySelector("#image");
    img.innerHTML = `<img src= ${myURL}>`;
}
