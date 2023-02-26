---
title: Condizioni
---
# Condizioni 

- [Condizioni](#condizioni)
  - [Flusso di esecuzione](#flusso-di-esecuzione)
  - [Nucleo](#nucleo)
  - [Utilizzo variabili all'interno della condizione](#utilizzo-variabili-allinterno-della-condizione)
  - [else](#else)
  - [Annidamento](#annidamento)
  - [Logica booleana](#logica-booleana)
  - [Indentazione](#indentazione)
  - [Comprensione Pratica](#comprensione-pratica)

## Flusso di esecuzione

Il codice viene eseguito in ordine, dalla prima riga all'ultima.

Questo concetto viene chiamato Flusso di esecuzione, il flusso standard è dall'alto verso il basso, riga per riga.

In alcuni casi però, ci serve un modo per variare questo comportamento.

Questi casi rientrano in Due macro categorie `Condizioni` e `Cicli`.

## Nucleo

Possiamo scrivere porzioni di codice che vengono eseguite **SOLAMENTE** a patto che una condizione sia verificata.

Sostanzialmente corrisponde al concetto italiano di `se` si verifica una condizione `allora` esegui questa porzione

Concettualmente quindi abbiamo due entità:
 
1. Una `domanda` la cui risposta può essere esclusivamente un booleano, quindi `true` o `false`
2. Una porzione di codice - definita `blocco di codice` che viene eseguito solamente quando la domanda posta ha come risultato `true`

Facciamo un esempio, la sintassi è quella del C:

```cpp
if(4>5){
  printf("prima stampa");
}

if(5>2){
  printf("seconda stampa");
}
```


## Utilizzo variabili all'interno della condizione

```cpp
if(4>5){
  printf("prima stampa");
}

if(5>2){
  printf("seconda stampa");
}
```

Il codice esempio qui sopra quindi stamperà solamente "seconda stampa", dato che la prima condizione "4>5" è falsa, mentre la seconda condizione "5>2" è vera.

Chiaramente se uso de numeri fissi la prima condizione sarà SEMPRE falsa, e la seconda SEMPRE vera e quindi questa funzionalità avrebbe poco senso, possiamo però utilizzare delle variabili.

```cpp
if(eta>=18){
  printf("posso prendere la patente");
}
if(eta<18){
  printf("non posso ancora prendere la patente");
}
```

Se immaginiamo di aver inserito la nostra età[^](#noGo "il linguaggio C mal tollera le lettere accentate, quindi consiglio di evitarle quando possibile") all'interno della variabile `eta`, non possiamo sapere apriori quale delle due condizioni sarà vera o falsa, ma dipenderà dal valore che ho inserito dentro la variabile.

## else

Nel caso in cui, come qui sopra, ho due condizioni esattamente opposte, subito dopo la fine del blocco di codice dell'if, posso scrivere la parola chiave else, ed inserire un blocco di codice contente il codice che voglio far eseguire quando la condizione risulta falsa.

Sostanzialmente equivale alla parola italiana `ALTRIMENTI`.

Quindi riscrivendo il codice qui sopra avrò

```cpp
if(eta>=18){
  printf("posso prendere la patente");
} else {
  printf("non posso ancora prendere la patente");
}
```

## Annidamento

Dentro il blocco di codice possiamo scrivere tutto il codice che vogliamo, anche ulteriori condizioni, in questo caso vengono chiamati `if annidati`, questa cosa la possiamo fare teoricamente infinite volte, ricordiamoci però di chiudere tutte le graffe.

```cpp
if(numeroFogli>0){
  if(numeroPenne>0){
    printf("posso scrivere");
  }
}

```
In questo caso anzitutto controlliamo se possediamo fogli, e se li possediamo a quel punto controlliamo di possedere anche delle penne, e solo a quel punto stacmo a schermo "posso srivere".

## Logica booleana

Con logica booleana si intende quella serie di operazioni che possono essere eseguite su valori booleani.

Queste operazioni sono `and`, `or`, `not`, i risultati di queste operazioni sono anch'essi valori booleani.

L'operazione `And` viene indicata con `&&` Ha due operandi e risulta true solo se entrambi gli operandi sono true [^](#noGo "il tipo di tabelle qui di seguito prendono il nome di tabelle di verità"), corrisponde all'italiano logico `e`

|Op1|  Op2 |Risultato|
|....|.....|.....|
|True| True | *True*|
|False| True | False|
|True| False | False|
|False| False | False|

L'operazione `Or` viene indicata con `||` Ha due operandi e risulta true in tutti quei casi in cui almeno un operando vale true, corrisponde all'italiano logico `o`

|Op1|  Op2 |Risultato|
|....|.....|.....|
|True| True | *True*|
|False| True | *True*|
|True| False | *True*|
|False| False | False|

L'operazione `Not` viene indicata con `!` Ha UN operando e ribalta il suo valore.

|Op1| Risultato|
|....|.....|
|True|  False|
|False|  *True*|

Facendo l'esempio di sopra, adesso diventa

```cpp
if(numeroFogli>0 && numeroPenne>0){
  printf("posso scrivere");
}
```
L'esecuzione sarà identica a prima dato che, essendo in and,  stamperà "posso scrivere" solamente quando entrambe le sotto condizioni sono vere
```cpp
if(lampadineAccese>0 || candeleAccese>0){
  printf("riesco a vedere di notte");
}
```
L'unico caso in cui non venga stampata la scritta è che io non abbia a disposizione ne lampadine ne candele

```cpp
if(!(4>5)){
  printf("anche se la condizione è falsa, l'operatore not la ribalta");
}
```
Nota bene che l'operatore not `!` si inserisce a sinistra di un booleano, dato che in questo caso non avevamo un booleano ma una operazione, l'abbiamo incapsulata tra parentesi cosicchè venisse prima risolta e poi ribaltata.

## Indentazione

In C gli spazi e i ritorni a capo vengono ignorati dal computer, servono a noi persone per riuscire a leggere bene i codice e non fare confusione.

Nello specifico ogni qualvolta entriamo in un blocco di codice diverso, per convenzione, si è deciso di inserire 2 spazi[^](#noGo "alcuni utilizzano 4 spazi, altri utilizzano il tasto tabulatore. Al netto della quantità esatta che, a patto si sia consistenti, può variare. Un pò di spazio và lasciato") in tutte le linee di codice appartenente a quel blocco di codice, e per ogni blocco annidato, altri 2 spazi annidati.
Facendo un esempio estremo:

```cpp
if(true){
  if(true){
    if(true){
      if(true){
        printf("sono dentro 4 if annidati");
      }
    }
  }
}
```
Scrivere in questa maniera ci farà evitare di perdere il conto con le parentesi da chiudere, dato che ogni parentesi si chiude nella stesas colonna dell'if di apertura.
Inoltre, ci fa rendere conto di quale elemento è dentro quale blocco di codice. 

## Comprensione Pratica

1. Quali sono i 3 operatori Booleani?
2. Quali sono le operazioni di comparazione?
3. Come si riconosce un `blocco di codice` in c?
4. Scrivi un progamma che, se la variabile "countDown"[^](#noGo "Per adesso assegna tu un valore") è uguale a 0, stampa "buon Compleanno", altrimenti "ritenta Domani"