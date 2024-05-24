function fillElement(value, tagName) {
  if (typeof value !== "string" || value === "") {
    console.error("Niepoprawny typ danych");
    return;
  }
  const span = document.createElement("span");
  span.innerText = value;

  const whereToAddSpan = document.getElementsByTagName(tagName)[0];
  if (!whereToAddSpan) {
    console.error("Nie znaleziono elementu docelowego w drzewie DOM");
    return;
  }
  whereToAddSpan.appendChild(span);
  return span;
}
