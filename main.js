
const reg = /([A-Z]+)?\w+/
const marquee = document.querySelector('.marquee')
let current_search_value = window.location.search.slice(1)



change_input.time_set_timout()

const get_arr_symbol = () => {


    return api.get_all(T.input.value)
        .then(api.status_response)

}




const change_result = () => {

    get_arr_symbol()

        .then((arg) => {
            Promise.all(arg.map(item => api.get_symbol(item.symbol)))
                .then(e => e.map(api.status_response))
                .then(e => {
                    result_btn.innerHTML = ''
                    return e
                })
                .then(e => {
                    
                    if (e.length) {
                        marquee.classList.add('marquee_active')
                        e.map(item => item.then(paint_result_btn))
                    } else {
                        marquee.classList.remove('marquee_active')
                        result_btn.innerHTML = 'Not found'
                        marrque.marrque_fun('NoFound')
                    }

                })

        })

}


input.addEventListener('input', e => {
    change_input.push_state_url()
    
    
    if (input_change()) {
        result.innerHTML = ' <img class="spinner" src="img/star.gif" alt="">'
        // Open_result()
        time_set_timout()
        error_rezult(true)
    }
    !e.target.value
      ?btn.disabled = true
      : btn.disabled = false



})

const paint_result_btn = data => {
    
    if (!data.symbol || !T.input.value.trim()) return

   
    click_search_result.paint_result_click(data)
    marrque.marrque_fun(data)


}



change_input.paint_current_result()




btn.addEventListener('click', e => {
    
    if (current_search_value === input.value) return
    current_search_value = input.value
    result_btn.innerHTML = ' <img class="spinner" src="img/star.gif" alt="">'
    change_result()
    Open_result()
    
    marquee_box.forEach(div => div.innerHTML = '')
})


