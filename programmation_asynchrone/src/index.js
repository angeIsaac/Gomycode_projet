console.clear();

/* Chaînage asynchrone/await : Écrivez une fonction chainedAsyncFunctions qui appelle trois fonctions 
asynchrones distinctes de manière séquentielle. Chaque fonction doit enregistrer 
un message après un délai de 1 seconde. Enchaînez ces fonctions à l’aide de await.*/

// exemple d'execution

let firstFunction = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('first function');
            resolve('first function');
        }, 1000);
    });
}

let secondFunction = async (msg)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('second function');
            resolve(msg);
        }, 1000);
    });
}
let thirdFunction = async (msg)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('third function');
            resolve(msg);
        }, 1000);
    });
}


let chainedAsyncFunctions = async () => {
    let first = await firstFunction();
    let second = await secondFunction(first);
    let third = await thirdFunction(second);
    console.log(third);
}

// chainedAsyncFunctions();

/* Tâche 04 :

En attente de demandes simultanées : Créez une fonction asynchrone concurrentRequests 
qui effectue deux appels d’API simultanément à l’aide de Promise.all(). 
Enregistrez les résultats combinés une fois que les deux demandes ont été résolues.  
*/


let add  = Promise.resolve(()=>{
    return "l'addition est la somme de deux nombres";
});

let multiply = ()=>{
    return new Promise((res)=>{
        res("la multiplication est le produit de deux nombres");
    });
}

let concurrentRequests = async () => {
    let [first, second] = await Promise.all([add, multiply()]);
    console.log(first()+ ", "+ second);
}
// concurrentRequests();


/* Tâche 05 :
En attente d’appels parallèles : Écrivez une fonction parallelCalls 
qui prend un tableau d’URL et récupère les données de chaque URL simultanément en utilisant 
Promise.all(). Enregistrez 
les réponses une fois que toutes les demandes sont terminées */

let parallelCalls = ()=>{
    let urls = ['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/users'];
    let requests = urls.map(url => fetch(url));
    Promise.all(requests).then(responses => {
        return Promise.all(responses.map(response => response.json()));
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}
// parallelCalls();

/* Tâche 01 : 
Tâche 01 :

Itération avec Async/Await : Écrivez une fonction asynchrone iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre 
chaque valeur avec un délai de 1 seconde entre les journaux.
*/

let iterateWithAsyncAwai = async (tab) => {
    for(let i of tab){
        await new Promise((re)=>{
            setTimeout(()=>{
                console.log(i);
                re();
            }, 1000);
        });
    };
}

// iterateWithAsyncAwai([1, 2, 3, 4, 5]);



/* tache 02 : En attente d’un appel : Créez une fonction asynchrone awaitCall qui simule la récupération 
de données à partir d’une API. Utilisez await pour attendre la réponse de l’API, puis consigner les données. 
*/

let awaitCall = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
}

// awaitCall();
