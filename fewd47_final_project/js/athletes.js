// toggles paragraph when user clicks on athletes image 
$('.athletes').find('img').on('click', function() {
	$(this).next().slideToggle(300);
});


$('.hamburger').on('click', function(){
	$('.sidebar').toggleClass('active')
});

// when user clicks on .close
// 	prevent default action of page refreshing 
// 	remove active class

$('.close').on('click',function(e){
	e.preventDefault();
	$('.sidebar').removeClass('active')
});
