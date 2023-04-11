# Cpp

- [Cpp](#cpp)
  - [Pre](#pre)
  - [Introduzione](#introduzione)
  - [Commenti](#commenti)
  - [Istruzioni](#istruzioni)
  - [Variabili](#variabili)
    - [I booleani](#i-booleani)
  - [Output](#output)
  - [Input](#input)
  - [Condizioni](#condizioni)
  - [Cicli](#cicli)
  - [Esercizi svolti](#esercizi-svolti)
    - [Esercizio 1](#esercizio-1)
    - [Esercizio 2](#esercizio-2)


## Pre

Questa pagina è volta a mostrare la sintassi di c++ ed alcune particolarità del linguaggio, assume che tutti i concetti di base delle pagine precedenti siano stati appresi. 

Se volete iniziare da zero con questo linguaggio è consigliato partire comunque dal resto ed arrivare qui dopo aver esplorato i concetti principali di assegnazione, condizione e cicli.

## Introduzione

C++[^](#noGo, "o c++ che dir si voglia, sono usati fattualmente come sinonimi") è un linguaggio `compilato` ovvero sia è un linguaggio che deve passare una fase di `compilazione` prima di poter venire effettivamente eseguito.

Il file che noi scriviamo prende il nome di file `sorgente`. La fase di compilazione genera un nuovo file, chiamato file `oggetto`.

La compilazione è legata fortemente al sistema operativo e all'hardware che utilizziamo quindi facilmente due computer diversi partendo dallo stesso file sorgente generano files oggetto differenti anche se, in esecuzione, il loro comportamento dal nostro punto di vista sarà identico.

C++ è una versione `evoluta` di C ma gli sviluppatori hanno deciso di essere retrocompatibili quindi accetta anche al sintassi del C.

La forza di C++ è il suo pieno controllo del sistema e delle risorse. 

Nel tempo sono nati altri linguaggi che ottimizzano questo o quell'aspetto, che rendono il sistema più safe, o più facile da scrivere, ma ad oggi il C++ è utilizzatissimo nel momento in cui si hanno forti limiti sulle risorse. Ad esempio nel mondo dei videogiochi o nel mondo delle microschede.

L'IDE che io consiglio su cui lavorare si chiama `devC++` e lo potete scaricare da [questo link](https://www.bloodshed.net/) dato che ha il suo compilatore integrato[^](#noGo, "in teoria il compilatore non è legato al linguaggio quindi una volta bisognava scaricarlo separatamente")

In alternativa il buon vecchio `vscode`, inserito il plugin di c++ e scaricato un compilatore, non vi deluderà, potete scaricarlo da [questo link](https://code.visualstudio.com/)

Se non volete scaricare nulla sul pc esistono anche degli editor online, uno vale l'altro, li trovate con la parola chiave `sandbox`. Quindi cercherete `sandbox cpp` e tra i primi risultati troverete ciò che vi serve.

## Commenti

I commenti in linea in cpp partono dal simbolo `//`

I commenti multi riga sono incapsulati da `/*` e `*/`

## Istruzioni

Le istruzioni in c++ vengono distinte dal `;`, tecnicamente potete scrivere tutto in un solo rigo e separare le istruzioni dal `;` ma per convenzione ogni rigo contiene una sola istruzione.

Attenzione che inclusioni, definizioni, cicli e condizioni non contano -istruzioni- e quindi non hanno bisogno del punto e virgola.

In generale quando avete a che fare con un blocco di codice, incapsulato da `{ }` non serve il punto e virgola, in tutti gli altri casi si.

## Variabili

cpp utilizza i tipi di variabili in maniera esplicita, devi inserire il tipo della variabile prima di utilizzarla, una variabile non può cambiare tipo una volta che viene inizializzata.

Se si prova ad utilizzare una variabile di un tipo all'interno di una operazione o una funzione che richiede un tipo diverso si va incontro ad un errore.

In alcuni casi si può `castare` una variabile di un tipo in un altro tipo, ma deve essere completamente contenuta, ad esempio posso utilizzare un intero come float scrivendo questa sintassi.

```cpp

int main(){
  float risultato;
  int a=5;
  risultato=3,14+ (float) a;
}

```

Quindi incapsulando il tipo tra parentesi tonde prima del nome della variabile.

In generale è però sconsigliato affidarsi a questo sistema ed è meglio rivedere la logica del codice che ti ha portato a questa situazione.

### I booleani

I booleani in c++ si scrivono `true` e `false`, ma bisogna tenere a mente che dietro il sipario utilizza due numeri:

* 1 - indica true
* 0 - indica false

e quando provo a stampare una variabile booleana mi stamperà questo numero.

Questa cosa è tipica di C++, altri linguaggi di programmazione non usano i numeri dietro ai booleani

## Output

Per stampare qualunque valore basta utilizzare lo stream `cout` 

Per utilizzarlo bisogna importare la libreria standard `<iostream>` e inserire ogni valore che vogliamo stampare separato da `<<` per ricordare il verso dovete pensare che state mettendo questa scritta nello stream di stampa, quindi le frecce vanno VERSO lo stream.

la sintassi vuole la scritta esplicita `std::cout` ogni volta che si utilizza ma se utilizzate il namespace std attraverso l'istruzione `using namespace std;` potete omettere la parte iniziale.

```cpp
#include <iostream>

using namespace std;

int main(){
  int a=5;

  cout<<"il numero scelto è il numero: "<< a <<endl;
}
```

per andare a capo potete utilizzare la keyword `endl` che significa endline. In alternativa potete utilizzare una stringa che contiene la sintassi di c, quindi `"\n"`

Vista la retrocompatibilità, una volta importata la libreria, è anche possibile utilizzare printf() come in C,ma cout è superiore sotto molti punti di vista:

1. è più facile concatenare più elementi
2. non devo ricordarmi il tipo del signolo elemento da stampare
3. non utilizza un sistema che rende pesante la lettura (con tutti i % come carattere di escape)

## Input

L'input utilizza sempre un sistema a stream chiamato `cin`

Come il cout ha bisogno della libreria `iostream` ed è nel namespace std.

Per prendere un valore da tastiera bisogna usare il cin con due parentesi angolari `>>`.

Per ricordarvi il verso dovete immaginare che voi state scrivendo nello stream, e poi lo stream lo mette DENTRO la variabile, quindi le frecce vanno verso la variabile.

```cpp
#include <iostream>

using namespace std;

int main(){
  int a;

  cout<<"inserisci un numero"<<endl;

  cin>>a;
}
```

Vista la retrocompatibilità, una volta importata la libreria, è anche possibile utilizzare scanf()

## Condizioni

A questo livello non ci sono rilevanti differenze con C quindi vi rimando alla [pagina dedicata](condizioni)

## Cicli

[Idem con patate](cicli)

## Esercizi svolti

Di seguito degli esercizi svolti passo passo

### Esercizio 1
**Scrivi un programma che prende come input due numeri interi, verifica che non sono uguali e successivamente stampa tutti i numeri compresi tra i due**.

Risolviamo l'esercizio un pezzo alla volta aggiungendo le parti che servono di volta in volta.

Anzitutto vogliamo prendere due numeri da tastiera e verificare che non sono uguali [^](#noGo, "per non appesantire la lettura ignoro tutta la parte sempre uguale delle librerie e del namespace, sto scrivendo direttamente nel main")

```cpp
int a,b;
cin>>a;
cin>>b;

if (a==b){
  cout>>"i numeri sono uguali";
  return;
}
```

Il return fa si che il programma si interrompa. Il caso banale l'abbiamo compeltato, adesso andiamo al cuore del problema vero, stampare tutti i numeri tra questi due estremi.

Per prima cosa possiamo immaginare di partire da uno dei due numeri e avvicinarci all'altro aggiungendo o sottraendo `1` e stampando ogni volta.

Abbiamo quindi pensato ad un sistema iterativo, dove ogni turno devo sommare/sottrarre e stampare.


```cpp
int a,b;
cin>>a;
cin>>b;

if (a==b){
  cout>>"i numeri sono uguali";
  return;
} else {
  int numeroCorrente=a;
  while(true){
    numeroCorrente+-1;
    cout<<numeroCorrente
  }
}
```

Chiaramente al momento è ancora una bozza, non esiste il comando `+-` e non gli ho mai detto di fermarsi, andiamo a risolvere adesso questi due problemi.

Come faccio a fargli capire quando fermarsi? 

Se non troviamo subito una relazione facciamo qualche esempio facile, poi il computer potrà lavorare anche con numeri più *brutti*:

1. 5 e 6, ci sono 0 numeri compresi, sono troppo vicini.
2. 10 e 12, c'è 1 solo numero compreso.
3. 10 e 20, ci sono 8 numeri compresi.

Ho preso questi numeri un pò a caso cercando carattersitiche diverse allargando sempre di più la distanza, sembra che la relazione sia la differenza tra i due numeri meno 1.

Ma per avere senso questo numero deve essere positivo (o al massimo 0), quindi devo sottrarre il più piccolo al più grande.

Avrò quindi bisogno di trovare il massimo e il minimo tra i due, lo metto in due nuove variabili.

Tra l'altro sapendo quale è il minimo posso partire da li e sommare sempre 1, il problema è risolto, ora scriviamolo a codice.

```cpp
int a,b;
cin>>a;
cin>>b;

if (a==b){
  cout>>"i numeri sono uguali";
  return;
} else {
  int minimo, massimo;

  if(a<b){
    minimo=a;
    massimo=b;
  } else {
    minimo=b;
    massimo=a;
  }

  int numeroCorrente=minimo;
  int numeroCicli=massimo-minimo-1;
  for(int i=0; i<numeroCicli; i++){
    numeroCorrente=numeroCorrente+1;
    cout<<numeroCorrente<<endl;
  }
}
```
### Esercizio 2

**Scrivi un programma che dato un numero intero mi restituisca in output il numero delle sue cifre**[^](#noGo, "è bene ricordare che in C++ esiste un limite fisico della grandezza di un intero ed è 2147483647, superato il quale fa il giro e diventa -2147483647. Assumo che inseriamo un input dentro questo limite")

Ragioniamo, come possiamo spiegare a un bambino[^](#noGo, "buona norma per forzarsi al pensiero computazionale tentare di spiegare una procedura a un bambino") di quante cifre è composto un numero, gli chiederemmo di contarle col dito.

Ma visto che il sistema numerico che abbiamo è di tipo posizionale, ogni posizione ha un significato ben preciso, partendo da destra abbiamo le "unità" poi le "decine" poi le "centinaia" poi le "migliaia" poi le "decine di migliaia" e così via.

Il dito passa tutti i valori fino all'ultimo sulla sinistra, dopodichè non vedo nulla scritto sul foglio, ma dal punto di vista matematico quel nulla scritto sul foglio è uno zero, ad esempio se voglio contare il numero di cifre di 214 dirò.

1. 4 unità
2. 1 decina
3. 2 centinaia

se voglio considerarlo come la somma di queste quantità, ma posso anche considerarle già aggregate

1. 214 unità
2. 21 decine
3. 2 centinaia

Certo, perdo informazioni ma se voglio solo sapere il numero di cifre a questo punto basta contare quanti "turni" mi servono per arrivare a "0 migliaia" nel caso di questo esempio.

Il problema è dunque risolto, farò delle divisioni successive con le potenze del dieci (unità, decine, centinaia ecc ecc) finchè non trovo uno 0.

```cpp
int num;
cin>>num;
int potenzaDelDieciAttuale=1;
int numeroCifreAttuale=0;
while(true){
    if(num/potenzaDelDieciAttuale>0){
        numeroCifreAttuale=numeroCifreAttuale+1;
        potenzaDelDieciAttuale=potenzaDelDieciAttuale*10;
    } else{
        break;
    }
}
cout<<"cifre del numero: "<<numeroCifreAttuale<<endl;
```