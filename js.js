let roadsList = {
    m1:200,
    m2:300,
    m3:400,
    m4:330,
    m5:654,
    m6:103,
}

let roads = document.getElementById('roads')
// let roads= document.getElementById('list')
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

let kmOfRoads = Object.values(roadsList)

roads.onclick = () => {
    for(let i=0; i<kmOfRoads.length;i++){
        if(roads.value === i.toString()){
            console.log(kmOfRoads[i])
            km.value = kmOfRoads[i]
        }
    }
}

roads.addEventListener("change", function(e) {
    console.log(e.target.value);
  });




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

