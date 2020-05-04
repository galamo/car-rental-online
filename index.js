const CAR_FORM = {
  carLisence: document.getElementById("carLicense"),
  carPrice: document.getElementById("carPrice"),
  carModel: document.getElementById("carModel"),
  carImage: document.getElementById("carImage"),
  carsData: document.getElementById("carsData"),
};

// this code is coming to present the way of thinking by "base on the model"
// what the UI shows reflected in the cars model

const cars = [];

// attaching the event to the element DOM
// document.getElementById("addNewCar").onclick;

// event on click - trigger for car creation / drawing
function addCar() {
  //validations, lp regex, prevent null and undefined
  cars.push({
    lp: CAR_FORM.carLisence.value,
    price: CAR_FORM.carPrice.value,
    model: CAR_FORM.carModel.value,
  });
  draw(cars);
  // draw the array into the table
}

// general function for drawing an array of data into the DOM
function draw(arrayOfData) {
  if (!Array.isArray(arrayOfData)) return;
  // clear table
  clearTable();
  for (let index = 0; index < arrayOfData.length; index++) {
    drawRow(arrayOfData[index]);
  }
  // draw into the table
}

// general function for row creation
function drawRow(model) {
  const carTR = getCarTR(model);
  if (!carTR) return;
  CAR_FORM.carsData.appendChild(carTR);
}
function getCarTR(car) {
  // car.lp
  // car.price
  // car.model
  const { lp, price, model } = car;
  const tableRow = document.createElement("tr");
  tableRow.id = lp;

  const tdCarLP = document.createElement("td");
  tdCarLP.innerText = lp;

  const tdCarPrice = document.createElement("td");
  tdCarPrice.innerText = price;

  const tdCarModel = document.createElement("td");
  tdCarModel.innerText = model;

  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger";
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", function () {
    //split function
    // validate for index
    const index = _findIndex(cars, lp);
    if (index >= 0) {
      cars.splice(index, 1);
      draw(cars);
    }
  });
  tableRow.append(tdCarLP, tdCarPrice, tdCarModel, deleteButton);
  return tableRow;
}
function _findIndex(data, lp) {
  //return  the index of the element;
  for (let index = 0; index < data.length; index++) {
    if (lp === data[index].lp) return index;
  }
  return -1;
}
//clear the InnerHTML from the table
function clearTable() {
  CAR_FORM.carsData.innerHTML = "";
}

function removeFirstCar() {
  if (!cars.length) return;
  cars.splice(0, 1);
  draw(cars);
}
