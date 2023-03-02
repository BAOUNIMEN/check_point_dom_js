var buttons =document.querySelectorAll('button');
console.log(buttons)
//function count  butons plus , minus && count prices
function plus_minus(event) {
    console.log(event.target);
    var bt = event.target;
    var div =bt.parentElement;
    console.log(div);
    var pr = div.querySelector('p')
    var count = parseInt(pr.innerHTML);
    var tr = div.parentElement.parentElement;
    var prix = tr.querySelector('.price');
    var unitprix = tr.querySelector('.unitPrice');
    console.log(prix)
    var unit = parseInt(unitprix.innerHTML);
    console.log(unitprix);
    var res =0;
    if (bt.innerHTML == '+') {
        count++;
    }
    if (bt.innerHTML == '-'&& count>0) {
        count--;
    }
    pr.innerHTML = count;
    res = count*unit;
    console.log(res);
    prix.innerHTML = res;
    total();
}
//loop Browse button array & call function plus_minus
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', plus_minus);
} 
// function count total cart
function total(event) {
    var prix= document.querySelectorAll('.price');
    console.log(prix);
    var total = document.querySelector('#total');
    console.log(total);
    var sum =0;
    for (let i = 0; i < prix.length; i++) {
        sum +=parseInt(prix[i].innerHTML);
    }
   console.log(sum);
total.innerHTML=sum;  
}
// function change  heart color to red with a click
 function Setcolor(event) {
    console.log(event.target);
      var bt = event.target;
      var heart = bt.parentElement.parentElement.parentElement.parentElement;
      var ht= heart.querySelector('.like');
    if (ht.style.color != "red") {
        ht.style.color= "red" 
    }else
    ht.style.color= "#424242"
 }
 
//loop Browse likes array & call function setColor
 var likes =document.querySelectorAll('.like');
 console.log(likes);
 for (var i = 0; i < likes.length; i++) {
     likes[i].addEventListener('click', Setcolor);
}
//function remove row from the cart
 function removeCartItem(event) {
    var buttonCliked = event.target;
        buttonCliked.parentElement.parentElement.parentElement.parentElement.remove()
        total();    
}
// loop call function removeCartItem
var removeCart = document.querySelectorAll('.delete');
console.log(removeCart)
var chk= document.querySelector('.check')
    for (var i = 0; i < removeCart.length; i++) {
     removeCart[i].addEventListener('click', removeCartItem) 
    }
