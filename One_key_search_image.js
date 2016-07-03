 // ==UserScript==
// @name         匿名版一键搜图
// @namespace    http://zhihaofans.com
// @version      0.1
// @description  一键搜图，让盗图狗不再得意
// @author       zhihaofans
// @match        https://h.nimingban.com/f/*
// @match        https://h.nimingban.com/t/*
// @grant        none
// ==/UserScript==
var oksi_loaded=0;
var oksi_li = '<li><strong>一键搜图</strong> | <a href="javascript:void(0)" id="oksi_html_button">手动开启</a></li>';
$(document).ready(function () {
	oksi_setting();
	oksi_start();
	$("a#oksi_html_button").click(function () {
		if(oksi_loaded==0)
		{
			oksi_start();
			alert("OK!?");
		}
		else
		{
			alert("错误\n\n\n已启动");
		}
	});
});
function oksi_setting()
{
	$('ul.uk-breadcrumb').append(oksi_li);

}
function oksi_start()
{
	oksi_loaded=1;
	var oksi_imgs=$("a.h-threads-img-a");
	var oksi_imgs_num=oksi_imgs.length;
	var oksi_imgs_num_1=oksi_imgs_num-1;
	var oksi_link = "";
	var oksi_a_1=1;
	for(var oksi_a=0;oksi_a<=oksi_imgs_num_1;oksi_a++)
	{
		var oksi_img="";
		oksi_img=$("a.h-threads-img-a:eq("+oksi_a+")");
		oksi_a_1=oksi_a+1;
		oksi_link="<a  target=\"_blank\" id=\"one_key_search_image_"+oksi_a_1+"\" href=\"http://image.baidu.com/n/pc_search?queryImageUrl="+oksi_img.attr("href")+"\">(←一键搜图)</a>";
		oksi_img.prop("outerHTML",oksi_link+oksi_img.prop("outerHTML"));
	}
}
