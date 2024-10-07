// global scope k pollution se problem hoti h 
// so global scope k pollution ko htane k liye 
// iife ka use krte h


// named iife
(function chai() {
    console.log(`DB Connected`);
})();

// Unnamed iife
// with arrow function
((userName) => {
console.log(`DB Connected with ${userName}`);
})('manish')