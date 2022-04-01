var questions = ['what is your name?', 'how old are you?', 'what is your favorite language?'];
var answers = [];

function question(i){
    process.stdout.write(questions[i]);
}

process.stdin.on('data', function(data){
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        question(answers.length);
    }else{
        process.exit();
    }
});

question(0);