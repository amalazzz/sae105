
// j'ai fais le javascript grâce a l'aide d'une prof particuliere trouver sur internet

const list= document.querySelector(".liste-musiques")

var numCase = 0 
// seance 1 et 2 question 5
/*ajouteAlbums.forEach(
    album=>{
        const section=document.createElement("section")
        section.innerHTML="<h2>" + album + "</h2>" + 
        "<p>" + descriptionsMusiques[numCase] + "</p>"
        list.appendChild(section)
        console.log("album", album)
// seance 1 et 2 question 6
        numCase++
        console.log(numCase)
    }
)*/

//seance 1 et 2 question 7
/*
var descriptionsMusiques = [
    "Happier Than Ever est une chanson de l’artiste américaine Billie Eilish, sortie en juillet 2021.Écrite et produite en collaboration avec son frère Finneas O'Connell, elle constitue la pièce maîtresse  et la piste-titre de son deuxième album studio. Ce titre poignant et cathartique se distingue par sa  structure en deux parties : une introduction douce et introspective, suivie d’une explosion de colère et de libération émotionnelle. Acclamée pour sa profondeur lyrique et sa puissance vocale, *Happier Than Ever*  est rapidement devenue l’une des chansons les plus emblématiques de la carrière de Billie Eilish,  capturant l’essence de ses émotions brutes et de son évolution artistique.",
    "Le troisième album studio de Billie Eilish, HIT ME HARD AND SOFT, sorti via Darkroom/Interscope Records, est son œuvre la plus audacieuse à ce jour, une collection de chansons à la fois diversifiée et cohérente - idéalement  écoutée dans son intégralité du début à la fin - exactement comme le suggère le titre de l’album ; vous frappe fort et doucement, tant au niveau des paroles que du son, tout en contournant les genres  et en défiant les tendances en cours de route.",
    "L'album se distingue également par ses transitions fluides et sa narration cohérente :  il est conçu comme une expérience immersive, où chaque piste contribue à une atmosphère à la fois étrange et fascinante. Les paroles abordent des thèmes tels que la santé mentale, la pression sociétale, et les relations humaines, tout en s'appuyant sur des images oniriques  et surréalistes qui laissent une impression durable. Avec When We All Fall Asleep, Where Do We Go?,  Billie Eilish montre qu’elle n’est pas simplement une  voix pour sa génération, mais une artiste visionnaire qui n’hésite  pas à repousser les limites, tant sur le plan sonore qu’émotionnel.",
    "Billie Eilish n'a que 15 ans lorsque son premier single, la ballade romantique « Ocean Eyes », fait le buzz sur Internet. Son premier EP, qui paraît durant l'été 2017, est lui aussi produit et coécrit avec son frère Finneas O'Connell. Oscillant entre assurance et vulnérabilité, Dont Smile At Me déploie des beats minimalistes et vaporeux ainsi que des synthés abrasifs sur lesquels la jeune artiste déploie son chant hypnotique. Combinant mélancolie et ambiances féeriques, ce premier projet fascinant attire tous les regards sur cette adolescente prodige de la pop.",
    "No Time to Die est une chanson interprétée par la chanteuse américaine Billie Eilish,sortie en février 2020. Coécrite avec son frère et collaborateur de longue date, Finneas O'Connell,  elle sert de thème officiel pour le 25ᵉ opus de la saga James Bond, Mourir peut attendre (No Time to Die),  réalisé par Cary Joji Fukunaga. Cette composition sombre et envoûtante a valu à Eilish et O'Connell l'Oscar  de la meilleure chanson originale en mars 2022, consacrant leur contribution à l'univers musical du célèbre  agent secret."
];
*/





// question 10
/*data.forEach((element, index) => {
    const section=document.createElement("section")
    section.className = `cover${index + 1}`
        section.innerHTML= "<figure> <img src = \"" + element.img + "\" alt = \"" + element.musique + "\"></figure>" +
        "<div>" + 
        "<h2>" + element.musique + "</h2>" + 
        "<p>" + element.description + "</p>" +
         "<a href=\"" + element.url + "\" target=\"_blank\">" + "lien" + " " + " :" + element.url +  "</a>" +
         "</div>"
         list.appendChild(section)
        numCase++
});*/



//question 9 seance 3 et 4
/*
const audio1 = document.getElementById("audioplayer1")
const playButton1 = document.getElementById("playbouton1")

playButton1.addEventListener("click", (event)=> {
  if (audio1.paused) {
    event.preventDefault()
    audio1.play()
    playButton1.innerHTML = '&#9208;'
  } 
  else {
    event.preventDefault()
    audio1.pause()
    playButton1.innerHTML = '&#9205;'

    }
})


const audio2 = document.getElementById("audioplayer2")
const playButton2 = document.getElementById("playbouton2")

playButton2.addEventListener("click", (event)=> {
    event.preventDefault()
    audio2.play()
})*/

