///All Functions

function numOfItem(id){
    var numOFItem = document.getElementById(id).value;
    var productQuantity = parseInt(numOFItem);
    return(productQuantity);
}

function amount(){
    var iPhonePrice = parseInt(document.getElementById("iPhone-price").innerText);
    var casePrice = parseInt(document.getElementById("case-price").innerText);
    var subTotal = iPhonePrice + casePrice;
    document.getElementById("sub-total").innerText = subTotal.toFixed(2);
    document.getElementById("tex").innerText = (subTotal * 0.15).toFixed(2);
    document.getElementById("total").innerText = (subTotal + subTotal * 0.15).toFixed(2);
}

function updateItemAndPrice ( id, productPrice, item){
    if(productPrice == "iPhone-price"){
        document.getElementById(id).value =item;
        document.getElementById(productPrice).innerText= 1219*item;
        amount();
    }else{
        document.getElementById(id).value =item;
        document.getElementById(productPrice).innerText= 59*item;
        amount();
    }
}


/////End functions


/// iPhone plus button system 

document.getElementById("plus").addEventListener("click", function(){
    var itemQuantity = numOfItem("phone-item");
    itemQuantity = itemQuantity + 1;

    updateItemAndPrice("phone-item", "iPhone-price", itemQuantity);
});

/// iPhone minus button system 
document.getElementById("minus").addEventListener("click", function(){
    var itemQuantity = numOfItem("phone-item");
    itemQuantity = itemQuantity - 1;

    if( itemQuantity>0){
        updateItemAndPrice("phone-item", "iPhone-price", itemQuantity);
    }else{
        updateItemAndPrice("phone-item", "iPhone-price", 0);
    }
    
});

/// Phone Case plus button system 
document.getElementById("case-plus").addEventListener("click", function(){
    var itemQuantity = numOfItem("case-item");
    itemQuantity = itemQuantity + 1;

    updateItemAndPrice("case-item", "case-price", itemQuantity);
});

/// Phone Case minus button system 
document.getElementById("case-minus").addEventListener("click", function(){
    var itemQuantity = numOfItem("case-item");
    itemQuantity = itemQuantity - 1;

    if(itemQuantity>0){
        updateItemAndPrice("case-item", "case-price", itemQuantity);
    }else{
        updateItemAndPrice("case-item", "case-price", 0);
    }
    
});


//iPhone remove button system 

document.getElementById("remove-phone").addEventListener("click", function(event){
    event.target.parentNode.parentNode.parentNode.removeChild(document.getElementById("phone-remove"));
    

});
//iPhone remove button system 

document.getElementById("remove-case").addEventListener("click", function(event){
    
    event.target.parentNode.parentNode.parentNode.removeChild(document.getElementById("case-remove"));
    
    
});

//// checkout button system

document.getElementById("check-out").addEventListener("click",function(){
    var cartSection = document.getElementById("cart-section");
    cartSection.style.display="none";
    
    var finishing = document.getElementById("finishing");
    finishing.style.display="block";
})