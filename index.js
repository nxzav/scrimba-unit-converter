/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueInput = document.querySelector('#valueInput');
const convertBtn = document.querySelector('#convertBtn');
const length = document.querySelector('#length');
const volume = document.querySelector('#volume');
const mass = document.querySelector('#mass');

convertBtn.addEventListener('click', convertUnits);

function convertUnits() {
    const value = Number(valueInput.value);
    const metersToFeet = (value * 3.28084).toFixed(3);
    const feetToMeters = (value / 3.28084).toFixed(3);
    length.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
    
    const litersToGallons = (value * 0.26417).toFixed(3);
    const gallonsToLiters = (value / 0.26417).toFixed(3);
    volume.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
    
    const kilosToPounds = (value * 2.20462).toFixed(3);
    const poundsToKilos = (value / 2.20462).toFixed(3);
    mass.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
}

convertUnits();