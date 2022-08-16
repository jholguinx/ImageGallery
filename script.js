function getInputValue(){

     var inputVal = document.getElementById("myInput").value;
     var inputVal2 = document.getElementById("myInput2").value;
     var anchor = document.createElement('a');
     anchor.classList.add("card");
      anchor.href = inputVal2;
      anchor.target = "_blank";
      var imagen = document.createElement('img');
      imagen.src = inputVal;
      imagen.classList.add("image");
      anchor.appendChild(imagen); 
      document.querySelector('.cards').appendChild(anchor);
}