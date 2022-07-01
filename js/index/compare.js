
function add_sumbol(){
    
    if(!arr_compare.length){
        help_div.style.display="none"
    }else{
        help_div.style.display="flex"
        help_items_all.innerHTML = `<p  onclick="look_all_items()">All (${arr_compare.length})</p>`
        help_items.innerHTML= arr_compare.map(i=>`<p ondblclick="delete_item(this)">${i}</p>`).join('')
    }
}

const btn_add=(item)=>{
    max_min()
    if(help_inp.value > arr_compare.length){
        if( arr_compare.find(i=>item.value ===i)) return
        
        container.classList.add('container_active')
   arr_compare.push(item.value)
   item.disabled = true
   help_item_btn.style.opacity ="1"
   localCompare.set(arr_compare)
   add_sumbol()
    items_all.innerHTML !=='' && look_all_items('add')
 
   
   h_inp(localCompare.get())
 }
     else{
        error_div.innerHTML =`
        <div class="help_inp_erorr_blur"></div>
            <div class="help_inp_erorr" >
            <button onClick="delete_error(this)" class="delete_error">X</button>
            <h2>Increase value </h2>

            <div>
            <button class="btn_minus" onClick="help_inp_change(this)" value='-' >-</button>
                <input class="help_inp_error" value="${help_inp.value}" onInput="max_min(this)">
                <button class="btn_plus" onClick="help_inp_change(this)" value='+' >+</button>
            </div>
            <button onClick="delete_error(this)">Continue</button>
            </div>
        `
    }
    
    
   
}

function h_inp(arr){
    arr.length<=3 
    ? help_items.style.justifyContent='space-around'
    : help_items.style.justifyContent='space-between'
}
function help_inp_change(e){
    
    const btn_plus =document.querySelector('.btn_plus')
    const btn_minus =document.querySelector('.btn_minus')
    const help_inp_error =document.querySelector('.help_inp_error')
    if(e.value === '+'){
       if(help_inp_error.value ==="99" ) return e.disabled=true
       console.log( help_inp.value);
       help_inp.value++
       help_inp_error.value++
      localCompare.setN(help_inp.value)
       if(btn_minus.disabled) return btn_minus.disabled=false
    }else{
    if(+help_inp_error.value ===arr_compare.length ) return e.disabled=true
    help_inp.value--
  help_inp_error.value--
  localCompare.setN(help_inp.value)
  if(btn_plus.disabled) return btn_plus.disabled=false

  }
  
 
}

function delete_error(e) {
    e.parentElement.parentElement.innerHTML=""
}
function max_min(e){
    let num= localCompare.getN()
    console.log(!num);
    if(!num){
        return help_inp.value =  4
    } else{
       num>=99 
       ? help_inp.value=99
       :help_inp.value = num
    }
   console.log(help_inp.value);
    if(e){
       console.log(11);
       if(e.value<=99) {
        localCompare.setN(e.value)
        help_inp.value = e.value
       }else{
           help_inp.value = 99
           e.value= 99
        localCompare.setN(e.value)
       }
    }
    help_inp.min =arr_compare.length
}


help_inp.addEventListener('input',e=>{
    
    
    if(+e.target.value<arr_compare.length){
         return setTimeout(() => {
        +e.target.value<arr_compare.length && (e.target.value = arr_compare.length) 
        localCompare.setN(e.target.value)
       
   }, 1000);
    }
    if(+e.target.value >= 99) return e.target.value = 99
    
    localCompare.setN(e.target.value)
})

clear_btn.addEventListener('click',e=>{
    help_items.innerHTML=''
    
   arr_compare.map(item=> {
       const sumbol =document.querySelector(`.symbol_${item}`)
      if(sumbol!== null){
          document.querySelector(`.symbol_${item}`).disabled = false
      }
   }  
   )
   arr_compare=[]
  localCompare.set(arr_compare)
  help_div.style.display="none"
  container.classList.remove('container_active')
  items_all.innerHTML !=='' && look_all_items()
})

function delete_item(e){
    
    
    e.remove()
    arr_compare = arr_compare.filter(i=>e.innerHTML !== i && i)
   document.querySelector(`.symbol_${e.innerHTML}`).disabled = false
   localCompare.set(arr_compare)
   h_inp( localCompare.get())
   add_sumbol()
   arr_compare.length 
     ? help_item_btn.style.opacity ="1"
     : help_item_btn.style.opacity ="0.2"
     !arr_compare.length && container.classList.remove('container_active')
}

help_item_btn.addEventListener('click',e=>{
   
    if(arr_compare.length=== 1){
        e.target.href= `company.html?symbol=${arr_compare[0]}`
    } else{
        e.target.href= `comparison.html?`+arr_compare.join('&')
     
    }
}
 )

 function look_all_items(arg){
    if(!items_all.innerHTML || arg==='add'){
        items_all.style.display='block'
        items_all.innerHTML =`<p>Click to delete</p>
        <div class="items">
        ${ arr_compare.map(i=>`<button onclick="delete_item(this)" >${i}</button>`).join('')}
        </div>
        
        ` 
    } else{
       
         items_all.style.display='none'
         items_all.innerHTML = ''

    }
    
 }

const compare ={
    btn_add,
    h_inp
}
