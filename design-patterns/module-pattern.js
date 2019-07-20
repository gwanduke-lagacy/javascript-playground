/**
 * Module pattern
 */
const mod = (function() {
  var privateVar = {
    name: "Old"
  };

  return {
    publicMethod: text => {
      privateVar.name = text;

      return privateVar;
    },
    publicVar: privateVar
  };
})();

console.log(mod.publicVar);
console.log(mod.publicMethod("New"));
console.log(mod.publicVar);

/**
 * Revealing module pattern
 */
const myRevealingModule = (function() {
  let privateVar = "Peter";
  const publicVar = "Hello World";

  function privateFunction() {
    console.log("Name: " + privateVar);
  }

  function publicSetName(name) {
    privateVar = name;
  }

  function publicGetName() {
    privateFunction();
  }

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();
