const error_div = document.querySelector('.error_div')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const result = document.querySelector('.result')
const result_btn = document.querySelector('.result_btn')
const marquee_box = document.querySelectorAll('.marquee_box')
const help_items = document.querySelector('.help_items')
const help_item_btn = document.querySelector('.help_item_btn')
const help_inp = document.querySelector('.help_inp')

 const clear_btn = document.querySelector('.clear_btn')
//  console.log(help_inp_error);
const create_T = (...class_) => {
    const obj = {}
    class_.forEach(name => {
        obj[name] = document.querySelector('.' + name)
    })
    return obj
}

const T = create_T('help_inp', 'help_item_btn', 'help_items', 'marquee_box', 'result_btn', 'result', 'input', 'btn', 'error_div','clear_btn','help_inp_error')

