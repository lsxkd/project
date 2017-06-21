var h=$("#allmap").outerHeight(false);
		$("#allmap").removeAttr("style").css("height",h+"px")
		var returnData={};
		$(function(){
			bMap({
				point:{lat:'23.142473',lng:'113.335353'}, //根据经纬度加载地图
				address:'广州市天河区羊城国际商贸中心-西塔' ,
				street:'羊城国际商贸中心-西塔'//根据地址加载地图
			})
			
			$(".save_btn").on({
			"tap":function(){
				windowBlur();
				if($(this).hasClass("noss_selecteds")) return false;
				saveAddress();
				 return false;
			}
		})

		})
		
		function saveAddress(){
			var addrDetail = $("#address").val();
			var lat = $("#lat").val();
			var lng = $("#lng").val();
			$.ajax({
				type : "POST",
				url : webRoot+"/storeManage/updateStoreMsg.do",
				data : {enterpriseAddressDetail:addrDetail,
						lat:lat,
						lng:lng,},
				dataType:'json',
				success : function(data) {
					$(".opacity_bg").hide();//透明遮罩层
					if(!data.msgCode == '1') {
						items("操作失败,请刷新再试",false, 2000);
					}else{
						window.location.href=basePath+'storeManage/toUpdateStoreMsg.do';
					}
				},
				error : function(a,b,c) {
					items("操作失败,请刷新再试",false, 2000);
				}
			});
		}
		
		
		
		function bMap(o){
			var searchInput= "address";
			// 地图主体
			var map = new BMap.Map("allmap");    // 创建Map实例
			if(o.point.lat&&o.point.lng){
				map.centerAndZoom(new BMap.Point(o.point.lng, o.point.lat), 18);
			}else{
				map.centerAndZoom(o.address, 18);
			}
			function loads(){
				map.clearOverlays();
				var point=map.getCenter();
				var point = new BMap.Point(point.lng,point.lat);
				var marker = new BMap.Marker(point);
				map.addOverlay(marker);
				$("#address").val(o.street);
				map.removeEventListener("tilesloaded",loads)
			}
			map.addEventListener("tilesloaded",loads);

			function locations(e,bl){
				var geoc = new BMap.Geocoder();
				geoc.getLocation(e.point, function(rs) {
					returnData.point=rs.point;
					$("#lat").val(rs.point.lat);
					$("#lng").val(rs.point.lng);
					returnData.address={
						province:rs.addressComponents.province,
						city:rs.addressComponents.city,
						district:rs.addressComponents.district,
						street:rs.addressComponents.street+rs.addressComponents.streetNumber
					};
					
					if(bl){
						$("#address").val(returnData.address.street)
					}
					

/* 					$("#address").val(returnData.address.street)
 */				})
			}
			// 点击重新定位
			map.addEventListener("click", function(e){
				$(".business_certification_item_btns a").removeClass("noss_selecteds");
				showInfo(e);
				locations(e,true)
			});

			// 联想搜索
			function addressSearch(InputId) {
				var ac = new BMap.Autocomplete( // 建立一个自动完成的对象
				{
					"input" : InputId,
					"location" : map
				});
				ac.addEventListener("onhighlight", function(e) { // 鼠标放在下拉列表上的事件
					var str = "";
					var _value = e.fromitem.value;
					var value = $("#"+searchInput).val()||"";
					if (e.fromitem.index > -1) {
						value = _value.province + _value.city + _value.district
								+ _value.street + _value.business;
					}
					str = "FromItem<br />index = " + e.fromitem.index + "<br />value = "
							+ value;

					value = "";
					if (e.toitem.index > -1) {
						_value = e.toitem.value;
						value = _value.province + _value.city + _value.district
								+ _value.street + _value.business;
					}
					str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = "
							+ value;
				});
				ac.addEventListener("onconfirm", function(e) { // 鼠标点击下拉列表后的事件
					var _value = e.item.value;
				
					myValue = _value.province + _value.city + _value.district
							+ _value.street + _value.business;
					setPlace();
					
					$(".business_certification_item_btns a").removeClass("noss_selecteds");

				});
			}

			// 执行搜索
			addressSearch(searchInput);

			// 设置中心点；
			function setPlace() {
				map.clearOverlays(); // 清除地图上所有覆盖物
				function myFun() {
					var firstSearch = local.getResults().getPoi(0).point; // 获取第一个智能搜索的结果
					locations(local.getResults().getPoi(0))
					map.centerAndZoom(firstSearch, 18);
					map.addOverlay(new BMap.Marker(firstSearch)); // 添加标注
					// 获取地址
				}
				var local = new BMap.LocalSearch(map, { // 智能搜索
					onSearchComplete : myFun
				});
				local.search(myValue);
			}

			// 根据经纬度设置中心点
			function showInfo(e){
				new BMap.Point(e.point.lng,e.point.lat)
				var lng = e.point.lng;
				var lat = e.point.lat;
				var isLoadLngAndLat = lng == "" ? 1 : 0;
				if(isLoadLngAndLat == "0" && lng != null && lng != ""){
					e.point.lng = lng;
					e.point.lat = lat;
					isLoadLngAndLat = 1;
				}
				theLocation(e.point.lng,e.point.lat);
			}

			// 用经纬度添加描点
			function theLocation(lng, lat) {
				if (lng != "" && lat != "") {
					map.clearOverlays();
					var new_point = new BMap.Point(lng, lat);
					marker = new BMap.Marker(new_point); // 创建标注
					map.addOverlay(marker); // 将标注添加到地图中
					map.panTo(new_point);
				}
			}
		}

	$(function(){
		$("#address").on({
			"input":function(){
				if($(this).val().replace(/\s/g,"")==""){
					$(".business_certification_item_btns a").addClass("noss_selecteds");
				}else{
					$(".business_certification_item_btns a").removeClass("noss_selecteds");
				}
				
			}
		})
		
		$(".returnback").on({
			"tap":function(){
				window.location.href = webRoot+"/storeManage/toUpdateStoreMsg.do";
			}
		})
	})