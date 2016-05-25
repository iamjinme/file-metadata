$(document).ready(function() {
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
      });
    };
    e.preventDefault();
  });
});
