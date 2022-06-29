const paint_result_click =(data)=>{

    if(!data.symbol ||!T.input.value.trim()) return

    const {companyName,changesPercentage,image,price } = data.profile
    const changePercents = changePercent(changesPercentage)
    let isSumbol = arr_compare.find(i=>i===data.symbol)
   
 
      T.result_btn.innerHTML+= `
    <div class="result_btn_items" >
    <img  class='image' src="${image}" onerror="error(this)">
    <div class="result_btn_company">
    <a class="company_a" href="company.html?symbol=${data.symbol}">
    ${companyName} 
    </a>
    <p >(${data.symbol})<b class="${changePercents.class_str}">(${changePercents.number}%)</b></p>
    </div>
    <button class="symbol_${data.symbol}" value="${data.symbol}" onclick="btn_add(this)" ${isSumbol ? 'disabled' :  ''}>ADD</button>
    </div>
    <hr>
    `
    Open_result() 
}

const click_search_result = {
    paint_result_click
}