function modalNotice(massage){
    // Get the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.getElementById('winMassage').innerHTML = massage;

    // Get the <span> element that closes the modal
    var modalContent = document.getElementById("modal-content");

    // When the user clicks on <span> (x), close the modal
    modalContent.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function notifier(){
    let toggler = Math.round(Math.random()*1);
    if(toggler == 0){
        notice.innerHTML = "Green Turn";
        document.body.style.background = 'rgba(67, 190, 77, 0.384)';
    }else{
        notice.innerHTML = "Orange Turn";
        document.body.style.background = "rgba(255, 108, 50, 0.450)";
    }

    return toggler;
}

//if a team won, stop the game
function disabled(){
    const allBtn = document.getElementsByClassName('btn');
    for(let i=0; i<9; i++){
        allBtn[i].setAttribute('disabled', 'true');
    }
}

//check match result 
function whoWin(lastBtn){
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    const table = document.getElementById('table');

    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value;
    b4 = document.getElementById('b4').value;
    b5 = document.getElementById('b5').value;
    b6 = document.getElementById('b6').value;
    b7 = document.getElementById('b7').value;
    b8 = document.getElementById('b8').value;
    b9 = document.getElementById('b9').value;

    //show strikeThrough
    if((b1=='X' && b2=='X' && b3=="X") || (b1=='O' && b2=='O' && b3=="O")){
        table.classList.add('LeftToRightTop');
    }else if((b4=='X' && b5=='X' && b6=="X") || (b4=='O' && b5=='O' && b6=="O")){
        table.classList.add('LeftToRightMiddle');
    }else if((b7=='X' && b8=='X' && b9=="X") || (b7=='O' && b8=='O' && b9=="O")){
        table.classList.add('LeftToRightBottom');
    }else if((b1=='X' && b4=='X' && b7=="X") || (b1=='O' && b4=='O' && b7=="O")){
        table.classList.add('TopToBottomLeft');
    }else if((b2=='X' && b5=='X' && b8=="X") || (b2=='O' && b5=='O' && b8=="O")){
        table.classList.add('TopToBottomMiddle');
    }else if((b3=='X' && b6=='X' && b9=="X") || (b3=='O' && b6=='O' && b9=="O")){
        table.classList.add('TopToBottomRight');
    }else if((b1=='X' && b5=='X' && b9=="X") || (b1=='O' && b5=='O' && b9=="O")){
        table.classList.add('XLeftToRight');
    }else if((b3=='X' && b5=='X' && b7=="X") || (b3=='O' && b5=='O' && b7=="O")){
        table.classList.add('XRightToLeft');
    }


    if((b1=='X' && b2=='X' && b3=="X") || (b4=='X' && b5=='X' && b6=="X") || (b7=='X' && b8=='X' && b9=="X") || (b1=='X' && b4=='X' && b7=="X") || (b2=='X' && b5=='X' && b8=="X") || (b3=='X' && b6=='X' && b9=="X") || (b1=='X' && b5=='X' && b9=="X") || (b3=='X' && b5=='X' && b7=="X")){
        disabled();
        document.getElementById('notice').innerHTML = "by Tanvir Pavel";
        setTimeout(() => {
            modalNotice("Orange Won")
        }, 1000);
    }else if((b1=='O' && b2=='O' && b3=="O") || (b4=='O' && b5=='O' && b6=="O") || (b7=='O' && b8=='O' && b9=="O") || (b1=='O' && b4=='O' && b7=="O") || (b2=='O' && b5=='O' && b8=="O") || (b3=='O' && b6=='O' && b9=="O") || (b1=='O' && b5=='O' && b9=="O") || (b3=='O' && b5=='O' && b7=="O")){
        disabled();
        document.getElementById('notice').innerHTML = "by Tanvir Pavel";
        setTimeout(()=>{
            modalNotice("Green Won")
        }, 1000);
    }else{
        if(lastBtn == 9){
            document.getElementById('notice').innerHTML = "by Tanvir Pavel";
            setTimeout(()=>{
                modalNotice("Match Tie")
            }, 1000);
        }
    }
}

const element = document.getElementsByClassName('btn');
const notice = document.getElementById('notice');
const winMassage = document.getElementById('whoWin');
let j=1;

let toggler = notifier()

//reset button functionality
document.getElementById('reset').addEventListener('click', function(){
    const allBtn = document.getElementsByClassName('btn');
    for(let i=0; i<9; i++){
        allBtn[i].removeAttribute('disabled');
        allBtn[i].value = "";
        allBtn[i].classList.remove('blackTeam');
        allBtn[i].classList.remove('grayTeam');
        j=1;
    }
    table.removeAttribute('class');
    toggler = notifier();
})

for(let i=0; i<9; i++){
    element[i].addEventListener('click',function(){
        if(j%2==toggler){
            element[i].value = 'X';
            element[i].classList.add('blackTeam');
            element[i].setAttribute('disabled', 'true');
            notice.innerHTML = "Green Turn";
            document.body.style.background = "rgba(67, 190, 77, 0.384)";
            whoWin(j);
        }else{
            element[i].value = 'O';
            element[i].classList.add('grayTeam');
            element[i].setAttribute('disabled', 'true');
            notice.innerHTML = "Orange Turn";
            document.body.style.background = "rgba(255, 108, 50, 0.527)";
            // console.log(j);
            whoWin(j);
        }
        j++;
    })
}
