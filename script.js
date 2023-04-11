// add my age to the HTML
const myBirhtMonth = 8;
const myBirhtYear = 1986;
const newDate = new Date();
const text = document.getElementById('my-age')
const myAge = () => {
    let age = newDate.getFullYear() - myBirhtYear;
    if (newDate.getMonth() < myBirhtMonth) {
        age = age - 1;
    }
    text.innerHTML = `${text.innerHTML}  ${age}`;
    console.log(age)
}
myAge()

// zoom the certificate

/*const certificates = document.getElementById('education1');
console.log(certificates)

function zoomImgHigth(event) {
    event.target.style.color = 'red';
}
certificates.onmouseover = zoomImgHigth;

function zoomImgLow(event) {
    event.target.style.color = '';
}
certificates.onmouseout = zoomImgLow;*/


//const certificates1 = document.querySelector('.certificate1');
//console.log(certificates1)

function zoomHigth(event) {
    event.target.style.maxWidth = '900px';
}
//certificates1.onmousedown = zoomHigth;

function zoomLow(event) {
    event.target.style.maxWidth = '300px';
}
//certificates1.onmouseup = zoomLow;

const cer = document.getElementsByClassName('cer');
console.log(cer.length)

for (const elem of cer) {
    console.log(elem)
    elem.onmousedown = zoomHigth;
    elem.onmouseup = zoomLow;
}