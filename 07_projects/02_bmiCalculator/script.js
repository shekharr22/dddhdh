const form = document.querySelector('form');

//this is usecase its give empty value
// const weight = parseInt(document.querySelector('#weight'))

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); //parseInt -- Convert the input string into Integer value
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) { // || --- OR    
    results.innerHTML = `Please a give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please a give a valid height ${weight}`;
  } else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi} </span>`;
  }
});
