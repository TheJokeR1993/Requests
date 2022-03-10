



const changePercent = str => {
    
    const number = Number.isNaN(+str) ? 0 : +str
    const class_str = number 
        ? number > 0 
            ? 'green'
            : 'red'
        : 'black'  
       
return {
    number : +number.toFixed(2) , 
    class_str
}

}

const error = item=> 
item.src = `img/error.png`


const storage =(arg)=>{

    localStorage.setItem('company_key',JSON.stringify(arg))
}

const storage_url=()=>{
   if(JSON.parse(localStorage.getItem('company_key'))) return

    input.value !== JSON.parse(localStorage.getItem('company_key')) && storage()

}

const Open_result = isOpen=>{
    if(isOpen){

        result.style.display = 'block'    
    } else {
            result.innerHTML = ''
            result.style.display = 'none'

    }
}


