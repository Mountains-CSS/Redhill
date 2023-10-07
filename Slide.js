const circle = document.getElementById("circle");
const content = document.getElementById("content");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const accomplishments = [
    {
        title: "Accomplishment 1",
        description: "Description of your first accomplishment."
    },
    {
        title: "Accomplishment 2",
        description: "Description of your second accomplishment."
    },
    {
        title: "Accomplishment 3",
        description: "Description of your third accomplishment."
    }
    // Add more accomplishments as needed
];

let step = 0;

nextBtn.addEventListener("click", () => {
    if (step < accomplishments.length - 1) {
        step++;
        updateContent(step);
    }
});

prevBtn.addEventListener("click", () => {
    if (step > 0) {
        step--;
        updateContent(step);
    }
});

function updateContent(step) {
    content.classList.remove("slide-in");
    content.style.display = "none";

    content.innerHTML = `
        <h1>${accomplishments[step].title}</h1>
        <p>${accomplishments[step].description}</p>
    `;

    circle.textContent = step + 1; // Adding 1 to match the 1-based index
    content.offsetWidth; // Trigger reflow
    content.classList.add("slide-in");
    content.style.display = "block";
}
