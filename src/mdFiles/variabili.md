---

title: Variabili
nextPage: controlloDiFlusso - Condizioni e Cicli

---
# Variabili


- [Variabili](#variabili)
  - [Introduzione](#introduzione)
  - [Operazioni](#operazioni)
  - [Tipi](#tipi)
  - [Valori non inizializzati](#valori-non-inizializzati)
  - [Costanti](#costanti)
  - [Naming](#naming)
  - [Comprensione Pratica](#comprensione-pratica)


## Introduzione 

Il primo concetto fondamentale nel mondo informatico è il concetto di "**Variabile**".

Una variabile è una entità informatica che può contenere un valore.

Si chiama variabile perchè possiamo sovrascrivere il valore contenuto quante volte vogliamo.

Quando servirà tale valore si utilizzerà tramite il nome della variabile che lo contiene.

Un'analogia pratica per capire questo concetto è uno scatolone.

![un valore inserito dentro uno scatolone](/svg/variabili-box.svg)

Possiamo immaginare uno scatolone con un nome, ad esempio `a` e dentro inseriamo un valore, ad esempio `5`

Quindi scriveremo in questo modo[^](#noGo "Nota bene che nei diversi linguaggi di programmazione la sintassi potrebbe variare"):

``` js
a=5;
```

Nota bene che il simbolo `=` non indica una uguaglianza matematica, bensì una `assegnazione`[^](#noGo "il termine inserimento potrebbe suonare più appropriato vista l analogia dello scatolone, ma questo termine è utilizzato da altre entità ed è meglio evitare confusione").

Il codice qui sopra si traduce in: "è stato assegnato il valore 5 alla variabile chiamata a"

Dato che una variabile può contenere un valore, possiamo assegnare il valore di una variabile ad un'altra variabile, sostanzialmente copiandolo.

![un valore di uno scatolone inserito dentro un altro scatolone](/svg/variabili-box2.svg)

```cpp
a=5;
b=a; 
//da questa riga in poi il valore contenuto in b è 5.
//il valore di a invece rimane invariato a 5, la lettura non lo modifica.
```

Seguendo l'analogia si legge quseto meccanismo così: 
"Apro lo scatolone a, leggo il valore che è contenuto dentro e ne assegno una copia in b"

Ultimo esempio di assegnazione semplice è il caso in cui decido di sovrascrivere il valore di una variabile.

```cpp
a=5;
// In questo momento la variabile a vale 5
a=7
// Da adesso in poi la variabile a vale 7, il vecchio valore non è più recuperabile.
```

E se usassi questa variabile dipendentemente da dove sono arrivato nel codice conterrà un valore diverso

```cpp
a=5;
b=a;
a=7
c=a;
//anche se sia b che c prendono una copia del valore di a

//quando viene eseguita la riga b=a, in quel momento a è uguale a 5 quindi b sarà uguale a 5

//quando viene eseguita la riga c=a, in quel momento a è uguale a 7 quindi c sarà uguale a 7
```


## Operazioni

In una variabile possiamo anche inserire il risultato delle operazioni, ad esempio.

```cpp
a=5+3;
a=10-2;
```

Le operazioni tipiche quando si utilizzano i numeri interi sono `+` `-` `*` `/` `%` [^](#noGo "Quando lavori con numeri interi anche la divisione sarà intera. Ad esempio 5/3 sarà uguale a 1 non avendo a disposizione i numeri con la virgola. Se invece vuoi sapere solamente il resto di una divisione possiamo utilizzare il simbolo %, quindi 5%3 sarà uguale a 2, poichè 5/3 dà resto 2, questo ci tornerà molto utile quando vorremo sapere se un numero è pari o dispari")

Possiamo combinare queste operazioni quante volte vogliamo, per assicurarci dell'ordine in cui vengono eseguite utilizzeremo le parentesi tonde. Anche se avremo più livelli utiizzeremo sempre le tonde.

```cpp
a=(5+3)-22;
a=((5-10)*(3/2))+1;
```

Nota che a prescindere da tutto durante una assegnazione per prima cosa viene completamente risolta la parte a destra della stessa, e solo quando ho un risultato chiaro viene passato alla variabile.

All'interno delle operazioni possiamo utilizzare le variabili al posto dei numeri fissi.

```cpp
a=5;
b=a+3;
c=a+b;
//in questo caso il valore di b sarà uguale a 8 e quello di a rimane 5.
//Infine il valore di c sarà uguale ad 8+5 -> 13
```

Puoi sovrascrivere il valore di una variabile utilizzando se stessa nell'operazione, ricordiamo che l'operazione viene prima completamente risolta e solo il risultato andrà ad inserirsi nella variabile.

![un valore di uno scatolone usato in una operazione il cui risultato va nello stesso scatolone](/svg/variabili-box3.svg)

```cpp
a=5;
a=a+1;
//Prima viene eseguita l'operazione quindi a+1 -> 5+1 -> 6
//Una volta trovato il risultato viene reinserita nella variabile a
```

## Tipi

Finora tutti gli esempi mostrati utilizzavano numeri interi.

In realtà le variabili possono contenere valori di diversi tipi. Tra i più comuni abbiamo:

- `int` per i numeri interi.
- `float`[^](#noGo "Il termine è il diminuitivo di Floating Point che si può tradurre in italiano come, numeri a virgola mobile") per i numeri con la virgola
- `bool` per i valori [booleani](https://it.wikipedia.org/wiki/Algebra_di_Boole) (true, false)
- `char` per una singola lettera[^](#noGo "Le scritte vengono implementate come sequenze di singole lettere")

Possiamo immaginarli come scatoloni con una forma specifica, solo i valori che hanno la stessa forma possono essere inseriti in queste variabili

![Scatoloni Specifici divisi per tipi](/svg/variabili-box4.svg)


Diversi linguaggi di programmazione hanno diversi approcci sull'utilizzo dei tipi, nello specifico:

- I tipi devono sempre essere indicati esplicitamente. Linguaggi che utilizzano questo approccio `C`, `C++`, `Rust`
- I tipi sono inferiti implicitamente appena inserisci un valore al loro interno ma molte operazioni tra tipi diversi danno errore. Esempi di linguaggi che utilizzano questo approccio `Python`
- I tipi sono inferiti implicitamente appena inserisci un valore al loro interno, e il linguaggio fa del suo meglio per effettuare operazioni tra tipi diversi. Esempi di linguaggi che utilizzano questo approccio `Javascript`

Per chiarezza focalizziamoci sull'approccio più stringente.

Quando si scriverà codice per prima cosa dobbiamo dirgli "che forma ha lo scatolo", e dopo inseriamo il valore.

```cpp
int a;
a=5+3;
```
In realtà queste due righe di codice si possono unire in una sola.

```cpp
int a=5+3;
```

I due esempi qui sopra sono a tutti gli effetti equivalenti.

Qui di seguito esempi su tutti gli altri tipi elencati

```cpp
float b;
b = 4.32;
// notare che si usa il . e non la , poichè internazionalmente la convenzione è invertita

char c;
c = 'k'; 
// notare che per far capire al sistema che stiamo inserendo una scritta incapsuliamo la lettera tra apici '

bool d;
d = true;
//gli unici valori che può contenere bool sono true e false
```

Tutte le operazioni devono rimanere strettamente all'interno dello stesso tipo, quindi si possono sommare solamente interi con interi o sottrarre numeri con la virgola insieme ad altri numeri con la virgola, ed è impossibile sommare una  lettera con un numero.

In realtà ci sono casi in cui è possibile violare questa regola, ma verranno trattati in un secondo momento.

## Valori non inizializzati

Prendendo il seguente esempio:

```cpp
int a;
a=5+3;
```

potremmo chiederci cosa succederebbe se tra queste due righe io provassi ad utilizzare la variabile `a`

```cpp
int a;
int b=a;
a=5+3;
```

Nel momento in cui provo ad utilizzare la variabile a nella riga `b=a` il sistema andrà in errore.

È impossibile utilizzare una variabile priva di valore, in termini tecnici "non inizializzate".

## Costanti

Potremmo voler conservare un valore in una variabile che non può essere variata.

In questo caso possiamo utilizzare le costanti attraverso la parola chiave `const`.

come in questo esempio:

```cpp
const int a = 5;
```

Da questo momento in poi la variabile a non potrà mai essere sovrascritta o si incorrerà in errore.

L'ordine delle parole chiavi è importante `<const?> <tipo> <nome>` [^](#noGo "Il punto interrogativo in const indica che è un elemento facoltativo")

## Naming

Il naming delle variabili ha alcune regole ben precise ed alcune convenzioni non stringenti ma che tutti rispettano comunque.

Partiamo dalle regole precise riguardanti il nome di una variabile:

- Può contenere numeri ma **Deve** cominciare con una lettera.
- L'unico simbolo che può contenere è il trattino basso `_`
- Non può contenere spazi al suo interno
- Quando viene utilizzata considera come se fossero lettere diverse quella maiuscole da quelle minuscole - in termini tecnici è [case sensitive](https://it.wikipedia.org/wiki/Sensibile_alle_maiuscole))

Adesso le convenzioni non strintengi riguardanti il nome di una variabile:

- le variabili sono semantiche, difficilmente si ha la variabile `a` ma si assegna un nome in base al compito che deve svolgere, esempio `sconto`
- Le variabili sono scritte in minuscolo
- Le costanti sono scritte completamente in maiuscolo
- Nel caso il nome è la crasi di più parole ci sono alcuni formati preferiti, tra i più comuni cito:
  - Il [camel case](https://it.wikipedia.org/wiki/Notazione_a_cammello) `scontoDaApplicare`[^](#noGo "Notare che la prima lettera è comunque minuscola") 
  - Lo [snake case](https://it.wikipedia.org/wiki/Snake_case) sconto_da_applicare

## Comprensione Pratica

1. Quali operazioni conosci? Nello specifico che operazione svolge l'operatore `%`?
2. Quali tipi di dato Conosci?
3. L'uguale matematico è diverso da quello informatico, infatti in informatica posso scrivere questo codice `a=a+1;` che matematicamente non ha senso. Cosa significa quindi l'uguale nel mondo informatico?
4. Alla fine di questo stralcio di codice, quanto vale b?
```cpp
int a=3;
int b=5;
b=a+b;
```
5. Il seguente codice va in errore, come mai?
```cpp
int a;
int b=5;
b=a+b;
a=3;
```
6. Quali tra le seguenti è un nome valido per una variabile e quale no?
   - auto
   - auto2
   - 2auto
   - la mia auto
   - laMiaAuto
