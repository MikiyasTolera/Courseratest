var student ={
Fullname: "",
type:"student"
};
document.addEventListener('DOMContentloaded', contentloaded);
function contentloaded(event) {
  document.getElementById('Fullname').addEventListener("keyup",keyup)

}
function keyup(event) {
  calculateNumericOutput();
}
function   calculateNumericOutput() {
  student.Fullname = document.getElementById('Fullname').value;
  var totalNameValue = 0;
  for (var i = 0; i < student.Fullname.length; i++) {
    totalNameValue += student.Fullname.charcodeAt(i);
    }
    // Insert result into the page
    var output = "Total Numeric value of person's name is" +totalNameValue;
    document.getElementById('output').innertext = output;
}
