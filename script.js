var likes = document.getElementsByClassName("like");
var minus = document.getElementsByClassName('minus-btn');
var plus = document.getElementsByClassName('plus-btn');
var quantity = document.getElementsByClassName('Quant');
var price = document.getElementsByClassName('price');
var total = document.getElementById('finalPrice');
var del = document.querySelectorAll('.delete');

//********button-like*********//

console.log(likes);
for(let i= 0; i< likes.length; i++){
    let like = likes[i];
    like.addEventListener("click" ,function(){
        if (like.firstElementChild.style.color == "red"){
            like.firstElementChild.style.color = "black";
        } else {
            like.firstElementChild.style.color = "red";
        }

    });
}

//********incrementation*********//

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', function(){
  
   if(quantity[i].value>0){
    quantity[i].value--;
    calcul();
   }
    
  
  })

  }

//********decrementation*********//

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', function(){
   
     quantity[i].value ++;
     calcul();
     
  })
  
  }

//********total price*********//

function calcul() {
    var result = 0; 
     for (let i = 0; i < price.length; i++) {
        result = result + ((price[i].innerHTML) * (quantity[i].value))
}

document.getElementById('finalPrice').value = result
}

//**********delete************//

for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", function () {
      del[i].parentElement.remove()
      calcul()
  })
}
