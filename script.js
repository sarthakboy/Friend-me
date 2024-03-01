var testing = ['why not!!', 'did i never talk to you','Think about it again', 'did I never support you','Seriously', 'Am I not a good person'];
var i = 0;
var end = testing.length;
function myFunction(){
    var txtElement = document.querySelector(".txt");
    var buttoname = document.querySelector(".no");
    buttoname.innerHTML = "Next";
    var newText = ''; 
    if (i<end){
        newText = testing[i];
        i+=1
    }
    else{
        buttoname.innerHTML = "Refersh";
        buttoname.setAttribute("onclick", "location.reload();"); 
        newText = 'Now i Am your friend just refresh the page and click on yes'
    }
    
    
    txtElement.innerHTML = newText; 
}
