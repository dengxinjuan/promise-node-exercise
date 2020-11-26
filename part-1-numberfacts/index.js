
function appendBody(result){
    const p = document.createElement("p");
    p.textContent = result.data.text;
    document.getElementById("result").append(p);
};


//my favorite number is 17

function getNumber(num){
axios
.get(`http://numbersapi.com/${num}?json`)
.then(result=>{
    console.log(result);
    appendBody(result);
    return axios.get(`http://numbersapi.com/${num}/year?json`)
})
.then(result=>{
    console.log(result);
    appendBody(result);
    return axios.get(`http://numbersapi.com/${num}/date?json`)
})
.then(result=>{
    console.log(result);
    appendBody(result);
    return axios.get(`http://numbersapi.com/${num}/math?json`)
})
.then(result=>{
    console.log(result);
    appendBody(result);
})
.catch(err => {console.log(err);
document.getElementById("result").append(err);})

};


$("#enter").on("click",function(e){
    e.preventDefault();
    let num = $('#number').val();
    getNumber(num);
})


