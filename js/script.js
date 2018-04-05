	var searchButton = document.querySelector(".search-button");
	var popup = document.querySelector(".modal-search");

	var form = popup.querySelector("form");
	var checkin = popup.querySelector("[name=checkin]");
	var checkout = popup.querySelector("[name=search-checkout]");

	document.documentElement.classList.replace("no-js", "js");

	searchButton.addEventListener("click", function(evt) {
	  evt.preventDefault();
	  popup.classList.toggle("modal-show");
	  popup.classList.remove("modal-error");
	  checkin.focus();
	});

	form.addEventListener("submit", function(evt) {
	  if (!checkin.value || !checkout.value || adult.value) {
	    evt.preventDefault();
	    popup.classList.add("modal-error");
	  }
	});
