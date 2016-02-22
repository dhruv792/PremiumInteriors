//create a select tag
var $select = $("<select></select>");

$select.addClass("dropdown-menu")

$("#menu").append($select);

$("#menu a").each( function(){
  
  var $current = $(this);
  
  //create an option tag in it
  var $option = $("<option></option>");

  //do something about selected class
  if( $current.parent().hasClass("active")){
    $option.prop("active" , true);
  }
  
  //put href of anchor into option tag's value
  $option.val($current.attr("href"));
  
  //put text of anchor into option tag's text
  $option.text($current.text());
    
  //append option to select tag
  $select.append($option);
 
});

//For Mobile browsers
$select.change( function(){
  window.location = $select.val();
});


/*For normal PC browsers
//create a button
var $button = $("<button>Go</button>");
$("#menu").append($button);

//if we click the button then go to the selected page
$button.click( function(){
  window.location = $select.val();
});
*/    













