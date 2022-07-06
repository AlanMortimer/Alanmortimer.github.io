if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
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
    HomeIcon.style.width="70px"
    HomeIcon.style.height="70px"
    HomeIcon.style.marginLeft="17px"
    HomeIcon.style.marginTop="17px"

    var LiveDiv = document.getElementById("LiveDiv")
    LiveDiv.style.width="105px"
    LiveDiv.style.height="105px"
    LiveDiv.style.borderRadius="105px"
    LiveDiv.style.marginTop= "-105px"
    LiveDiv.style.marginLeft="300px"
   
    var LiveIcon = document.getElementById("LiveIcon")
    LiveIcon.style.width="70px"
    LiveIcon.style.height="70px"
    LiveIcon.style.marginLeft="17px"
    LiveIcon.style.marginTop="17px"


    var ScheduleDiv = document.getElementById("ScheduleDiv")
    ScheduleDiv.style.width="105px"
    ScheduleDiv.style.height="105px"
    ScheduleDiv.style.borderRadius="105px"
    ScheduleDiv.style.marginTop="-105px"
    ScheduleDiv.style.marginLeft="500px"
    var ScheduleIcon = document.getElementById("ScheduleIcon")
    ScheduleIcon.style.width="60px"
    ScheduleIcon.style.height="60px"
    ScheduleIcon.style.marginLeft="22px"
    ScheduleIcon.style.marginTop="22px"

    var AccountDiv = document.getElementById("AccountDiv")
    AccountDiv.style.width="105px"
    AccountDiv.style.height="105px"
    AccountDiv.style.borderRadius="105px"
    AccountDiv.style.marginTop="-105px"
    AccountDiv.style.marginLeft="700px"
   
    var AccountIcon = document.getElementById("AccountIcon")
    AccountIcon.style.width="70px"
    AccountIcon.style.height="70px"
    AccountIcon.style.marginLeft="17px"
    AccountIcon.style.marginTop="17px"

    var SearchBarDiv = document.getElementById("SearchBarDiv")
    SearchBarDiv.style.display="none"
   
    var SearchIcon = document.getElementById("SearchIcon")
}else{
    
 
}
