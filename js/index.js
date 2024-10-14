// // kintamojo 'vardas' tipas string
// let vardas = 'Milda';
// console.log(vardas);
// // kintamojo 'amzius' tipas number
// let amzius = 35;
// console.log(amzius);
// // boolean tipo reiksmes true / false
// let pilnametis = true;
// console.log(pilnametis);
// // null - tuscia kinatmojo reiksme, kuri veliau gali pasikeisti
// let pilietybe = null;
// console.log(pilietybe);
// pilietybe = 'Lietuvis';
// console.log(pilietybe);
// // undefined - nepriskirta reiksme kintamajam
// let nepriskirtaReiksme;
// console.log(nepriskirtaReiksme);

// let pilietybes = ['Lietuvis', 'Latvis', 'Estas', 'Lenkas', vardas, amzius, pilnametis];
// console.log(pilietybes);
// console.log(pilietybes[1])

// let asmuo = {
//     vardas: 'Asta',
//     pavarde: 'Katinaite',
//     amzius: 18
// };

// console.log(asmuo);
// console.log(asmuo.vardas);
// console.log(asmuo.pavarde);
// console.log(asmuo.amzius);

// console.log(`Labas ${asmuo.vardas} ${asmuo.pavarde}`);
// if (asmuo.amzius >= 18) {
//     console.log(`${asmuo.vardas} ${asmuo.pavarde} suauges`)
// } else {
//     console.log(`${asmuo.vardas} ${asmuo.pavarde} nepilnametis`)
// };

// console.log(1+1);





// function suma(number1, number2) {
//     console.log(number1+number2)
// }

// suma(5,3)
// suma(100,3)

// let readMoreBtn = document.getElementById('read-more-btn');
// readMoreBtn.addEventListener('click', pasveikinimas);

// function pasveikinimas() {
//     let titleTag = document.getElementById('main-section__title')

//     titleTag.innerText = 'Sveikiname prisijungus'

//     //titleTag.innerHTML = '<p>Naujas Js paragrafo tagas</p>'
//     titleTag.style.backgroundColor = 'red';

//     let anchorTag = document.createElement('a');
//     anchorTag.innerText = 'Google';
//     anchorTag.href = 'https://google.com';
//     anchorTag.classList.add('didelis-tekstas');

//     titleTag.appendChild(anchorTag);
// }

// //ciklai:

// const products = ['Laptop', 'Smartphone', 'Tablet', 'Smartwatch'];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }

// console.log(products.length)

// products.forEach((product) => {
// console.log(product)
// })

document.addEventListener('DOMContentLoaded', () => {
    const servicesCards = [
        {
            imgUrl: 'img/kastuvas.svg',
            imgAltTxt: 'Kastuvas paveiksliukas',
            headingText: 'Construction',
            paragraphText: 'Designing and Building The Most Beautiful Custom Homes.'
        },
        {
            imgUrl: 'img/salmas.svg',
            imgAltTxt: 'Salmas paveiksliukas',
            headingText: 'Project Development',
            paragraphText: 'Project Development Designing and Building The Most Beautiful Custom Homes.'
        },
        {
            imgUrl: 'img/lova.svg',
            imgAltTxt: 'Lova paveiksliukas',
            headingText: 'Interior Design',
            paragraphText: 'Designing and Building The Most Beautiful Custom Homes.'
        },
        {
            imgUrl: 'img/namas.svg',
            imgAltTxt: 'Namas paveiksliukas',
            headingText: 'Architecture',
            paragraphText: 'Designing and Building The Most Beautiful Custom Homes.'
        }
    ]

    const serviceSection = document.getElementById('services-section');
   
    serviceSection.innerText = 'Kraunama...'

    function uzkrautiDuomenisIsDuombazes () {
        serviceSection.innerText = '';
    servicesCards.forEach((card) => {
        //sukurti article tag
        const articleTag = document.createElement('article')
        articleTag.classList.add('services-section__article')
        //sukurti img tag
        const imgTag = document.createElement('img');
        imgTag.height = 33;
        imgTag.width = 33;
        imgTag.src = card.imgUrl;
        imgTag.alt = card.imgAltTxt;
        
        //sukurti div tag
        const divTag = document.createElement('div');
       
        //sukurti h2 tag
        const heading2tag = document.createElement('h2');
        
        //sukurti p tag
        const paragraphTag = document.createElement('p');
        
        //priskirti h2 ir p tagui teksta
        heading2tag.innerText = card.headingText;
        paragraphTag.innerText = card.paragraphText;
        
        //i div tag istatyti img ir div
        divTag.appendChild(heading2tag);
        divTag.appendChild(paragraphTag);
        
        //i article istatyti img ir div
        articleTag.appendChild(imgTag);
        articleTag.appendChild(divTag);
        serviceSection.appendChild(articleTag)
    })

 }
    //uzkrautiDuomenisIsDuombazes();
    setTimeout(uzkrautiDuomenisIsDuombazes, 1000)
    console.log('pradzia')
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // Paverčiame atsakymą į JSON
    .then(data => {
        console.log('Gauti duomenys:', data);
    })
    .catch(error => {
        console.error('Klaida:', error);
    });
    console.log('pabaiga')
})