function openOtherTab(name, target) {
  // setting the right targets
  if(target == 'preview') {
    others = ['html', 'css'];
  } else if( target == 'html' ) {
    others = ['preview', 'css'];
  } else if( target == 'css' ) {
    others = ['preview', 'html'];
  }

  // executing the "togglers" to toggle the right active classes
  $("#"+name+"-"+target).addClass('active');
  $("#"+name+"-"+others[0]).removeClass('active');
  $("#"+name+"-"+others[1]).removeClass('active');

  // Showing the right content
  $("#"+name+"-show-"+target).addClass('active');
  $("#"+name+"-show-"+others[0]).removeClass('active');
  $("#"+name+"-show-"+others[1]).removeClass('active');
}
