/* Task 1 */
var heading=document.getElementById('heading')
console.log(heading.innerText)


/* Task 2 using plain JavaScript */
//Task 2a
var textBtn= document.getElementById('textbtn2')
textBtn.addEventListener('click', function()
{
    var task2= document.getElementById('task2a')
    var paragraph =document.createElement('p')
    paragraph.innerText="Hello World"
    task2.appendChild(paragraph)
})

//task 2b
function changeBGcolor(event){
    var body = document.getElementByTagName('body')[0]
    if(event.target.innerText=="Green"){
        body.style.backgroundColor ='green'
    }
}
//task 2c
function redirectToGoogle(){
    window.location.assign('http://google.com')
}
/* Task 4 using jQuery */
