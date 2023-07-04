// constructor - a special method of a class
//               accepts argument and assigns properties

// static - belongs to the class, not the object
//          properties : useful for caches, fixing configuration 
//          method : useful for utility function

// static is used to make properties and methods that are associated with only class not its object


class Player{

    static noOfPlayer = 0;

    constructor(name,score='',win=0,loss=0) {
        this.name = name;
        this.score = score;
        this.win = win;
        this.loss = loss;
        Player.noOfPlayer+=1;
    }

    static totalPlayer(){
        console.log(`Total Players are ${Player.noOfPlayer}`)
    }

    play(){
        console.log(`${this.name} is playing`)
    }

    exit(){
        console.log(`${this.name} exit the game
        your score is ${this.score}`)
    }

    yourGoal(){
        console.log(`You scored`)
        this.win++
    }

    opponentGoal(){
        console.log(`opponent scored`)
        this.loss++
    }

    total(){
        this.score = `${this.win}:${this.loss}`;
        console.log(this.score)
    }
}  

const player1 = new Player('Vishesh')
player1.yourGoal()
player1.yourGoal()
player1.opponentGoal()
player1.yourGoal()
player1.total()
console.log(player1.win) 



const player2 = new Player('Ram')
player2.opponentGoal()
player2.opponentGoal()
player2.yourGoal()
player2.opponentGoal()
console.log(player2.win) 

player2.total()
Player.totalPlayer()



