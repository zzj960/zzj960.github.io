var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("丢掉幻想，准备斗争！", "怀疑一切,思考一切!", "自力更生，艰苦奋斗！", "星星之火，可以燎原!", "一万年太久，只争朝夕！", "全世界无产者联合起来!", "自己动手，丰衣足食！", "失去的只是枷锁,得到的是整个世界!", "经济基础决定上层建筑。", "好好学习，天天向上!", "一切反动派都是纸老虎!", "数风流人物，还看今朝!");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}