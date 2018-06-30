//developed by josep balikuddembe
$(document).ready(function() {
    
    let column, row, color;// Global variables to be accessed by the functions for later use.
    
    $('#sizePicker').submit(function makeGrid(evt) {
    
        $('#pixelCanvas tr').remove(); 
        evt.preventDefault(); 
        column = $('#inputHeight').val(); 
        row = $('#inputWeight').val(); 
       
    
        for(i = 1; i <= row; i++) { 
            $('table#pixelCanvas').append('<tr></tr>');
            for(j = 1; j <= column; j++ ) { 
                $('tr:last').append('<td></td>'); 
                $('td').attr('class', 'cells'); 
            };
        };
    
    
        $('.cells').click( function(event) { 
            color = $('#colorPicker').val();
            $(event.target).css('background', color);
        });
    });
    
    });