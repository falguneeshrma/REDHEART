//novalidate and neeeds-validation class in new.ejs is used to get bootstrap styling
//also add valid and invalid feedback classes
//<form
// method="post"
// action="/products"
// nonvalidate logic
// class="needs-validation"></form>

//bootstrap code
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
