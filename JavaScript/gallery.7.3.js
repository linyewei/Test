function showPic(whichpic){
	if (!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById('placeholder');
	placeholder.setAttribute("src",source);
	if (document.getElementById("desc")) {
		var text=whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "默认图片title";//判断是img否存在title
		var desc=document.getElementById("desc");
		if (desc.firstChild.nodeType==3) {
			desc.firstChild.nodeValue=text;
		};	
	};
	return true;
}

function iGallery(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("gallery"))return false;
	var gallery=document.getElementById("gallery");
	var links=gallery.getElementsByTagName("a");
	for (var i=0; i<links.length; i++){
		links[i].onclick=function(){
			return !showPic(this);
		}
	}
}

function perparePlaceholder(){
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("gallery")) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("src","images/pic.gif");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("alt","图片");
	placeholder.setAttribute("style","width: 600px; height:375px;"); //not for IE
	var desc=document.createElement("p");
	desc.setAttribute("id","desc");
	var desctext=document.createTextNode("点击小图看大图")
	desc.appendChild(desctext);

	var gallery=document.getElementById("gallery");
	insertAfter(placeholder,gallery);
	insertAfter(desc,placeholder);
}

function addLoadEvent(func){	//可复用的onload函数
	var oldonload=window.onload;
	if (typeof window.onload!="function") {
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	};
}

function insertAfter(newElement,targetElement){		//在已有元素后插入一个新元素
	var parent=targetElement.parentNode;
	if (parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}


addLoadEvent(iGallery);
addLoadEvent(perparePlaceholder);