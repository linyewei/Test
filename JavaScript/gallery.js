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


function popUp(urls){
	window.open(urls,"MyName","width=600,height=375");//弹出图片
	
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

function secFun(){
	alert(typeof window.onload);
}


function addLoadEvent(func){
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

addLoadEvent(iGallery);