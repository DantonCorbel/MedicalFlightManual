const leftContainer = document.getElementById("subjects");

const subjectArray = ["Respiratory", "Cardiology", "General"]

for (let subject in subjectArray) {
  leftContainer.innerHTML += `<p>${subjectArray[subject]}<p>`
}

fetch('./jsonFolder/toc.json')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
        }).catch(err => console.error(err));

const toc = fetch('./jsonFolder/toc.json');
        //.then(res => res.json())
          .then((data) => {data}
console.log(JSON.stringify(toc));
for (let subject in toc) {
  leftContainer.innerHTML += `<p>${toc[subject].title}<p>`
}
/*
const response = await fetch('./jsonFolder/toc.json');

const json = await response.json();

console.log(JSON.stringify(json));

const stringifiedJSON = JSON.stringify(json);

for (let subject in stringifiedJSON) {
  container.innerHTML += `<p>${stringifiedJSON[subject].title}<p>`
}
*/
