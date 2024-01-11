const container = document.getElementById("subjects");
container.innerHTML += `
  <p>adding new content</p>
`;

const subjectArray = ["Respiratory", "Cardiology", "General"]

for (let subject in subjectArray) {
  container.innerHTML += `<p>${subjectArray[subject]}<p>`
}
