console.log("Excersice 5");

// You have pretend to use a word api which will contain an object and you hve to print definition from all the results of that word api.
// YOu have to take input from an input tag.
// You have to print it in the dom
// If you are using bootstrap then its a plus

let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){
    if(document.getElementById("exampleInputEmail1").value == "example") {
        buttonClickHandler();
    }
    else {
        alert("Try another word. This is not present in our data")
    }
});

function buttonClickHandler() {
    // instantiate the object
    const xhr = new XMLHttpRequest;

    // Open the object
    xhr.open('GET', "../data/dict.txt", true);

    // what to do when response is ready
    xhr.onload = function () {
        let str = "";
        document.getElementById("definationContainer");
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            let results = obj.results;
            results.forEach(result => {
                str += `<figure>
                            <blockquote class="blockquote">
                            <p>${result.definition}</p>
                            </blockquote>
                        </figure>`
                    document.getElementById("definationContainer").innerHTML = str;
                });            

        }
        else {
            console.error("Some error occured")
        }
    }

    // typeof this.responseText;
    console.log(xhr);
    

    // send the request
    xhr.send();

}


/* from harry */

/* console.log("This is tutorial 45");

const myJson = `{
    "word": "example",
    "results": [
      {
        "definition": "a representative form or pattern",
        "partOfSpeech": "noun",
        "synonyms": [
          "model"
        ],
        "typeOf": [
          "representation",
          "internal representation",
          "mental representation"
        ],
        "hasTypes": [
          "prefiguration",
          "archetype",
          "epitome",
          "guide",
          "holotype",
          "image",
          "loadstar",
          "lodestar",
          "microcosm",
          "original",
          "paradigm",
          "pilot",
          "prototype",
          "template",
          "templet",
          "type specimen"
        ],
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "I profited from his example"
        ]
      },
      {
        "definition": "something to be imitated",
        "partOfSpeech": "noun",
        "synonyms": [
          "exemplar",
          "good example",
          "model"
        ],
        "typeOf": [
          "ideal"
        ],
        "hasTypes": [
          "pacemaker",
          "pattern",
          "beauty",
          "prodigy",
          "beaut",
          "pacesetter"
        ],
        "derivation": [
          "exemplify",
          "exemplary"
        ]
      },
      {
        "definition": "an occurrence of something",
        "partOfSpeech": "noun",
        "synonyms": [
          "case",
          "instance"
        ],
        "typeOf": [
          "happening",
          "natural event",
          "occurrence",
          "occurrent"
        ],
        "hasTypes": [
          "clip",
          "mortification",
          "piece",
          "time",
          "humiliation",
          "bit"
        ],
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "but there is always the famous example of the Smiths"
        ]
      },
      {
        "definition": "an item of information that is typical of a class or group",
        "partOfSpeech": "noun",
        "synonyms": [
          "illustration",
          "instance",
          "representative"
        ],
        "typeOf": [
          "information"
        ],
        "hasTypes": [
          "excuse",
          "apology",
          "specimen",
          "case in point",
          "sample",
          "exception",
          "quintessence",
          "precedent"
        ],
        "derivation": [
          "exemplify",
          "exemplary"
        ],
        "examples": [
          "this patient provides a typical example of the syndrome",
          "there is an example on page 10"
        ]
      },
      {
        "definition": "punishment intended as a warning to others",
        "partOfSpeech": "noun",
        "synonyms": [
          "deterrent example",
          "lesson",
          "object lesson"
        ],
        "typeOf": [
          "monition",
          "admonition",
          "word of advice",
          "warning"
        ],
        "derivation": [
          "exemplary"
        ],
        "examples": [
          "they decided to make an example of him"
        ]
      },
      {
        "definition": "a task performed or problem solved in order to develop skill or understanding",
        "partOfSpeech": "noun",
        "synonyms": [
          "exercise"
        ],
        "typeOf": [
          "lesson"
        ],
        "examples": [
          "you must work the examples at the end of each chapter in the textbook"
        ]
      }
    ],
    "syllables": {
      "count": 3,
      "list": [
        "ex",
        "am",
        "ple"
      ]
    },
    "pronunciation": {
      "all": "ɪɡ'zæmpəl"
    },
    "frequency": 4.67
  }`;

const myObj = JSON.parse(myJson);
console.log('The object is  :', myObj);
console.log('The results in the object are  :', myObj['results']);

let meanings = document.getElementById('meanings')
meanings.addEventListener('click', ()=>{
    console.log('someone clicked meanings');
    populate();
})

function populate() {
    let results = myObj['results'];
    let html = "";
    results.forEach(element => {
        html += `<li class="list-group-item list-group-item-light">One of the definitions of example is ${element.definition} </li>`;
    });
    let defs = document.getElementById('defs');
    defs.innerHTML = html;
    
} */

