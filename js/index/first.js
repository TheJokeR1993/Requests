function paint_first (){
    // console.log(arr_compare);
    // arr_compare.length 
    // ? help_item_btn.style.opacity ="1"
    // : help_item_btn.style.opacity ="0.2"
    if(window.location.search){
        input.value = window.location.search.slice(1)
        result_btn.innerHTML = '<img class="spinner" src="img/star.gif" alt="">'
        change_result()
        console.log(11);
    }
    const L = localCompare.get()
    if(L){
        console.log(12);
        arr_compare = L
        add_sumbol()
        L.length>=2 && (help_inp.value = L.length)
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
