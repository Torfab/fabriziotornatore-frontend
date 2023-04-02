---
title: Array
---

# Array

- [Array](#array)
  - [Nucleo](#nucleo)
    - [Inserire immagine di uno scaffale qui](#inserire-immagine-di-uno-scaffale-qui)
  - [Per quale motivo sono utili](#per-quale-motivo-sono-utili)
  - [Inizializzazione](#inizializzazione)
  - [Modifica](#modifica)
  - [Scambio di posizione](#scambio-di-posizione)
  - [Puntatori](#puntatori)
    - [Inserire immagine dall'alto di grandi magazzini](#inserire-immagine-dallalto-di-grandi-magazzini)
    - [Utilizzo di array all'interno delle funzioni](#utilizzo-di-array-allinterno-delle-funzioni)
    - [Avvertenze nell'uso delle funzioni](#avvertenze-nelluso-delle-funzioni)
  - [Stringhe](#stringhe)
    - [Fine stringa](#fine-stringa)
    - [include string](#include-string)
  - [Array multidimensionali](#array-multidimensionali)
  - [Comprensione pratica](#comprensione-pratica)


## Nucleo

Gli array sono delle variabili speciali che ci permettono di contenere al loro interno più valori.

Se la variabile l'abbiamo rappresentata come uno scatolone, un array lo possiamo rappresentare come uno scaffale dove possiamo mettere tanti scatoloni

### Inserire immagine di uno scaffale qui

Per ritrovare lo scatolone utilizzeremo la posizione dell'array, o il "piano" dello scaffale.

Ecco un esempio:

```cpp

int(main){
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

1. La prima riga si legge così: "Da adesso esiste un array che può contenere tre elementi di tipo intero", metaforicamente "ho inserito uno scaffale di 3 piani

2. Le seguenti tre righe servono per inserire i dati nell'array e si leggono così: "alla posizione 0 inserisco il valore 3, alla 1 il valore 5, alla 2 il valore 10", metaforicamente "ho inserito 3 scatoloni uno al piano terra, uno al primo piano e uno al secondo piano dello scaffale. **NOTA BENE: dato che gli scaffali partono dal piano terra(0), se ho N piani, l'ultimo piano è Quello al piano N-1 (se ho 3 piani l'ultimo è il secondo)

3. Le seguenti tre righe servono per leggere tutti i dati dall'array e cicla tutte i piani dello scaffale, in ogni turno stampa il valore corrispondente. **NOTA BENE: Posso accedere anche ad un singolo dato in una posizione specifica mettendo tra quadre una posizione specifica. Se durante il ciclo trova un piano senza valore il sistema andrà in errore

## Per quale motivo sono utili

Molti problemi nel mondo sono ascrivibili ad un'insieme di più elementi.

Le parole sono un'insieme di lettere, le frasi sono un'insieme di parole, i libri sono un'insieme di frasi.

Gli studenti in una classe sono un'insieme di persone, come i partecipanti ad un concorso, come le carte in un mazzo di carte.

In informatica ci si trova spesso a dover modellare problemi con queste caratteristiche, ed avere un modo comodo per conservare tante variabili e fare operazioni su di esse è essenziale.


## Inizializzazione

Nel nucleo abbiamo separato il momento di creazione, dal momento di inserimento dati.

Esiste una "scorciatoia" per inizializzare un array ed inserire direttamente i dati e si scrive in questa maniera

```cpp
int(main){
  int arr[5] = {13, 22, 3, 41, 35};
}
```

I valori saranno quindi messi all'interno dell'array contestualmente alla loro posizione.

## Modifica

Essendo ogni singola posizione considerabile come una variabile a se stante, per modificarla bisogna solamente sovrascriverla.

```cpp
int(main){
  int arr[2];
  
  arr[0]=4;
  arr[1]=3;
  //I valori all'interno dell'array in questo momento saranno [4,3]
  
  arr[0]=5;
  //I valori all'interno dell'array in questo momento saranno [5,3]
```

## Scambio di posizione

Essendo ogni singola posizione considerabile come una variabile a se stante, lo scambio di posizione è paragonabile allo scambio di valore tra due variabili, abbiamo quindi bisogno di una variabile ausiliaria per non perdere le informazioni dopo la prima sovrascrittura:

```
int(main){
  int arr[3];
  
  arr[0]=6;
  arr[1]=334;
  arr[2]=51;
  //I valori all'interno dell'array in questo momento saranno [6, 334, 51]
  
  int ausiliaria;
  ausiliaria = arr[1];
  arr[1] = arr[2];
  arr[2] = ausiliaria
  //I valori all'intenro dell'array in questo momento saranno [6, 51, 334]
  //abbiamo scambiato i valori tra la posizione 1 e la posizione 2
```

## Puntatori

Se stampate un array e vi scordate di inserire la posizione specifica che volete stampare, vedrete stampato un valore simile a questo

```cpp
0x505280
```

difatti, se è vero come è vero che un array contiene al suo interno diverse variabili, è anche vero che anche l'array in se e per se è una variabile.

Il tipo di questa variabile si chiama `puntatore` spesso prende anhche il nome di `riferimento` ed è l'indirizzo di memoria dove è conservato l'array.

Facendo un'analogia la memoria potrebbe essere un grande magazzino che contiene tanti scatoloni e scaffali e viene diviso in corridoi e posizioni, ogni corridoio conterrà molte posizioni.

### Inserire immagine dall'alto di grandi magazzini

Leggendo quindi il valore dell'array è come se dentro lo scatolone che contiene l'array non trovo tutto lo scaffale, bensì un biglietto con su scritto "corridoio 0, posizione 505280" e quando vado al corridoio 0 e alla sua posizione 505280, lì trovo lo scaffale davvero.

Questo concetto è fondamentale nel mondo dell'informatica e molti problemi nel mondo della programmazione nascono dal non averli ben capiti.

### Utilizzo di array all'interno delle funzioni

Come tutte le variabili, è possibili utilizzare gli array come parametro di una funzione che andrete a creare.

Esistono [varie](https://www.tutorialspoint.com/cplusplus/cpp_passing_arrays_to_functions.htm) sintassi valide per farlo, sostanzialmente equivalenti, ma per semplicità ve ne mostro solo una

```cpp

float getAverage(int mioArray[], int size) {
  int sommaElementi = 0;
  for (int i=0; i<size; i++){
    sommaElementi = sommaElementi+mioArray[i];
  }
  return float(sommaElementi) / size
}
```

Notare che non serve passare il numero degli elementi nel parametro dell'array, anche se per navigarlo ho bisogno di sapere quanto è grande, quindi l'ho passato come secondo parametro.

### Avvertenze nell'uso delle funzioni

Ricordando che il "vero" valore contenuto dentro un array è il suo indirizzo in memoria, quando viene effettuata la copia di variabili contestualmente alla chiamata di funzioni, viene copiato il suo indirizzo. 

Lo "scaffale" metaforico che troveremo all'indirizzo però sarà sempre lo stesso.

Questo significa che se lo modifichiamo, modifichiamo lo scaffale anche nell'array al di fuori della funzione.

Questa cosa è considerata un `effetto collaterale` dal punto di vista delle funzioni, dato che in teoria le funzioni non dovrebbero modificare lo stato del sistema oltre che con il suo output esplicito.

Se vogliamo quindi modificare l'array è buona norma crearne una copia esplicita, essendo un problema comune esistono funzioni di libreria che vanno solitamente sotto il nome di "copy" o "deep copy".

In realtà è possibile sfruttare questo comportamento a proprio vantaggio, ma bisogna stare molto attenti.

## Stringhe

Durante le printf (o le cout), solitamente scriviamo i testi incapsulati da `"`.

Grazie agli array è però possibile conservare i testi direttamente in una variabile che prende il nome di `string` e che potete tradurre in italiano con il concetto di "scritta".

Ricordando infatti che esiste una variabile testuale che può contenere una sola lettera, il `char`

Una stringa non è altro che un array di char.

```cpp
char greetings[] = "Hello World!";
greetings[0] = 'J';
printf("%s", greetings);
```
In questo esempio non solo conservo la scritta dentro un array di char (trova la grandezza automaticamente dato che la stiamo subito valorizzando), Ma riesco anche a modificare la prima lettera cambiando il contenuto dell'elemento alla posizione 0

Notare che per utilizzare la printf la keyword sarà %s.

### Fine stringa

Una domanda che potrebbe sorgere è "come fa il sistema a capire che la stringa è finita?"

Il sistema utilizza un carattere speciale che fa capire che la stinga è finita `\0`.

Si vede facilmente se inizializzassimo la stringa con una sintassi un pò diversa, la seguente
```cpp
char greetings[] = {"H","E","L","L","O","\0"};
```

\0 esattamente come \n è un carattere speciale, ed anche se è composto da "due" tasti della tastiera, per il sistema è considerato UN singolo carattere, per questo possiamo metterlo dentro char

Notare quindi che la lunghezza di una stringa è sempre di una unità maggiore rispetto a quanto ci immaginiamo, dato che c'è questo carattere speciale invisibile alla fine.
### include string

Gli sviluppatori di cpp, notando il grande uso di stringhe che veniva fatto, hanno deciso di creare un tipo speciale ed una libreria che permette di utilizzarlo

```cpp
#include <string>

string greeting = "Hello"; 
```

**Nota bene per quanto sembri identica agli altri tipi visti finora, quelli che abbiamo visti sono considerati tipi `primitivi` mentre questo NO, è una sovrastruttura e vi nasconde la complessità che ci sta dietro (il fatto che sia un array di char ad esempio), inoltre è possibile agganciarci funzionalità aggiuntive, come un modo facile per effettuarne una copia, o per valutarne la lunghezza**

## Array multidimensionali

Dato che un array è una variabile che contiene variabili. Tecnicamente è possibile far contenere al suo interno altri array, ed avere quindi un array di array.

Nella nostra metafora è come se una volta raggiunto lo scaffale all'indirizzo di memoria che trovo dentro la variabile principale, in ogni scatolone di ogni piano c'è a sua volta un altro indirizzo[^](#noGo, "in realtà cpp implementa in maniera tale che gli scatoloni sono tutti vicini tra loro") su cui trovare lo scaffale riferito a quel piano.

Gli array multidimensionali ci tornano molto utili ad esempio quando abbiamo a che fare con griglie 2D[^]("#noGo", " in realtà anche con le 3D, 4D eccetera, semplicemente bisognerà avere più dimensioni in dichiarazione")

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
## Comprensione pratica

1. Cosa cambia tra la definizione di una funzione ed il suo utilizzo? Rispondi sia dal punto di vista concettuale che sintattico.
2. Quali sono i pro e i contro dell'utilizzo delle funzioni?
3. Cosa è la firma di una funzione, da che parti è composta?
4. Cosa significa la keyword return?
5. Abbiamo incontrato un nuovo tipo di dato, *void* in che caso si utilizza?
6. Cosa possiamo mettere all'interno di un parametro?
7. Quanti parametri possiamo avere in una funzione? Esplicita il valore minimo e il valore massimo
8. Cosa si intende con Local Scope e Global Scope?
9. Se inserisco una variabile in un parametro come faccio a essere sicuro che la funzione non me la modifichi?
10. Spiega l'analogia della blackbox.
11. Scrivi una funzione che prende in ingresso 10 parametri e ritorna in output la loro media
12. Scrivi una funzione che converte gli euro - parametro in ingresso - in yen giapponesi - output - utilizza il tasso di cambio da google
13. Cosa si intende con funzione ricorsiva?
