function toggledetail(){
  
  var para=document.getElementById('extend');
if(moreid.innerHTML=="More")
  {
  para.classList.toggle("ptag");
  moreid.innerHTML="back";

  }
  else{
    moreid.innerHTML="More";
  }

  
}
          
        


        function toggledetailtwo(){
          var paratwo=document.getElementById('extendtwo');
          if(moreidtwo.innerHTML=="More")
          {
           paratwo.classList.toggle("ptag");
           moreidtwo.innerHTML="back";
         }
         else
         {
         moreidtwo.innerHTML="More";
         }

            }



          function toggledetailthree()
          { var parathree=document.getElementById('extendthree');
            if(moreidthree.innerHTML=="More"){
         
          parathree.classList.toggle("ptag");
          moreidthree.innerHTML="back";
        }
        else{
           moreidthree.innerHTML="More";
         }
          
}


        function showpop(){

          var pop= document.getElementById('relative-popup');
          console.log(pop.style.display)
          if(pop.style.display=="block")
          {
            pop.style.display="none";
          }
          else{
            pop.style.display="block";
          
        }        
        // alert("working")
}
        function currentsearch(){
          var searchbar = document.getElementById('searchfunc');
          searchbar.style.width="300px";

        }
        function inactivesearch(){
          var searchbar = document.getElementById('searchfunc');
          searchbar.style.width="200px";

        }
        


        function showprofilepopup()
        {
              var pop = document.getElementById('popup-profile');
              pop.style.display = "flex";
        }
        function hideprofilepopup()
        {
          var pop = document.getElementById('popup-profile');
          pop.style.display = "none";
        }






// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("buttons");
for (var i= 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
     if(current.length > 0)
     {
    current[0].className = current[0].className.replace(" active", "");}
    this.className += " active";
  });
}




          function callyes() {
    document.getElementById("Y").checked= true;
    document.getElementById("N").checked=false;
     
}
function callNo() {
    document.getElementById("N").checked=true;
    document.getElementById("Y").checked=false;

}

let translate_by="";
var x=0;

function sliderightfunction()
{
 var slide=document.getElementsByClassName('innerdiv');
 if(x<=slide.length)
 {
  translate_by = "-100"*(x+1);
  document.getElementById('div-three').style.transform="translate(" + translate_by + "%)";
  x++;
 }
 else
 {
  document.getElementById('div-three').style.transform="translate(0%)";
  x=0;
 }
}

var y=0;
function slideleftfunction()
{
  if(x==0 && y==0)
  {
    alert('working')
    document.getElementById('div-three').style.transform="translate(-200%);"
    y++;
  }
if(y>0)
{
  document.getElementById('div-three').style.transform="translate(+100%);"

}
if(y==0)
{
  document.getElementById('div-three').style.transform="translate(-200%);"
}
else
{
  document.getElementById('div-three').style.transform="translate(+100%);"
}
}


