var GrossPay = 5000;
var FED = GrossPay * .15;
var STATE = GrossPay * .05;
var FICA = GrossPay * .0762;
var NET = GrossPay - (FED + STATE + FICA);
var Additional = 1000;
var FinalNET = NET - Additional;
document.write(FinalNET);