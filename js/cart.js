//Filter Order Using Regex
orders=document.getElementsByClassName("order");
function showOrders(classIndex){
        orders[classIndex].classList.remove("d-none");
}
function hideOrders(classIndex){
        orders[classIndex].classList.add("d-none");
}
function findOrders(){
        pattern=document.getElementById("find").value;
        var re = new RegExp(pattern);
        for(i=0;i<orders.length;i++){
                if(re.test(orders[i].innerText)){
                        showOrders(i);
                }else {
                        hideOrders(i);
                }
        }
}
// Checkout
function addCount(count,method){
   //add or minus value
   price=document.getElementsByClassName("new-price")[count-1].innerText;
   position='slot-'+count; //get id
   slot =Number(document.getElementById(position).value); //DOM GET SLOT
   if(method=='add'){
           slot+=1;
   }else{
       if(slot >0){
           slot-=1;
       }
   }
   document.getElementById(position).value=(slot);// DOM POST SLOT
   total='total-'+count;
   document.getElementById(total).innerText=Math.round(price*slot*1000)/1000;
   //Checkout
    function getPrice(index) {
        return document.getElementById(index).innerText; //Function get price form index id
    }
    function getQuantity(index){
        return document.getElementById(index).value;
    }
    totalPrice=0;
    totalQuantity=0;
    for (i=0;i<orders.length;i++){
        checkoutIndex='total-'+(i+1); // Make ID checkout
        quantityIndex='slot-'+(i+1); // Make ID quantity
        totalQuantity+=Number(getQuantity(quantityIndex));
        totalPrice+=Number(getPrice(checkoutIndex));
    }
    document.getElementById("total-price").innerText=Math.round(totalPrice * 1000) /1000;
    document.getElementById("total-quantity").innerText=totalQuantity;
}
