/* ** functions  ** */ 

// function with no arguments

// function greetUser() {
//     console.log('Hello wellcome to the sessions!')
// }

// greetUser();
// greetUser();
// greetUser();

// function with arguments

// function greetUser(username) {
//     console.log('Hello '+ username + ' wellcome to the session')
// }

// greetUser('Nilesh')

// Program to Check valid identifier

// function isValidIdentifier(identifier) {
//     if (/^\d/.test(identifier)) {
//         console.log(identifier + ' ' + 'is not valid identifier');
//         return;
//     }

//     if (/^[a-zA-Z$_][a-zA-Z0-9$_]*$/.test(identifier)) {
//         console.log(identifier + ' ' + 'is valid identifier');
//     } else{
//         console.log(identifier + ' ' + 'is not valid identifier');
//     }
// }

// isValidIdentifier("myVariable"); // Logs: myVariable is a valid identifier.
// isValidIdentifier("123abc"); // Logs: 123abc is not a valid identifier.
// isValidIdentifier("_pr&ivate"); // Logs: _pr&ivate is not a valid identifier.
// isValidIdentifier("9name");
// isValidIdentifier("$first_name");