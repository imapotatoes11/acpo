function navbar(){
    document.location.href = "https://www.youtube.com/watch?v=sSSOG8g7PFg";
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
    //DECLARE BY USING:
    //await delay(1000);
  }


function bottom_about(){
    document.getElementsByClassName("bottom_about").innerHTML="feosif";
    setTimeout(1000);
    document.getElementsByClassName("bottom_about").innerHTML="About";
    document.getElementById("ahhh").innerHTML="feosif";
    await delay(1000);
    document.getElementById("ahhh").innerHTML="About";
    console.log("AHHHHHHHHHHHHHHH");
}