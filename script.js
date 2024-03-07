
function textInInput() {
 let text1 = document.getElementById('input1').value;
   let text2 = document.getElementById('input2').value;



document.getElementById('input1').value = text2;
    document.getElementById('input2').value = text1;
}



function color() {
    
    let color = document.getElementById('input3').value;
    document.getElementById('yellow').style.backgroundColor = color;
}
