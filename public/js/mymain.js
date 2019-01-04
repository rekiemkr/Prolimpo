if('serviceWorker' in navigator){
    alert('puedes usar los service no se que');
    navigator.serviceWorker.register('./serviceWorker.js')
                           .then(resul => console.log('service worker cargado', resul))
                           .catch(err => console.log('no se pudieron cargar los servicios', err))
}else{
    alert('no puedes usar los service no se que');
}


/* ----------------------------Scroll Suavizado---------------------------- */
$(document).ready(function(){
    $("#lista a").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});