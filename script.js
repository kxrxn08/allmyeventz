var flag=1;
document.addEventListener("DOMContentLoaded", function() {
    const formatSwitchBtn = document.querySelector(".format-switch-btn");

    formatSwitchBtn.addEventListener("click", ()=> {
      formatSwitchBtn.classList.toggle("active");
      var formatValue=formatSwitchBtn.getAttribute("data-format");
      if(formatValue==="12"){
        formatSwitchBtn.setAttribute("data-format","24");
        flag=1;
      }
      else{
        formatSwitchBtn.setAttribute("data-format","12");
        flag=0;
      }
    });
});

function clock(){
    var today= new Date();
    var hours=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();
    let period ="AM";
    if(hours>12){
        period="PM";
    }
    if(hours<10){
        hours="0"+hours;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if (flag==0){
    hours= hours>12? hours%12:hours;
    }
    document.querySelector(".hours").innerHTML=hours;
    document.querySelector(".minutes").innerHTML=minutes;
    document.querySelector(".seconds").innerHTML=seconds;
    document.querySelector(".period").innerHTML=period;
}
var updateClock=setInterval(clock,1000);

document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var dayNumber = today.getDate();
    var year = today.getFullYear();
    var dayName = today.toLocaleString("default", { weekday: "long" });
    var monthName = today.toLocaleString("default", { month: "short" });
    
    document.querySelector(".month-name").innerHTML = monthName;
    document.querySelector(".day-name").innerHTML = dayName;
    document.querySelector(".day-number").innerHTML = dayNumber;
    document.querySelector(".year").innerHTML = year;   

});
document.addEventListener("DOMContentLoaded", function() {
    const dotmenuBtn=document.querySelector(".dot-menu-btn");
    const dotMenu=document.querySelector(".dot-menu");
    dotmenuBtn.addEventListener("click",()=>{
        dotMenu.classList.toggle("active");
    })
    document.addEventListener("click",(e)=>{
        if(e.target.id!=="active-menu"){
            dotMenu.classList.remove("active");
        }
    })
});