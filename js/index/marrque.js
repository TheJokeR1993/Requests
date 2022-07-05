

function marrque_fun(data){
    
    let text = ''
   
    if(typeof data === 'string'){
         if(data==='first'&& !window.location.search  ){
          
         text = 'Enter in the search the company that you are interested in in the stock market'
    } 
    data==='NoFound' &&  (text = 'Not Found') 
    text !== '' && marquee_box.forEach(div => div.innerHTML = `<h3>${text}</h3>`)
    
    }else{
        const marquee_first = document.querySelectorAll('.marquee_first')
        let this_price = changePercent( data.profile.price)
       
        for (let i = 0; i < marquee_box.length; i++) {
             marquee_box[i].innerHTML+=`
                        <p >${data.symbol}<b class="${this_price.class_str}"> $${this_price.number}</b>
                             </p>
                     `
                     
           
           
           
            
        
        }
    }


    
   
  
}

// function marrque_text(arg){
//     let text= ''
//     console.log(marquee_box[1].children.length);
//     if( arg=== 'found'){
       
//         text = 'Not Found'
//     }else{
//         text = 'Enter in the search the company that you are interested in in the stock market'

//     }
    
// }



const marrque ={
    marrque_fun,
}