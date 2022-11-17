let sayHello = () => console.log("Hello");

function printAsyncName(callback, name) {
  setTimeout(callback, 1000);
  setTimeout(() => console.log(name), 2000);
}

printAsyncName(sayHello, "Alessandro");

/** --ENGLISH--
 * The callback function must be an arrow function, can you also explain why?
 * 
 * Since the 'printAsyncName' function takes two parameters(one function and one string), we need to make the callback function pass through the printAsyncName function as an argument.
 * But, if we passed it through as a traditional function (like: 
   function sayHello(){
    console.log("Hello");
   })
 * when this function/argument will be passed through the setTimeOut method, this method will not be able to read the argument ('callback') as a defined function, 
 * as it would be outside of the setTimeout context. The result would be an error like this : 
 * 'TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined at setTimeout...'.
 * 
 * Arrow functions, in callbacks' cases, allow us to avoid this behaviour. There are indeed some differences between traditional and arrow functions,
 * especially when we talk about callback functions (which usually needs to be called in different contexts/scopes from the ones where they are defined). 
 * Arrow functions do not have an own specific context. The context of an arrow function is where the function is. 
 * So, the context which the arrow function points to (where it is defined), will be attached to the context where the arrow function is called.
 * 
 * In this case, we are passing an arrow function (sayHello), as an argument, through our 'printAsyncName' function, which at the same time will give this argument to
 * the setTimeout method. Then, setTimeout method will be able to read the callback function only because it is an arrow function, which is connected to the context 
 * outside the 'printAsyncName' function where the "sayHello" variable/function has been properly defined and will attach the variable 'sayHello' in the setTimeout context. 
 * So then, the first setTimeout method will be able to see the callback as a defined function, 
 * and will be able to process it properly. Otherwise, it couldn't have access to the function 'sayHello' since it would result as an undefined function.
 */

/** --ITALIANO--
 * La funzione di callback deve essere un arrow function, sai spiegare il perché?
 * 
 * Dal momento che la funzione 'printAsyncName' prende due parametri (una funzione di callback e una stringa), 
 * si deve far in modo che la callback passi attraverso la funzione 'printAsyncName' come argomento della stessa. 
 * Ma, se la facessimo passare come una funzione tradizionale (del tipo: 
   function sayHello(){
    console.log("Hello");
   })
 * quando lo stesso argomento/funzione viene passata al setTimeout method nella funzione 'printAsyncName', setTimeout non sarà in grado di leggere propriamento la callback,
 * in quanto questa risulterà non definita, poiché si trova fuori dal contesto/scope del setTimeout. 
 * Il risultato, in questo caso, sarà infatti un errore tipo questo: 
 * 'TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined at setTimeout...'.
 * 
 * Nel caso delle callbacks, l'arrow function ci permette di evitare questo errore. Esistono in effetti delle differenze tra le funzioni tradizionali e quelle arrow, 
 * soprattutto se parliamo di callbacks(che solitamente sono chiamate in contesti/scopes differenti da quelli in cui vengono definite).
 * L'arrow function non ha infatti un proprio e specifico contesto. Il suo contesto diventa sempre quello in cui l'arrow function é presente.
 * Quindi, il contesto a cui l'arrow function punta (e dove é stata definita), verrà "inserito" nel contesto/scope dove l'arrow function viene chiamata.
 * 
 * In questo specifico esempio, stiamo passando un arrow function (sayHello) come argomento della 'printAsyncName' function, che allo stesso tempo passerà questo dato al 
 * setTimeoutmethod. Questo sarà ora in grado di leggere propriamente sayHello come funzione di callback definita soltanto perché é un arrow function che
 * é connessa anche al contesto esterno della 'printAsyncName' function (dove appunto la variabile e arrow function sayHello é propriamente definita). Questo contesto esterno
 * essendo ora collegato alla funzione, potrà essere letto dal primo setTimeout method che sarà capace di processare propriamente l'arrow function. Se si fosse usato la funzione tradizionale,
 * il setTimeout non avrebbe potuto accedere alla funzione sayHello dal momento che non l'avrebbe vista come funzione definita.
 */
