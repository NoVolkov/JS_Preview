document.getElementById("formTask_0").addEventListener("submit",function(event){
    event.preventDefault();
    document.getElementsByName("User").forEach(function(input){
        document.getElementById("usrName").textContent="Здравствуй, "+input.value;
    });
    
});