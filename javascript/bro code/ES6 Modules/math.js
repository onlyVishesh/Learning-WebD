
export function sum(...numbers){
    let sum = 0
    for( let number of numbers){
        sum += number
    }
    return sum;
}

export function max(...numbers){
    let max = numbers[0]
    for( let number of numbers){
        if( max< number){
            max = number
        }
    }
    return max;
}

export function min(...numbers){
    let min = numbers[0]
    for( let number of numbers){
        if( min > number){
            min = number;
        }
    }
    return min;
}

export function count(...numbers){
    return numbers.length;
}