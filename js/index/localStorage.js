const L = {
    ARR_COMPARE:'ARR_COMPARE',
    NUM:'NUM'

}

const localCompare = {
        get :()=> JSON.parse(localStorage.getItem(L.ARR_COMPARE)),
        set : (arr_compare) =>localStorage.setItem(L.ARR_COMPARE, JSON.stringify(arr_compare)),
        getN :()=> JSON.parse(localStorage.getItem(L.NUM)),
        setN : (num) =>localStorage.setItem(L.NUM, JSON.stringify(num))
} ;