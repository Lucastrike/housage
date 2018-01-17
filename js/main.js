$("document").ready(function() {

  $('#switch-1').parent().on('change', function(){
    $('#switch-1').parent().addClass('is-checked');
    $('#switch-2, #switch-3, #switch-4').parent().removeClass('is-checked');
  });
  $('#switch-2').parent().on('change', function(){
    $('#switch-2').parent().addClass('is-checked');
    $('#switch-1, #switch-3, #switch-4').parent().removeClass('is-checked');
  });
  $('#switch-3').parent().on('change', function(){
    $('#switch-3').parent().addClass('is-checked');
    $('#switch-2, #switch-1, #switch-4').parent().removeClass('is-checked');
  });
  $('#switch-4').parent().on('change', function(){
    $('#switch-4').parent().addClass('is-checked');
    $('#switch-2, #switch-3, #switch-1').parent().removeClass('is-checked');
  });

});
