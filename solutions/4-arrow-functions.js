// BEGIN
const each = (objects, callback) => {
    objects.forEach(obj => {
        callback.call(obj);
    });
};

export default each;
// END
