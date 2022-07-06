if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    
}else{
    
    var TrackitLogoDiv = document.getElementById("TrackitLogoDiv")
    TrackitLogoDiv.style.display="none"

    var NavBar = document.getElementById("NavBar")
    NavBar.style.position="absolute"
    NavBar.style.bottom="0px"
    NavBar.style.height="105px"
   
    


    var HomeDiv = document.getElementById("HomeDiv")
    HomeDiv.style.width="105px"
    HomeDiv.style.height="105px"
    HomeDiv.style.borderRadius="105px"
    HomeDiv.style.marginTop= "auto"
    HomeDiv.style.marginLeft="100px"
   
    var HomeIcon = document.getElementById("HomeIcon")
    HomeIcon.style.width="90px"
    HomeIcon.style.height="90px"
    HomeIcon.style.marginLeft="7.5px"
    HomeIcon.style.marginTop="2px"

    var LiveDiv = document.getElementById("LiveDiv")
    LiveDiv.style.width="105px"
    LiveDiv.style.height="105px"
    LiveDiv.style.borderRadius="105px"
    LiveDiv.style.marginTop= "-105px"
    LiveDiv.style.marginLeft="300px"
   
    var LiveIcon = document.getElementById("LiveIcon")
    LiveIcon.style.width="90px"
    LiveIcon.style.height="90px"
    LiveIcon.style.marginTop="8px"
    LiveIcon.style.marginLeft="7.5px"


    var ScheduleDiv = document.getElementById("ScheduleDiv")
    ScheduleDiv.style.width="105px"
    ScheduleDiv.style.height="105px"
    ScheduleDiv.style.borderRadius="105px"
    ScheduleDiv.style.marginTop="-105px"
    ScheduleDiv.style.marginLeft="500px"
    var ScheduleIcon = document.getElementById("ScheduleIcon")
    ScheduleIcon.style.width="80px"
    ScheduleIcon.style.height="80px"
    ScheduleIcon.style.marginLeft="12.5px"
    ScheduleIcon.style.marginTop="10px"

    var AccountDiv = document.getElementById("AccountDiv")
    AccountDiv.style.width="105px"
    AccountDiv.style.height="105px"
    AccountDiv.style.borderRadius="105px"
    AccountDiv.style.marginTop="-105px"
    AccountDiv.style.marginLeft="700px"
   
    var AccountIcon = document.getElementById("AccountIcon")
    AccountIcon.style.width="90px"
    AccountIcon.style.height="90px"
    AccountIcon.style.marginLeft="7.5px"
    AccountIcon.style.marginTop="8px"

    var SearchBarDiv = document.getElementById("SearchBarDiv")
    SearchBarDiv.style.display="none"
   
    var SearchIcon = document.getElementById("SearchIcon")
}
