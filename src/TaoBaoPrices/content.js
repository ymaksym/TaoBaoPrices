document.addEventListener("DOMContentLoaded", function(event) { 
    alert('Working!');
  });

function main() {
    myLog('TaoBao UAH loaded');
    var priceDivs = document.getElementsByClassName('item-price');
    
    myLog($`Found ${priceDivs.length} prices`);
    for (var i = 0; i < priceDivs.length; ++i) {
        
    }    
}

  function myLog(data) {
    console.debug($`TaoBao: ${data}`);
}
