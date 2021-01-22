function swapProduct(typeProduct){
    if(typeProduct.charAt(0)=="#"){
        typeProduct=typeProduct.substr(1);
    }
    if(typeProduct == "hot"){
        document.getElementById("hot").style.display="block";
        document.getElementById("sale").style.display="none";
        document.getElementById("all").style.display="none";
    }else{
        if(typeProduct == "sale"){
            document.getElementById("sale").style.display="block";
            document.getElementById("hot").style.display="none";
            document.getElementById("all").style.display="none";
        }else{
            document.getElementById("all").style.display="block";
            document.getElementById("sale").style.display="none";
            document.getElementById("hot").style.display="none";
        }
    }
}
swapProduct(location.hash);