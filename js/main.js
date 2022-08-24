
function validate() {
	var name = document.stud_form.email;
    var subject = document.stud_form.subject;
    var email = document.stud_form.email;
    var message = document.stud_form.message;
	if (name.value.length <=0) {
		error("Name is required");
		return false;
	}
}