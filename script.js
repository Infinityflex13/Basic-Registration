const specializationMap = {
  btech: [
    "Computer Science & Engineering",
    "Artificial Intelligence & Data Science",
    "Chemical Engineering",
    "Mechanical Engineering",
    "Civil Engineering"
  ],
  bsc: ["Physics", "Chemistry", "Mathematics", "Biology"],
  bcom: ["Finance", "Marketing", "Accounting"],
  ba: ["History", "Political Science", "English", "Sociology"],
  other: ["General Studies"]
};

function updateSpecializations() {
  const course = document.getElementById("course").value;
  const container = document.getElementById("specialization-container");
  const specializationSelect = document.getElementById("specialization");

  // Reset options
  specializationSelect.innerHTML = "<option value=''>--Select Specialization--</option>";

  if (specializationMap[course]) {
    specializationMap[course].forEach(specialization => {
      const option = document.createElement("option");
      option.value = specialization.toLowerCase().replace(/\s+/g, "-");
      option.textContent = specialization;
      specializationSelect.appendChild(option);
    });
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}
