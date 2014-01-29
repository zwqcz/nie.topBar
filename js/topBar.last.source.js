(function(){
	var $=function(id){
			return document.getElementById(id);
		},
		addStyle=function(styleContent){
			var style;
			if(document.all){
				style= document.createStyleSheet();  
				style.cssText = styleContent;  
			}
			else{
				style=document.createElement("style");
				style.type = "text/css";   		
				style.textContent = styleContent;  
			}	
			try{
				document.getElementsByTagName("head")[0].appendChild(style);
			}
			catch(e){}
			style=null;
		},
		hover=function(id,hoverClassName){
			var _self=$(id),
				_hoverClassName=hoverClassName,
				_overStatus=false,
				_overTime=180,
				_outTime=350,
				_timer=null;
			_self.onmouseover=function(){
				_overStatus=true;
				clearTimeout(_timer);
				_timer=setTimeout(function(){					
					if(_overStatus) _self.className=_hoverClassName;
				},_overTime);
			}
			_self.onmouseout=function(){
				_overStatus=false;
				clearTimeout(_timer);
				_timer=setTimeout(function(){
					if(!_overStatus) _self.className="";
				},_outTime);
			}
		},
		//注册完成返回的页面
		finishPage={
			xyq:"http://xyq.163.com/download/index.html",
			tx2:'http://tx2.163.com/reg/finish.html',
			pet:'http://pet.163.com/download/',
			csxy:'http://csxy.163.com/reg/client/',
			dt:"http://dt.163.com/download/",			
			dt2:"http://dt2.163.com/download/",
			dtw:'http://dtw.163.com/download.html',
			xy2:"http://xy2.163.com/download/",
			xy3:"http://xy3.163.com/download/download.html",
			//pk:"http://pk.163.com/download/",
			xdw:"http://xdw.163.com/download/",
			ff:"http://ff.163.com/download/",
			qn:"http://qn2.163.com/reg/client/",
			qn2:"http://qn2.163.com/reg/client/",
			jl:"http://jl.163.com/download/",
			fj:'http://fj.163.com/download.html',
			st:'http://st.163.com/yxxz/yxxz01.html',
			ball:'http://ball.163.com/',
			xyc:'http://xyc.netease.com/viewthread.php?tid=7666',
			rich:'http://rich.163.com/',
			ysg:"http://ysg.163.com/download/",
			zg:'http://server.zg.163.com/serverlist.php?from=niebar',
			sg:'http://client.sg.163.com/server_list.html',
			xjc:"http://game.xjc.163.com/",
			wh:"http://wh.163.com/download/",
			zh:"http://zh.163.com/download/"
		},		
		//大网易urs product对应值,如果没有则返回域名
		regProduct={
			pet:"cwwg",
			jl:"jlmc",
			dt2:"dtws",
			sg:"sgtx_web",
			zg:"ch",
			ff:"newff",
			pk:"xyw",
			tx3:"tx2",
			mkey:"mtoken",
			dtws2:"dtws",
			qn2:"qn",
			xdw:"xyw",
			y3:"dota"
		},
		isDefined = function(){
			var args =arguments;
			for(var i=0,l=args.length;i<l;i++){
				if(typeof args[i]=="undefined") return false;
			}
			return true;
		},
		productName = typeof nie!="undefined"&&isDefined(nie.config,nie.config.site)?nie.config.site:window.location.href.replace(/^http:\/\/(.*)\.163\.com.*$/,'$1'),
		/*
			产品 对应的url 
			大话西游II  http://ecard.163.com/script/index?platform=20100105dh2 
			天下贰  http://ecard.163.com/script/index?platform=20110329tx2 
			倩女幽魂  http://ecard.163.com/script/index?platform=qn 
			战国风云  http://ecard.163.com/script/index?platform=canghai 
			大唐豪侠  http://ecard.163.com/script/index?platform=dt 
			大话三  http://ecard.163.com/script/index?platform=xy3 
			疯狂蛮蛮  http://ecard.163.com/script/index?platform=fkmm 
			梦幻西游  http://ecard.163.com/script/index?platform=xyq 
			斩魂  http://ecard.163.com/script/index?platform=zh 
			龙剑  http://ecard.163.com/script/index?platform=ds 
			英雄三国  http://ecard.163.com/script/index?platform=yxsg
       	    不在以上游戏列表的其他游戏，统一对应链接：http://ecard.163.com/script/index
		*/
		ecardPlatform={
			xy2:"20100105dh2",
			tx3:"20110329tx2",
			qn:1,
			zg:"canghai",
			dt:1,
			xy3:1,
			fkmm:1,
			xyq:1,
			zh:1,
			lj:"ds",
			dota:"yxsg"			
		},
		regPageDict={
			xy2:"http://xy2.163.com/reg/",
			tx3:"http://tx3.163.com/reg/",
			xdw:"http://xdw.163.com/reg/",
			dtws2:"http://dtws2.163.com/reg/",
			wh:"http://wh.163.com/reg/",
			xyq:"http://xyq.163.com/reg/",
			y3:"http://y3.163.com/reg/",
			lj:"http://lj.163.com/reg/",
			x3:"http://x3.163.com/reg/",
            zd:"http://zd.163.com/reg/",
            xy3:"http://xy3.163.com/reg/",
            zh:"http://zh.163.com/reg/",
            xc:"http://xc.163.com/reg/",
            jl:"http://jl.163.com/reg/",
            ff:"http://ff.163.com/reg/"
		}
		ecardLink="http://ecard.163.com/script/index"+(isDefined(ecardPlatform[productName])?"?platform="+(ecardPlatform[productName]==1?productName:ecardPlatform[productName]):""),
		regProductID = isDefined(regProduct[productName])?regProduct[productName]:productName,
		regUrl = encodeURIComponent(isDefined(finishPage[productName])?finishPage[productName]:"http://"+productName+".163.com"),
		regPage=regPageDict[productName]?regPageDict[productName]:"http://reg.163.com/reg/reg.jsp?product="+regProductID+"&url="+regUrl+"&loginurl="+regUrl;
		new function(styleContent){
			var style;
			if(document.all){
				style= document.createStyleSheet();  
				style.cssText = styleContent;  
			}
			else{
				style=document.createElement("style");
				style.type = "text/css";   		
					style.textContent = styleContent;  
			}	
			try{
				document.getElementsByTagName("head")[0].appendChild(style);
			}
			catch(e){}
            style=null;
        }('.NIE-topBar-logo,.NIE-topBar-arrIcon i,#NIE-topBar-menu span,.NIE-topBar-hot,.NIE-topBar-1st,.NIE-topBar-new,.NIE-topBar-btn{background:url(http://res.nie.netease.com/comm/nie.topBar/images/sprite-w.png) no-repeat;}\
			.NIE-topBar-arrIcon{position:relative;top:4px;width:16px;height:16px;display:inline-block;background-color:#fff;overflow:hidden;}\
			.NIE-topBar-arrIcon i{width:9px;height:4px;float:left;margin:6px 0 0 4px;background-position:-103px -101px;display:inline-block;-webkit-transition:all .2s ease 0s;transition:all .2s ease 0s;}\
			#NIE-topBar{position:relative;z-index:9999;min-width:1000px;height:40px;background:#333;line-height:24px;}\
			#NIE-topBar *{font-size:12px;font-style:normal;}\
			#NIE-topBar a{color:#999;text-decoration:none;}\
			#NIE-topBar a:hover{color:#fff;}\
			#NIE-topBar ul,#NIE-topBar li{margin:0;padding:0;float:left;}\
			.NIE-topBar-main{position:relative;z-index:9999;width:945px;margin:auto;}\
			.NIE-topBar-logo{width:115px;height:28px;display:block;float:left;margin-top:6px;}\
			#NIE-topBar-news{position:absolute;z-index:2;left:125px;width:290px;height:39px;padding-left:18px;color:#fff;background:#333;overflow:hidden;border:1px solid #333;border-top:0;-webkit-transition:height .3s ease 0s;-o-transition:height .3s ease 0s;-moz-transition:height .3s ease 0s;transition:height .3s ease 0s;}\
			#NIE-topBar-news.NIE-topBar-news-hover{height:200px;padding-bottom:20px;background:#262626;opacity:.9;border-color:#1f1f1f;-webkit-transition:all .5s ease 0s;-o-transition:all .5s ease 0s;-moz-transition:all .5s ease 0s;transition:all .5s ease 0s;}\
			.NIE-topBar-news-hover .NIE-topBar-arrIcon i,.NIE-topBar-menu-hover .NIE-topBar-arrIcon i{-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transition:deg .3s ease 0s;-o-transition:deg .3s ease 0s;-moz-transition:deg .3s ease 0s;transition:deg .3s ease 0s;}\
			#NIE-topBar-news span{position:relative;height:40px;line-height:40px;display:block;overflow:hidden;}\
			#NIE-topBar-news span b{width:6em;float:left;display:inline-block;}\
			#NIE-topBar-news span a{width:190px;height:40px;display:inline-block;overflow:hidden;}\
			#NIE-topBar-news span .NIE-topBar-arrIcon{position:absolute;top:12px;_top:10px;}\
			#NIE-topBar-news ul{position:relative;padding:5px 0;}\
			#NIE-topBar-news ul a{width:265px;height:24px;display:block;overflow:hidden;}\
			#NIE-topBar-news ul i{width:55px;padding-right:10px;float:left;font-style:normal;display:inline;text-align:right;}\
			.NIE-topBar-mid{position:absolute;z-index:2;right:135px;width:385px;text-align:right;}\
			#NIE-topBar .NIE-topBar-mid a{line-height:40px;padding:0 10px;color:#fff;display:inline-block;}\
			#NIE-topBar .NIE-topBar-mid a:hover{color:#ca0b0b;}\
			#NIE-topBar-menu{position:absolute;z-index:1;top:0;right:0;color:#999;width:680px;height:40px;overflow:hidden;-webkit-transition:height .3s ease 0s;-o-transition:height .3s ease 0s;-moz-transition:height .3s ease 0s;transition:height .3s ease 0s;}\
			#NIE-topBar-menu span{position:absolute;width:120px;padding:8px 0 12px 0;height:20px;line-height:14px;right:0;background-position:0 -28px;background-repeat:repeat-x;padding-left:15px;color:#fff;display:inline-block;overflow:hidden;}\
			#NIE-topBar-menu table{position:absolute;top:40px;right:0;background:#262626;border-collapse:collapse;}\
			#NIE-topBar-menu table a{width:97px;padding-left:15px;line-height:24px;display:inline-block;}\
			#NIE-topBar-menu table td{width:110px;padding:0 12px 15px 12px;border-right:1px #000 solid;border-bottom:1px #000 solid;vertical-align:top;}\
			#NIE-topBar-menu b{margin:20px 0 0 15px;line-height:24px;color:#fff;font-weight:normal;display:block;clear:both;}\
			#NIE-topBar-menu b i{margin-left:5px;padding:2px 4px;color:#9b9b9b;font-style:normal;background:#111;display:inline;}\
			#NIE-topBar-menu table a em{padding-right:25px;}\
			.NIE-topBar-1st{background-position:right -274px;}\
			.NIE-topBar-hot{background-position:right -150px;}\
			.NIE-topBar-new{background-position:right -212px;}\
			#NIE-topBar-menu.NIE-topBar-menu-hover{height:340px;opacity:.9;-webkit-transition:height .4s ease 0s;-o-transition:height .4s ease 0s;-moz-transition:height .4s ease 0s;transition:height .4s ease 0s;}\
			a.NIE-topBar-btn{width:103px !important;height:25px;margin:5px 0;display:inline-block;padding-left:0 !important;background-position:100% -338px;text-indent:15px;color:#fff !important;border:1px #090708 solid;border-left:0;border-top:0;}\
			a.NIE-topBar-btn:hover{color:#FDD2D2 !important;}\
		'+/*医生说要自适应宽屏啊！,改成白色之后重写样式*/'.NIE-topBar-ad{height:40px;left:50%;}\
			.w1200{min-width:1200px!important;}\
			.w1200 .NIE-topBar-main{width:1185px;}\
			#NIE-topBar-news{width:auto;z-index:9;height:54px;width:auto;border-color:#fbfbfb;background:none;}\
			#NIE-topBar .NIE-topBar-menu-hover{z-index:8;}\
			.NIE-topBar-ad-big{position: absolute;top: 0;left:0;z-index: 10;height:0;overflow:hidden;text-align:center;}\
			#NIE-topBar-menu{z-index:7;height:55px;}\
			.NIE-topBar-mid{z-index:12;width: 250px;right:144px;width:536px;}\
			.NIE-topBar-logo{position:relative;z-index:13!important;}\
			#NIE-topBar{height:55px;background:#fbfbfb;}\
			.NIE-topBar-logo{margin-top:14px;}\
			#NIE-topBar-menu table{top:54px;background:#fbfbfb;border-top: 1px solid #ececec;}\
			#NIE-topBar-menu span{background:none;color:#bc2e2e;}\
			#NIE-topBar-menu table td{border-color:#ececec;}\
			#NIE-topBar-menu b{color:#bc2e2e;}\
			#NIE-topBar a{color:#626262}\
			#NIE-topBar-menu b i{background-color:#fbfbfb;color:#bc2e2e;}\
			#NIE-topBar a:hover{color:#bc2e2e;}\
			#NIE-topBar-menu.NIE-topBar-menu-hover{opacity:.95;}\
			a.NIE-topBar-btn{border:none;box-shadow:1px 1px 1px #ccc}\
			#NIE-topBar-menu table *{font-size:12px;}\
			#NIE-topBar-menu.NIE-topBar-menu-hover span{border-bottom:3px solid #bc2e2e;background-color: #F3F3F3;background-image: -webkit-linear-gradient(top, #F3F3F3 0px, #FEFEFE 52px);background-image:linear-gradient(top, #F3F3F3 0px, #FEFEFE 52px);}\
			#NIE-topBar-menu span{height:26px;width:123px;padding-top:14px;transition:background ease-in-out .33s;z-index:20;}\
			#NIE-topBar .NIE-topBar-mid a{color:#333;line-height:52px;transition:background ease-in-out .33s;*line-height:55px;}\
			#NIE-topBar .NIE-topBar-mid a:hover{color:#bc2e2e!important;border-bottom:3px solid #bc2e2e;background-color: #F3F3F3;background-image: -webkit-linear-gradient(top, #F3F3F3 0px, #FEFEFE 52px);background-image:linear-gradient(top, #F3F3F3 0px, #FEFEFE 52px);*border-bottom:none;}\
		');
		new function(){			
			$("NIE-topBar").innerHTML='<div class="NIE-topBar-main">\
						<a class="NIE-topBar-logo" href="http://nie.163.com/" target="_blank"></a>\
						<div id="NIE-topBar-news">\
						</div>\
						<div class="NIE-topBar-mid">\
							<a id="global_gp_reg" href="'+regPage+'" target="_blank">注册帐号</a>\
							<a id="global_gp_card" href="'+ecardLink+'" target="_blank">购卡充值</a>\
							<a href="http://mkey.163.com/download/?from=nietop" target="_blank">手机将军令</a>\
						</div>\
						<div id="NIE-topBar-menu">\
							<span>网易游戏全目录 <em class="NIE-topBar-arrIcon"><i></i></em></span>\
						  <table><tr><td style="width:225px;padding-left:30px;"><b>大型角色扮演游戏</b><a href="http://xyq.163.com" target="_blank"><em class="NIE-topBar-1st">梦幻西游2</em></a><a href="http://wh.163.com" target="_blank"><em class="NIE-topBar-hot">武魂</em></a><a href="http://xy2.163.com" target="_blank">新大话西游2</a><a href="http://tx3.163.com" target="_blank"><em class="NIE-topBar-hot">天下3</em></a><a href="http://xy3.163.com" target="_blank">大话西游3</a><a href="http://qn2.163.com" target="_blank"><em class="NIE-topBar-hot">倩女幽魂2</em></a><a href="http://x3.163.com" target="_blank">新大话西游3</a><a href="http://xdw.163.com" target="_blank">大话外传新篇</a><a href="http://zd.163.com" target="_blank"><em class="NIE-topBar-new">藏地传奇</em></a><a href="http://dtws2.163.com" target="_blank">大唐无双2</a><a href="http://ty.163.com" target="_blank"><em class="NIE-topBar-new">天谕</em></a><a href="http://jl.163.com" target="_blank">精灵传说</a><a href="http://lj.163.com" target="_blank"><em class="NIE-topBar-new">龙剑</em></a><a href="http://zh.163.com" target="_blank">斩魂</a><a href="http://www.warcraftchina.com" target="_blank">魔兽世界</a><a href="http://ff.163.com" target="_blank">新飞飞</a></td><td><b>竞技对战</b><a href="http://www.battlenet.com.cn" target="_blank">战网</a><a href="http://www.starcraft2.com.cn" target="_blank">星际争霸Ⅱ</a><a href="http://yxsg.163.com" target="_blank"><em class="NIE-topBar-hot">英雄三国</em></a><b>手游</b><a href="http://xym.163.com/" target="_blank">迷你西游</a><a href="http://byy.163.com/" target="_blank"><em class="NIE-topBar-new">塔防骑士团</em></a><b>网页游戏</b><a href="http://zg.163.com" target="_blank">战国风云</a></td><td><b>休闲游戏</b><a href="http://www.hearthstone.com.cn/" target="_blank"><em class="NIE-topBar-new">炉石传说</em></a><a href="http://xc.163.com" target="_blank">游戏星城</a><b>射击游戏</b><a href="http://bl.163.com" target="_blank"><em class="NIE-topBar-new">爆裂天空</em></a><a href="http://wj.163.com" target="_blank"><em class="NIE-topBar-new">危机2015</em></a></td><td style="background:#ececec;"><b>游戏助手</b><a href="http://mkey.163.com" target="_blank">手机将军令</a><a href="http://ekey.163.com" target="_blank">将军令</a><a href="http://zhidao.163.com" target="_blank">游戏知道</a><a href="http://cbg.163.com" target="_blank">藏宝阁</a><a href="http://cc.163.com" target="_blank">网易CC</a><a href="http://gm.163.com" target="_blank">客服中心</a><a href="http://box.gm.163.com/?fromnietop" target="_blank">自助百宝箱</a><a href="http://uu.163.com" target="_blank">网易UU加速器</a><a class="NIE-topBar-btn" href="http://nie.163.com/" target="_blank">网易游戏</a></td></tr></table>\
						</div>\
					</div>';
			//新闻
            /* 取消囧囧有神栏目，改为大banner
			if(/^(xyq|xy2|tx3|y3)$/i.test(productName)){
				var js=document.createElement("script");
				js.src="/news/jjys.js";
				js.charset="gbk";
				js.onload=js.onreadystatechange = function(){     
							if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
									js.onload = js.onreadystatechange = null; //防止IE内存泄漏
									if(__NIE_topBar_news__){
										var html='<span><b>囧囧有神：</b><a href="$link" target="_blank">$title</a><em class="NIE-topBar-arrIcon"><i></i></em></span><ul>'
											.replace("$link",__NIE_topBar_news__[0].link)
											.replace("$title",__NIE_topBar_news__[0].title);
										for(var i=1,l=__NIE_topBar_news__.length;i<l;i++){
											html+='<li><a href="$link" target="_blank"><i>$dt</i>$title</a></li>'
													.replace("$link",__NIE_topBar_news__[i].link)
													.replace("$dt",__NIE_topBar_news__[i].dt)
													.replace("$title",__NIE_topBar_news__[i].title);										
										}
										html+="</ul>";
										$("NIE-topBar-news").innerHTML=html;
										new hover("NIE-topBar-news","NIE-topBar-news-hover");
										html=null;
										__NIE_topBar_news__=null;										
									}
							}
				}
				document.getElementsByTagName("head")[0].appendChild(js);				
			} */
		};	
	new hover("NIE-topBar-menu","NIE-topBar-menu-hover");
	finishPage=regPageDict=regProduct=ecardPlatform=regPage=regUrl=regProductID=null;
})();


