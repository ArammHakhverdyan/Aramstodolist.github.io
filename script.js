const button =  document.getElementById("button")
const input = document.getElementById("input")
const doList = document.getElementById("doList")

function fn(){
    if(input.value.length == 0){
        alert("Write something please")
    }else{
    let line = document.createElement("DIV")
    line.setAttribute("id","lineId")
    line.setAttribute("class", "lineClass")
    line.innerHTML = input.value
    input.value = ""
    doList.appendChild(line)
    
    line.onclick = function (){
         line.classList.toggle("select")
     }
     line.ondblclick = function (){
        line.remove()
     }
}
}
input.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        return fn()
    }
})
