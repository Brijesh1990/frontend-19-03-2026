/* switch case : 

    switch case is just like a if else we can make a multiple true case if case is false default will executed

    syntax 

    switch(condition)
    {
     
      case 'A':
        statements;
        break;
      case 'B':
        statements;
        break;
      case 'C':
        statements;
        break;
    
      default:
        statements;
        break;

    }

*/

var grade='D'
switch(grade)
{
    case 'A':
        console.log('I am topper students')
        break;
        
    case 'B':
        console.log('I am average students')
        break;

          
    case 'C':
        console.log('I am failed students')
        break;
    
     default:
        console.log('sorry your grade is invalid')
        break;
   
}