/* rajouter le reste et pas oublier de mettre les numéros pour bien viser*/
//question 5 seance 2 et 3 
/* pausebouton1 = document.getElementById("pause-button1")

pausebouton1.addEventListener("click", (event)=>{
    event.preventDefault()
    audio1.pause()
    
})*/

const infoaudio = [
    {
        src: "billie-eilish-lunch-official-lyric-video.mp3",
        info: "Auteur : Billie Eilish et Finneas . Source : "
    },
    {
        src: "billie-eilish-bad-guy-audio_WWxKWLu7.mp3",
        info: "Auteur : Billie Eilish et Finneas. Source : https://fr.wikipedia.org/wiki/When_We_All_Fall_Asleep,_Where_Do_We_Go%3F"
    },
    {
        src: "happier-than-ever_krq8H5N3.mp3",
        info: "Auteur : Billie Eilish et Finneas. Source : [Lien]"
    },
    {
        src: "billie-eilish-ocean-eyes-official-audio-lyrics-in-description_02Yi5z0q.mp3",
        info: "Auteur : Billie Eilish et Finneas. Source : [Lien]"
    },
    {
        src: "billie-eilish-no-time-to-die-official-audio_MZT59K3Z.mp3",
        info: "Auteur : Billie Eilish et Finneas. Source : [Lien]"
    },
    
]
//Q8 seance 3 et 4
const listeaudio = document.getElementById("listeaudio")
/*infoaudio.forEach((audio , index)=>{
    console.log("salut")
    const musiqueaudio = document.createElement("div")
    musiqueaudio.innerHTML = "<p>" + audio.info + "</p>" + "<audio id='audioplayer" + (index + 1) + "' src='" + audio.src + "' controls style='display: none;'></audio>" +
    "<button id='playPauseButton" + (index + 1) + "'>&#9205;</button>";
    listeaudio.appendChild(musiqueaudio) 
    const audioelement = document.getElementById(`audioplayer${index + 1}`)
    const playpausebouton = document.getElementById(`playPauseButton${index + 1}`)

    playpausebouton.addEventListener("click", (event)=> {
        if (audioelement.paused) {
          event.preventDefault()
          audioelement.play()
          playpausebouton.innerHTML = '&#9208;'
        } 
        else {
          event.preventDefault()
          audioelement.pause()
          playpausebouton.innerHTML = '&#9205;'
      
          }
      })
    //index+1 c"est pour chacun des html
})*/

//question 13 séance 1 et 2
/*fetch('musique.json').then(function(response) {
        response.json().then(function(data){
        console.log("data" , data); 
        // Ajoutez ici d’autres instructions utilisant la variable data
        data.forEach((element, index) => {
            const section=document.createElement("section")
    section.className = `cover${index + 1}`
        section.innerHTML= "<figure> <img src = \"" + element.img + "\" alt = \"" + element.musique + "\"></figure>" +
        "<div>" + 
        "<h2>" + element.musique + "</h2>" + 
        "<p>" + element.description + "</p>" +
         "<a href=\"" + element.url + "\" target=\"_blank\">" + "lien" + " " + ":" + element.url +  "</a>" +
         "</div>"
                 list.appendChild(section)
                numCase++
        });
        })
        })*/
// question 14 seance 1 et 2   ancienne version 
       /*fetch('musique.json').then(function(response) {
            response.json().then(function(data){
            // Ajoutez ici d’autres instructions utilisant la variable data
            data.forEach((element, index) => {
                    let templateHTML=`
                <section>
                    <h2>{{musique}}</h2>
                    <p>{{description}}</p>
                    <a href="{{url}}" target="_blank">Lien vers {{url}}</a>
                </section>
            `;
            templateHTML = templateHTML.replace("{{musique}}", element.musique)
            .replace("{{description}}", element.description)
            .replace("{{url}}", element.url)

                     list.innerHTML += templateHTML 
                    numCase++
            });
            })
            })*/
// nouvelle version question 14 seance 1 et 2
/*fetch('musique.json').then(function(response) {
                response.json().then(function(data) {
                    // Boucle à travers les données
                    data.forEach((element, index) => {
                        // Création d'un modèle HTML avec des remplacements dynamiques
                        let templateHTML = `
                            <section class="cover{{index}}">
                                <figure>
                                    <img src="{{img}}" alt="{{musique}}">
                                </figure>
                                <div>
                                    <h2>{{musique}}</h2>
                                    <p>{{description}}</p>
                                    <a href="{{url}}" target="_blank">Lien : {{url}}</a>
                                </div>
                            </section>
                        `;
            
                        // Remplacement des placeholders dans le modèle HTML
                        templateHTML = templateHTML
                            .replace(/{{index}}/g, index + 1)
                            .replace(/{{img}}/g, element.img)
                            .replace(/{{musique}}/g, element.musique)
                            .replace(/{{description}}/g, element.description)
                            .replace(/{{url}}/g, element.url);
            
                        // Ajout du modèle à l'élément parent "list"
                        list.innerHTML += templateHTML;
                        numCase++;
                    });
                }).catch(function(error) {
                    console.error('Erreur lors de la conversion en JSON :', error);
                });
            }).catch(function(error) {
                console.error('Erreur lors du fetch :', error);
            });*/
            
