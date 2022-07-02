const time_set_timout = (input=  T.input)=>{
    let interval_s = 401
    
    const interval =  setInterval(time,100);
     const input_v = T.input.value
    
    function time (){
        interval_s -=100
        if(input.value !==input_v){
            clearInterval(interval)
        }
        if(interval_s <=0){
            
            storage(input.value)
            get_arr_symbol()
            .then(e=> e
            )
            .then( paint_current_result) 
            clearInterval(interval)
            
        }
        
        
    }   
}
function push_state_url (){
    input.value 
    ?  window.history.pushState(null, null, `?${input.value}`)
    :  window.history.pushState(null, null, `?`)
}

const paint_current_result = data => {
    if(!input.value.trim()) return

  if(data.length){
result.innerHTML= data
    .map(item =>`
    
    <a class="company_a" href="company.html?symbol=${item.symbol}">
    ${item.name} (${item.symbol})
    </a>`)
    .join('<hr>')

  }else{
    result.innerHTML= `
     Not found
    `
  } 
  Open_result(true)  
   
}

function input_change(){
    if(!input.value.trim()){
        Open_result()
         error_rezult(true)
         return false
    } 
    if(!input.value.match(reg)){
        error_rezult(false)
        result_btn.innerHTML=''
        return false
    } 
  return  input.value === input.value.match(reg)[0]

    
    
}

function error_rezult(isBool){
    if(!isBool){
    input.style.border='2px dashed red'
     result.innerHTML = '<img class="spinner" src="img/error.gif" alt="">'
    } else {
        input.style.border='2px solid black'

    }
}



const change_input ={
    time_set_timout,
    push_state_url,
    paint_current_result,
    input_change,
    error_rezult
}
    