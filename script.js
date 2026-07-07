let gift=document.getElementById("gift");

let surprise=document.getElementById("surprise");

gift.onclick=function(){

gift.style.display="none";

surprise.style.display="block";

}

document.getElementById("btn").onclick=function(){

for(let i=0;i<150;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.animationDuration=(Math.random()*3+2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

}