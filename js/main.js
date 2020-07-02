jQuery(document).ready(function(){



  // Popup Js 
    $('.por-items').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
      });

      $('#scrolltop').click(function(){
        $('#header').scrollTop(0);
    });
})
$('#scrolltop').click(function(){
  $('#header').scrollTop(0);
});