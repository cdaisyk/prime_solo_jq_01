$(function() {
    $('#add').click(function() {
        var employee = {
	        firstName: $('#firstName').val(),
    	    lastName: $('#lastName').val(),
    	    employeeNumber: $('#employeeNumber').val(),
    	    title: $('#title').val(),
    	    review: $('#review').val()
    	};
    	employee.root = $('#employees').append('<div></div>');
    	var name = employee.firstName + ' ' + employee.lastName;
    	employee.root.append('<p class="employee"></p>').text(name);


        //employee.root.append('<input type="button" value="Remove">');
        // TODO: handle `remove` button click.
        // TODO: possibly save employee in a global list of employees.
    })
});
