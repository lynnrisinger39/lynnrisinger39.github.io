// when user clicks on .hamburger 
// 	add the active class to .sidebar

$('.hamburger').on('click', function(){
	$('.sidebar').addClass('active')
});

// when user clicks on .close
// 	prevent default action of page refreshing 
// 	remove active class

$('.close').on('click',function(e){
	e.preventDefault();
	$('.sidebar').removeClass('active')
});
