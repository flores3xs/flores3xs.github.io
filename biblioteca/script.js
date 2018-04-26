console.log("#pasoFino")

// ToolTips

console.log('PasoFino -> ToolTips')

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// Modal

console.log('button -> modal')

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal("show");
    });
        $("#myModal").on('hidden.bs.modal', function () {
            alert('Latribuna + El Pais + LTV + Lithopress');
    });
});

$(document).ready(function(){
    // Show the Modal on load
    $("#myModal").modal("show");
});