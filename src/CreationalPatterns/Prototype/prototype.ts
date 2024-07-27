const HeavyObject = {
  init: function () {
    console.log('Heavy object initialized');
  },
};

const objectCache = {};
function getObjectInstance(key) {
  if (!objectCache[key]) {
    objectCache[key] = Object.create(HeavyObject, { newKey: { value: key } });
    objectCache[key].init();
  }
  return objectCache[key];
}

const obj1 = getObjectInstance('obj1');

export const isPrototype = () => {
  console.log('-----Prototype----');

  console.log(obj1.newKey);
  console.log('isPrototype', obj1.__proto__ === HeavyObject);
};


