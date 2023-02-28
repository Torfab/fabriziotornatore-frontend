# Python

- [Python](#python)
  - [Introduzione](#introduzione)
  - [Commenti](#commenti)
  - [Istruzioni](#istruzioni)
  - [Variabili](#variabili)
    - [I booleani](#i-booleani)
  - [Output](#output)
  - [Input](#input)
  - [Condizioni](#condizioni)
    - [Logica booleana](#logica-booleana)
    - [Annidamento](#annidamento)
  - [Cicli](#cicli)
    - [While](#while)
    - [Do While](#do-while)
    - [For](#for)
  - [Esercizi svolti](#esercizi-svolti)
    - [Esercizio 1](#esercizio-1)
    - [Esercizio 2](#esercizio-2)
    - [Esercizio 3](#esercizio-3)

## Introduzione

Python è un linguaggio `interpretato` ovverosia è un linguaggio che non si interfaccia direttamente con il sistema operativo, ma gira su di un programma, chiamato interprete, sarà quest'ultimo ad interfacciarsi con il sistema operativo.

La forza di Python ad oggi è la sua facilità di scrittura. 

Poche volte litigherete con il linguaggio perchè sapete esattamente cosa volete fare ma non riuscite a farglielo capire.

L'IDE che io consiglio su cui lavorare si chiama `spyder` e lo potete scaricare da [questo link](https://www.spyder-ide.org/)

In alternativa il buon vecchio `vscode`, inserito il plugin di python, non vi deluderà, potete scaricarlo da [questo link](https://code.visualstudio.com/)

Se non volete scaricare nulla sul pc esistono anche degli editor online, uno vale l'altro, li trovate con la parola chiave `sandbox`. Quindi cercherete `sandbox python` e tra i primi risultati troverete ciò che vi serve.

## Commenti

I commenti in linea in python partono dal simbolo `#`

I commenti multi riga sono incapsulati da tre [backtick](https://it.wikipedia.org/wiki/Accento_grave)

## Istruzioni

Le istruzioni in python vengono distente dalle righe. Ogni rigo contiene UNA singola istruzione. 

Si possono utilizzare i `;`[^](#noGo "io personalmente li uso spesso") se li ritenete più ordinati ma non servono.

## Variabili

Python possiede i tipi di variabili, ma tende a nasconderli all'utente, una variabile è del tipo di valore che provi a metterci dentro.

Quando si sovrascrive una variabile anche il tipo sottostante cambierà

Inoltre le variabili vengono inizializzate direttamente durante il loro primo utilizzo (in scrittura)

```python
a=3 
# Questa variabile da adesso sarà di tipo intero

a="ciao" 
# Questa variabile è stata sovrascritta e sarà di tipo Stringa

b=3.3
# Questa variabile è di tipo float

c=True 
# Questa variabile sarà di tipo boolean

d="4"
#Questa variabile sarà di tipo stringa
```

Possiamo renderci conto dei tipi quando il sistema va in errore, ad esempio se proviamo a sommare un intero ed una stringa

```python
a=3+"4"
```

L'errore risultante sarà

```
"@unsupported operand type(s) for +: 'int' and 'str'"
```

Possiamo però `convertire` i valori nel tipo che ci interessa attraverso le funzioni `int()` `str()` `float()`

quindi riscrivendo

```python
a=3+int("4")
```

funzionerà, e ad `a` verrà asesgnato il valore 7.

Chiaramente non tutte le conversioni sono valide, se provate a scrivere

```python
a=int("ciao")
```
Il sistema andrà in errore poichè non sa convertire una scritta che contiene lettere in un numero.

### I booleani

I booleani in Python si scrivono con la prima lettera maiuscola `True`, `False`

## Output

Per stampare qualunque valore basta utilizzare la funzione `print()` ed inserire all'interno, il valore, la variabile o la funzione che vogliamo far stampare.

Se ho più di un valore possiamo semplicemente separarli da virgola

```python
print(0)
print("ciao", 40)
```

La funzione print, nativamente va a capo ogni volta che viene chiamata, se io volessi per qualche motivo far stampare di seguito bisogna inserire il parametro `end=''`, così sovrascrivo il carattere finale per andare a capo, con una stringa vuota.

```python
print("ciao", end='')
print("a", end='')
print("tutte")
# Appariranno scritte su di un unico rigo
```

Python non si fa alcun problema a stampare tutti i tipi di variabile anche se non sono stringhe.

## Input

L'input standard da tastiera di python è semplicemente
```python
a=input()
```

ed inserirà il valore immesso da tastiera nella variabile a.

Possiamo inserire un prompt prima dell'inserimento della variabile scrivendo

```python
a=input("inserisci un numero")
```

Tutti i valori immessi tramite input vengono considerati `stringhe`, se vogliamo considerarli numeri bisogna incapsularli con le funzioni scritte sopra

```python
a=input()
a=int(a)
# Alternativamente, dato che le operazioni vengono eseguite dalla più interna alla più esterna, possiamo concatenare in un solo rigo
a=int(input())
```

## Condizioni

Le condizioni in python si scrivono in questo modo

```python
if(condizione):
  print("ciao")
```

La sintassi è molto simile a quella del C ma cambia il modo in cui si scrivono i blocchi di codice.

I blocchi di codice vengono annunciati da `:` e sfruttano l'[indentazione](https://it.wikipedia.org/wiki/Indentazione) per capire quali righe stanno dentro e quali no, facciamo un esempio:

```python
a=int(input())
if(a<3):
  print("a è minore di tre")
  print("la condizione è vera")
  print("evviva")
else:
  print("a è maggiore o uguale a 3")
  print("la condizione è falsa")
  print("falsa ti dico")
print("io non so niente")
print("vengo eseguito in entrambi i casi")
```

le righe spostate a destra fanno parte del blocco di codice che inizia ai due punti, alla fine dell'if ho pure inserito l'else, notate che si trova allo stesso livello dell'if, ed avrà il suo personale blocco di codice.

Non c'è una regola su quanti spazi inserire per identificare un blocco di codice, l'importante è che siate consistenti, se decidete che il blocco di codice si fa ogni due spazi, dovete sempre usare due spazi, se scegliete quattro, quattro.

### Logica booleana

Per indicare i `and` `or` e `not` logici, la sintassi é letteralmente inglese

```python
a=int(input())
if(a<3 and a>1):
  print("a vale 2")

if(not False):
  print("io sono sempre vero")
```

### Annidamento

Per distinguere i blocchi di codice annidati, semplicemente si va ancora più a destra con l'indentazione

```python
a=int(input()):
b=bool(input()):
if(a<3):
  if(b):
    print("vero - vero")
  else:
    print("vero - falso")
else:
  print("falso - ?")
```

L'esempio è fatto con due livelli di annidamento ma ne potete avere fino ad un massimo di venti - se vi avvicinate a questo limite probailmente dovreste ripensare alla soluzione del problema che vi ci ha portato

## Cicli

### While
la sintassi del ciclo While é standard al netto del blocco di codice

```python
while(condizione):
```

Ricordatevi di stare attenti a non generare loop infiniti, in tal caso stoppate la console premendo `Ctrl + C`

### Do While

In python non esiste una funzione di Do - While built-in

### For

In python ha una sintassi sua.

```python
for element in collection:
  #qui il codice del loop
```

Non abbiamo ancora incontrato le collezioni ma potete anticipare andando in [questa pagina che però ancora non esiste](/didattica/collezioni)

Per quello che ci interessa sapere in questo momento, per fare un ciclo for che dura N turni si scriverà

```python
n=5
for element in range(n):
```

la parola element è il nome della variabile del turno, in questo caso al primo girò varrà 0, al secondo 1, al terzo 2 e così via.

dato che è un nome di una variabile possiamo chiamarla come vogliamo.

Se vogliamo ad esempio simulare una tabella

```python
numeroRighe=10
numeroColonne=10
for colonna in range(numeroColonne):
  for riga in range(numeroRighe):
    print("mi trovo alla riga", riga, "e colonna", colonna)
```
Questo programma stamperà 100 righe indicando sempre una riga e colonna diversa - verrà utilizzato per navigare tabelle

## Esercizi svolti

Di seguito degli esercizi svolti passo passo

### Esercizio 1
Scrivi un programma che invita l'utente a inserire da tastiera una sequenza di numeri finchè la loro somma non supera il valore di 200 e visualizza a schermo il "numero dei numeri" inseriti.

Risolviamo l'esercizio un pezzo alla volta aggiungendo le parti che servono di volta in volta.

Anzitutto vogliamo che l'utente scriva ripetutamente numeri

```python
while(True):
  val=int(input())
```

In questo momento il ciclo è infinito, cerchiamo subito condizione di uscita, devo tenere traccia della somma di tutti i numeri inseriti fino a quel momento.

NOTA presto attenzione se l'estremo è incluso o escluso, ovverosia se arrivo esattamente a 200 devo fermarmi o continuare?

```python
accumulatore=0
while(accumulatore<=200):
  val=int(input())
  accumulatore=accumulatore+val
```

OK, a questo punto devo tenere traccia di quante iterazioni fa il mio ciclo e poi stampare il risultato

```python
accumulatore=0
i=0
while(accumulatore<=200):
  val=int(input())
  accumulatore=accumulatore+val
  i=i+1
print(i)
```

### Esercizio 2

Scrivi un programma che legge un numero NUM ed esegue il calcolo della somma dei primi NUM numeri interi positivi pari.

Risolviamo al solito un pezzo alla volta.

L'utente deve inserire un NUM e io devo effettuare un loop della durata di NUM turni.

```python
NUM=int(input())
for i in range(NUM):
  print("ancora non so cosa fare")
```

Ok, ora aggiungo il fatto che ogni turno finisce quando trovo il numero pari successivo, ho bisogno di una variabile che mi tenga traccia del numero a cui sono arrivato.

```python
NUM=int(input())
numeroAttuale=0
for i in range(NUM):
  numeroAttuale=numeroAttuale+2
```

Ok, ad ogni turno il programma per prima cosa aggiornerà il numero attuale, partendo da 0 al primo ciclo il numero varrà quindi 2, al secondo 4 eccetera.

Adesso non resta che sommare questo valore in una variabile di accumulo e stamparla

```python
NUM=int(input())
numeroAttuale=0
accumulatore=0
for i in range(NUM):
  numeroAttuale=numeroAttuale+2
  accumulatore=accumulatore+numeroAttuale
print(accumulatore)
```

### Esercizio 3
Scrivi un programma che legga da tastiera una sequenza di lunghezza ignota a priori di numeri interi positivi Il programma, a partire dal primo  numero introdotto, stampa ogni volta la media di tutti i numeri introdotti. Termina quando il numero inserito è negativo

Ragioniamo, dato che stiamo parlando di una ripetizione, e il numero di ripetizioni è ignoto a priori, sono costretto ad usare il while.

```python
while(True):
  print("ancora non so che fare")
```

Dato che il loop è infinito cerchiamo subito la condizione di uscita. Ogni turno l'utente inserisce un numero il loop si rompe al primo numero negativo inserito

```python
numeroInserito=0
while(numeroInserito>=0):
  numeroInserito=int(input())
```

Nota che inizializzo il valore solo per entrare dentr il ciclo, ma una volta dentro per prima cosa lo sovrascrivo, devo solo premurarmi di mettere un valore iniziale buono, in questo caso non negativo.

Per fare la media devo tenere traccia, della somma di tutti i numeri, e del numero di numeri (equivalente al numero di turni)

```python
numeroInserito=0
accumulatore=0
i=0
while(numeroInserito>=0):
  numeroInserito=int(input())
  accumulatore=accumulatore+numeroInserito
  i=i+1
  print(accumulatore/i)
```

L'esercizio sembra completo, ma mi rendo conto che quando inserisco un numero negativo il programma mi stampa la media considerando questo valore non valido. 

Bisogna interrompere il ciclo manualmente PRIMA che possa stampare la media, possibilmente anche PRIMA che aggiorno i valori.

```python
numeroInserito=0
accumulatore=0
i=0
while(True):
  numeroInserito=int(input())
  if(numeroInserito<0):
    break
  accumulatore=accumulatore+numeroInserito
  i=i+1
  print(accumulatore/i)
```
