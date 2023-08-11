

/******** LOADER ********/

        window.addEventListener('load',()=>{
            const loader = document.querySelector(".loaderSpinner");
            const wrapper = document.querySelector('.wrapper');
            const logo = document.querySelector('.logo__image')

            setInterval(() => {
            }, 3500);
            loader.classList.add('loader_hidden');

            loader.addEventListener('transitionend',()=>{
                document.body.removeChild(loader);
                wrapper.classList.add('loadanim');
            })

            wrapper.addEventListener('transitionend',()=>{
                document.body.removeChild(wrapper);
                logo.classList.add('animLogo')
            })

        })

/**************** ******************/


let navig = document.querySelector('.navigBtn')
let navTop = document.querySelector('.top header .navig')
let closeBtn = document.querySelector('.close')
let tortule = document.querySelector('img.turtle')
let ctaJouer = document.querySelectorAll('.cta.jouer')






let hilalao = document.querySelector('#hilalao')
let topElem = document.querySelector('.main__container .top')
let bottomElem = document.querySelector('.main__container .bottom')

let root = document.querySelector(':root')

let blackTheme = document.querySelectorAll('.blackTheme')
let orangeTheme = document.querySelectorAll('.orangeTheme')
let redTheme = document.querySelectorAll('.redTheme')
let blueTheme = document.querySelectorAll('.blueTheme')

let scrollTop = document.querySelector('.scrollTop')

const changeTheme = (bg,bgColor,theme)=>{
   console.log(theme)

    theme.forEach(element => {
        if(element){
        element.addEventListener('click',()=>{
       root.style.setProperty('--them-bg',bg)
       root.style.setProperty('--bg-color',bgColor)
      })  
     }
    })
   
}



scrollTop.addEventListener('click',()=>{
  scrollTop.style.display = "none";
  topElem.classList.toggle('active');
  bottomElem.classList.toggle('active');
})

hilalao.addEventListener('click',()=>{
  scrollTop.style.display = "block"
  topElem.classList.toggle('active');
  bottomElem.classList.toggle('active');
  navTop.classList.remove('show')
})

ctaJouer.forEach(el=>{
  el.addEventListener('click',()=>{
  scrollTop.style.display = "block"
  topElem.classList.toggle('active');
  bottomElem.classList.toggle('active');
  navTop.classList.remove('show')
})
})


changeTheme("url('./assets/images/bgOrange.svg') no-repeat center","#F07547",orangeTheme);
changeTheme("url('./assets/images/bgBlack.svg') no-repeat center","#0D0821",blackTheme);
changeTheme("url('./assets/images/bgRed.svg') no-repeat center","#D84B53",redTheme);
changeTheme("url('./assets/images/bgBlue.svg') no-repeat center","#1E54DB",blueTheme);


/************ ANIME CAR ************/

const rouxL = document.querySelector('.wheel_left');
const rouxR = document.querySelector('.wheel_right');
const Car = document.querySelector('.contentAllCar');
let timer3 

const animCar = ()=>{
  
window.addEventListener('keydown', (event)=>{
    if(event.key == "ArrowRight"){
        rouxL.classList.add('wheelAnim');
        rouxR.classList.add('wheelAnim');
   
        left = getComputedStyle(Car,null).left;
        let leftVal = parseFloat(left.slice(0,left.length-2));
        console.log(leftVal+3)
        if(leftVal+3<672){
          Car.style.left = `${leftVal+3}px`
        }
        
    }
})

window.addEventListener('keydown', (event)=>{
    if(event.key == "ArrowLeft"){
        rouxL.classList.add('wheelAnim');
        rouxR.classList.add('wheelAnim');
   
        left = getComputedStyle(Car,null).left;
        let leftVal = parseFloat(left.slice(0,left.length-2));
        console.log(leftVal-3)
        if(leftVal-3>9){
          Car.style.left = `${leftVal-3}px`
        }
        
    }
})

window.addEventListener('keyup',(e)=>{
    if(e.key == "ArrowRight"){
        rouxL.classList.remove('wheelAnim');
        rouxR.classList.remove('wheelAnim');
        Car.classList.remove('mouveCar');
    }
})

window.addEventListener('keyup',(e)=>{
    if(e.key == "ArrowLeft"){
        rouxL.classList.remove('wheelAnim');
        rouxR.classList.remove('wheelAnim');
        Car.classList.remove('mouveCar');
    }
})



}



/******** MATH QUESTIONS ********/

let reponses = [35,20,-19]
let q = 1;

