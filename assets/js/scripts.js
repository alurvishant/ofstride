$(document).ready(function(){

  // var d = new Date();
  //
  // page.currentYear = d.getFullYear();

  $('#feedback_submit').on('click', function(e) {
    e.preventDefault();



    var formdata = $('#feedback_form').serialize();
    console.log(formdata);

    $.ajax({
        type: "POST",
        url: "send-feedback.php",
        data: formdata,
        success: showHideInfo('.info_msg', 'Your feedback was submitted successfully !', 'success'),
        error: showHideInfo('.info_msg', 'Error submitting feedback !', 'error')
    });
  });


  // $('#client_submit').on('click', function(e) {
  //   e.preventDefault();
  //   var formdata = $('#client_form').serialize();
  //   console.log(formdata);
  //
  //   $.ajax({
  //       type: "POST",
  //       url: "send-clientdata.php",
  //       data: formdata,
  //       success: showHideInfo('.info_msg', 'Your details have been sent successfully, we will get in touch at the earliest !', 'success'),
  //
  //       // function(){
  //       //   console.log('client data sent successfully !');
  //       //   $('.info_msg').addClass('alert alert-info').fadeIn(4000).css('display', 'block').html();
  //       //   setTimeout(function() {
  //       //     $('.info_msg').removeClass('alert alert-info').fadeOut(4000).css('display', 'none');
  //       //   }, 5000);
  //       //
  //       // },
  //       error: showHideInfo('.info_msg', 'Error submitting feedback, request you to please resubmit in some time !', 'error')
  //
  //       // function() {
  //       //   console.log('error in sending client data !');
  //       //   $('.info_msg').addClass('alert alert-danger').fadeIn(4000).css('display', 'block').html();
  //       //   setTimeout(function() {
  //       //     $('.info_msg').removeClass('alert alert-info').fadeOut(4000).css('display', 'none');
  //       //   }, 5000);
  //       // }
  //   });
  // });


  function showHideInfo(target, msg, showhide) {
    if(showhide == 'success') {
      console.log('success !');
      $(target).addClass('alert alert-info').fadeIn(4000).css('display', 'block').html(msg);
      setTimeout(function() {
        $(target).removeClass('alert alert-info').fadeOut(4000).css('display', 'none');
      }, 5000);
    }
    else if(showhide == 'error') {
      console.log('error !');
      $(target).addClass('alert alert-danger').fadeIn(4000).css('display', 'block').html(msg);
      setTimeout(function() {
        $(target).removeClass('alert alert-info').fadeOut(4000).css('display', 'none');
      }, 5000);
    }
  }

  // function to check if an form element is valid
  // function checkEmpty(ele){
  //
  // }


})
