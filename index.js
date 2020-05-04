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

function draw(arrayOfData) {
  // clear table
  clearTable();
  for (let index = 0; index < arrayOfData.length; index++) {
    drawRow(arrayOfData[index]);
  }
  // draw into the table
}

function clearTable() {
  CAR_FORM.carsData.innerHTML = "";
}
