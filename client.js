$(function(){
  console.log('Ready!!');
  $('#newEmployeeForm').on('submit', function(event){
    event.preventDefault();
    console.log('Somebody submitted a new employee!!!!!');
    // console.log($(this).serializeArray());
    // var formDataArray = $(this).serializeArray();
    // var employeeObject = {};
    // for(var i = 0; i < formDataArray.length; i++){
    //   var propertyName = formDataArray[i].name;
    //   var propertyValue = formDataArray[i].value;
    //   console.log('The value of ', propertyName, ' is ', propertyValue);
    //   employeeObject[propertyName] = propertyValue;
    // }
    // console.log(employeeObject);

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var number = $('#number').val();
    var title = $('#title').val();
    var salary = $('#salary').val();

    var htmlToAdd = $('<tr>' +
      '<td>' + firstName + '</td>'+
      '<td>' + lastName + '</td>'+
      '<td>' + number + '</td>'+
      '<td>' + title + '</td>'+
      '<td>' + salary + '</td>'+
    '</tr>');

    $('tbody').append(htmlToAdd);

  });
});
