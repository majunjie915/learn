var EventUtil = {

	addHandler: function(element, type, handler){
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);//false 表示事件冒泡
		}else if(element.attachEvent){
			element.attachEvent("on"+type, handler);
		}else{
			element["on"+type] = handler;
		}
	},
	getEvent: function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: function(event){
		if (event.preventDefault) {
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	removeHandler: function(element, type, handler){
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type, handler);
		}else{
			element["on"+type] = null;
		}
	},
	stopPropagation: function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		}else{
			event.cancleBubble = true;
		}
	},
	getRelatedTarget: function(event){
		if (event.relatedTarget) {
			return event.relatedTarget;
		}else if(event.toElement){
			return event.toElement;
		}else if (event.fromTarget) {
			return event.fromTarget;
		}else{
			return null
		}
	},// 只有mouseover,mouseout事件的relatedTarget有值
	getButton: function(event){
		if (document.implementation.hasFeature("MouseEvents", 2.0)) {
			return event.button;
		}else{
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},// 鼠标按键 mousedown,mouseup事件
	selectText: function(textBox, startIndex, endIndex){
		if (textBox.setSelectionRange) {
			textBox.setSelectionRange(startIndex, endIndex);
		}else if(textBox.createTextRange){
			var range = textBox.createTextRange();
			range.collapse(true);//将范围折叠到文本的开始位置
			range.moveStart("character", startIndex);//要选中文本的起点
			range.moveEnd("character", endIndex - startIndex);//终点
			range.setect();// 选中
		}
		textBox.focus();
	}, // 选中文本内容。要看到选中的效果必须使文本框获得焦点
	// 剪切板事件
	getClipboardText: function(event){
		var clipboardData = event.clipboardData || window.clipboardData;
		return clipboardData.getData("text");
	},
	setClipboardText: function(event, value){
		if (event.clipboardData) {
			return event.clipboardData.setData("text/plain", value);
		}else if(window.clipboardData){
			return window.clipboardData.setData("text", value);
		}
	},
};