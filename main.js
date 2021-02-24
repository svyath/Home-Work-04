// 1. Write a JavaScript program which compute, the average marks of the following students. 
// Then, this average is used to determine the corresponding grade.
    let students = [['John', 80], ['Bill', 77], ['David', 68], ['Ryan', 88], ['Nick', 95]];
    let mark = 0;
    
    for(let i = 0; i < students.length; i++){
        mark += students[i][1]
    }
    
    let averageMark = mark/students.length;
    console.log(`Average mark: ${averageMark}`);
    
    switch(true){
        case averageMark <= 60:
            console.log(`Grade: F`);
            break;
        case averageMark <= 70:
            console.log(`Grade: D`);
            break;
        case averageMark <= 80:
            console.log(`Grade: C`);
            break;
        case averageMark <= 90:
            console.log(`Grade: B`);
            break;
        case averageMark <= 100:
            console.log(`Grade: A`);
            break;
    }

// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.
    let sum = 0;
    for(let i = 0; i < 1000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    console.log(`The sum the multiples of 3 or 5 under 1000: ${sum}`);

// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.

// * 
// * * 
// * * * 
// * * * * 
// * * * * *

    let pattern = '';
    for(let i = 0; i < 5; i++){
        for(let j = 0; j <= i; j++){
            pattern += '* ';
        }
        document.write(`${pattern} </br></br>`);
        pattern = '';
    }
    
   