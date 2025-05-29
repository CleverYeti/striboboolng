document.querySelector("button").addEventListener("click", (event) => {
  event.target.innerText = "Copied!"
  navigator.clipboard.writeText(`export type striboboolng = "Yes" | "No" | "File Not Found"`)
})