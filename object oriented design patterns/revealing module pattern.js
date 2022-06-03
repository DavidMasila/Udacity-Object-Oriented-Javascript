let person = (function (){
    let privateAge =0;
    let privateName = 'Andrew';

    function privateAgeOneYear(){
        privateAge +=1;
        console.log(`One year has passed! current age is ${privateAge}`);
    };

    function displayName(){
        console.log(`Name: ${privateName}`);
    };

    function ageOneYear(){
        privateAgeOneYear();
    };

    return{
        name: displayName,
        age: ageOneYear,
    };
})();

person.name();

person.age();
person.age();