# Python extended
- [Python extended](#python-extended)
  - [Funzioni](#funzioni)
    - [Return](#return)
    - [local e global scope](#local-e-global-scope)
  - [List](#list)
    - [Inserimento](#inserimento)
    - [Modifica](#modifica)
    - [Eliminazione](#eliminazione)
    - [Ricerca](#ricerca)
    - [Sottoliste](#sottoliste)
    - [Raccomandazioni](#raccomandazioni)
    - [Navigazione](#navigazione)
    - [Applicazione globale](#applicazione-globale)
  - [Dict](#dict)
    - [Inserimento](#inserimento-1)
    - [Modifica](#modifica-1)
    - [Cancellazione](#cancellazione)
    - [Lettura](#lettura)
    - [Navigazione](#navigazione-1)
  - [Lettura di un file](#lettura-di-un-file)
  - [Comprehension string](#comprehension-string)

## Funzioni

In python una funzione ha la seguente firma

```python
def nome(parametro1, parametro2):
  # Qui il vostro codice
```

Si possono avere da 0 a 255 parametri - solitamente averne più di tre inizia a far storcere il naso.

Assicuriamoci che la definizione della funzione viene eseguita PRIMA dell'utilizzo della stessa

I parametri non hanno bisogno di esplicitare il tipo, ma se vogliamo possiamo farlo attraverso i due punti

```python
def nome(par: str):
  print(par)
```

Farlo permette all'IDE di aiutarci attravero l'autocompletamento delle funzioni proprie del tipo di riferimento

```python
def nome(par:str):
  print(par.capitalize())
```

in questo caso quando scriviamo il `.` l'IDE ci mostra tutte le possibili funzioni del tipo `str`, così non siamo costretti ad utilizzare documentazione esterna rischiando di sbagliare a scrivere.

### Return

Non serve indicare il tipo di ritorno della funzione, in ogni caso per far ritornare un valore ad una funzione basta utilizzare la keyword `return`

```python
def aggiungiCinque(valore: int):
  return valore+5

a=5
print(aggiungiCinque(a))
print(aggiungiCinque(3))
```

Python permette di ritornare più di un valore alla volta, basta separarli da virgola, e utilizzare altrettante variabili quando viene chiamata.

```python
def f1():
  a=3
  b=5
  return a,b

var1, var2=f1()
```

In questo caso quindi var1 avrà il valore di 3 e var2 il valore di 5

### local e global scope

Dato che l'utilizzo delle funzioni dobbiamo immaginarle come delle `blackbox` normalmente loro non possono modificare le variabili esterne.

Questo significa che posso utilizzare lo stesso nome per una variabile in diverse funzioni e non avere conflitti

```python
def f1():
  a=3
  return a

def f2():
  a=4
  return a

a=5
print(a)
print(f1())
print(f2())
```

Cioè che succede in una funzione, rimane nella funzione.

L'unico modo per trasferire valori dentro e fuori le funzioni sono attraverso i parametri come input e attraverso i return come output.

In realtà attraverso la keyword `global` si può accedere a variabili al di fuori dal proprio scope, Ma NON FATELO, VIETATO.

## List

Le collezioni permettono di conservare più elementi nella stessa variabile, ne vedremo nel dettaglio 2: `list` `map`

Le liste in python non hanno grandezza apriori, per inizializzarle basta scrivere in questa maniera, la print la riesce a stampare senza problemi

```python
nomeLista=[]
print(nomeLista)
```

posso anche inizializzarla con valori già messi dentro

```python
nomeLista=[4, 2]
print(nomeLista)
```

Le liste python possono contenere anche valori eterogenei, quindi mischiare ad esempio interi con strnighe, ma è buona norma avere liste omogenee.

Per conoscere la lunghezza posso uare la funzione `len()`

```python
nomeLista=[4, 2]
lunghezza=len(nomeLista)
print(lunghezza)
```

### Inserimento

Per inserire un nuovo elemento in una lista, ingrandendo così la sua lunghezza di 1, si utilizza la sua funzione `append(elemento)` in questa maniera

```python
nomeLista=[]
nomeLista.append(3)
print(nomeLista)
```

Se vogliamo inserire l'elemento in un punto specifico utilizzero `insert(posizione, elemento)`

```python
nomeLista=[1,2,3]
nomeLista.append(1,10)
print(nomeLista)
```

in questo caso ho inserito l'elemento 10 alla posizione 1, la posizione di tutti gli elementi alla sua destra è scalata di 1

### Modifica

La modifica è banale

```python
nomeLista=[10,20,30]
nomeLista[2]=55
print(nomeLista)
```

In questo caso ho modificato l'elemento alla posizione due (30) con il valore 55.

Nota bene che se inseriamo un indice superiore alla grandezza della lista scatenerò un errore.

posso utilizzare i numeri negativi per indicare gli ultimi elementi, -1 significa ultimo elemneto, -2 penultimo, eccetera

```python
nomeLista=[10,20,30]
nomeLista[-1]=55
print(nomeLista)
```

Questo codice è perfettamente equivalente a quello di sopra

### Eliminazione

Per eliminare un elemento in un array si usa la funzionalità `pop(indice)`, se non si inserisce l'indice, verrà eliminato l'ultimo elemento.

Questa funzione inoltre ritorna il valore che ha appena tolto dalla lista, quindi posso usarlo come valore per farci quello che voglio

```python
nomeLista=[10,20,30]
a= nomeLista.pop()
print(a, nomeLista)
```

### Ricerca

Se vogliamo sapere se uno specifico elemento si trova all'interno di una lista basta usare l'operatore `in`

```python
nomeLista=[10,20,30,40,50]

print(30 in nomeLista)
```
Il valore di ritorno di questa operazione è un booleano, quindi posso utilizzarla all'interno di un if

```python
nomeLista=[10,20,30,40,50]
if(30 in nomeList):
  print("trovato")
```

Se invece voglio sapere in che indice si trova posso usare la sua funzione `index(element)`, stiamo attenti che mi torna errore se non lo trova, quindi meglio assicurarci prima che esiste

```python
nomeLista=[10,20,30,40,50]
if(30 in nomeList):
  print("l'elemento si trova all'indice", nomeLista.index(30))
```

### Sottoliste

Per fare una sottolista partendo da una lista basta inserire un range tra le quadre come in questo esempio:

```python
nomeLista=[10,20,30,40,50]
nuovaLista=nomeLista[0:2]
print(nuovaLista)
```

NuovaLista conterrà i primi tre elementi, quelli che vanno dall'indice 0 all'indice 3 (3 escluso)

Se volessi prendere tutti gli elementi FINO ad un indice, o TUTTI gli elementi dopo  un indice basta lasciare vuota quella parte `[3:]` `[:2]`

### Raccomandazioni

La lista è un tipo particolare, quindi se inserite la stessa lista in due variabili e poi ne modificate una, in realtà state modificando entrambe, è buona norma quindi fare una copia attraverso la sua funzione `copy()` se vogliamo avere due liste che contengono gli stessi valori per poi modificarne una sola.

```python
nomeLista=[4,3,2]
listaDaPassare=nomeLista.copy()
```

### Navigazione

Per navigare una lista si può utilizzare il ciclo for:


```python
nomeLista=[4,3,2]
for element in nomeLista:
  print(element)
```

in element verrà assegnato ad ogni iterazione il valore dell'elemento corrispondente

Se voglio avere sia l'elemento che l'index posso utilizzare la funzione `enumerate(nomeLista)` in questo modo

```python
nomeLista=[4,3,2]
for element, index in enumerate(nomeLista):
  print(index, element)
```

### Applicazione globale

Se voglio applicare una operazione a TUTTI gli elementi di una lista la sintassi è la seguente

```python
listaRisultante=[operazione(x) for x in nomeLista ]
```

x è la variabile con cui chiama ogni elemento per poter eseguire l'operazione, l'operazione è una operazione, può essere semplice o può essere una funzione.

Se ad esempio ho una lista di stringhe e voglio trasformala in una lista di interi scriverò

```python
nomeLista=["2", "3", "4"]
listaRisultante=[int(x) for x in nomeLista]
print(listaRisulante)
```

Da notare che posso anche sovrascrivere la stessa lista in tal caso scriverò:

```python
nomeLista=["2", "3", "4"]
nomeLista=[int(x) for x in nomeLista]
print(nomeLista)
```

Se ad esempio voglio fare il quadrato di ogni numero presente nella lista scriverò

```python
nomeLista=[2,3,5]
nomeLista=[x*x for x in nomeLista]
print(nomeLista)
```
## Dict

I dizionari sono collezioni in cui gli elementi non sono agganciate ad una posizione, come le liste, ma ad un secondo valore che viene chiamato `chiave`.

In altri linguaggi strutture simili vengono chiamate mappe, o hashmap.

Si riconoscono grazie alle parentesi graffe

```python
myDict={}
print(myDict)
```
posso anche inizialiizzare direttamente il dizionario scrivendo ogni elemento in questa forma `chiave:valore`

```python
myDict={"a": 3, "b": 5}
print(myDict)
```

in questo caso sto utilizzando una chiave in formato stringa ed un valore in formato intero, ma sono libero di utilizzare un pò quello che mi pare.

### Inserimento

Per inserire un elemento in un dict bisogna scriverlo come se fosse la sua posizione.

```python
myDict={}
myDict["ciao"]=4
print(myDict)
```

ho inserito il valore 4 agganciato alla chiave "ciao"

### Modifica

Per modificare un elemento in un dict possiamo sfruttare la stessa sintassi

```python
myDict={}
myDict["ciao"]=4
myDict["ciao"]=5
print(myDict)
```

Ho inserito il valore 4 alla chiave "ciao", poi ho modificato questo valore con 5

### Cancellazione

Esattamente come nelle liste si può utilizzare il `pop()`

### Lettura

La lettura di un dato è intuitiva ma prestiamo attenzione ai possibili errori

```python
myDict={}
myDict["ciao"]=4
print(myDict["ciao"])
print(myDict["hello"])
```

Il sistema mi riesce a stampare la prima stampa, ma fallisce la seconda andando in errore.

Per evitare l'errore si può utilizzare la sua funzione `get()` che se trova l'elemento lo ritorna, ma se non lo trova torna semplicemente `None`

```python
myDict={}
myDict["ciao"]=4
if(myDict.get("ciao")):
  print(myDict.get("ciao"))
if(myDict.get("hello")):
  print(myDict.get("hello"))
```

notare che se il risultato è None esso viene equiparato a `False` mentre se il risutato è un valore vero, esso viene equiparato a `True`

### Navigazione

La navigazione semplice considera solo le chiavi

```python
myDict={"a":3, "b":4}

for element in myDict:
  print(element)
```

in questo caso quindi printa solamente "a" e "b"

Se voglio pure i valori posso decidere se sfruttare la chiave in questa maniera:

```python
myDict={"a":3, "b":4}

for element in myDict:
  print(myDict[element])
```

In alternativa, utilizzare la sua funzione `items()`

```python
myDict={"a":3, "b":4}

for key, value in myDict.items():
  print(key, value)
```

Da notare che key e value non sono parole chiavi, ma semplicemente nomi di variabili con le quali posso lavorare all'interno del ciclo. La variabile alla prima posizione rappresenta la chiave, e quella in seconda rappresenta il valore

## Lettura di un file

Ci sono tanti metodi per aprire un file, io vi consiglio il seguente

```python
file = open(path, "r")
rows = []
for line in file:
  rows.append(line.rstrip("\r\n"))
return rows
```

Leggiamolo elemento per elemento

```python
file = open(path, "r")
```

Questa riga inserisce dentro la variabile file uno `stream` in lettura del file che trova al `path`

Non abbiamo ancora visto gli stream, ma consideratele collezioni di cui non sappiamo la fine finchè non proviamo a leggere l'elemento successivo.

```python
rows = []
for line in file:
  rows.append(line.rstrip("\r\n"))
return rows
```

Questa seconda parte, inizializza una lista vuota, e per ogni linea che incontra nel file essa viene aggiunta alla lista dopo avergli tolto "l'accapo"

A questo punto avete tutto il contenuto in una lista di righe.

## Comprehension string

Se invece avete una stringa di questo tipo "12 23 42 35 12". E volete trasformarla in una lista di interi potete fare così

```python
stringaBase="12 23 42 35 12"
listaDiStringhe=stringaBase.split(" ")
listaDiInteri=[int(x) for x in listaDiStringhe]
```

la funzione `split(character)` applicata ad una string la divide in una lista di stringhe, prende a parametro l'elemento separatore, in questo caso `" "` ma in altri contesti poteva essere una virgola o un trattino.