//先在前面渲染出结构，再加入Banner。混乱蹩脚的实现，到时再重写。
/*
(function(){
    var bannerThumb=nie.config.topBar.bannerThumb||'http://res.nie.netease.com/banner_thumb.jpg',
        bannerImg=nie.config.topBar.bannerImg||'http://res.nie.netease.com/banner_img.jpg',
        bannerLink=nie.config.topBar.bannerLink||'http://xyq.163.com';




    var screenWidth=$(window).width();

    var str="<div href='javascript:;' class='NIE-topBar-ad'><a><img src='images/s-banner-w.jpg'></a></div>"
    $('#NIE-topBar-news').html(str);
    if(screenWidth>1200){
        $('#NIE-topBar').addClass('w1200');
        $('#NIE-topBar').append('<div class="NIE-topBar-ad-big" style="width:100%;left:0;background:url(images/b-bg-w.jpg) repeat-x;"><a href="http://tx3.163.com/huodong/" target="_blank" ><img src="images/b-banner-w-b.jpg"></a></div>')
    }else{
        $('.NIE-topBar-main').append('<div class="NIE-topBar-ad-big"><a href="http://tx3.163.com/huodong/" target="_blank"><img src="images/b-banner-w.jpg"></a></div>')
    }
    $('#NIE-topBar-news,.NIE-topBar-ad-big').hover(function(){
        $('.NIE-topBar-ad-big').stop().animate({
            height:247
        },200)
        $('#NIE-topBar-news').css('opacity',0);


    },function(){
        $('.NIE-topBar-ad-big').stop().animate({
            height:0
        },200)
        $('#NIE-topBar-news').css('opacity',1);
    })

    $(window).resize(function(){

        var screenWidth=$(window).width();
        if(screenWidth>1200){
            $('#NIE-topBar').addClass('w1200');
            $('.NIE-topBar-ad-big img').attr('src','images/b-banner-w-b.jpg');
            $('.NIE-topBar-ad-big').css({
                backgroundImage:'url(images/b-bg-w.jpg)'
            })
        }else{
            $('#NIE-topBar').removeClass('w1200');
            $('.NIE-topBar-ad-big img').attr('src','images/b-banner-w.jpg');
            $('.NIE-topBar-ad-big').css({
                backgroundImage:'none'
            })
        }

    })
}())
    */