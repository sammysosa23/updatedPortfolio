$(document).ready(function () {

    // INITIALIZE SIDENAV 
    $('.button-collapse').sideNav();

    // INITIALIZE MODAL
    $('.modal').modal();

    // SCROLLFIRE
    const options = [{
        selector: '.row-1',
        offset: 50,
        callback: function (el) {
            Materialize.fadeInImage($(el));
        }
    },
    {
        selector: '.row-2',
        offset: 300,
        callback: function (el) {
            Materialize.fadeInImage($(el));
        }
    },
    {
        selector: '.row-3',
        offset: 400,
        callback: function (el) {
            Materialize.fadeInImage($(el));
        }
    }
    ];

    Materialize.scrollFire(options);

});

