let score = 0
const qOne = {
    question : "Qui est N-K Necrosis ?",
    responses : ["Le nom du projet clonage de palpatine" , " Le nom du premier clone qui a appris à utiliser un sabre laser " , " Le nom donné par dark Vador pour Starkiller ", "Le nom du projet de la remise en fonction de grievous "],
    goodResponse: "Le nom du projet de la remise en fonction de grievous "
}

const qTwo = {
    question : "Qu'est ce qu'un shoto ?",
    responses : ["Un sabre laser flexible en forme de fouet", "Un sabre laser de petite taille sembable à celui de yoda", "Un fusil à laser temporaire qui nécéssite un sabre laser à l'interieur", "Un sabre laser sembable à une dague utilisé nottament par les soeurs de la nuit"],
    goodResponse : "Un sabre laser de petite taille sembable à celui de yoda"
}

const qThree = {
    question : "Qui fut le rival le plus dangereux de Palpatine et le seul qui a reussi à lui faire peur ?",
    responses : ["Darth Maul", "Pre Visla", "Daran Gera", "Mère Talzin"],
    goodResponse : "Mère Talzin"
}

const qFour = {
    question : "Quand est-ce que vador fut à son pic de jalousie ?",
    responses : ["Lorsque il assista à une course de la fete de la Bounta et vu qu'un humain aller la remporter et il decida de detruire avec la force le module de course car le commentaire dit que cela allait etre le premier humain à gagner une tel course", "Quand palpatine dit que Luke aller etre un bien  meilleur apprentie que Vador", "Lorsqu'Apres la destruction de la premiere étoile de la mort, Vador fut reétrograder au meme niveau que Moff tarkin", "Quand il compris que malgres apres ses années d'isolation Obi-wan fut tout de meme assez puissant pour le vaincre"],
    goodResponse : "Lorsque il assista à une course de la fete de la Bounta et vu qu'un humain aller la remporter et il decida de detruire avec la force le module de course car le commentaire dit que cela allait etre le premier humain à gagner une tel course"
}

const qFive = {
    question : "Quel est le style de combat optimal pour utiliser un shoto?",
    responses : ["La vapad", "Le Jar'Kai", "Le Djem So,", "La rotation en 3 temps, le su ma"],
    goodResponse : "Le Jar'Kai"
}

const qSix= {
    question : "Qui était l'apprenti de Dark Revan ?",
    responses : ["Dark Malak", "Freddon Nadd","Dark Vitus", "Dark Maladi"],
    goodResponse : "Dark Malak"
}

const qSeven= {
    question : "De combien de chef d'états le Triumvirat est il composé ?",
    responses : ["3", "4","5", "6   "],
    goodResponse : "3"
}

const qEight= {
    question : "Dans la chronologie légendaire, qui est le général qui déclenche la superarme antigravitique lors de la Bataille de Malachor V ?",
    responses : ["Revan", "Malak","La future Exilée", "Dark Bane"],
    goodResponse : "La future Exilée"
}

const qNine= {
    question : "Dans la chronologie légendaire, qui est le fondateur de l'Alliance rebelle ?",
    responses : ["Quinlan Vos", "Galen Marek","Mara Jade", "Bail Organa"],
    goodResponse : "Galen Marek"
}

const qTen = {
    question : "Qui est le chef des Gungans ?",
    responses : ["Jar Jar Binks", "Rugor Nass","Otoh Gunga", "Dash Rendar"],
    goodResponse : "Rugor Nass"
}

const bonnerep = {
    conf : "Bonne réponse!",
}
const badRep = {
    conf : "Mauvaise réponse !"
}
const questions = [
    qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen,
]
let roll = [
    qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen,
]

let i = 0
function quizz() {
        i = randomize(0, roll.length-1)
        console.log(i);
            if(roll.length === 0){
            console.log(`Bravo , vous avez finit le quizz ! Votre score est de ${score} / ${roll.length}`)
                let confirmhtml = document.querySelector('.confirm')
                confirmhtml.innerHTML = `Bravo , vous avez fini le quizz ! <br>Votre score est de : <br>  <br> ${score} / ${questions.length} <br>
            <br> Cliquez ici pour retenter votre chance !` 
            return
            }

        const questionhtml = document.querySelector('#question')
        questionhtml.innerHTML = roll[i].question
        for (let j = 0; j < roll[i].responses.length; j++) {
            let responseshtml = document.querySelectorAll('.responses')
            responseshtml[j].innerHTML = roll[i].responses[j]
        }
        
}
quizz()
function response(element) {
    console.log(element.innerHTML)
    if (roll[i].goodResponse === element.innerHTML) {
        console.log("Bonne réponse !")
        score++
        let confirmhtml = document.querySelector('.confirm')
        confirmhtml.innerHTML = bonnerep.conf
    }else{
        console.log("Mauvaise réponse !")  
        let confirmhtml = document.querySelector('.confirm')
        confirmhtml.innerHTML = badRep.conf 
    }
    roll.splice(i , 1)
    quizz()
}

function reset() {
    questions.forEach(element => {
        roll.push(element)
    });
    quizz()
}

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}