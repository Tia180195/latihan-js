var no1 = document.uts.item1.value;
var no2 = document.uts.item2.value;
var no3 = document.uts.item3.value;

var angka = 0;
var huruf = "";

function kompak() {

    if (no1==="item1d") {
        angka+=3;
    }
        
    if (no2==="item2b") {
        angka+=3;
    }
    
    if (no3==="item3a") {
         angka+=3;
    }


    if (angka>=7 && angka<=9) {
        huruf="A";
    }
    
    if (angka>=4 && angka<=6) {
        huruf="B";
    }
    
    if (angka>=0 && angka<=3) {
    }
    


  document.uts.nilai.value = huruf +" " + "("+angka+") ";
}







    
    
