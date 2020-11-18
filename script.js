
function jegy (){
    var sub1 = parseInt(document.getElementById("1").value);
    var sub2 = parseInt(document.getElementById("2").value);
    var sub3 = parseInt(document.getElementById("3").value);
    var sub4 = parseInt(document.getElementById("4").value);
    var sub5 = parseInt(document.getElementById("5").value);
    var sub6 = parseInt(document.getElementById("6").value);
    var sub7 = parseInt(document.getElementById("7").value);
    var sub8 = parseInt(document.getElementById("8").value);
    var sub9 = parseInt(document.getElementById("9").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 || sub6>100 || sub7>100 || sub8>100 || sub9>100){
        alert("Kérlek normális értekeket adj meg")
    }

    else{
        var minden = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9;
        document.getElementById("minden").innerHTML = "Összesen elért pontjaid:"+minden;
        if(minden>16)
        {
            document.getElementById ("jegy").innerHTML= "A jegyed:5"
        }
        else if(minden<16 && minden>14){
            document.getElementById ("jegy").innerHTML= "A jegyed:4"
        }
        else if(minden<14 && minden>11){
            document.getElementById ("jegy").innerHTML= "A jegyed:3"
        }
        else if(minden<11 && minden>7){
            document.getElementById ("jegy").innerHTML= "A jegyed:2"
        }
        else if(minden<7)
            document.getElementById ("jegy").innerHTML= "A jegyed:1"
        }


}

