




fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/historical-price-full/${symbol}?serietype=line`)
.then(respon=>respon.ok?respon.json():Promise.reject(respon))
.then(item=>{
    let xValues = item.historical.map(item=>item.date)
    let yValues =  item.historical.map(item=>item.close)
  
    setTimeout(created_chart(xValues,yValues),3000)
})





const created_chart = (date,close) => {

    
  new Chart("myChart", {
  type: "line",
  
  data: {
      labels: date,
    //   tension:0,
      datasets: [{
        fill: true,
        label: 'Price', 
        borderWidth : '1px',
        backgroundColor: "rgba(232, 46, 183, 1)",
        borderColor: "rgba(232, 46, 183, 0)",
        data: close,
       }]
    }
    });
console.log(1);
}



// class Anim {
//     constructor(data,count,a){
//         this.data = data,
//         this.count = count
//         this.isAdmin = false
//         this.f = arguments
//         this.a = a
//     }
//     log(){
//             console.log(this);
//     }
//     change(arg){
//         this.data = arg
//     }
//     item(arg){
        
//     }
// }

// const df = new Anim('data', 23,'sdfs',false)
// df.log()
// df.change('asdasfasdfasfa')
// df.log()











class FullName {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    change_age(age){
        this.age = age
    }
}
const Alex = new FullName('Alex',77)

class Fish extends FullName{
constructor(name,age,ocean){
    super()
    this.name = name
    this.age = age
    this.ocean = ocean
}
}

const Nemo = new Fish('Nemo',2,'Art')
Nemo.change_age(33)
// console.log(
//    Nemo
// );


class Elefan extends FullName{
    constructor(name,age1,ocean){
        super(name,2)
        this.ocean  = ocean
    }
    full_info(ocean){
        this.ocean=ocean 
    }
    new_key(arg,data){
        this[arg]= data
    }
    }

const Elef  = new Elefan('elefan',23,'big')
// console.log(Elef);
Elef.full_info('very big')
Elef.new_key('size','veryasda')
// console.log(Elef);
// super()
// extends















