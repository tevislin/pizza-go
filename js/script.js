$("document").ready(function(){

    $("#add-address").click(function(){
        $("#new-addresses").toggle();
        $("#add-address").toggle();
    })

    function Pizza(type, size, crust, top){
        this.type= type;
        this.size= size;
        this.crust = crust;
        this.top = [];
    }
  

  $("#submitbutton").click(function(){

   $("#order2").show();

    var pizzaType =parseFloat(document.getElementById("type").value);
    var pizzaSize = parseFloat(document.querySelector("#size").value);
    var pizzaCrust = parseFloat(document.querySelector("#crust").value);
    var sausage = document.querySelector("#sausage").checked;
    var potato = document.querySelector("#potato").checked;
    var olives= document.querySelector("#olives").checked;
    var amount= parseFloat(document.querySelector("#amount").value);
    var inputStreet = document.querySelector("#street").value;
    var inputCity = document.querySelector("#city").value;
    var inputCountry = document.querySelector("#country").value;
    
        pizzaWord = document.getElementById("type").value;
     
       
        if(olives==true){
            olives = 2;
        }
        else if(olives==false){
            olives =0
        }
        if(potato==true){
            potato = 2
        }
        else if(potato==false){
            potato = 0
        }
         if(sausage==true){
            sausage=2
        }
        else if(sausage==false){
            sausage=0
        }
var AddAll=(pizzaType+pizzaSize+pizzaCrust+potato+olives+sausage);
var topingChanger= function(){
    if(sausage==true){
        return ("sausage")
    }
    else if(sausage==false){
        return ""
    }
    if(olives==true){
        return "olives"
    }
    else if(olives==false){
        return ""
    }
    if(potato==true){
        return "potato"
    }
    else if(potato==false){
        return ""
    }
   
    return sausage+olives+potato

}
var pizzaSizeChanger= function(){
    if(pizzaSize == 0){
        return "small"
    }
    else if(pizzaSize == 5){
        return "medium"
    }
    else if(pizzaSize == 10){
        return large
    }
}
var pizzaTypeChanger= function(){
    
    if(pizzaType == 10){
        return "Chicken"
    }
    else if(pizzaType == 18){
        return "vegan"
    }
    else if(pizzaType == 24){
        return "Tomato"
    }
}

var pizzaCrustChanger = function(){
    if(pizzaCrust == 2){
        return "thin"
    }
    if(pizzaCrust == 4){
        return "fat"
    }
}

var totalPrice= $ +AddAll *amount;

document.querySelector("#price").innerHTML="Total price is $"+AddAll * amount;

document.querySelector("#moredetails").innerHTML="Pizza type is " + pizzaTypeChanger()+" size "+pizzaSizeChanger();
  
document.querySelector("#crustinfo").innerHTML="Type of crust is " + pizzaCrustChanger();

document.querySelector("#yourorder").innerHTML="Your order" ;

document.querySelector("#topinfo").innerHTML="The toppings are checked on the left" ;

document.querySelector("#addresses").innerHTML= "Shipping adress:"+inputStreet + ", " + inputCity + ", "+ inputCountry ;

document.querySelector("#amountorder").innerHTML ="You ordered "+ amount +" pizzas";

   $("#confirm").click(function(){
    var amount= parseFloat(document.querySelector("#amount").value);
    var inputStreet = document.querySelector("#street").value= "";
    var inputCity = document.querySelector("#city").value="";
    var inputCountry = document.querySelector("#country").value="";
    var sausage = document.querySelector("#sausage").checked;
    var potato = document.querySelector("#potato").checked;
    var olives= document.querySelector("#olives").checked;
    $("#order2").hide();

    alert("Your order is confirmed!!!");
    
   })
})
})