let questions1 = document.querySelector('.mathSrceen .question1')
let questions2 = document.querySelector('.mathSrceen .question2')
let questions3 = document.querySelector('.mathSrceen .question3')
let fanotaniana = document.querySelector('.fanotaniana')

let repondre = document.querySelector('.confirm');
let valiny = document.querySelector('.mathReponse')
let timeResponse = document.querySelector('.timeResponse')
let k=15;

let nextQuestion = (quest)=>{
  if(quest===1){
    fanotaniana.innerHTML = 'Fanotaniana voalohany'
    questions1.style.display = "flex"
    questions2.style.display = "none"
    questions3.style.display = "none"
  }else if(quest===2){
    fanotaniana.innerHTML = 'Fanotaniana Faharoa'
    questions1.style.display = "none"
    questions2.style.display = "flex"
    questions3.style.display = "none"
  }else{
    fanotaniana.innerHTML = 'Fanotaniana Fahatelo'
    questions1.style.display = "none"
    questions2.style.display = "none"
    questions3.style.display = "flex"
  }
}

setTimeout(()=>{
    let timer2 = setInterval(()=>{
   timeResponse.innerHTML = `${k}`
   if(k==0){
    k=15;
    if(q==3){
        q=0
    }
    nextQuestion(q+1)
    q=q+1;
   }
   k--
},1000)
},2000)
let div = document.querySelector('.mathSrceen .reponseValiny');
let p = document.querySelector('.mathSrceen .reponseValiny p');
repondre.addEventListener('click',()=>{
    console.log(q)
      let val = parseInt(valiny.value) ;
      if(reponses[q-1]==val){
        div.classList.add('marina')
        div.classList.remove('diso')
        p.innerHTML = 'Marina';
        nextQuestion(q+1)
        k=15;
        q=q+1;
        
      }
      else{
        div.classList.add('diso')
        div.classList.remove('marina')
        p.innerHTML = 'Diso';
      }
      if(q==4){
        nextQuestion(1)
        q=1;
      }
      
})




// ******** QUIZ GAME ********* //



let nextQuestionQuiz = (quest)=>{
  if(quest===1){
    questionQuize1.style.display = "flex"
    questionQuize2.style.display = "none"
    questionQuize3.style.display = "none"
  }else if(quest===2){
    questionQuize1.style.display = "none"
    questionQuize2.style.display = "flex"
    questionQuize3.style.display = "none"
  }else{
    questionQuize1.style.display = "none"
    questionQuize2.style.display = "none"
    questionQuize3.style.display = "flex"
  }
}



let reponseQuiz = [3,4,2];
let qs = 1;

let questionQuize1 = document.querySelector('.quizGame .question1')
let questionQuize2 = document.querySelector('.quizGame .question2')
let questionQuize3 = document.querySelector('.quizGame .question3')

let repondreQuize = document.querySelector('.quizGame .confirm');
let valinyQuize = document.querySelector('.valinyQuizInput')


let pquiz = document.querySelector('.sub p');

repondreQuize.addEventListener('click',(e)=>{
    e.preventDefault()
    let val2 = valinyQuize.value;
    if(reponseQuiz[qs-1]== val2){
      pquiz.classList.add('marina')
        pquiz.classList.remove('diso')
        pquiz.innerHTML = 'Marina';
        nextQuestionQuiz(qs+1);
        qs++;
    }
    
    else if(qs==4){
        qs=1;
    }

    else{
      pquiz.classList.add('diso')
        pquiz.classList.remove('marina')
        pquiz.innerHTML = 'Diso';
    }
})


/******* RANGE GAME ********/

let sentences =[
  "I Lova dia zaza maditra nefa tia manasa lovia rehefa ao antrano.",
  "Aleo very tsikalakala-mbola toy izay very tsikalakala-mpihavanana.",
  "Ny omby mahia tsy lelafin'ny namany."
]
let s=1;

let sentenceBtnValiny = document.querySelector('.ranges .btn')
let sentenceValiny = document.querySelector(' textarea.sentenceValiny')
let sentence1 = document.querySelector('.sentence1')
let sentence3 = document.querySelector('.sentence3')
let sentence2 = document.querySelector('.sentence2')



