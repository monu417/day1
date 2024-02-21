let yesbutton=document.querySelector("#yes");
let nobutton= document.querySelector("#no");
let image=document.querySelector("#img");
let que=document.querySelector("#que");

yesbutton.addEventListener("click",()=>{
    image.src="media/cute-cartoon.gif";
     nobutton.style.visibility='hidden';
     yesbutton.style.visibility='hidden';
     que.innerText="Congratulations!!!!!!        Now you have me;"
});

nobutton.addEventListener("click",()=>{
image.src="media/broken.png";
});
