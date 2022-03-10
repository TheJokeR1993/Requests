function paint_first (){
    
    if(window.location.search){
        input.value = window.location.search.slice(1)
        result_btn.innerHTML = '<img class="spinner" src="img/star.gif" alt="">'
        change_result()
        
    }
    const L = localCompare.get()
    if(L){
        
        arr_compare = L
        add_sumbol()
        L.length>=2 && (help_inp.value = L.length)
        
    }
    
   
}


!function(){
   
    Open_result()
    paint_first()
    storage_url()
    input_change()
    
}()
