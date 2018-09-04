function toggledetail(){
          var para=document.getElementById('hiddenpara');
          var ml = document.getElementById('more-less');
          var dot = document.getElementById('dots-one');

          if ( dot.style.display == "inline" ) 
          {
            dot.style.display = "none";
            ml.innerHTML = "Back";
            para.style.display = "block";
          }
          else
          {
            dot.style.display = "inline";
            ml.innerHTML = "More";
            para.style.display = "none"; 
          }
        }


        function toggledetailtwo(){
          var paratwo=document.getElementById('hiddenpara-two');
          var mltwo = document.getElementById('more-less-two');
          var dottwo = document.getElementById('dots-two');

          if ( dottwo.style.display == "inline" ) 
          {
            dottwo.style.display = "none";
            mltwo.innerHTML = "Back";
            paratwo.style.display = "block";
          }
          else
          {
            dottwo.style.display = "inline";
            mltwo.innerHTML = "More";
            paratwo.style.display = "none";
          }
            }



          function toggledetailthree(){
          var parathree=document.getElementById('hiddenpara-three');
          var mlthree = document.getElementById('more-less-three');
          var dotthree = document.getElementById('dots-three');

          if ( dotthree.style.display == "inline" ) 
          {
            dotthree.style.display = "none";
            mlthree.innerHTML = "Back";
            parathree.style.display = "block";
          }
          else
          {
            dotthree.style.display = "inline";
            mlthree.innerHTML = "More";
            parathree.style.display = "none";
          }
}


        function showpop(){
          var pop= document.getElementById('relative-popup');
          pop.style.display="block";
        }
        function hidepop()
        {
          var pop=document.getElementById('relative-popup');
          pop.style.display="none";
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
    this.className += "active";
  });
}




          