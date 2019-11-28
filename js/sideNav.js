//側邊錨點
    $(function(){
		$('body').scrollspy({target: ".sideNav", offset: 77});

		// 設定選單被點擊後的捲動動畫效果
		$(".sideNav li a").on('click', function(event){

		  // 取消瀏覽器預設動作，在此範例中是取消跳到錨點的行為動作
		  event.preventDefault();
		  var scrollTarget = $('html, body');
		  var hash = this.hash; // 取得目前點擊連結的錨點位置
		  // console.log(hash);
		  scrollTarget.animate({
		  		scrollTop: $(hash).offset().top}, 
		    	800, 
		    	function(){
		    		window.location.hash = hash; // 將錨點連結為值放到網址中
		  		}
		  );
		});
	})