

//PENCARIAN Buku
$.ajaxSetup({ cache: false });
$('#cariBuku').keyup(function () {
    $('#hasilCari').html('');
    let inputUser = $('#cariBuku').val();
    let exp = new RegExp(inputUser, "i");

    if (inputUser.length == 0) {
        $('#hasilCari').css("display", "none");
    } else {
        $('#hasilCari').css("display", "block");
    }

    $.getJSON('data-buku.json', function (data) {
        $.each(data, function (key, hasil) {

            if (hasil.nama.search(exp) != -1 || hasil.penerbit.search(exp) != -1 || hasil.tahun.search(exp) != - 1) {

                $('#hasilCari').append('<li><div class= "img-buku"><img src="' + hasil.image + '" alt=""></div><div class="info-buku"><h3>' + hasil.nama + '</h3><h4> Penerbit :  <span>' + hasil.penerbit + '</span> </h4><h4>Harga : <span>' + hasil.harga + '</span> </h4><h4>Tahun : <span>' + hasil.tahun + '</span> </h4></div></li >');
            }
        });

        if (inputUser.length != 0 && $('#hasilCari li').length == 0) {
            $('#hasilCari').append('<p class="not-found">Not Found <i class="fa fa-frown-o" aria-hidden="true"></i> </p>');
        } else {
            $('.not-found').css("display", "none");
        }

    });
});


