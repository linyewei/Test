/* 
一些可复用的javacript函数
*/
//共享onload函数
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

//在已有元素后插入一个新元素
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if (parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}


//获取下一个元素节点（注：元素节点）
function getNextElement(node){
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
}

//给一个元素追加新的class
function addClass(element,value){
	if (!element.className) {//检测元素原先是否存在class
		element.className=value;
	} else{
		newClassName=element.className;
		newClassName+=" ";
		newClassName+=value;
		element.className=newClassName;
	};
}

//表格隔行着色
function stripeTables(){
	if (!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName("table");
	var odd, rows;
	for (var i=0; i<tables.length; i++){
		odd=false;
		rows=tables[i].getElementsByTagName('tr');
		for (var j = 0; j<rows.length; j++) {
			if (odd==true) {
				addClass(rows[j],"odd");
				odd=false;
			} else{
				odd=true;
			};
	
		};
	}
}