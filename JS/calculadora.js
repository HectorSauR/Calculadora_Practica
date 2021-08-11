
var bill = 0.0;
var numPeople = 0.0;
var amount = document.getElementById('amount');
var total = document.getElementById('total');
var reset = document.getElementById('reset');

var button = document.getElementsByClassName('button');

var porcent;

function resetComprobar(e){
    if((bill > 0) && 
    (numPeople > 0) && 
    (porcent > 0)) {
        document.getElementById('reset').style.background =  "hsl(172, 67%, 45%)";
        document.getElementById('aviso-error').style.display = 'none';
        amount.value = (bill*porcent/numPeople).toFixed(2);
        total.value = (bill/numPeople) + parseFloat(amount.value);
        amount.value = "$ "+amount.value;
        total.value = "$ "+total.value;
        reset.enabled;
    }else{
        document.getElementById('reset').style.background =  "hsla(172, 76%, 63%, 0.118)";
        if(numPeople == 0){
            document.getElementById('aviso-error').style.display = "inline-block";
        }else{
            document.getElementById('aviso-error').style.display = 'none';
        }
    }
}

document.getElementById('bill').addEventListener('focusout',function(e){
    bill = parseFloat(this.value);
    resetComprobar();
})

document.getElementById('numPeople').addEventListener('focusout',function(e){
    numPeople = parseFloat(this.value);
    resetComprobar();
})

document.getElementById('custom').addEventListener('focusout',function(e){
    porcent = parseFloat(this.value)/100;
    resetComprobar();
})

function asignar(e) {
    porcent = parseFloat(this.value)/100;
    resetComprobar();
}

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('focus',asignar);
}

reset.addEventListener('click',function(e){
    amount.value = "";
    total.value = "";
    document.getElementById('bill').value = "";
    document.getElementById('numPeople').value = "";
    bill = 0;
    numPeople = 0;
    porcent = 0;
    if((bill != null && bill != 0) && 
    (numPeople != null && numPeople != 0) && 
    (porcent != null && porcent != 0)) {
        document.getElementById('reset').style.background =  "hsl(172, 67%, 45%)";
    }else{
        document.getElementById('reset').style.background =  "hsla(172, 76%, 63%, 0.118)";
        reset.disabled
    }
})






