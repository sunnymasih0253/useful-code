const qwe = document.querySelectorAll('.ClassName');
qwe.forEach(function (element) {
    element.addEventListener('click',function(){
        if(element.classList.contains("active")){
            element.classList.remove("active");
        }
        else{
	    qwe.forEach(function (element){
                element.classList.remove("active");    
            });
            element.classList.add("active");
        }
    });
});