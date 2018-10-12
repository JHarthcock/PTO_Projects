function yearsWorked() {
    event.preventDefault();
    var yearsWorked = document.getElementById("yearsWorked").value;
    var insert = document.getElementById("insert");
    var hours;
    if (yearsWorked < 5) {
        hours = 5;
    } else if (yearsWorked < 10) {
        hours = 6;
    } else if (yearsWorked > 10 ) {
        hours = 7;
    }
    
    console.log(hours);

    var totalChecks = hours * 26;
    console.log(totalChecks);
    insert.innerHTML = totalChecks /40 
}