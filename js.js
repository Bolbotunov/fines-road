let km = document.getElementById('dist')
let weight = document.getElementById('weight')
let kmBtn = document.querySelector('.count')
let fines = document.getElementById('fines')
let resetBtn = document.querySelector('.reset')
let loading = document.querySelector('.loading')
let getFine = document.querySelector('.getFine')
function count(){
    loading.innerHTML='Completed'
    return fines.value = km.value * weight.value,
    getFine.innerHTML=`You will get fine: ${fines.value}`
}


kmBtn.onclick = () => {
    setTimeout(count, 1200)
    loading.innerHTML='loading...'
    
}



function reset(){
    fines.value = ''
    km.value = ''
    weight.value = ''
    loading.innerHTML = '';
    getFine.innerHTML = '';
}


    resetBtn.onclick = () => {
        reset()
    }