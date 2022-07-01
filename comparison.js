const container_example = document.querySelector('.container_example')
const sumbol_url=window.location.search.slice(1).split('&')

const first=() =>{

    Promise.all(
        sumbol_url.map(i=>
       fetch( `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${i}`)))
       .then(e=>e.map(item=> item.ok?item.json():Promise.reject(item)))
        .then(e=>e.map(i=>
            i.then(item=>{
                comparison(item)
            }
            )))
    
}

const comparison = (arg)=>{
   
    container_example.innerHTML+=`
    
    <div class="wrapper" ">
        <div class="wrapper_info" >
        <img src="${arg.profile.image}"  onerror="error(this)">
        <div  class="wrapper_name">
        <a href="company.html?symbol=${arg.symbol}">${arg.profile.companyName} (${arg.symbol})</a>
        <h3>Price: $${arg.profile.price}
        <br>
        To day: <em class="${changePercent(arg.profile.changesPercentage).class_str}">${changePercent(arg.profile.changesPercentage).number}%</em></h3>
        </div>
        
        </div>
    </div>
    `
  
} 

container_example.addEventListener('click',e=>{

e.target.className === 'ex_a' && (e.target.href='index.html?'+ JSON.parse(localStorage.getItem('company_key')) )
})
first()
