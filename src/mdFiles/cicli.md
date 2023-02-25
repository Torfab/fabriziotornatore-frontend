---
title: Cicli
previousPage: condizioni - Condizioni
nextPage: sintesi - Sintesi e linguaggi

---

# Cicli

- [Cicli](#cicli)
  - [Nucleo](#nucleo)
  - [Sintassi](#sintassi)
  - [Annidamento](#annidamento)
  - [Controllo del ciclo](#controllo-del-ciclo)
    - [Break](#break)
    - [continue](#continue)
  - [Sintassi alternativa](#sintassi-alternativa)
    - [For](#for)
    - [Do-While](#do-while)
  - [Comprensione Pratica](#comprensione-pratica)


## Nucleo

Possiamo scrivere porzioni di codice che vengono **RIPETUTE** multiple volte finchè una condizione è verificata.

Sostanzialmente corrisponde al concetto italiano di `Mentre` è vera una condizione `esegui ripetutatemente` questo blocco di codice.

Concettualmente quindi abbiamo due entità:
 
1. Una `domanda` la cui risposta può essere esclusivamente un booleano, quindi `true` o `false`
2. Un `blocco di codice` che viene eseguito ripetutamente ogni volta che la `domanda` vale `true`

Nota bene che la domanda viene controllata in alcuni momenti specifici e non continuamente. 

SOLO quando ha finito di eseguire il blocco di codice, subito prima di ricominciare, viene ricontrollata la condizione di ripetizione.

Facciamo un esempio, la sintassi è quella del C:

```cpp
int i=0;
while(i<5){
  printf("io verrò ripetuto 5 volte");
  i=i+1;
}

i=0;
while(i>3){
  printf("io non verrò mai eseguito");
}

i=1;
while(i<=2){
  printf("io verrò ripetuto 2 volte");
}
```

Nota bene: per convenzione la variabile che si usa per manovrare i cicli si chiama "i" che sta per "iterazione" (sinonimo di ripetizione). teniamo a mente che al netto della convenzione è una variabile come qualunque altra e potremmo quindi chiamarla come vogliamo.

Sinonimi: I cicli in informatica hanno molti sinonimi più o meno intercambiabili:

- `Ciclo` - indica sia tutta l'esecuzione che un singolo turno in base al contesto
- `Iterazione` indica un singolo turno
- `Loop` - indica tutta l'esecuzione
- `Ripetizione` - indica sia tutta l'esecuzione che un singolo turno in base al contesto

## Sintassi

In C la sintassi per i cicli è 
```cpp
while (condizione di ripetizione) {}
```

Al posto di `condizione di ripetizione` devo avere un booleano o un *qualcosa* che abbia come risposta un booleano.

Questo qualcosa è tipicamente una comparazione.

Ci rendiamo subito conto che il while assomiglia molto all'if, la differenza sostanziale è la parte della ripetizione. 

A tal proposito ci rendiamo pure conto che se si sbaglia a scrivere la condizione si rischia di finire in un ciclo infinito, ad esempio.

```cpp
a=1
while (a>0) {
  printf("io vengo ripetuto all'infinito");
}
```

Questa cosa è tipicamente un errore, ma in alcuni contesti è utilizzata volontariamente, ad esempio alcuni robot che devono eseguire sempre la stessa routine contengono tutto il codice all'interno di una ciclo infinito.

```cpp
while (true) {
  printf("io sono il loop di un robot");
}
```

Avendo come condizione un "true" hardcodato, è impossibile uscire da questo ciclo, e il codice verrà eseguito ripetutamente fintanto che il robot è alimentato.

## Annidamento

esattamente come per le condizioni semplici, anche nel caso dei cicli posso annidare tutto il codice che voglio, nello specifico posso annidare ulteriori cicli o condizioni semplici

```cpp
int i=0;
while(i<3){
  int j=0;
  while(j<10){
    printf("io verrò ripetoto i*j volte")
    j=j+1;
  }
  i=i+1;
}
```

Il codice si comporta in maniera consistente quindi se all'interno di un ciclo ve ne è uno annidato, prima verrà completamente risolto quello annidato e poi si continua col codice. 

In questo caso quindi il ciclo interno dura 10 turni e quello esterno 3, per un totale di 3 volte 10 turni.

## Controllo del ciclo

Esistono due parole chiave che ci danno pieno controllo del ciclo `break` e `continue`

### Break

Quando all'interno di un ciclo si scrive la keyword Break, il programma esce dal blocco di codice immediatamente e continua l'esecuzione del programma, ad esempio:

```cpp
int i=0;
while(i<10){
  if(i==4){
    break;
  }
  i=i+1;
}
//dopo il while la variabile "i" conterrà il valore 4

```

in questo caso il ciclo durerebbe 10 turni, ma esattamente al turno 5, la variabile i varrà 4, quindi viene eseguito il break ed l'esecuzione del ciclo viene interrotto prematuramente.

Da notare che nel caso di while annidati il break interrompe solo il primo che incontra.

### continue

Quando all'interno di un ciclo si scrive la keyword Continue, il programma smette di eseguire il blocco di codice e va direttamente all'iterazione successiva. 

Notare che se utilizziamo una variabile per tenere il conto del turno questa deve essere aggiornata prima di entrare nel continue o contestualmente.

```cpp
int i=0;
while(i<10){
  i=i+1;
  if(i==4 || i==5){
    continue;
  }
  printf("io dovrei essere eseguito 10 volte")
}

```

In questo caso il ciclo durerebbe 10 turni, ma due dei cicli non vengono eseguiti completamente, nello specifico non verrà eseguita la print in quei casi, quindi pur eseguendo TECNICAMENTE 10 cicli, 2 iterazioni terminano prematuramente ed avremo solo 8 stampe.

Da notare che nel caso di while annidati il continue fa passare al ciclo successivo solo il primo che incontra
## Sintassi alternativa

Vi sono due sintassi alternative al while, la prima è il `for`, la seconda è il `do-while`

### For

Il for é molto molto comune ma sostanzialmente si comporta ESATTAMENTE come il while. La sintassi però è molto più compatta.

```cpp
for(int i=0; i<3; i=i+1){
  printf("verrò eseguito tre volte")
}
```

Sostanzialmente il for contiene 3 elementi separati da `;`:
1. Il primo elemento contiene una fase di setup, solitamente inizializziamo una variabile di iterazione a 0 o a 1.
2. Il secondo elemento contiene la condizione che avrei messo dentro il while.
3. Il terzo elemento contiene una riga di codice che viene eseguita al termine del singolo ciclo.

Scrivendo l'analogo del codice sopra sottoforma di while avrei dovuto scrivere in forma estesa:

```cpp
int i=0;
while(i<3){
  printf("verrò eseguito tre volte")
  i=i+1;
}
```

Dato che fanno oggettivamente la stessa cosa la differenza è fatta per i programmatori e non per i computer.

Dal punto di vista del programmatore quando vede un for immaigna "Conosco apriori quante volte verrà eseguito questo ciclo".

Quando vede un while immagine "NON so apriori quante volte verrà eseguito questo ciclo, ad un certo punto immagino che la condizione sarà false"

### Do-While

Prende anche il nome di Ripetizione PostCondizionata, costringe il codice a venir eseguito ALMENO una volta prima di controllare la condizione

```cpp
int i=0;
do{
  printf("vengo eseguito almeno una volta")
} while(i>0)
```

Quindi anche se in questo caso il programma dovrebbe eseguire 0 cicli, dato che la condizione viene valutata alla fine e non all'inizio, il primo ciclo verrà eseguito lo stesso.

Anche se TECNICAMENTE questo ciclo è diverso dal while, è usato molto di rado
## Comprensione Pratica

1. Quali sono le 3 sintassi utilizzaibili per eseguire dei cicli?
2. A cosa serve la keyword break? A cosa serve la keyword continue?
3. Scrivi, usando un ciclo, un programma che mi stampi ">" poi ">>" eccetera eccetera fino a 8
4. Continua il programma precedente con un secondo ciclo che invece tolga ogni turno un ">" fino a che non ce ne sia neanche uno