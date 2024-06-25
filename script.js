let heart_btn=
document.getElementsByClassName("heart_btn");
let quantity=
document.getElementsByClassName("quantity");
let plus_btn=
document.getElementsByClassName("plus_btn");
let minus_btn=
document.getElementsByClassName("minus_btn");
let deletee=
document.getElementsByClassName("delete");
let item=
document.getElementsByClassName("item");
let finalprice=
document.getElementsByClassName("finalprice");
let prices=
document.getElementsByClassName("price");
for(let i=0;i<heart_btn.length;i++){
heart_btn[i].addEventListener("click",function(){
    if (heart_btn[i].style.color=="red");
heart_btn[i].style.color="black";}
    else{
        heart_btn[i].style.color="red"
  }
})
plus_btn[i].ddEventListener("click",function(){
    quantity[i].value=Number(quantity[i].value)+1;
    finalprice.value=Number(finalprice.value)+Number(prices[i].textContent);
})
minus_btn_btn[i].ddEventListener("click",function(){
    if (Number(quantity[i].value)>1){
        quantity[i].value=Number(quantity[i].value)-1;
        finalprice.value=Number(finalprice.value)-Number(price[i].textContent)
    }
})
delete[i].addEventListener("click",function(){
item[i].style.display="none";
totat.value=Number(totat.value)-(prices[i]*Number(quantity[i].value));
})