// nouvelle version (encore) seance 1 et 2
fetch('musique.json').then(function(response) {
    response.json().then(function(data) {
        data.forEach((element, index) => {
            let templateHTML = `
                <section class="cover${index + 1}">
                    <figure>
                        <img src="${element.img}" alt="${element.musique}">
                    </figure>
                    <div>
                        <h2>${element.musique}</h2>
                        <p>${element.description}</p>
                        <a href="${element.url}" target="_blank">Lien : ${element.url}</a>
                        <audio id="audioplayer${index + 1}" src="${element.src}" controls style="display: none;"></audio>
                        <button id="playPauseButton${index + 1}">&#9205;</button>
                    </div>
                </section>
            `;

            const wrapper = document.createElement('div');
            wrapper.innerHTML = templateHTML;

            const sectionElement = wrapper.firstElementChild;
            list.appendChild(sectionElement);

            const audioElement = document.getElementById(`audioplayer${index + 1}`);
            const playPauseButton = document.getElementById(`playPauseButton${index + 1}`);

            playPauseButton.addEventListener("click", (event) => {
                event.preventDefault();
                if (audioElement.paused) {
                    audioElement.play();
                    playPauseButton.innerHTML = '&#9208;';
                } else {
                    audioElement.pause();
                    playPauseButton.innerHTML = '&#9205;';
                }
            });

            numCase++;
        });
    }).catch(function(error) {
        console.error('Erreur lors de la conversion en JSON :', error);
    });
}).catch(function(error) {
    console.error('Erreur lors du fetch :', error);
});

    

// seance 5 et 6 
/*const titreelement = document.querySelector("#titre")
console.log(titreelement.value)
*/
//question 3 et 4 de la seance 5 et 6 
const elementtitre = document.querySelector("#titre")
elementtitre.addEventListener(("keyup"), function(event) {
    const outputElement = document.querySelector("#titre");
    outputElement.textContent= event.target.value;
    console.log("une touche a été relacher")
    console.log(event.target.value)
})

const descriptionMusique = document.querySelector("#descriptionMusique")
const displayTitre = document.createElement("p")
const displayDescription = document.createElement("p")
const affichagealbum = document.querySelector(".album-ajoutee")

affichagealbum.appendChild(displayTitre)
affichagealbum.appendChild(displayDescription)

elementtitre.addEventListener(("keyup"), function(event) {
displayTitre.textContent = elementtitre.value
})
descriptionMusique.addEventListener(("keyup"), function(event) {
    displayDescription.textContent = descriptionMusique.value
    })
    
//url API question 6 : https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=azizi&courriel=amal.azizi@edu.univ-eiffel.fr&message=Test
// autre url https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=azizi&courriel=amal.azizi@edu.univ-eiffel.fr&message=Je%20n%E2%80%99ai%20aucune%20suggestion%20de%20musique%20mais%20je%20vous%20f%C3%A9licite%20pour%20votre%20site%20web%20de%20s%C3%A9lection%20musicale%20que%20je%20trouve%20tr%C3%A8s%20r%C3%A9ussi%20!&mail=philippe.gambette@univ-eiffel.fr
// bon url : https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=azizi&courriel=philippe.gambette@univ-eiffel.fr&message=Je%20n%E2%80%99ai%20aucune%20suggestion%20de%20musique%20mais%20je%20vous%20f%C3%A9licite%20pour%20votre%20site%20web%20de%20s%C3%A9lection%20musicale%20que%20je%20trouve%20tr%C3%A8s%20r%C3%A9ussi%20!

// question 6 et 7 - seance 5 et 6
const url = document.querySelector("#urlmusique")

const sendbutton = document.getElementById("sendbutton")
sendbutton.addEventListener("click", (event)=>{
   event.preventDefault()
const login = "azizi" 
const email = "philippe.gambette@univ-eiffel.fr" 
// mettre le mail du prof 
const titre = encodeURIComponent(elementtitre.value) 
const description = encodeURIComponent(descriptionMusique.value)
const urlmusique = url.value
try{
    new URL (urlmusique)
}
catch(e){
    alert("veuillez entrer une URL valide")
    return
}
// encodeuricompenent sert a recuperer la valeur qui sera valable dans l'url
const urlvisiter =  `https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=${login}&courriel=${email}&message=${titre}%20:%20${description}%20[URL:%20${urlmusique}]`;
console.log(urlvisiter)
fetch(urlvisiter).then(function(response){
    response.json().then(function(data){
        console.log("réponse reçu")
        console.log(data)
        if (data.status == "success"
        ){
            console.log("message envoyé avec succès")
        }
        else {
            console.log("erreur lors de l'envoie", data)
        }
    })


})
})