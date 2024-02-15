let btn=document.querySelector('button');
btn.addEventListener("click",function(){
    let h1=document.querySelector('h1');
    let randomcolor=getRandomcolor();
    h1.innerText=randomcolor;

    let div=document.querySelector('div');
    div.style.backgroundColor=randomcolor;
    console.log("color updated");
   let p=document.querySelector('p');
   let randomtextcolor=getRandomcolorFortext();
   let h5=document.querySelector('h5');
   h5.innerText=randomtextcolor;
   h5.style.color.randomtextcolor;
//    p.innerText=randomtextcolor;
   p.style.color=randomtextcolor;
});
function getRandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
function getRandomcolorFortext(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let textcolor=`rgb(${r},${g},${b})`;
    return textcolor;
}