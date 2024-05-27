// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const name = "Sam Harris";
const nameArray = name.split(' ');
const shortName = nameArray[0].split('');
const shortLastName = nameArray[1].split('');
const final = `${shortName[0]}.${shortLastName[0]}`;
console.log(final);

function abbrevName(name) {

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}


function abbrevName(name) {

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}