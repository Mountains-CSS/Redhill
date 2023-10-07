let step = 1;
function updateContent(step) {
    if (step === 2) {
        circle.style.float = "right";
        content.innerHTML = `
            <h1>Accomplishment 2</h1>
            <p>Description of your second accomplishment.</p>
        `;
        step++
        console.log(step)
    } else if (step === 3) {
        circle.style.float = "left";
        document.querySelector('.accomplishment_3').innerHTML = `
            <h1>Accomplishment 3</h1>
            <p>Description of your third accomplishment.</p>
        `;
        step++
        console.log(step)
    } else {
        // Add more steps as needed
        circle.style.float = "right";
        content.innerHTML = `
            <h1>No more accomplishments</h1>
            <p>Congratulations on your achievements!</p>
        `;
        nextBtn.style.display = "none";
        step++
        console.log(step)
    }

    circle.textContent = step;
    content.style.display = "block";
}
