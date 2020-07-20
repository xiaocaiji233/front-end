let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc == 'images/鬼灭之刃.jpg'){
		myImage.setAttribute('src','images/鬼灭之刃2.jpg');
	}else{
		myImage.setAttribute('src','images/鬼灭之刃.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('来者何人？');
	if(!myName || myName == null){
		setUserName();
	} else {
		localStorage.setItem('name',myName);
	    myHeading.textContent = '祢豆子真好看，' + myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = '祢豆子真好看，' + storedName;
}

myButton.onclick = function(){
   setUserName();
}