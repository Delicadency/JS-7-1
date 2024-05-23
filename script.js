function fillElement(value) {
  if (typeof value !== "string" || value === "") {
    console.error("Niepoprawny typ danych");
    return;
  }
  const span = document.createElement("span");
  span.innerText = value;
  const body = document.querySelector("body");
  body.appendChild(span);
  return span.outerHTML;
}
