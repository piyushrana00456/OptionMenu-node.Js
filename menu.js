

  const readline= require('readline');

const readline2=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

readAgain();
function readAgain(){
var books=['Atomic Habits','Ikigai','Hamlet','The Theroy of Everything'];

readline2.question('Choose 1 to show all books,2 to add new books & 3 for exit: ',(num)=>{
  
       if(num==1){
          books.map((book)=> console.log(book));
          readAgain();
        }
           else if(num==2){
            readline2.on('line',function(line){
            books.push(line)
            console.log(books);
            console.log(`book added successfully ${line}`);
            readAgain();
           });
        }
     
            else if(num==3){

             readline2.question('Are you sure you want to quit ?',(query)=>{
                  if(query=='y'){
                      readline2.close();
                  }else if(query=='n'){
                     readAgain();
                  }
            }) ;  
          }
          else{
             console.log('You have selected an invalid entry so please press 1, 2 or 3');
             readAgain();
       }
    });

 readline2.on('close',()=>{
     console.log('Bye Bye!');
     process.exit(0);
 });

}


