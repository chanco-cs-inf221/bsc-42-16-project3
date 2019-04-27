let projectForm = document.getElementById("form1");
projectForm.addEventListener("submit", function(event){
	event.preventDefault();
	
	var fName = projectForm.fname.value;
	var sName = projectForm.sname.value;
	var Email = projectForm.email.value;
	var phone = projectForm.number.value;
	var date = new Date(projectForm.date.value);

	user = {
		firstName : fName,
		lastName : sName,
		email : Email,
		Phone : phone,
		D_date : date,
		
	}
	localStorage.setItem("1", user);
projectForm.reset();
		
});
