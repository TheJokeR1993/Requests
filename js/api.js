   
   
const api = {
    get_all :(value)=> fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${value}&limit=10&exchange=NASDAQ`),
    get_symbol : (item)=> fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${item}`),
    status_response : respon => respon.ok?respon.json() :Promise.reject(respon)
}