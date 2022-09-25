let input_nama = ""
let input_role = ""
let input_availability = ""
let input_usia = ""
let input_lokasi= ""
let input_YearsExperience= ""
let input_email = ""



function onchangeNama(event) {
    input_nama = event.target.value
}

function onchangeRole(event) {
    input_role = event.target.value
}

function onchangeAvailability(event) {
    input_availability = event.target.value
}

function onchangeUsia(event) {
    input_usia = event.target.value
}

function onchangeLokasi(event) {
    input_lokasi = event.target.value
}

function onchangeYearsExperience(event) {
    input_YearsExperience = event.target.value
}

function onchangeEmail(event) {
    input_email = event.target.value
}


function onButtonClick() {
    
    localStorage.setItem("Inputnama", input_nama)
    document.getElementById("nama").innerHTML = localStorage.getItem("Inputnama");
    localStorage.setItem("Inputrole", input_role)
    document.getElementById("role").innerHTML = localStorage.getItem("Inputrole");
    localStorage.setItem("Inputavailability", input_availability)
    document.getElementById("Availability").innerHTML = localStorage.getItem("Inputavailability");
    localStorage.setItem("Inputusia", input_usia)
    document.getElementById("usia").innerHTML = localStorage.getItem("Inputusia");
    localStorage.setItem("Inputlokasi", input_lokasi)
    document.getElementById("lokasi").innerHTML = localStorage.getItem("Inputlokasi");
    localStorage.setItem("InputYearsExperience", input_YearsExperience)
    document.getElementById("YearsExperience").innerHTML = localStorage.getItem("InputYearsExperience");
    localStorage.setItem("Inputemail", input_email)
    document.getElementById("email").innerHTML = localStorage.getItem("Inputemail");

    document.forms["textForm"].addEventListener("submit", function(event){
        this.style["display"] = "none";
        event.preventDefault();
    })

}


