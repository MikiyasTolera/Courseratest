var student ={
name: "",
type:"student"
};
document.addEventListener('DOMContentloaded', contentloaded);
function contentloaded(event) {
  document.getElementById('name').addEventListener("keyup",keyup)

}
function keyup(event) {
  calculateNumericOutput();
}
function   calculateNumericOutput() {
  student.name = document.getElementById('name').value;
  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charcodeAt(i);
    }
    // Insert result into the page
    var output = "Total Numeric value of person's name is" +totalNameValue;
    document.getElementById('output').innertext = output;
}
