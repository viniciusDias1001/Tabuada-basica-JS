function tabuada(){
    var number = document.getElementById('n1');
    var tab = document.getElementById('s1');
    var n = Number(number.value);
        
    if(n  == 0){
        window.alert("Digite um valor diferente de 0");
    }else{
        
        var c = 1
        tab.innerHTML =" "
        

        while (c <= 10) {
            var item = document.createElement('option');
            item.text = `${n} X ${c} = ${n*c}`
            
            tab.appendChild(item);
            c++
            
        }


    }
}