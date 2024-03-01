var testing = ['why not!!', 'did i never talk to you','Think about it again', 'did I never support you','Seriously', 'Am I not a good person'];
var i = 0;
var end = testing.length;
function myFunction(){
    var txtElement = document.querySelector(".txt");
    var newText = ''; 
    if (i<end){
        newText = testing[i];
        i+=1
    }
    else{
        newText = 'Now i Am your friend just refresh the page and click on yes'
    }
    
    
    txtElement.innerHTML = newText; 
}
