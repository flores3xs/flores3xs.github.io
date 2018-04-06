console.log('#pasoFino')

$(document).ready(function(){
	
}) 

// DropDown
console.log('DropDown not JS')

// modal

console.log('press button -> modal')

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal("show");
    });
        $("#myModal").on('hidden.bs.modal', function () {
            alert('"Ya que lejos de mí vas a estar; guarda, niña, un gentil pensamiento; al que un día te quiso contar; un cuento." (Ruben Dario)');
    });
});

// bootstrap tooltips -> explicacion en cuentos y biblioteca
// bootstrap Dropdown -> Cuentos de Carlitos -> links a otras paginas
