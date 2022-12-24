import inquirer from 'inquirer';
import chalk from 'chalk';




const guessingGame = async () => {
    const generatedNumber: number = Math.floor((Math.random() * 10) + 1)
    let chance: number = 3;
    let isError: boolean = true;
    for(let i = 1; chance >= i; i++) {
        const userGuess: {
            guessedNumber: number 
        } = await inquirer.prompt(
            {
                type: "number",
                name:"guessedNumber",
                message:`Please guess a number ( chance ${i} ): `
            }
        )
        
        const { guessedNumber } = userGuess;
       if(generatedNumber === guessedNumber) {
            console.log(chalk.green("Yahoo!! Correct Answer, you win the game"));
            isError = false;
            handlePlayAgain();
            break;
       } 
    }

    

    if(isError) {
        console.log(chalk.red("Wrong Answer \n Game Over"))
        handlePlayAgain();
    }


}

const handlePlayAgain = async () => {
    const playAgain: {
        isPlayAgain: string
    } = await inquirer.prompt(
        {
            type: "list",
            name:"isPlayAgain",
            choices:["Yes","No"],
            message: "Do you want to play again?"

        }
    )
    const { isPlayAgain } = playAgain;
    if(isPlayAgain === "Yes") {
        guessingGame()
    } else {
        console.log(chalk.yellow("Thank you for participating in this game"))
    }
}

guessingGame()