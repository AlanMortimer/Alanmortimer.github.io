if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    var TrackitLogoDiv = document.getElementById("TrackitLogoDiv")
    TrackitLogoDiv.style.display="none"

    var NavBar = document.getElementById("NavBar")
    NavBar.style.position="absolute"
    NavBar.style.bottom="0px"
    NavBar.style.height="85px"



    var HomeDiv = document.getElementById("HomeDiv")
    HomeDiv.style.width="85px"
    HomeDiv.style.height="85px"
    HomeDiv.style.borderRadius="85px"
    HomeDiv.style.marginTop= "auto"
   
    var HomeIcon = document.getElementById("HomeIcon")
    HomeIcon.style.width="70px"
    HomeIcon.style.height="70px"
    HomeIcon.style.marginLeft="7.5px"
    HomeIcon.style.marginTop="2px"

    var LiveDiv = document.getElementById("LiveDiv")
    LiveDiv.style.width="85px"
    LiveDiv.style.height="85px"
    LiveDiv.style.borderRadius="85px"
    LiveDiv.style.marginTop= "-85px"
   
    var LiveIcon = document.getElementById("LiveIcon")
    LiveIcon.style.width="70px"
    LiveIcon.style.height="70px"
   
    LiveIcon.style.marginLeft="7.5px"


    var ScheduleDiv = document.getElementById("ScheduleDiv")
    ScheduleDiv.style.width="85px"
    ScheduleDiv.style.height="85px"
    ScheduleDiv.style.borderRadius="85px"
    ScheduleDiv.style.marginTop="-85px"
   
    var ScheduleIcon = document.getElementById("ScheduleIcon")
    ScheduleIcon.style.width="60px"
    ScheduleIcon.style.height="60px"
    ScheduleIcon.style.marginLeft="12.5px"
    ScheduleIcon.style.marginTop="10px"

    var AccountDiv = document.getElementById("AccountDiv")
    AccountDiv.style.width="85px"
    AccountDiv.style.height="85px"
    AccountDiv.style.borderRadius="85px"
    AccountDiv.style.marginTop="-85px"
    
   
    var AccountIcon = document.getElementById("AccountIcon")
    AccountIcon.style.width="70px"
    AccountIcon.style.height="70px"
    AccountIcon.style.marginLeft="7.5px"

    var SearchBarDiv = document.getElementById("SearchBarDiv")
    SearchBarDiv.style.display="none"
   
    var SearchIcon = document.getElementById("SearchIcon")
}else{
    
    
}
