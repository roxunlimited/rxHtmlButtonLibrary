/***
	rxHtmlButton Library v0.3 (http://www.roxunlimited2019.com/html-button-library)
	@copyright roxunlimited.com
	@license MIT (https://github.com/roxunlimited/rxHtmlButtonLibrary/blob/master/LICENSE)
***/

!function(e){function o(e,o){var r=parseInt(e.substring(1,3),16),t=parseInt(e.substring(3,5),16),n=parseInt(e.substring(5,7),16);return r=parseInt(r*(100+o)/100),t=(t=parseInt(t*(100+o)/100))<255?t:255,n=(n=parseInt(n*(100+o)/100))<255?n:255,("#"+(1==(r=r<255?r:255).toString(16).length?"0"+r.toString(16):r.toString(16))+(1==t.toString(16).length?"0"+t.toString(16):t.toString(16))+(1==n.toString(16).length?"0"+n.toString(16):n.toString(16))).toUpperCase()}function r(e){return gradArray="top"==e?["top","to bottom"]:"left"==e?["left","to right"]:"bottom"==e?["bottom","to top"]:"right"==e?["right","to left"]:["top","to bottom"],gradArray}jQuery.fn.rxHtmlButton=function(t){var n=e.extend({backgroundColor:"#2176B8",backgroundHoverColor:"",gradient:!0,backgroundBlendColor:"",gradientFrom:"top",backgroundBlendHoverColor:"",gradientIntensity:30,border:!0,borderWidth:1,borderHoverWidth:"",borderColor:"",borderGradient:!1,borderGradientFrom:"top",borderBlendColor:"",borderHoverColor:"",borderBlendHoverColor:"#168C36",borderIntensity:5,customText:!1,customTextval:"Let's Go",customFont:!0,customFontStyle:"raleway",customFontColor:"",customFontHoverColor:"",customFontWeight:"",customFontSize:"",customArrow:!1,customArrowStyle:"jet",blackOverlay:!1,theme:"baseTheme",roundedCorner:"small",hoverExpand:!1,customSize:"medium",animate:!0,builtinTheme:""},t);switch(n.builtinTheme){case"rx01":var s=e.extend({backgroundColor:"#183396",backgroundBlendColor:"#435FC4",customFontColor:"#C9D5FF",customFontHoverColor:"#85ABFF",roundedCorner:"none",customArrow:!0,customFont:!0,customFontStyle:"livvic"},t);n=e.extend(n,s);break;case"rx02":s=e.extend({backgroundColor:"#B20404",backgroundBlendColor:"#DB4125",backgroundHoverColor:"#570202",borderHoverColor:"#7D0806",roundedCorner:"full",customFont:!0,customFontStyle:"roboto",customFontSize:"17",customFontWeight:"300"},t);n=e.extend(n,s);break;case"rx03":s=e.extend({backgroundColor:"#008768",gradient:!1,roundedCorner:"small",customText:!0,customFont:!0,customFontStyle:"exo",customArrow:!0,customArrowStyle:"thin",hoverExpand:!0,customFontSize:"16",customFontWeight:"700"},t);n=e.extend(n,s);break;case"rx04":s=e.extend({backgroundColor:"#DFE8ED",backgroundHoverColor:"#0A517D",borderHoverColor:"#073A59",gradient:!1,roundedCorner:"full",customText:!0,customFont:!0,customFontStyle:"muli",customArrow:!0,customArrowStyle:"thick",customFontWeight:"400",customFontColor:"#1D608A"},t);n=e.extend(n,s);break;case"rx05":s=e.extend({backgroundColor:"#A65B00",roundedCorner:"big",customText:!0,customTextval:"Click ...",customFont:!0,customFontStyle:"livvic",customArrow:!0,customArrowStyle:"machine",customFontWeight:"600",blackOverlay:!0},t);n=e.extend(n,s)}var l=singleFontSelector=singleSelectorBefore=singleSelectorHoverBefore=mainSelector=fontSelector=customTextSelector=selectorSplit=parentDynamicClass=css=gradArray=customTextval=arrowtheme="";for(1==n.customText&&(customTextval=n.customTextval,this.addClass("customText")),this.addClass("customsize-"+n.customSize),selectorSplit=this.selector.split(","),i=0;i<selectorSplit.length;i++)parentDynamicClass=selectorSplit[i].trim().replace(/\./g," "),e(selectorSplit[i].trim()).wrap('<div class="rx-parent '+parentDynamicClass+' inblock"></div>'),l+=".rx-parent"+selectorSplit[i].trim()+", ",singleFontSelector+=".rx-parent "+selectorSplit[i].trim()+", ",mainSelector+=".rx-parent > "+selectorSplit[i].trim()+", ",fontSelector+=".rx-parent > "+selectorSplit[i].trim()+", .rx-parent > "+selectorSplit[i].trim()+" + .hoverElements > .text-container, ",customTextSelector+=".rx-parent > "+selectorSplit[i].trim()+" + .hoverElements.active > .text-container, ",singleSelectorBefore+=".rx-parent"+selectorSplit[i].trim()+"::before ,",singleSelectorHoverBefore+=".rx-parent"+selectorSplit[i].trim()+":hover::before ";l=l.replace(/(^[,\s]+)|([,\s]+$)/g,""),singleFontSelector=singleFontSelector.replace(/(^[,\s]+)|([,\s]+$)/g,""),mainSelector=mainSelector.replace(/(^[,\s]+)|([,\s]+$)/g,""),fontSelector=fontSelector.replace(/(^[,\s]+)|([,\s]+$)/g,""),customTextSelector=customTextSelector.replace(/(^[,\s]+)|([,\s]+$)/g,""),singleSelectorBefore=singleSelectorBefore.replace(/(^[,\s]+)|([,\s]+$)/g,""),singleSelectorHoverBefore=singleSelectorHoverBefore.replace(/(^[,\s]+)|([,\s]+$)/g,""),n.backgroundBlendColor.length<1&&(n.backgroundBlendColor=o(n.backgroundColor,n.gradientIntensity)),css='<style type="text/css">',1==n.border?(n.borderColor.length<1?(n.borderColor=o(n.backgroundColor,-Math.abs(n.borderIntensity+10)),n.borderBlendColor=o(n.borderColor,n.borderIntensity+20)):n.borderBlendColor=o(n.borderColor,-Math.abs(n.borderIntensity+20)),n.borderHoverColor.length<1?(n.borderHoverColor=o(n.borderColor,-Math.abs(n.borderIntensity+10)),n.borderBlendHoverColor=o(n.borderHoverColor,n.borderIntensity+20)):n.borderBlendHoverColor=o(n.borderHoverColor,-Math.abs(n.borderIntensity+20)),n.borderHoverWidth.length<1&&(n.borderHoverWidth=n.borderWidth),1==n.borderGradient?(gradArray=r(n.borderGradientFrom),css+=mainSelector+"{border: "+n.borderWidth+"px solid "+n.borderColor+"; cursor: pointer; border-image: linear-gradient("+gradArray[1]+", "+n.borderColor+" 0%, "+n.borderBlendColor+" 100%) 20 !important; -webkit-border-image: linear-gradient("+gradArray[0]+", "+n.borderColor+" 0%, "+n.borderBlendColor+" 100%) 20 !important;}",css+=mainSelector+":hover {border: "+n.borderHoverWidth+"px solid "+n.borderHoverColor+"; border-image: linear-gradient("+gradArray[1]+", "+n.borderHoverColor+" 0%, "+n.borderBlendHoverColor+" 100%) 20 !important; -webkit-border-image: linear-gradient("+gradArray[0]+", "+n.borderHoverColor+" 0%, "+n.borderBlendHoverColor+" 100%) 20 !important;}"):(css+=mainSelector+"{border: "+n.borderWidth+"px solid "+n.borderColor+"; cursor: pointer;}",css+=mainSelector+":hover {border: "+n.borderHoverWidth+"px solid "+n.borderHoverColor+";}")):(css+=mainSelector+"{border: 0 none !important; cursor: pointer;}",css+=mainSelector+":hover {border: 0 none !important;}"),(n.customFontSize.toString().length>0||n.customFontWeight.toString().length>0)&&(css+=fontSelector+"{",n.customFontSize.toString().length>0&&(css+="font-size: "+n.customFontSize+"px !important;"),n.customFontWeight.toString().length>0&&(css+="font-weight: "+n.customFontWeight+" !important;"),css+="}"),n.customFontColor.length>0&&(css+=l+" {",css+="color: "+n.customFontColor+" !important;",css+="}"),n.customFontHoverColor.length>0&&(css+=singleFontSelector+":hover {",css+="color: "+n.customFontHoverColor,css+="}",css+=customTextSelector+"{",css+="color: "+n.customFontHoverColor,css+="}"),1==n.gradient?(gradArray=r(n.gradientFrom),css+=l+"{background: "+n.backgroundColor+"; background: linear-gradient("+gradArray[1]+", "+n.backgroundColor+" 0%, "+n.backgroundBlendColor+" 100%); background: -webkit-linear-gradient("+gradArray[0]+", "+n.backgroundColor+" 0%, "+n.backgroundBlendColor+" 100%); background-repeat: no-repeat; z-index: 1;}"):css+=l+"{background: "+n.backgroundColor+"; z-index: 1;} ",n.backgroundHoverColor.length<1&&(n.backgroundHoverColor=o(n.backgroundColor,10+~n.gradientIntensity)),n.backgroundBlendHoverColor.length<1&&(n.backgroundBlendHoverColor=o(n.backgroundBlendColor,20+~n.gradientIntensity)),1==n.gradient?css+=singleSelectorBefore+'{position: absolute; content: ""; top: 0; right: 0; bottom: 0; left: 0; background:'+n.backgroundHoverColor+"; background: linear-gradient("+gradArray[1]+", "+n.backgroundHoverColor+" 0%, "+n.backgroundBlendHoverColor+" 100%); background: -webkit-linear-gradient("+gradArray[0]+", "+n.backgroundHoverColor+" 0%, "+n.backgroundBlendHoverColor+" 100%); z-index: -1; opacity: 0;} "+singleSelectorHoverBefore+" {opacity: 1;}":css+=singleSelectorBefore+'{position: absolute; content: ""; top: 0; right: 0; bottom: 0; left: 0; background: '+n.backgroundHoverColor+"; z-index: -1; opacity: 0;} "+singleSelectorHoverBefore+"{opacity: 1;}",css+="</style>",e("head").append(css),this.addClass(n.theme),1==n.animate&&(this.addClass("animate"),this.parent().addClass("animate")),1==n.customArrow?arrowtheme=n.customArrowStyle+"-arrow":arrowtheme="","baseTheme"==n.theme&&(1==n.animate?this.parent().append('<div class="hoverElements '+arrowtheme+' animate"><div class="text-container">'+customTextval+"</div></div>"):this.parent().append('<div class="hoverElements '+arrowtheme+'"><div class="text-container">'+customTextval+"</div></div>")),1==n.blackOverlay&&(1==n.animate?this.next().append('<div class="blackOverlay animate"></div>'):this.next().append('<div class="blackOverlay"></div>')),1==n.hoverExpand&&this.addClass("expand");["full","squircle","squircleAlt","small","big","none","calendar","oval"].indexOf(n.roundedCorner)>-1&&(this.parent().addClass("rounded-corner-"+n.roundedCorner),this.addClass("rounded-corner-"+n.roundedCorner)),1==n.customFont&&this.parent().addClass("defaultfont "+n.customFontStyle.toLowerCase())}}(jQuery,window,document),$(document).ready(function(){$(document).on("DOMNodeInserted",".rx-parent",function(){$(this).find(".text-container").html()<1&&$(this).find(".text-container").remove()}),$("body").on("mouseenter",".rx-parent",function(){$(this).find(".hoverElements").addClass("active"),$(this).find(".customText").addClass("colorFadeout"),$(this).find(".baseTheme").addClass("active"),$(this).find(".hoverElements .text-container").addClass("fadeIn"),$(this).find(".hoverElements .blackOverlay").addClass("active"),$(this).find(".hoverElements").addClass("colorFadein")}),$("body").on("mouseleave",".rx-parent",function(){$(this).find(".hoverElements").removeClass("active"),$(this).find(".baseTheme").removeClass("active"),$(this).find(".hoverElements .text-container").removeClass("fadeIn"),$(this).find(".hoverElements .blackOverlay").removeClass("active"),$(this).find(".hoverElements").removeClass("colorFadein"),$(this).find(".customText").removeClass("colorFadeout")})});