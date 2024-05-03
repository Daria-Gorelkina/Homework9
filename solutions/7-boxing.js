// BEGIN
const magic = (...args) => {
    const sum = args.reduce((acc, num) => acc + num, 0);

    const innerMagic = (...innerArgs) => {
        return magic(sum, ...innerArgs);
    };

    innerMagic.valueOf = () => sum;

    return innerMagic;
}

export default magic;
// END
