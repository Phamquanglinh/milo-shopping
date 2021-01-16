function swapProduct(){
    typeProduct=location.hash;
    console.log(typeProduct);
    if(typeProduct == "#hot"){
        document.getElementById("caption").innerHTML = "Sản phẩm hot";
        document.getElementById("hot").style.display="block";
    }else{
        if(typeProduct == "#sale"){
            document.getElementById("caption").innerHTML = "Sản phẩm đang giảm giá";
            document.getElementById("sale").style.display="block";
        }else{
            document.getElementById("caption").innerHTML = "Tất cả sản phẩm";
            document.getElementById("all").style.display="block";
        }
    }
}
swapProduct();