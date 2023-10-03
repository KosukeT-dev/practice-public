const button = document.getElementById("button");
 
button.addEventListener("click", function(e) {
 
    e.preventDefault();
 
    const textForm1 = document.getElementById("textForm1").value;
    const textForm2 = document.getElementById("textForm2").value;
 
    const result = parseInt(textForm1, 10) / parseInt(textForm2, 10) * 100;
 
    const resultForm = document.getElementById("resultForm");
    resultForm.value = result;
});