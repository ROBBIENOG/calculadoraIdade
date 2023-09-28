

function showError(inputElement, errorMessageElement, errorMessage) {
    inputElement.classList.add("input-invalido");
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.style.display = "block"; // Show Erro Message
}


function hideError(inputElement, errorMessageElement) {
    inputElement.classList.remove("input-invalido");
    errorMessageElement.style.display = "none"; // Hide Erro Message
}

// Function to calculate age
function calculateAge() {
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const resultContainer = document.getElementById("result");

    const dayValue = parseInt(dayInput.value);
    const monthValue = parseInt(monthInput.value);
    const yearValue = parseInt(yearInput.value);

    // Erro message elements
    const dayErrorMessage = document.getElementById("msgErroDay");
    const monthErrorMessage = document.getElementById("msgErroMonth");
    const yearErrorMessage = document.getElementById("msgErroYear");

    let isValid = true;

    // Validation
    if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
        isValid = false;
        showError(dayInput, dayErrorMessage, "Must be a valid day.");
    } else {
        hideError(dayInput, dayErrorMessage);
    }

    if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
        isValid = false;
        showError(monthInput, monthErrorMessage, "Must be a valid month.");
    } else {
        hideError(monthInput, monthErrorMessage);
    }

    if (isNaN(yearValue) || yearValue < 1900 || yearValue > new Date().getFullYear()) {
        isValid = false;
        showError(yearInput, yearErrorMessage, "Must be in the past.");
    } else {
        hideError(yearInput, yearErrorMessage);
    }

    // Validate blank fields
    if (!dayInput.value.trim()) {
        isValid = false;
        showError(dayInput, dayErrorMessage, "This field is required");
    }

    if (!monthInput.value.trim()) {
        isValid = false;
        showError(monthInput, monthErrorMessage, "This field is required");
    }

    if (!yearInput.value.trim()) {
        isValid = false;
        showError(yearInput, yearErrorMessage, "This field is required");
    }

    if (isValid) {
        // Calculations to calculate age
        const today = new Date();
        const birthDate = new Date(yearValue, monthValue - 1, dayValue);

        const ageInMilliseconds = today - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
        const ageInMonths = Math.floor((ageInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
        const ageInDays = Math.floor((ageInMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

        // Update Result
        resultContainer.innerHTML = `<p><span class="color_number">${ageInYears}</span> years</p>
                                     <p><span class="color_number">${ageInDays}</span> days</p>
                                     <p><span class="color_number">${ageInMonths}</span> months</p>`;
    }
}

// Make Button Work
const button = document.querySelector(".color_button button");
button.addEventListener("click", function (e) {
    e.preventDefault();
    calculateAge();
});




