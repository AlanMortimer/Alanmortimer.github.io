if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    var TrackitLogoDiv = document.getElementById("TrackitLogoDiv")
    TrackitLogoDiv.style.display="none"

    var NavBar = document.getElementById("NavBar")
    NavBar.style.position="absolute"
    NavBar.style.bottom="0px"
    NavBar.style.height="70px"



    var HomeDiv = document.getElementById("HomeDiv")
    HomeDiv.style.width="70px"
    HomeDiv.style.height="70px"
    HomeDiv.style.borderRadius="70px"
    HomeDiv.style.marginTop= "auto";
   
    var HomeIcon = document.getElementById("HomeIcon")
    HomeIcon.style.width="70px"
    HomeIcon.style.height="70px"
    HomeIcon.style.marginLeft="-5px"
    HomeIcon.style.marginTop="-5px"

    var LiveDiv = document.getElementById("LiveDiv")
    LiveDiv.style.width="70px"
    LiveDiv.style.height="70px"
    LiveDiv.style.borderRadius="70px"
   
    var LiveIcon = document.getElementById("LiveIcon")
    LiveIcon.style.width="70px"
    LiveIcon.style.height="70px"


    var ScheduleDiv = document.getElementById("ScheduleDiv")
    ScheduleDiv.style.width="70px"
    ScheduleDiv.style.height="70px"
    ScheduleDiv.style.borderRadius="70px"
   
    var ScheduleIcon = document.getElementById("ScheduleIcon")
    ScheduleIcon.style.width="70px"
    ScheduleIcon.style.height="70px"


    var AccountDiv = document.getElementById("AccountDiv")
    AccountDiv.style.width="70px"
    AccountDiv.style.height="70px"
    AccountDiv.style.borderRadius="70px"
   
    
   
    var AccountIcon = document.getElementById("AccountIcon")
    AccountIcon.style.width="70px"
    AccountIcon.style.height="70px"

    var SearchBarDiv = document.getElementById("SearchBarDiv")
    SearchBarDiv.style.display="none"
   
    var SearchIcon = document.getElementById("SearchIcon")
}else{
    
    
}
