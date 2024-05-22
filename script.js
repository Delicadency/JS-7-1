/* Stwórz funkcję fillElement, która otrzyma w argumencie dowolny string. Funkcja ma za zadanie utworzyć element <span> z pomocą document.createElement, umieścić w tym spanie tekst przekazany w parametrze funkcji, oraz ma zwrócić (return) ten element (czyli <span>). */

function fillElement(value) {
  if (typeof value !== "string" || value === "") {
    console.error("Niepoprawny typ danych");
    return;
  }
  const span = document.createElement("span");
  span.innerText = value;
  const body = document.querySelector("body");
  body.appendChild(span);
  return "Element " + span.outerHTML;
}
