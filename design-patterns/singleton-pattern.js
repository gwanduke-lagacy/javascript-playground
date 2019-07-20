/**
 * Basic Singleton Pattern
 */
let instance = null;

function User() {
  if (instance) {
    return instance;
  }

  instance = this;
  this.name = "Peter";
  this.age = 25;

  return instance;
}

const user1 = new User();
const user2 = new User();

console.log(user1 === user2);

/**
 * Singleton using module pattern
 */

const singleton = (function() {
  let instance;

  function init() {
    return {
      name: "Peter",
      age: 24
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();

console.log(instanceA === instanceB);
