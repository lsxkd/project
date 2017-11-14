window.onload = window.onresize = window.onscroll = function(){	
	cart('cart_right','cart_hide','cart_none');	

	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var oLeft = document.getElementById('left_ladder');
	var oLadder = oLeft.getElementsByTagName('a');

	scrollTop > 700 ? oLeft.style.display = 'block' : oLeft.style.display = 'none' ;

	function scroll(numberr){
		var oF = document.getElementById( numberr+'f' );
		if( oF.offsetTop - 200 < scrollTop ){
			for( i=0; i<oLadder.length; i++ ){
				oLadder[i].getElementsByTagName('div')[0].style.display = 'none';
			}
			oLadder[numberr-1].getElementsByTagName('div')[0].style.display = 'block';
			for( i=0; i<oLadder.length; i++ ){
				oLadder[i].index = i;
				oLadder[i].onmouseover = function(){
					this.getElementsByTagName('div')[0].style.display = 'block';
				}
				oLadder[i].onmouseout = function(){
					if(this.index == numberr-1){
						this.getElementsByTagName('div')[0].style.display = 'block';
					}else{
						this.getElementsByTagName('div')[0].style.display = 'none';
					}
				}
				oLadder[i].onclick = function(){
					var oNid = document.getElementById( (this.index + 1)+'f' );
					for(i=0; i<oLadder.length; i++){
						oLadder[i].getElementsByTagName('div')[0].style.display = 'none';
					}
					this.getElementsByTagName('div')[0].style.display = 'block';
					document.documentElement.scrollTop = document.body.scrollTop = oNid.offsetTop-10; 
				}
			}
		}
	}
	scroll('1');
	scroll('2');
	scroll('3');
	scroll('4');
	scroll('5');
	scroll('6');
	scroll('7');
	scroll('8');
}
function cart(a,b,c){
	var oCart_right = document.getElementById(a);
	var oCart_hide = document.getElementById(b);
	var oCart_none = document.getElementById(c);
	var timer = null;
	oCart_right.style.right = -oCart_none.offsetWidth+'px';
	oCart_hide.onclick = function(){
		if(oCart_right.style.right == -oCart_none.offsetWidth+'px'){
			num = 0;
			timer = setInterval(function(){
				num += 10							
				if(num >= oCart_none.offsetWidth){
					clearInterval(timer);
				}
				oCart_right.style.right = (-oCart_none.offsetWidth+num)+'px';								
			}, 5);
			oCart_hide.className += ' '+'cart_in';
		}else if(oCart_right.style.right == '0px'){
			num = 0;
			timer = setInterval(function(){
				num += 10							
				if(num >= oCart_none.offsetWidth){
					clearInterval(timer);
				}
				oCart_right.style.right = -num+'px';								
			}, 5);
			oCart_hide.className = oCart_hide.className.replace(/ cart_in/,"");
		}		
	}
}