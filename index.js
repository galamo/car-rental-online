const CAR_FORM = {
  carLisence: document.getElementById("carLicense"),
  carPrice: document.getElementById("carPrice"),
  carModel: document.getElementById("carModel"),
  carImage: document.getElementById("carImage"),
  carsData: document.getElementById("carsData"),
};

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
  const tableRow = document.createElement("tr")

}

//clear the InnerHTML from the table
function clearTable() {
  CAR_FORM.carsData.innerHTML = "";
}
