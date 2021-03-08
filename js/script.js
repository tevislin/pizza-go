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

   

    var pizzaType =parseFloat(document.getElementById("type").value);
    var pizzaSize = parseFloat(document.querySelector("#size").value);
    var pizzaCrust = parseFloat(document.querySelector("#crust").value);
    var sausage = document.querySelector("#sausage").checked;
    var potato = document.querySelector("#potato").checked;
    var olives= document.querySelector("#olives").checked;
    var amount= parseFloat(document.querySelector("#amount").value);
    
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

var totalPrice= $ +AddAll *amount;

document.querySelector("#price").innerHTML="Total price is $"+AddAll * amount;

document.querySelector("#moredetails").innerHTML="Type of pizza is " + pizzaTypeChanger();
  
  
})

})