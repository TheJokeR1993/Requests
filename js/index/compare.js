// const onBlur = (inp, cop) =>{
    
//     if(inp.value < 2) return inp.value = 2
//     if(inp.value > 99) return inp.value = 99
//     inp.value < arr_compare.length  && (inp.value = arr_compare.length  )
//     if(cop){
//         if(inp.value > arr_compare.length){
           
//             help_inp.value = inp.value
//             console.log(inp.parentElement.className);
//             inp.parentElement.style.display = 'none'
//         }
//     }
// }

function add_sumbol(){
    help_items.innerHTML= arr_compare.map(i=>`<p>${i}</p>`).join('')
 
}

const btn_add=(item)=>{
    
    if(help_inp.value > arr_compare.length){
    if( arr_compare.find(i=>item.value ===i)) return
   arr_compare.push(item.value)
   item.disabled = true
   help_item_btn.style.opacity ="1"
   localCompare.set(arr_compare)

   add_sumbol()
  
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
            <button onClick="delete_error(this)"  >
            Continue</button>
            </div>
        `
    }
    
    
   
}
function help_inp_change(e){
    console.log(e);
    const btn_plus =document.querySelector('.btn_plus')
    const btn_minus =document.querySelector('.btn_minus')
    const help_inp_error =document.querySelector('.help_inp_error')
    if(e.value === '+'){
       if(help_inp_error.value ==="9" ) return e.disabled=true
       help_inp.value++
       help_inp_error.value++
       if(btn_minus.disabled) return btn_minus.disabled=false
    }else{
    if(+help_inp_error.value ===arr_compare.length ) return e.disabled=true
    help_inp.value--
  help_inp_error.value--
  if(btn_plus.disabled) return btn_plus.disabled=false

  }
  
 
}

function delete_error(e) {
    e.parentElement.parentElement.innerHTML=""
}
function max_min(e){
    if(!+e.value) return e.value =arr_compare.length
    if(e.value.length >2) return e.value =9
    if(e.value < arr_compare.length) return e.value = arr_compare.length
    if(e.value > 9) return e.value = 9
    help_inp.value =e.value
}


help_inp.addEventListener('input',e=>{
    max_min(e.target);
    if(+e.target.value<arr_compare.length) return e.target.value = arr_compare.length
    e.target.min = arr_compare.length
})
clear_btn.addEventListener('click',e=>{
    help_items.innerHTML=''
    console.log(arr_compare);
   arr_compare.map(item=> {
       const sumbol =document.querySelector(`.symbol_${item}`)
      if(sumbol!== null){
          document.querySelector(`.symbol_${item}`).disabled = false
      }
   }  
   )
   arr_compare=[]
  localCompare.set(arr_compare)
  help_item_btn.style.opacity ="0.2"
  
})

help_items.addEventListener('dblclick',e=>{
    if(e.target.className==='help_items') return
    e.target.remove()
    arr_compare = arr_compare.filter(i=>e.target.innerHTML !== i && i)
   document.querySelector(`.symbol_${e.target.innerHTML}`).disabled = false
   localCompare.set(arr_compare)
   arr_compare.length 
     ? help_item_btn.style.opacity ="1"
     : help_item_btn.style.opacity ="0.2"
})

help_item_btn.addEventListener('click',e=>{
    if(!arr_compare.length) return 
    if(arr_compare.length=== 1){
        e.target.href= `company.html?symbol=${arr_compare[0]}`
    } else{
        e.target.href= `comparison.html?`+arr_compare.join('&')
    }
}
 )

const compare ={
    btn_add
}