window.onload = function () {
  
  const a = document.querySelectorAll('.item-img');
  const itemContent = document.querySelectorAll('.item-content');

  a.forEach(function(item,i,a){
    let index = i;
    item.addEventListener("mouseover", function(e) {
      
      if (item.classList.contains('mouseout')){
          item.classList.remove('mouseout');
      }
      item.classList.add('mouseover');
    });

    item.addEventListener("mouseout", function(e) {

      item.classList.add('mouseout');
      item.childNodes[3].addEventListener("transitionend", function(e) {
      
        if (item.classList.contains('mouseout')&&item.classList.contains('mouseover')){
          item.classList.remove('mouseover');
        }
      
      })  
     
    });

    item.addEventListener("click", function(e) {
      
        a.forEach(function(item,i,a){
            if(i!=index) {
              item.classList.remove('active');
            }
         });

         item.classList.toggle('active');

         itemContent.forEach(function(item,i,a){
            if(i!=index) {
              item.classList.remove('active');
            }
         });
        
         item.nextSibling.nextSibling.classList.toggle('active');     

    })

  });
  
}