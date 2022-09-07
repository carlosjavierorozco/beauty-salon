$(function(){
	var toggleMenu = $('#togle-menu');
	var nav = $('#main-nav')
	toggleMenu.on('click',function(){
	nav.add($('body')).toggleClass('show');
	});
});