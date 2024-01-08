
nameOfTheStudentArray = [];
    
function submit()
{
    var displayStudentArray = [];

  /*  for (var j = 1; j <= 4; j++) 
    {
        PROGRAME AQUI
    }*/

    console.log(nameOfTheStudentArray);

    var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;
    console.log(lenghtOfNameOfStudentsArray);

    /*for (var k = 0; k < lenghtOfNameOfStudentsArray; k++) 
    {
        PROGRAME AQUI
    }*/

    console.log(displayStudentArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

   /* var removeCommas = ....PROGRAME AQUI

   
*/

    document.getElementById("submitButton").style.display = "none";

}
