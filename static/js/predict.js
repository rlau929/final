function predict() {

    var zip_url = ("http://127.0.0.1:5000/zipcount?get_count="

    $.get(zip_url);

    $.ajax({

        type: "GET",
        
        contentType: "application/json; charset=utf-8",
        
        url: zip_url,
        
        dataType: 'json',
        
        async: true,
        
        data: {}, 

        success: 