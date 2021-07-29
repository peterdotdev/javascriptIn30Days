window.onload = () => {
    const inventors = [
        { first:'Albert', last:'Einstein', year:1879, passed:1955 },
        { first:'Isaac', last:'Newton', year:1643, passed:1727 },
        { first:'Galileo', last:'Galilei', year:1564, passed:1642 },
        { first:'Marie', last:'Curie', year:1867, passed:1934 },
        { first:'Johannes', last:'Kepler', year:1571, passed:1630 },
        { first:'Nicolaus', last: 'Copernicus', year:1473, passed:1543 },
        { first: 'Max', last:'Planck', year:1858, passed:1947 }
    ];

    const people = ['Beck, Gleen', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin Irving', 'Berne, Eric', 'Bernhard Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const inventors1500s = inventors.filter(inventors => inventors.year >= 1500 & inventors.year < 1600);
    console.log(inventors1500s);

    // Array.prototype.map()
    // 2 Give us an array of the inventory first and last names
    const inventorsNames = inventors.map(inventors => inventors.first + ' ' + inventors.last);
    console.log(inventorsNames);

    // Array.prototype.sort()
    // Sort the inventors by birthdate, oldest to youngest
    inventors.sort((a,b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(inventors);

    // Array.prototype.reduce()
    // How many years did all the inventors live?
    const inventorsYearsLived = inventors.map(inventor => inventor.passed - inventor.year).reduce((a,b) => a + b);
    console.log(inventorsYearsLived);

    // Sort the inventors by years lived
    inventors.sort((a,b) => {
        if ((a.passed-a.year) > (b.passed-b.year)) {
            return 1;
        } else if ((a.passed-a.year) < (b.passed-b.year)) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(inventors);

    // Create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));
    // console.log(de);

    // 7. sort exercise
    // Sort the people alphabeticallly by last name
    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    })
    console.table(alpha);

    // 8 Reduce exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
    const beta = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item] ++;
        return obj;
    }, {});
    console.table(beta);
}

