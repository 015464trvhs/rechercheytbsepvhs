var input = document.getElementById("recherche").value;


const button = document.querySelector('button');
button.onclick = function() {

  
  var input = document.getElementById("recherche").value;
  window.open('https://www.youtube.com/@epoquevhs/search?query='+input, '_blank');
  
}

function reset(){
  recherche.value='';
}
