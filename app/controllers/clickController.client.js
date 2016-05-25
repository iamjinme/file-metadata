$(document).ready(function() {
  $('.file_size').hide();
  $('#file').change(function(){
    $('label').html($(this).val().split( '\\' ).pop());
  });
  $('form')
  .submit(function(e) {
    if ($("#file").val()) {
      $.ajax({
        url: '/upload',
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false
      }).done(function(data){
        $('.file_size').html((data.file_size/1000).toFixed(2) + ' kB').show("slow");
      });
    };
    e.preventDefault();
  });
});
