 // meet the team accordion js 
    
 let meetTheTeam = document.querySelectorAll(".meet-the-team");
 var meetTheTeamContent = document.querySelector(".elementor-testimonial-content");
   var contentHeight = meetTheTeamContent.scrollHeight;
 meetTheTeamContent.setAttribute("style",`overflow:visible;height:${contentHeight}px; transition:0.5s;`);     
 
 for(let i of meetTheTeam){
    i.addEventListener("click",()=>{
        var meetTheTeamContent = i.querySelector(".elementor-testimonial-content");
        var contentHeight = meetTheTeamContent.scrollHeight;
         let curentShow =  document.querySelector(".meet-the-team.show");

        if(curentShow){
            curentShow.querySelector(".elementor-testimonial-content").setAttribute("style",`overflow:hidden;height:0px; transition:0.5s;`);    
            curentShow.classList.remove("show");
        }

        if(curentShow != i){
            i.classList.add("show");
            meetTheTeamContent.setAttribute("style",`overflow:visible;height:${contentHeight}px; transition:0.5s;`);    
        }
    });
}