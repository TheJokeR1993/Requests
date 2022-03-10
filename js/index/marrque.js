function marrque_fun(data){
    const this_price = changePercent( data.profile.price)
    
 
    for (let i = 0; i < marquee_box.length; i++) {
    marquee_box[i].innerHTML+=`
        <p>${data.symbol}<b class="${this_price.class_str}"> $${this_price.number}</b>
            </p>
    `
    }
    
}

const marrque ={
    marrque_fun,
}