function togglediv(){
        if(!document.getElementById("leftpane1").classList.contains("shrink")){
            document.getElementById("leftpane1").classList.add("shrink");
            document.getElementById("leftpane1").style.transition = "width ease-in-out 1s ";
            document.getElementById("rightpane1").classList.add("expand");
            document.getElementById("rightpane1").style.transition = "width ease-in-out 1s ";
        }else{
            document.getElementById("leftpane1").classList.remove("shrink");
            document.getElementById("leftpane1").style.transition = "width ease-in-out 1s ";
            document.getElementById("rightpane1").classList.remove("expand");
            document.getElementById("rightpane1").style.transition = "width ease-in-out 1s ";
        }
}