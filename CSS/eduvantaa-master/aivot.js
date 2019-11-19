$(document).ready(function(){
  $(toggle1).click(function(){
    $(laatikko1).toggle();
  });
$(toggle2).click(function(){
    $(laatikko2).toggle();
});
$(toggle3).click(function(){
    $(laatikko3).toggle();
});
});
function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML = "<table><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr></table>";
    }
    else if (boxNumber == 3){
        document.getElementById("laatikko3").innerHTML = "<img id='myImage' src='smiley2.png' style='width:100px'>";
    }
    else if (boxNumber == 4){
        location.reload();
    }    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = x.length-1; i >=0; i--) {
      text += x.elements[i].name + ": " + x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  
  //function diagrammiFunktio(){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    //var c = document.getElementById("myCanvas");
    //var ctx = c.getContext("2d");
    //ctx.beginPath();
    
  }
  function diagrammiFunktio(){
      var c = document.getElementById("myCanvas");
      var arvoArray;
      var arvoPituus;
      var piste=40;
      var diagrammi = c.getContext("2d");
      arvoArray = [100, 150, 100, 110, 120, 110, 120, 120, 130, 150, +
        100, 150, 100, 110, 120, 110, 420, 320, 430, 150, +
        150, 100, 150, 100, 110, 120, 110, 120, 120, 130, 150];

        arvoPituus = arvoArray.length;
        diagrammi.beginPath();
        diagrammi.strokeStyle = "blue";
    
        diagrammi.moveTo(piste, 500-arvoArray[0]);
        diagrammi.fillText(arvoArray[0], piste, 500-arvoArray[0]);
            
        for (i = 1; i < arvoPituus; i++) {
            piste=piste+20;
            diagrammi.lineTo(piste, 500-arvoArray[i]);
            diagrammi.fillText(arvoArray[i], piste, 500-arvoArray[i]);
        }
        diagrammi.stroke();
    
        diagrammi.fillText("50", 0, 450);
        diagrammi.fillText("100", 0, 400);
        diagrammi.fillText("150", 0, 350);
        diagrammi.fillText("200", 0, 300);
        diagrammi.fillText("250", 0, 250);
        diagrammi.fillText("300", 0, 200);
        diagrammi.fillText("350", 0, 150);
        diagrammi.fillText("400", 0, 100);
        diagrammi.fillText("450", 0, 50);
    
        diagrammi.fillText("5.1.", 120, 500);
        diagrammi.fillText("10.1.", 220, 500);
        diagrammi.fillText("15.1.", 320, 500);
        diagrammi.fillText("20.1.", 420, 500);
        diagrammi.fillText("25.1.", 520, 500);
        diagrammi.fillText("30.1.", 620, 500);

   
      
    
  
    
    /* diagrammiin voidaan kirjoittaa numeroita haluttuihin kohtiin.
    ctx.fillText("10", 10, 10) ;
    ctx.fillText("40", 10, 40) ;
    ctx.fillText("70", 10, 70) ;
    ctx.fillText("100", 10, 100) ;
    ctx.fillText("130", 10, 130) ;
    ctx.fillText("160", 10, 160) ;
    ctx.fillText("190", 10, 190) ;
    ctx.fillText("220", 10, 220) ;
    ctx.fillText("250", 10, 250) ;
    ctx.fillText("280", 10, 280) ;
    ctx.fillText("310", 10, 310) ;
    ctx.fillText("340", 10, 340) ;
    ctx.fillText("370", 10, 370) ;
    ctx.fillText("400", 10, 400) ;
    ctx.fillText("430", 10, 430) ;
    ctx.fillText("460", 10, 460) ;
    ctx.fillText("490", 10, 490) ;
    ctx.fillText("520", 10, 520) ;
    ctx.fillText("550", 10, 550) ;

    // diagrammin toinen akseli
    ctx.fillText("40", 40, 10) ;
    ctx.fillText("70", 70, 10) ;
    ctx.fillText("100", 100, 10) ;
    ctx.fillText("130", 130, 10) ;
    ctx.fillText("160", 160, 10) ;
    ctx.fillText("190", 190, 10) ;
    ctx.fillText("220", 220, 10) ;
    ctx.fillText("250", 250, 10) ;
    ctx.fillText("280", 280, 10) ;
    ctx.fillText("310", 310, 10) ;
    ctx.fillText("340", 340, 10) ;
    ctx.fillText("370", 370, 10) ;
    ctx.fillText("400", 400, 10) ;
    ctx.fillText("430", 430, 10) ;
    ctx.fillText("460", 460, 10) ;
    ctx.fillText("490", 490, 10) ;
    ctx.fillText("520", 520, 10) ;
    ctx.fillText("550", 550, 10) ;
    // Alla olevalla koodilla voidaan piirtää viivaa diagrammiin.
    ctx.moveTo(40, 200);
    /*ctx.fillText("200", 40, 200) ;
    ctx.lineTo(60, 250);
    ctx.fillText("250", 60, 250) ;
    ctx.lineTo(80, 200);
    ctx.fillText("200", 80, 200) ;
    ctx.lineTo(100, 210);
    ctx.fillText("210", 100, 210) ;
    ctx.lineTo(120, 100);
    ctx.fillText("100", 120, 100) ;
    ctx.lineTo(150, 300);
    ctx.fillText("300", 150, 300) ;
    ctx.lineTo(200, 50);
    ctx.fillText("50", 200, 50) ;
    ctx.lineTo(400, 150);
    ctx.fillText("150", 400, 150) ;
    ctx.stroke();*/
  }
