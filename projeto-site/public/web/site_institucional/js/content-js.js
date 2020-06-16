// // FUNÇÃO QUE PREENCHE A SESSÃO DE EQUIPE DE FORMA DINAMICA

// function listMembers() {
//     let lineOne = document.querySelector('#line-one');
//     let lineTwo = document.querySelector('#line-two');


//     let members = [
//         {
//             img: './img/gustavo.png',
//             name: "Gustavo Henrique",
//             employment: "Desenvolvedor" 
//         },
//         {
//             img: './img/chris.png',
//             name: "Christian Raphael",
//             employment: "Desenvolvedor"
//         }, 
//         {
//             img: './img/guilhermesilva.png',
//             name: "Guilherme Silva",
//             employment: "Desenvolvedor"
//         },
//         {
//             img: './img/adaias.png',
//             name: "Adaías Santos",
//             employment: "Desenvolvedor"
//         },
//         {
//             img: './img/guilhermesa.png',
//             name: "Guilheme de Sá",
//             employment: "Desenvolvedor"
//         },
//         {
//             img: './img/gisele.png',
//             name: "Gisele Flor",
//             employment: "Desenvolvedora"
//         }
//     ]

//     for (let i = 0; i < 4; i++) {
//         lineOne.innerHTML += `
//         <li class='member'>
//             <div class='member-card'>
//                 <div class="member-photo">
//                     <img src='${members[i].img}' alt='Foto de ${members[i].name}'>
//                     <div class='member-name'>
//                         <h3>${members[i].name}</h3>
//                     </div>
//                 </div>
//                 <div class="member-info">
//                     <div class='member-employment flex'>
//                         <h4>${members[i].employment}</h4>
//                     </div>
//                 </div>
//                 <div class='social flex'>
//                     <div class='social-media'>
//                         <a href='#'>
//                             <img src='./img/facebook.png' alt='Facebook de ${members[i].name}'>
//                         </a>
//                     </div>

//                     <div class='social-media'>
//                         <a href='#'>
//                             <img src='./img/github.png' alt='Github de ${members[i].name}'>
//                         </a>
//                     </div>

//                     <div class='social-media'>
//                         <a href='#'>
//                             <img src='./img/linkedin.png' alt='Linkedin de ${members[i].name}'>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </li>
//         `;
//     }

//     for (let i = 4; i < 6; i++) {
//         lineTwo.innerHTML += `
//         <li class='member'>
//             <div class='member-card'>
//                 <div class="member-photo">
//                     <img src='${members[i].img}' alt='Foto de ${members[i].name}'>
//                     <div class='member-name'>
//                         <h3>${members[i].name}</h3>
//                     </div>
//                 </div>
//                 <div class="member-info">
//                     <div class='member-employment flex'>
//                         <h4>${members[i].employment}</h4>
//                     </div>
//                 </div>
//                 <div class='social flex'>
//                     <div class='social-media'>
//                         <a href='#'>
//                             <img src='./img/facebook.png' alt='Facebook de ${members[i].name}'>
//                         </a>
//                     </div>

//                     <div class='social-media'>
//                         <a href='#'>
//                             <img src='./img/github.png' alt='Github de ${members[i].name}'>
//                         </a>
//                     </div>

//                     <div class='social-media'>
//                         <a href='#'>
//                             <img src='./img/linkedin.png' alt='Linkedin de ${members[i].name}'>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </li>
//         `;
        
//     }
// }

// listMembers();