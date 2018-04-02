
function sendGet() {
  var num1=$('#numA').val();
  var num2=$('#numB').val();
  var num3=$('#numC').val();
  var func=$('input[name=func]:checked').val();
  $.get("http://shenkar.html5-book.co.il/2017-2018/dcs/dev_33/ws_calculator/controller.php?num1="+num1+"&num2="+num2+"&num3="+num3+"&func="+func+"",
    function(data) {
      $(".result1").empty();
      $(".result1").append('Result: ');
      $(".result1").append(data.retVal);
      console.log("Return data: "+data.retVal);
  });
};
function sendPost() {
  var num4=$('#numD').val();
  var num5=$('#numE').val();
  var num6=$('#numF').val();
  var func1=$('input[name=func1]:checked').val();
  $.post("http://shenkar.html5-book.co.il/2017-2018/dcs/dev_33/ws_calculator/controller.php",
    {func:func1, num1:num4, num2:num5, num3:num6},
    function(data) {
      $(".result2").empty();
      $(".result2").append('Result: ');
      $(".result2").append(data.retVal);
      console.log("Return data: "+data.retVal);
    });
};
function sendPut() {
  var num7=$('#numG').val();
  var num8=$('#numH').val();
  var num9=$('#numI').val();
  var func2=$('input[name=func2]:checked').val();
  var data = {func:func2, num1:num7, num2:num8, num3:num9}
  $.ajax({
    url : 'http://shenkar.html5-book.co.il/2017-2018/dcs/dev_33/ws_calculator/controller.php',
    type : 'PUT',
	data: data,
    success : function(data){
      $(".result3").empty();
      $(".result3").append('Result: ');
      $(".result3").append(data.retVal);
      console.log("Return data: "+data.retVal);
    },
    error: function () {
        console.log("error From Put");
    }
  });  
};
