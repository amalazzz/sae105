//function ajouteAlbums(data)

// à ne pas supprimer !!
// var ajouteAlbums= ["Hit Me Hard And Soft" , "Happier Than Ever" , "When We All Fall Asleep Where Do We Go" , "No Time To Die" , "Don't Smile At Me"]

// seance 1 et 2 q10
// data.js
/*const data = [
    { musique: "Hit Me Hard And Soft", description:"Le troisième album studio de Billie Eilish, HIT ME HARD AND SOFT, sorti via Darkroom/Interscope Records, est son œuvre la plus audacieuse à ce jour, une collection de chansons à la fois diversifiée et cohérente - idéalement  écoutée dans son intégralité du début à la fin - exactement comme le suggère le titre de l’album ; vous frappe fort et doucement, tant au niveau des paroles que du son, tout en contournant les genres  et en défiant les tendances en cours de route."},
    { musique: "Nocturne en mi bémol", description: "Un nocturne doux et apaisant.", url : "" },
    { musique: "Clair de Lune", description: "Une pièce emblématique de Debussy." },
    { musique: "Concerto pour piano", description: "Un concerto puissant et émouvant." }
];
*/

//  seance 1 et 2 question  11
// data.js
/*
const data = [
    {
        musique: "Hit Me Hard And Soft",
        description: "Le nouvel album de Billie Eilish, HIT ME HARD AND SOFT, est juste incroyable, selon moi le meilleur de 2024 ! Sorti via Darkroom/Interscope Records, c’est clairement son œuvre la plus audacieuse. Chaque chanson est à la fois unique et cohérente, parfaite à écouter dans son intégralité du début à la fin. Le titre résume tout : ça te frappe fort et doucement, avec des paroles puissantes et des sons qui transcendent les genres. Billie reste fidèle à elle-même tout en défiant toutes les tendances.",
       // texteExplicatif: "Cette symphonie représente pour moi l'essence de la musique classique, avec des sonorités captivantes.",
        url: "https://open.spotify.com/album/7aJuG4TFXa2hmE4z1yxc3n",
        img: "Hit me hard and soft.jpeg",
        proprieteIntellectuelle: {
            urlSource: "https://example.com/symphonie3",
            proprietaire: "Billie Eilish et Finneas O'Connell"
        }
    },
    {
        musique: "Happier Than Ever",
        description: "Happier Than Ever, le deuxième album studio de Billie Eilish, est pour moi une œuvre absolument iconique. Sorti en juillet 2021, il a été écrit et produit en collaboration avec son frère Finneas. Cet album est une véritable montagne russe d’émotions, mêlant des moments de douceur introspective à des explosions de puissance brute. Chaque chanson raconte une histoire et reflète l’évolution artistique de Billie, à la fois dans ses paroles profondément personnelles et dans ses sonorités uniques. Avec Happier Than Ever, elle transcende les genres et confirme son statut d’artiste incontournable.",
        texteExplicatif: "Ce nocturne est parfait pour se détendre après une journée fatigante.",
        url: "https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp",
        img: "happierthanever.jpg",
        proprieteIntellectuelle: {
            urlSource: "https://example.com/nocturne",
            proprietaire: "Billie Eilish et Finneas O'Connell"
        }
    },
    {
        musique: "When We All Fall Asleep Where Do We Go",
        description: "When We All Fall Asleep, Where Do We Go ?, le premier album studio de Billie Eilish, est pour moi une révolution musicale. Sorti en 2019 et produit avec Finneas, il se distingue par ses transitions fluides et sa narration parfaitement cohérente, offrant une expérience immersive où chaque piste contribue à une atmosphère étrange et captivante. Les paroles abordent des thèmes puissants comme la santé mentale, la pression sociétale et les relations humaines, tout en s’appuyant sur des images oniriques et surréalistes qui marquent les esprits. Cet album prouve à quel point Billie est une artiste visionnaire, repoussant sans cesse les limites sonores et émotionnelles, tout en incarnant parfaitement l’essence de sa génération. Une œuvre inoubliable et intemporelle!",
        texteExplicatif: "Cette musique me transporte dans un univers onirique et paisible.",
        url: "https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh",
        img: "wwafawdwg.png",
        proprieteIntellectuelle: {
            urlSource: "https://fr.wikipedia.org/wiki/When_We_All_Fall_Asleep,_Where_Do_We_Go%3F",
            proprietaire: "Billie Eilish et Finneas O'Connell"
        }
    },
    {
        musique: "Don't Smile At Me",
        description: "Don't Smile At Me, le premier EP de Billie Eilish, est pour moi un projet fascinant et audacieux. Sorti en 2017, à seulement 15 ans, cet EP a été produit et coécrit avec son frère Finneas, et il marque les débuts d’une artiste unique. Billie déploie sa voix hypnotique, oscillant entre assurance et vulnérabilité. L'EP mélange à la perfection mélancolie et atmosphères féeriques, captivant dès la première écoute. Don't Smile At Me a immédiatement attiré l’attention et a fait découvrir au monde cette adolescente prodige de la pop.",
        texteExplicatif: "Ce concerto est une œuvre incontournable pour les amateurs de piano.",
        url: "https://open.spotify.com/album/7fRrTyKvE4Skh93v97gtcU",
        img: "dontsmileatme.jpeg",
        proprieteIntellectuelle: {
            urlSource: "https://example.com/concerto",
            proprietaire: "Billie Eilish et Finneas O'Connell"
        }
    },
    {
        musique: "No Time To Die",
        description: "No Time to Die est une chanson interprétée par la chanteuse américaine Billie Eilish,sortie en février 2020. Coécrite avec son frère et collaborateur de longue date, Finneas O'Connell,  elle sert de thème officiel pour le 25ᵉ opus de la saga James Bond, Mourir peut attendre (No Time to Die),  réalisé par Cary Joji Fukunaga. Cette composition sombre et envoûtante a valu à Eilish et O'Connell l'Oscar  de la meilleure chanson originale en mars 2022, consacrant leur contribution à l'univers musical du célèbre  agent secret.",
        texteExplicatif: "Ce concerto est une œuvre incontournable pour les amateurs de piano.",
        url: "https://open.spotify.com/track/73SpzrcaHk0RQPFP73vqVR",
        img: "notimetodie.jpeg",
        proprieteIntellectuelle: {
            urlSource: "https://example.com/concerto",
            proprietaire: "Billie Eilish et Finneas O'Connell"
        }
    }
];


*/

/* test d'un tableau avant que j'en fasse un en musique.json
[
{
    id: "premier album",
    nom: "happier than ever",

},

]
*/

/* dans le data js il y aura toutes les infos de script car dans script il y aura le fonctionnement et le formulaire (genre mettre une nouvelle musique et l'afficher (réflexion que je me suis faites avant d'apprendre que l'on devait mettre les infos dans un musique.json*/

// le code ci-dessous permettait aux boutons de changer et que si on clique dessus ça passe de ça ▷ à ça || après avoir lancer la musique

    /*document.getElementById("play").addEventListener( "click", function(){
  //  alert("le bouton a été cliqué")
    document.querySelector("audio").play()


});*/
/*function playAudio() { 
  x    document.querySelector("audio").play()
; 
} 

function pauseAudio() { 
   //     document.querySelector("audio").pause()
; 
} 

//}});
 // document.getElementById("pause").addEventListener( "click", function(){
     // alert("le bouton a été cliqué !")
 //     document.querySelector("audio").pause()
 // })
 // document.querySelector("audio").pause()*/