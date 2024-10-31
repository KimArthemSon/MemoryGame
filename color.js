const b = document.querySelectorAll('.color');
const scorBoard = document.querySelector('.score');
let myans = [];
let more=2;
let score=0;
let render = true;

function anim(index){
    b[index].classList.add('click');
    setTimeout(()=>{
        b[index].classList.remove('click');
   }, 500);
}
function anim1(index){ 
    b[index].classList.add('click');
    setTimeout(()=>{
       b[index].classList.remove('click');
       render = true;
   }, 500);
}

for(let i=0;i<b.length;i++){
    b[i].addEventListener('click', ()=>{
        if(render){
            render = false;
            anim1(i);
        myans.push(i);
        checkRigth();
        }
    })
}
function PayGame(seq){ 
    render = false;
    for(let i=0;i<seq.length;i++){
    setTimeout(()=>{
         anim(seq[i]); 
   }, 700 * i);

   setTimeout(()=>{
       render = true;
  }, 700 * seq.length - 2);
}   
}

let seqs = [];
const Play = document.querySelector('.Play');

Play.addEventListener('click', ()=>{
    more = 2;
    seqs = new Array();
    myans = new Array();
    scorBoard.textContent = "Score: 0";
    score = 0;
    for(let i=0;i<b.length;i++){
      b[i].classList.remove('.click');
    } 
    render=false;
    console.log(seqs);
    PayGame(generateSeq());
})

const generateSeq = ()=>{
        for(let i=0;i<more;i++){
            let g = (Math.floor(Math.random() * 3)); 
            seqs.push(g);
        }
        return seqs;
}

const checkRigth = ()=>{
    if(myans.length>more){
             gameOver();
    }
    else{
        let same = true;
         for(let i=0;i<myans.length;i++){
           if(seqs[i]!=myans[i]){
            gameOver();
            same = false;
           }
        }

        if(myans.length==more&&same){
            nextRound();
        }
    }
    
}
const nextRound = () =>{
     more++;
    score++;
    scorBoard.textContent = "Score: "+score;
    seqs = new Array();
    myans = new Array();
setTimeout(()=>{
     PayGame(generateSeq());
},1500)
   
}
const gameOver = () =>{
    more = 2;
    scorBoard.textContent = "Score: 0";
    seqs = new Array();
    myans = new Array();
    for(let i=0;i<b.length;i++){
      b[i].classList.remove('click');
    }
   alert("GAME OVER\nScore: "+score);
   score =0;
}