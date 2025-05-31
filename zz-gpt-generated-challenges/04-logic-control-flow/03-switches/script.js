// 🔹 Challenge 1: Basic Day Switch
// Write a function that takes a number (1–7) and logs the day of the week.

// Example: 1 -> "Monday", 7 -> "Sunday"

number = 9

switch (number) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Provide a number between 1 and 7');
    break;
}

// 🔹 Challenge 2: Grade Evaluator
// Given a grade (A, B, C, D, F), log a message:

// "A" -> "Excellent"
// "B" -> "Good"

grade = 'C'

switch (grade) {
  case 'A':
    console.log('Excellent');
    break;
  case 'B':
    console.log('Good');
    break;
  default:
    console.log('remaining grades');
    break;

}

// 🔹 Challenge 3: Language Greetings
// Write a function that takes a language code('en', 'es', 'de') and logs a greeting:

// 'en' -> 'Hello', 'es' -> 'Hola', 'de' -> 'Hallo'

let lang = "de";

switch (lang) {
  case 'en':
    console.log('Hello');
    break;
  case 'es':
    console.log('Hola');
    break;
  case 'de':
    console.log('Hallo');
    break;
  default:
    console.log('languange not in system');
    break;
}

// 🔹 Challenge 4: Role-Based Access
// Take a user role and print their access level:

// 'admin' -> 'Full access'
// 'editor' -> 'Edit access'
// 'viewer' -> 'Read-only access'

let role = 'editor'

switch (role) {
  case 'admin':
    console.log('Full access');
    break;
  case 'editor':
    console.log('Edit access');
    break;
  case 'viewer':
    console.log('Read-only access');
    break;

  default: console.log('role unknown');
    break;
}

// 🧩 Capstone 1: Smart Traffic Light
// Write a function that takes a color('red', 'yellow', 'green') and logs the driving action:

// 'red' -> 'Stop'
// 'yellow' -> 'Slow down'
// 'green' -> 'Go'
// Default to 'Invalid color'.

function trafficLightAction(color) {
  switch (color) {
    case 'red':
      console.log('Stop');
      break;
    case 'yellow':
      console.log('Slow down');
      break;
    case 'green':
      console.log('Go');
      break;
    default:
      console.log('Invalid color');
      break;
  }
}

trafficLightAction('green'); // Output: Go


// 🧪 Capstone 2: Turkish Food Menu
// Write a switch-based menu selector for a Turkish dish:

// 1 -> "Menemen"
// 2 -> "Kuru Fasulye"
// 3 -> "Lahmacun"
// 4 -> "İskender"
// Default -> "Seçim bulunamadı"


function menu(number) {
  console.log(' 1 -> "Menemen"\n 2 -> "Kuru Fasulye"\n 3 -> "Lahmacun"\n 4 -> "İskender"\n Default -> "Seçim bulunamadı"\n');

  switch (number) {
    case 1:
      console.log('Menemen chosen');
      break;
    case 2:
      console.log('Kuru Fasulye');
      break;
    case 3:
      console.log('Lahmacun');
      break;
    case 4:
      console.log('Iskender');
      break;
    default: console.log('Secim bulunamadi');
      break;
  }
}

menu(3)
