console.log("#pasoFino")

// ToolTips

console.log('PasoFino -> ToolTips')

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// modal

console.log('button -> modal')

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal("show");
    });
        $("#myModal").on('hidden.bs.modal', function () {
            alert('"Ya que lejos de mí vas a estar; guarda, niña, un gentil pensamiento; al que un día te quiso contar; un cuento." (Ruben Dario)');
    });
});