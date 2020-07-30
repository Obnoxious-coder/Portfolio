about=document.getElementById('about');
console.log(about);

about.addEventListener("click",function(){
	ele=document.getElementById("second");

if(ele.classList.contains("vis")){
	document.getElementById("landing").classList.add("vis");
	ele.classList.remove("vis");
	ele.classList.remove("fadeInDown");

}
})


closeleft=document.getElementById('close-left');

closeleft.addEventListener("click",function(){
	ele=document.getElementById("landing");

if(ele.classList.contains("vis")){
	document.getElementById("second").classList.add("vis");
	ele.classList.remove("vis");
}
})

pro=document.getElementById('project');


pro.addEventListener("click",function(){
	ele=document.getElementById("propage");

if(ele.classList.contains("vis")){
	document.getElementById("landing").classList.add("vis");
	ele.classList.remove("vis");
}
})



closeright=document.getElementById('close-right');

closeright.addEventListener("click",function(){
	ele=document.getElementById("landing");

if(ele.classList.contains("vis")){
	document.getElementById("propage").classList.add("vis");
	ele.classList.remove("vis");
}
})
