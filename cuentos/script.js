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
});

$(document).ready(function(){
    // Show the Modal on load
    $("#myModal").modal("show");
});