sentenceBtnValiny.addEventListener('click',()=>{
  console.log(s)
  let pRangeMarinaDiso = document.querySelector('.ranges .pRange');
  if(sentences[s-1].toLocaleLowerCase()==sentenceValiny.value.toLocaleLowerCase()){
    console.log('vrai')
    pRangeMarinaDiso.classList.add('marina')
        pRangeMarinaDiso.classList.remove('diso')
        pRangeMarinaDiso.innerHTML = 'Marina';

    if(s==3){
      s=0;
    }
    s=s+1;


    if(s==1){
     sentence1.style.display = 'block'
     sentence2.style.display = 'none'
     sentence3.style.display = 'none'
    }else if(s==2){
     sentence1.style.display = 'none'
     sentence2.style.display = 'block'
     sentence3.style.display = 'none'
    }else{
     sentence1.style.display = 'none'
     sentence2.style.display = 'none'
     sentence3.style.display = 'block' 
    }
  }

  else{
    pRangeMarinaDiso.classList.add('diso')
        pRangeMarinaDiso.classList.remove('marina')
        pRangeMarinaDiso.innerHTML = 'Diso';
  }
  
})



/********* TURTLE VS LAPIN **********/
let lapin = document.querySelector('.lapin');

window.addEventListener('keydown',(e)=>{
  
  if(e.key="ArrowRight"){
    left = getComputedStyle(lapin,null).left;
    let leftVal = parseFloat(left.slice(0,left.length-2));
    if(leftVal+20<642){
    lapin.style.left = `${leftVal+30}px`;
    }
    console.log(leftVal+20)
  }
})

/********** MENU BAR ********/


navig.addEventListener('click',()=>{
 navTop.classList.add('show')
})

closeBtn.addEventListener('click',()=>{
 navTop.classList.remove('show')
})




/******* SHOW GAME ********/

let btntomobil = document.querySelector('.btn.tomobil');
let btnMath = document.querySelector('.btn.math');
let btnQuiz = document.querySelector('.btn.quiz');
let btnCours = document.querySelector('.btn.cours');
let btnSentence = document.querySelector('.btn.sentence');
let btnVoiture = document.querySelector('.btn.voiture');

let tomobilGame = document.querySelector('.car__screen')
let mathGame = document.querySelector('.mathSrceen')
let quizGame = document.querySelector('.quizGame')
let rangesGame = document.querySelector('.ranges')
let lapinGame = document.querySelector('.creenLapin')
let gameBottom = document.querySelector('.contentGame .bottom')

let gameContainer = document.querySelector('.games');

const showGame = (btn,screen)=>{
  btn.addEventListener('click',()=>{
   gameContainer.classList.add('active')
   if(screen=="tomobil"){
    tomobilGame.style.display = "flex"
    gameBottom.style.display = "flex"
    rangesGame.style.display = "none"
    lapinGame.style.display = "none"
    mathGame.style.display = "none"
    quizGame.style.display = "none"
    animCar()
   }else if(screen=="math"){
    console.log(screen)
    tomobilGame.style.display = "none"
    gameBottom.style.display = "none"
    rangesGame.style.display = "none"
    lapinGame.style.display = "none"
    mathGame.style.display = "block"
    quizGame.style.display = "none"
   }else if(screen=="lapin"){
    console.log(screen)
    tomobilGame.style.display = "none"
    gameBottom.style.display = "none"
    rangesGame.style.display = "none"
    lapinGame.style.display = "block"
    mathGame.style.display = "none"
    quizGame.style.display = "none"
    tortule.classList.add('anime')
   }else if(screen =="range"){
    console.log(screen)
    tomobilGame.style.display = "none"
    gameBottom.style.display = "none"
    rangesGame.style.display = "flex"
    lapinGame.style.display = "none"
    mathGame.style.display = "none"
    quizGame.style.display = "none"
   }else if(screen == "quiz"){
    console.log(screen)
    tomobilGame.style.display = "none"
    gameBottom.style.display = "none"
    rangesGame.style.display = "none"
    lapinGame.style.display = "none"
    mathGame.style.display = "none"
    quizGame.style.display = "block"
   }
  })
  
}

showGame(btntomobil,'tomobil')
showGame(btnMath,'math')
showGame(btnQuiz,'quiz')
showGame(btnCours,'lapin')
showGame(btnSentence,'range')
showGame(btnVoiture,'tomobil')



/***** LEAVE GAME ******/

const reiniTialiseGame = ()=>{
  lapin.style.left = '0.6rem'
  Car.style.left = '9px'
  sentenceValiny.value = ""
  valiny.value = ""
  valinyQuize.value = ""
  tortule.classList.remove('anime')
let div = document.querySelector('.mathSrceen .reponseValiny');
div.classList.remove('marina')
div.classList.remove('diso')
  
}

let leave = document.querySelector('.leave')

leave.addEventListener('click',()=>{
    gameContainer.classList.remove('active')
    reiniTialiseGame()
})



    /********* CAROUSEL **********/

      $('.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            dots:true,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplaySpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                900:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })
