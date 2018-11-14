function changeImg(obj) {			
	var rewardCode = document.getElementsByTagName("input")[0];   
	if (obj.id =="alipay") {
		rewardCode.setAttribute("src","/assets/img/alipay.jpg");     
	} 
	else if(obj.id =="wechatpay"){ 
		rewardCode.setAttribute("src","/assets/img/wechatpay.jpg"); 
	}
}