function paint_first (){
 
    if(window.location.search){
        input.value = window.location.search.slice(1)
        result_btn.innerHTML = '<img class="spinner" src="img/star.gif" alt="">'
        change_result()
      
    }
    const L = localCompare.get()
    
    if(!L.length){
        help_div.style.display="none"
        container.classList.remove('container_active')
    }else{
        container.classList.add('container_active')
        arr_compare = L
        add_sumbol()
        help_div.style.display="flex"
        L.length>=2 && (help_inp.value = L.length)
        max_min();
        h_inp(arr_compare)
        arr_compare.length 
     ? help_item_btn.style.opacity ="1"
     : help_item_btn.style.opacity ="0.2"
    }
    
    
   
}


!function(){
   
    Open_result()
    paint_first()
    storage_url()
    input_change()
    
}()
