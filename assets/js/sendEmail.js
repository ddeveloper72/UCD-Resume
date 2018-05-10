function sendMail(contactForm) {
    emailjs.send("gmail", "resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
        })    
    .then(
        function(response) {
            alert("Sent!");
            console.log("SUCCESS", response);
      },
        function(error) {
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
            console.log("FAILED", error);
        }
    );
    return false;    
}