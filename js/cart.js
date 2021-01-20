function totalPrice1(){
        var number1 = document.getElementById('n1').value;
        var result1 = parseFloat(number1) * 12999;
        document.getElementById('n2').value = result1 + "VND";
}
function totalPrice2(){
        var number2 = document.getElementById('n3').value;
        var result2 = parseFloat(number2) * 18999;
        document.getElementById('n4').value = result2 + "VND";
}
function totalPrice3(){
        var number3 = document.getElementById('n5').value;
        var result3 = parseFloat(number3) * 22999;
        document.getElementById('n6').value = result3 + "VND";
}
function totalAll(){
        var number1 = document.getElementById('n1').value;
        var result1 = parseFloat(number1) * 12999;
        var number2 = document.getElementById('n3').value;
        var result2 = parseFloat(number2) * 18999;
        var number3 = document.getElementById('n5').value;
        var result3 = parseFloat(number3) * 22999;
        var yourProducts = parseFloat(number1) + parseFloat(number2) + parseFloat(number3);
        document.getElementById('totalProduct').innerHTML=yourProducts + "sản phẩm";
        var result = parseFloat(result1) + parseFloat(result2) + parseFloat(result3);
        document.getElementById('totalPrice').innerHTML = result + "VND";
}

