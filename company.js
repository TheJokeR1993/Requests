const company_info = document.querySelector('.company_info')
const symbol = window.location.search.slice(8)

fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`)
.then(respon=>respon.ok?respon.json():Promise.reject(respon))
.then(item=>{
    
    const error_img = error(item.profile.image)
    console.log(symbol);
     const changePercents = changePercent(item.profile.changesPercentage)
  return  company_info.innerHTML = `
       <div class="company_name">
        <a href="index.html?${  JSON.parse(localStorage.getItem('company_key'))}">X</a>
        <img  src="${item.profile.image}" onerror="error(this)">
        <h2>${item.profile.companyName} (${symbol})</h2>
       </div>
       <h3>Stock price: ${item.profile.price} <b class="${changePercents.class_str}">(${changePercents.number}%)</b> </h3>
       <p>${item.profile.description}</p>
      
    `
 
})

.catch(item=>{
   
})

