const input = document.querySelector("#name-input")
const span = document.querySelector("#name-output")

input.addEventListener("input", () => {
    const clear = input.value.trim();
    if (clear === "") {
        span.textContent = "Anonymous"
    } else {
        span.textContent = clear
    }
})