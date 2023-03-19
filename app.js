function GeometryCalculation(equation, num1, num2) {
  const inputFieldStringOne = document.getElementById(num1);
  const inputFieldStringTwo = document.getElementById(num2);

  const valueOne = parseFloat(inputFieldStringOne.value);
  const valueTwo = parseFloat(inputFieldStringTwo.value);

  if (!isNaN(valueOne) && !isNaN(valueTwo)) {
    // Triangle
    if (equation === "triangle") {
      return 0.5 * valueOne * valueTwo;
    }
    // Rectangle
    else if (equation === "rectangle") {
      return valueOne * valueTwo;
    }
    // Parallelogram
    else if (equation === "parallelogram") {
      return valueOne * valueTwo;
    }
    // Rhombus
    else if (equation === "rhombus") {
      return 0.5 * valueOne * valueTwo;
    }
    // Pentagon
    else if (equation === "pentagon") {
      return 0.5 * valueOne * valueTwo;
    }
    // Ellipse
    else if (equation === "ellipse") {
      return 3.1416 * valueOne * valueTwo;
    }
  } else {
    alert("Invalid Input");
  }
}

function displayResult(equation, result) {
  const section = document.getElementById("final-output");
  const div = document.createElement("div");
  div.classList.add("p-3", "my-3", "text-center", "bg-green-200", "relative");
  div.innerHTML = `
  <h1 class="text-3xl font-bold">${result.toFixed(2)}cm<sup>2</sup></h1>
  <p>${equation.toUpperCase()}</p>
  <button class="px-2 py-1 rounded-md text-white bg-blue-500 hover:bg-blue-600">Convert (m<sup>2</sup>)</button>
  `;
  section.appendChild(div);
}

// Triangle
document
  .getElementById("calculate-triangle")
  .addEventListener("click", function () {
    const result = GeometryCalculation(
      "triangle",
      "triangle-base",
      "triangle-height"
    );
    displayResult("triangle", result);
  });

// Rectangel
document
  .getElementById("calculate-rectangle")
  .addEventListener("click", function () {
    const result = GeometryCalculation(
      "rectangle",
      "rectangle-width",
      "rectangle-length"
    );
    displayResult("rectangle", result);
  });

// Parallelogram
document
  .getElementById("calculate-parallelogram")
  .addEventListener("click", function () {
    const result = GeometryCalculation(
      "parallelogram",
      "parallelogram-base",
      "parallelogram-height"
    );
    displayResult("parallelogram", result);
  });

// Rhombus
document
  .getElementById("calculate-rhombus")
  .addEventListener("click", function () {
    const result = GeometryCalculation("rhombus", "rhombus-d1", "rhombus-d2");
    displayResult("rhombus", result);
  });

// Pentagon
document
  .getElementById("calculate-pentagon")
  .addEventListener("click", function () {
    const result = GeometryCalculation(
      "pentagon",
      "pentagon-perimeter",
      "pentagon-apothem"
    );
    displayResult("pentagon", result);
  });

// Ellipse
document
  .getElementById("calculate-ellipse")
  .addEventListener("click", function () {
    const result = GeometryCalculation("ellipse", "ellipse-a", "ellipse-b");
    displayResult("ellipse", result);
  });
