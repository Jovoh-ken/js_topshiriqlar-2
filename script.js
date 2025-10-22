
// YOSH_QISMI

let age = +prompt('Yoshingizni kiriting')

if (age <= 18) {
    alert('Siz halli oqishingiz keree jigar!')
} else if (age >= 50) {
    alert('Siz pensiyadasiz dam oling :)')
}
else {
    alert('Siz ishlashingiz kerak tezroq!')
}


// SOAT_QISMI

let vaqt = +prompt('Soat nechi bo‘ldi?');

if (vaqt >= 0 && vaqt <= 11)  {
    alert(`Hozir ertalabgi soat ${vaqt}`);
} 
else if (vaqt >= 12 && vaqt <= 17) {
    let yangiVaqt = vaqt - 12;
    alert(`Hozir abedgi soat ${yangiVaqt}`);
}
else if (vaqt >= 18 && vaqt <= 23) {
    let yangiSoat = vaqt - 12;
    alert(`Hozir kechki soat ${yangiVaqt}`);
}
 

// ORTA_SON_QISMI

let a = +prompt('Son kirgizing!')
let b = +prompt('Ikkinchi soni kirgizing!')
let c = +prompt('Uchinchi soni kirgizing!')

if ((a>b  && a<c )|| (a>c && a<b)){
    alert(`O'rtancha son ${a}`)
}else if ((b>a  && b<c) || (b>c && b<a)){
    alert(`O'rtancha son ${b}`)
} else{
    alert(`O'rtancha son ${c}`)
}