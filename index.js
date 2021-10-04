const data =[
    {
      id: 1,
      text: 'I love you more than anyone in the world and this will always be the case',
      image: `url(/img/mostHandsome.jpg)`
    },
    {
      id: 2,
      text: 'I want to be the one to always wakeup by your side and experience all the Jesus Jesus moments',
      image: `url(/img/wakeup.jpg)`
    },
    {
      id: 3,
      text: `I have chop your money wella so its only right, don't you think so ?`,
      image: `url(/img/money.PNG)`
    },
    {
      id: 4,
      text: `Through thick and thin we will make it through`,
      image: `url(/img/thickandthin.jpg)`
    },
    {
      id: 5,
      text: `I really would do anything to bring smiles to your face and I want you to be genuinely happy`,
      image: `url(/img/smile.jpg)`
    },
    {
      id: 6,
      text: `I think you have the hottest body and I am going to be the enduser of the gym time`,
      image: `url(/img/hottestBody.jpg)`
    },
    {
      id: 7,
      text: `I can't wait to really have you, you know what I mean wink`,
      image: `url(/img/chopyourwork.jpg)`
    },
    {
      id: 8,
      text: `And guess what? you will be my zaddy for life`,
      image: `url(/img/oldage.jpg)`
    },
    {
      id: 9,
      text: `Just the thought of you brings random smile to my face`,
      image: `url(/img/mostHandsome.jpg)`
    },
    {
      id: 10,
      text: `I really am here to stay and we will get through this together`,
      image: `url(/img/stay.jpg)`
    }
]
let value = 0;
// selecting dom elements
let text = document.querySelector('.text');
let image = document.querySelector('.container');
let previous = document.querySelector('.previous');
let next = document.querySelector('.next');


window.addEventListener('DOMContentLoaded', ()=>{
    show();
})

const show = ()=>{
    let first = data[value];
    text.textContent = first.text; 
    image.style.background = first.image;
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundPosition = "center";
    image.style.backgroundSize = 'cover';
}

next.addEventListener('click',()=>{ 
    if(value < data.length-1){
        value++
    }else{
        value = 0;
    }
    if(value == data.length-1){
        text.style.color = 'white'
    }
    show();
})


previous.addEventListener('click',()=>{
    value--
    if(value < 0){
        value = data.length-1;
    }
    if(value == data.length-1){
        text.style.color = 'white'
    }
    show();
})