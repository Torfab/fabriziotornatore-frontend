---
title: Array
---

# Array

- [Array](#array)
  - [Nucleo](#nucleo)
  - [Per quale motivo sono utili](#per-quale-motivo-sono-utili)
  - [Inizializzazione](#inizializzazione)
  - [Modifica](#modifica)
  - [Scambio di posizione degli elementi](#scambio-di-posizione-degli-elementi)
  - [Ordinamento](#ordinamento)
    - [Bubble sort](#bubble-sort)
  - [Puntatori](#puntatori)
    - [Utilizzo di array all'interno delle funzioni](#utilizzo-di-array-allinterno-delle-funzioni)
    - [Avvertenze nell'uso delle funzioni](#avvertenze-nelluso-delle-funzioni)
  - [Stringhe](#stringhe)
    - [Fine stringa](#fine-stringa)
    - [include string](#include-string)
  - [Array multidimensionali](#array-multidimensionali)
  - [Grandezza Ignota](#grandezza-ignota)
  - [Comprensione pratica](#comprensione-pratica)


## Nucleo

Le collezioni sono variabili speciali che ci permettono di contenere al loro interno più valori.

In particolare, in C esistono gli array che sono collezioni con una grandezza ben definita e con al suo interno elementi dello stesso tipo.

Se la variabile l'abbiamo rappresentata come uno scatolone, un array lo possiamo rappresentare come uno scaffale con uno scatolone in ogni piano.

![Analogia con lo scaffale](/svg/array-scaffale.svg)

Per ritrovare lo scatolone utilizzeremo la posizione dell'array, o il "piano" dello scaffale.

Ecco un esempio per vederne la sintassi:

```cpp

int main(){
  int arrayPersonale[3];

  arrayPersonale[0] = 3;
  arrayPersonale[1] = 5;
  arrayPersonale[2] = 10;

  for (int i=0; i<3; i++){
    cout<<arrayPersonale[i];
  }
  
}
```

distinguiamo queste tre parti.

1. La prima riga si legge: **"Da adesso esiste un array che può contenere tre elementi di tipo intero"**, metaforicamente "ho inserito uno scaffale di 3 piani".
2. Le seguenti tre righe servono per inserire i dati nell'array e si leggono così: "alla posizione 0 inserisco il valore 3, alla 1 il valore 5, alla 2 il valore 10", metaforicamente "ho inserito 3 scatoloni: uno al piano terra, uno al primo piano e uno al secondo piano. 

    Dato che gli scaffali partono dal piano terra(0), se ho N piani, l'ultimo piano è Quello al piano N-1. Quindi dato che in questo esempio ho 3 piani, l'ultimo è il secondo.
3. Le seguenti tre righe servono per leggere tutti i dati dall'array e cicla tutte i piani dello scaffale, in ogni turno stampa il valore corrispondente. 

**NOTA BENE: Posso accedere anche ad un singolo dato in una posizione specifica mettendo tra quadre una posizione specifica.**

**Attenzione: Se durante il ciclo trova un elemento senza valore il sistema andrà in errore**

## Per quale motivo sono utili

Molti contesti nel mondo sono modellabili come insiemi di più elementi.

Le parole sono un'insieme di lettere, le frasi sono un'insieme di parole, i libri sono un'insieme di frasi.

Gli studenti in una classe sono un'insieme di persone, come i partecipanti ad un concorso, come le carte in un mazzo di carte.

In informatica ci si trova spesso a dover modellare problemi con queste caratteristiche, ed avere un modo comodo per conservare tante variabili e fare operazioni su di esse è essenziale.


## Inizializzazione

Nel nucleo abbiamo separato il momento di creazione, dal momento di inserimento dati.

Esiste una "scorciatoia" per inizializzare un array ed inserire direttamente i dati e si scrive in questa maniera

```cpp
int main(){
  int arr[5] = {13, 22, 3, 41, 35};
}
```

I valori saranno quindi messi all'interno dell'array contestualmente alla loro posizione.

## Modifica

Essendo ogni singola posizione considerabile come una variabile a se stante, per modificarla bisogna solamente sovrascriverla.

```cpp
int main(){
  int arr[2];
  
  arr[0]=4;
  arr[1]=3;
  //I valori all'interno dell'array in questo momento saranno [4,3]
  
  arr[0]=5;
  //I valori all'interno dell'array in questo momento saranno [5,3]
}
```

## Scambio di posizione degli elementi

Essendo ogni singola posizione considerabile come una variabile a se stante, lo scambio di posizione è paragonabile allo scambio di valore tra due variabili, abbiamo quindi bisogno di una variabile ausiliaria per non perdere le informazioni dopo la prima sovrascrittura:

```cpp
int main(){
  int arr[3];
  
  arr[0]=6;
  arr[1]=334;
  arr[2]=51;
  //I valori all'interno dell'array in questo momento saranno [6, 334, 51]
  
  int ausiliaria;
  ausiliaria = arr[1];
  arr[1] = arr[2];
  arr[2] = ausiliaria
  //I valori all'interno dell'array in questo momento saranno [6, 51, 334]
  //abbiamo scambiato i valori tra la posizione 1 e la posizione 2
}
```

## Ordinamento

Una delle tipiche attività che si svolgono con gli array sono gli ordinamenti, avere i dati nel giusto ordine porta molti vantaggi, ma ordinarli non è una operazione immediata.

In gergo tecnico prende il nome di `sorting` ed esistono vari algoritmi che affrontano il problema.

Tra i più famosi il [bubble sort](https://it.wikipedia.org/wiki/Bubble_sort), il [quick sort](https://it.wikipedia.org/wiki/Quicksort), [merge sort](https://it.wikipedia.org/wiki/Merge_sort), ma ce ne sono [molti altri ancora](https://it.wikipedia.org/wiki/Algoritmo_di_ordinamento), e su youtube ci sono molte [visualizzazioni](https://www.youtube.com/watch?v=BeoCbJPuvSE) che mostrano il funzionamento da un punto di vista grafico, e la comparazione legata alle performance

Molti di questi si basano proprio sullo scambio di posizione, esploriamo ad esempio il bubble sort.

### Bubble sort

L'approccio dell'algoritmo è il seguente.

1. Confronta il primo elemento dell'array col successivo, se il primo è maggiore del secondo si scambiano, altrimenti non succede nulla.
2. Dopodichè fa la stessa operazzione tra il secondo[^](#noGo, "Non importa se è stato appena soggetto a uno scambio oppure no") e il terzo elemento dell'array, dopodichè tra il terzo e il quarto e così via.
   
    Nota che l'ultimo elemento non ha un elemento successivo con cui confrontarsi, quindi ci si ferma al penultimo.
3. Dopo aver scorso tutto l'array, si ricomincia. Ci si ferma quando durante uno scorrimento non avviene nessuno scambio.

Effettuare un'operazione su tutti gli elementi dell'array si definisce `scorrere` l'array.

Nel caso peggiore dovrò scorrere tutto l'array tante volte quanti gli elementi, si dice `n` volte, dove `n` è la dimensione dell'array[^](#noGo, "Questo discorso si lega alla complessità, e ci serve a confrontare gli algoritmi da un punto di vista di performance. Si calcola nel caso peggiore, e considerando il bubble sort bisogna effettuare n operazioni in un singolo scorrimento, ed n scorrimenti. La complessità è dunque quadratica e si scrive O(n^2)")



A questo punto siamo sicuri che l'array è ordinato in ordine crescente[^](#noGo, "per ordinarlo in maniera decrescente, o alfabetica o attraverso qualunque altro tipo di confronto, bisogna solo cambiare la condizione di scambio al primo punto")

Di seguito un'animazione che lo utilizza passo passo.

![animazione del bubble sort passo passo](/gif/gifBubbleSortEasy.gif)

Ed un programma in cpp che lo implementa davvero.

```cpp
#include<iostream>

using namespace std;
 
int main()
{
  const int N=10;
	int a[N],i,j,temp;

  //inserimento da tastiera di N elementi
	cout<<"Inserisci gli elementi:\n"; 
	for(i=0;i<N;i++)
		cin>>a[i];
		
	//ordino gli elementi		
	for(j=0;j<N-1;j++)
		for(i=0;i<N-1;i++)
			if(a[i]>a[i+1])
			{
        //questo è lo scambio di due signoli elementi
				temp=a[i];
				a[i]=a[i+1];
				a[i+1]=temp;
			}
	
	cout<<"Array ordinato con bubble sort:";
	for(i=0;i<N;i++)
		cout<<" "<<a[i];
		
	return 0;
}
```

Infine una visualizzazione più veloce, l'altezza indica il valore, il rosso indica l'elemento che stiamo confrontando[^](#noGo, "Il computer non può sapere quanti elementi sono gia in ordine, quindi anche se qesta animazione ignora i passaggi poco informativi il sistema svolge tutto lo scorrimento fino alla fine")

![animazione del bubble sort](/gif/gifBubbleSort.gif)



## Puntatori

Se stampate un array e vi scordate di inserire la posizione specifica che volete stampare, vedrete stampato un valore simile a questo

```cpp
0x505280
```

difatti, se è vero come è vero che un array contiene al suo interno diverse variabili, è anche vero che anche l'array in se e per se è essa stessa una variabile.

Il tipo di questa variabile si chiama `puntatore` spesso prende anche il nome di `riferimento` ed il suo valore è l'indirizzo di memoria dove è conservato l'array.

Facendo un'analogia la memoria è come un grande magazzino che contiene tanti scatoloni e scaffali e viene diviso in corridoi e posizioni, ogni corridoio conterrà molte posizioni.

![Immagine di corridoi di grandi magazzini](/svg/array-scaffale-mappa.svg)

Leggendo quindi il valore dell'array è come se dentro lo scatolone che lo contiene non trovo lo scaffale, bensì un biglietto con su scritto "corridoio 0, posizione 505280" ed è li che si troverà lo scaffale.

**Questo concetto è fondamentale nel mondo dell'informatica e molti comportamenti inaspettati del codice nascono dal non averli ben capiti.**

### Utilizzo di array all'interno delle funzioni

Come tutte le variabili, è possibili utilizzare gli array come parametro di una funzione che andrete a creare.

Esistono [varie](https://www.tutorialspoint.com/cplusplus/cpp_passing_arrays_to_functions.htm) sintassi valide per farlo, sostanzialmente equivalenti, ma per semplicità ve ne mostro solo una

```cpp

float getAverage(int mioArray[], int size) {
  int sommaElementi = 0;
  for (int i=0; i<size; i++){
    sommaElementi = sommaElementi+mioArray[i];
  }
  return (float) sommaElementi / size
}

int main(){
  int customArray[2]= {5,3};
  float risultato = getAverage(customArray, 2);
}
```

Notare che non serve passare il numero degli elementi nel parametro dell'array, anche se per scorrerlo ho bisogno di sapere quanto è grande, per cui l'ho passato come secondo parametro.

Durante la definizione va specificato che si sta passando un array attraverso il tipo (quindi scrivendo le quadre).

Quando la funzione viene richiamata basta il nome della funzione.

### Avvertenze nell'uso delle funzioni

Ricordando che il *vero* valore contenuto dentro un array è il suo indirizzo in memoria, quando viene effettuata la copia di variabili contestualmente alla chiamata di funzioni, viene copiato il suo indirizzo. 

Lo *scaffale* che troveremo all'indirizzo però sarà sempre lo stesso, non è lui ad essere stato copiato.

**Questo significa che se lo modifichiamo, modificheremo anche lo scaffale nell'array al di fuori della funzione.**

Questo comportamento è considerata un `effetto collaterale` dal punto di vista delle funzioni, dato che in teoria esse non dovrebbero modificare lo stato del sistema esterno a loro.

Se vogliamo quindi modificare l'array è buona norma crearne una copia esplicita.[^](#noGo, "In realtà è possibile sfruttare questo comportamento a proprio vantaggio, ma bisogna stare molto attenti.")

essendo un problema comune esistono funzioni di libreria che vanno solitamente sotto il nome di "copy" o "deep copy".

## Stringhe

Durante le printf (o le cout), solitamente scriviamo i testi incapsulati da `"`. 

Finora però non apevamo come conservare dei testi in delle variabili.

Questo perchè dietro il sipario C tratta le scritte come array di char, il tipo che può contenere un singolo carattere.

Questa variabile che prende il nome di `string` e che potete tradurre in italiano con il concetto di "scritta".

```cpp
char greetings[] = "Hello World!";
greetings[0] = 'J';
printf("%s", greetings);
```
In questo esempio non solo conservo la scritta dentro un array di char[^](#noGo, "trova la grandezza automaticamente dato che la stiamo subito valorizzando"), Ma riesco anche a modificare la prima lettera cambiando il contenuto dell'elemento alla posizione 0

**Notare che per utilizzare la printf la keyword sarà %s.**

### Fine stringa

Una domanda che potrebbe sorgere è "come fa il sistema a capire che la stringa è finita?"

Il sistema utilizza un carattere speciale che fa capire che la stinga è finita `\0`.

Si vede facilmente se inizializzassimo la stringa con una sintassi un pò diversa, la seguente
```cpp
char greetings[] = {"H","E","L","L","O","\0"};
```

\0 esattamente come \n è un carattere speciale, il sistema lo considera come un unico carattere quindi possiamo conservarlo in un char.

La lunghezza di una stringa è sempre di una unità maggiore rispetto a quanto ci immaginiamo, dato che c'è questo carattere speciale invisibile alla fine.


### include string

Gli sviluppatori di cpp, notando il grande uso di stringhe che veniva fatto, hanno deciso di creare un tipo speciale ed una libreria che permette di utilizzarlo

```cpp
#include <string>

string greeting = "Hello"; 
```

**Nota bene per quanto sembri identica agli altri tipi visti finora, quelli che abbiamo visti sono considerati tipi primitivi mentre questo NO, è una sovrastruttura e vi nasconde la complessità che ci sta dietro (il fatto che sia un array di char ad esempio), inoltre è possibile agganciarci funzionalità aggiuntive, come un modo facile per effettuarne una copia, o per valutarne la lunghezza**

## Array multidimensionali

Dato che un array è una variabile che contiene variabili. Tecnicamente è possibile far contenere al suo interno altri array, ed avere quindi un array di array.

Nella nostra metafora è come se una volta raggiunto lo scaffale all'indirizzo di memoria che trovo dentro la variabile principale, in ogni scatolone di ogni piano c'è a sua volta un altro indirizzo[^](#noGo, "in realtà cpp implementa in maniera tale che gli scaffali sono tutti vicini tra loro") su cui trovare lo scaffale riferito a quel piano.

Gli array multidimensionali ci tornano molto utili ad esempio quando abbiamo a che fare con griglie 2D[^](#noGo, " in realtà anche con le 3D, 4D eccetera, semplicemente bisognerà avere più dimensioni in dichiarazione")

Ad esempio ecco un possibile stralcio codice per rappresentare la griglia di tris

```cpp
char grigliaTris[3][3];

grigliaTris[0][2]='o'
grigliaTris[1][1]='x'
grigliaTris[1][2]='o'
//eccetera eccetera
```
per navigare una griglia del genere devo avere una variabile di navigazione per ogni dimensione aggiuntiva, e fare dei for annidati, immaginiamo ad esempio di voler stampare la nostra griglia

```cpp

for(int i=0; i<3; i++){
  for(int j=0; j<3; j++){
    printf("%c", grigliaTris[i][j])
  }
  printf("\n")
}
```

Questo codice va in errore se uno degli elementi non è valorizzato, per valorizzare gli elementi possiamo fare la stessa identica operazione, ad esempio possiamo mettere in tutte le posizioni della griglia un `.` per indicare che ancora nessuno ha scritto in quella casella

```cpp

for(int i=0; i<3; i++){
  for(int j=0; j<3; j++){
    grigliaTris[i][j]='.'
  }
}
```

## Grandezza Ignota

Ci sono casi in cui non possiamo sapere apriori quanto grande ci serve una collezione.

Purtroppo C è un linguaggio che per garantire retrocompatibilità ha dovuto mantenere alcune limitazioni, si possono sopperire con dei workaround

il più semplice workaround è la sovrastima, basta fare un array molto grande e se avete a che fare con pochi elementi ne utilizzerete solo una parte.

Nota bene che quando scorrete l'array non dovrete scorrerlo lungo tutti gli elementi, ma solo quelli valorizzati, quindi avete bisogno di una variabile per ricordarvi la grandezza attuale, ed ogni volta che inserite un nuovo elemento la incrementerete.

Per rispondere all'esigenza di array di dimensioni variabili molti linguaggi hanno costruito sovrastrutture che non necessitano di sapere apriori il numero degli elementi, in c++ ad esempio c'è il `vector`, in python abbiamo le `list` i `set` e i `dict`.

Ogni collezione ha alcuni vantaggi e svantaggi rispetto alle altre, solitamente sono legate alle performance e dipendono dal contesto di utilizzo, è buona norma, quando si approccia un linguaggio nuovo, giocare un pò con i diversi tipi di collezione per saggiarne le differenze e determinare quali conviene utilizzare rispetto all'obiettivo che vogliamo raggiungere.
## Comprensione pratica

1. Cosa è una collezione, e cosa un array?
2. Come faccio a dichiarare un array che può contenere 50 numeri?
3. Come faccio a cambiare il valore di uno specifico elemento all'interno di un array?
4. Per quale motivo sono stati inventati gli array?
5. Qual'è un modo veloce per riempire un array durante l'inizializzazione?
6. Cosa contiene davvero la variabile array?
7. Come si utilizza un array a parametro di una funzione?
8. Cosa vuol dire scorrere un array? 
9. Scrivi una funzione che dato un array di grandezza n che contiene interi, li stampa
10. Scrivi una funzione che dato un array di grandezza n che contiene interi, incrementa ogni elemento di 2.
11. In cosa bisogna stare attenti quando si utilizzano array all'interno di funzioni?
12. Cosa si intende per sorting? Spiega concettualmente quali sono i passaggi che vengono effettuati dal bubble sort.
13. Scrivi una funzione che effettua il bubble sort decrescente.
14. Scrivi una funzione che mescoli gli elementi di un array.
15. Cosa è una stringa? e che ruolo ha il carattere speciale \0?
16. Come posso utilizzare gli array per modellare una griglia?
17. Come mi comporto se non conosco la grandezza della collezione che voglio modellare?
18. Scrivi una funzione che inverte il primo e l'ultimo elemento dell'array
19. Scrivi una funzione che elimina un elemento di un array e fa scorrere tutti gli altri elementi per coprire il buco (portandolo alla fine)
