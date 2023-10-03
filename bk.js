function myfun(){
  var ht=document.getElementById("hotels");
  var rs=document.getElementById("restaurants");
  var cru=document.getElementById("cruiseships");

  rs.style.display="none";
  cru.style.display="none";

if(ht.style.display === "none"){
ht.style.display="block";
}
else{
  
  ht.style.display="none";
}
}

function myfun1(){

  var ht=document.getElementById("hotels");
  var rs=document.getElementById("restaurants");
  var cru=document.getElementById("cruiseships");

  ht.style.display="none";
  cru.style.display="none";

if(rs.style.display === "none"){
  rs.style.display="block";
}
else{
  rs.style.display="none";
}
}
function myfun2(){
  var ht=document.getElementById("hotels");
  var rs=document.getElementById("restaurants");
  var cru=document.getElementById("cruiseships");

  ht.style.display="none";
  rs.style.display="none";

if(cru.style.display === "none"){
    cru.style.display="block";
  }
else{
  
  cru.style.display="none";
}
}

function reserve(){
  var booking=document.getElementsByClassName("reserving")
  var data=booking[0]
  if(data.style.display==="none"){
    data.style.display="block";

  }
  else{
    data.style.display="none";
  }

}