var ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementByClassName("small-img")

    SmallImg[0].onclick = function (){
      ProductImg.src = SmallImg[0].src; 
    }
    SmallImg[1].onclick = function (){
      ProductImg.src = SmallImg[1].src; 
    }
    SmallImg[2].onclick = function (){
      ProductImg.src = SmallImg[2].src; 
    }