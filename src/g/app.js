// JavaScript för att implementera kraven A-E.

let products = [];

$.getJSON( "http://demo.edument.se/api/products", function( data ) {
    products = data;
    console.log(products);

    let items = [];
    $.each( data, function( key, product ) {
        let property = Math.floor((Math.random() * 10) + 1);
        items.push( "<li id='" + key + "'>" + product.Name + " " +
            "<img src="+product.Image+">" +property+ "<button onclick='myFunction()'>Add to cart</button>" + "</li>" );
        });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );

});

let i = 0;

function add() {
    return i += 1;
}

function myFunction() {
   document.getElementById('quanty').innerHTML  = add();
}