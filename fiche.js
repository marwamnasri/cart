
let number = document.getElementById("id")





function incrementValue()

{
    var value = parseInt(document.getElementById('number').value, 10);
    var price= parseInt(document.getElementById('price').value, 10);
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    price=120*value
    totaux= totaux+120
    document.getElementById('number').value = value;
    document.getElementById('price').value= price;
    document.getElementById('totaux').value= totaux;
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    var price= parseInt(document.getElementById('price').value, 10);
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    price=120*value
    totaux= totaux-120
    document.getElementById('number').value = value;
    document.getElementById('price').value= price;
    document.getElementById('totaux').value= totaux;

}
function incrementValuee()

{
    var value1 = parseInt(document.getElementById('number1').value, 10);
    var price1= parseInt(document.getElementById('price1').value, 10);
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    value1 = isNaN(value1) ? 0 : value1;
    value1++;
    price1=200*value1
    totaux= totaux+200
    document.getElementById('number1').value = value1;
    document.getElementById('price1').value= price1;
    document.getElementById('totaux').value= totaux;
}
function decrementValuee()
{
    var value1 = parseInt(document.getElementById('number1').value, 10);
    var price1= parseInt(document.getElementById('price1').value, 10);
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    value = isNaN(value1) ? 0 : value1;
    value1--;
    price1=200*value1
    totaux=totaux-200
    document.getElementById('number1').value = value1;
    document.getElementById('price1').value= price1;
    document.getElementById('totaux').value= totaux;

}
function incrementValuee3()

{
    var value3 = parseInt(document.getElementById('number3').value, 10);
    var price3= parseInt(document.getElementById('price3').value, 10);
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    value3 = isNaN(value3) ? 0 : value3;
    value3++;
    price3=50*value3
    totaux= totaux+50
    document.getElementById('number3').value = value3;
    document.getElementById('price3').value= price3;
    document.getElementById('totaux').value= totaux;
}
function decrementValuee3()
{
    var value3 = parseInt(document.getElementById('number3').value, 10);
    var price3= parseInt(document.getElementById('price3').value, 10);
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    value = isNaN(value3) ? 0 : value3;
    value3--;
    price3=50*value3
    totaux= totaux-50
    document.getElementById('number3').value = value3;
    document.getElementById('price3').value= price3;
    document.getElementById('totaux').value= totaux;

}
function supp(){
    document.getElementById('row1')
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    var price= parseInt(document.getElementById('price').value, 10);
    totaux=totaux-price
    document.getElementById('totaux').value= totaux;

    row1.remove()

}
function supp2(){
    document.getElementById('row2')
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    var price2= parseInt(document.getElementById('price2').value, 10);
    totaux=totaux-price2
    document.getElementById('totaux').value= totaux;

    row2.remove()

}
function supp3(){
    document.getElementById('row3')
    var totaux= parseInt(document.getElementById('totaux').value, 10);
    var price3= parseInt(document.getElementById('price3').value, 10);
    totaux=totaux-price3
    document.getElementById('totaux').value= totaux;

    row3.remove()

}




