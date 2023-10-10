var temperatura = document.getElementById('temperatura');
var btn =  document.getElementById('btn');
var aviso = document.getElementById('aviso');
aviso.innerHTML = '';


btn.addEventListener('click', function(){
    
    var temp = Number(temperatura.value);

    if(temp === 0){

        aviso.innerHTML = 'Digite algum Número!';

    }else{

        switch(true){

            case temp < 10:

                aviso.innerHTML = 'Está frio!';

            break;
    
            case temp >= 10 && temp < 20 :

                aviso.innerHTML = 'Ameno';

            break;
            
            case temp >= 20 && temp < 30:

                aviso.innerHTML = 'Quente';

            break;
    
            default:

                aviso.innerHTML = 'Muito quente!';

            break;

        }
        
    }

});