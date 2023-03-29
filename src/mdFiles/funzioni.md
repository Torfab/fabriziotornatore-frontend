---
title: Funzioni
---

# Funzioni

- [Funzioni](#funzioni)
  - [Nucleo](#nucleo)
  - [Sintassi e Firma](#sintassi-e-firma)
  - [Annidamento](#annidamento)
  - [Controllo del ciclo](#controllo-del-ciclo)
    - [Break](#break)
    - [continue](#continue)
  - [Sintassi alternativa](#sintassi-alternativa)
    - [For](#for)
    - [Do-While](#do-while)
  - [Comprensione Pratica](#comprensione-pratica)


## Nucleo

Le funzioni ci permettono di estrapolare parti di codice, e di utilizzarle più facilmente nel codice principale.

Le riconosciamo perchè la sintassi è molto specifica, tale sintassi è definita `firma` della funziona ed è divisa in tre parti, facciamo un esempio:

```cpp
float calcolaSconto(float valoreDiPartenza, float scontoDaApplicare) {
  float riduzioneSconto= valoreDiPartenza * scontoDaApplicare / 100;
  return valoreDiPartenza-riduzioneSconto;
}

int main() {
  printf("questa camica costa 40 euro, ma grazie allo sconto del 20 per cento ora costa: ");
  float camiciaScontata = calcolaSconto(40, 20);
  printf("%f\n", camiciaScontata);
}
```

Andiamo passo passo, Partiamo dal risultato.

l'output sarà "questa camica costa 40 euro, ma grazie allo sconto del 20 per cento ora costa: 32"

Nella parte iniziale del codice ho `definito` la funzione tramite la sua firma, e gli ho agganciato un blocco di codice, al solito lo riconosciamo grazie alle parentesi graffe.

Nella seconda parte l'ho `chiamata`, quando il codice in esecuzione raggiunge quella riga vengono eseguite le righe di codice che ho definito nel suo blocco di codice e viene `ritornato` il suo valore di ritorno.

Essendo un valore, può essere usato così com'è o assegnato ad una variabile.

Una volta definita la funzione posso `chiamarla` quante volte voglio.

Per quanto ci riguarda durante l'utilizzo delle funzioni bisogna considerarle come delle blackbox.

![una black box con input ed output](/svg/funzioni-box.svg)

In cui attraverso degli input "non sapendo cosa c'è dentro" ho degli output.

Rifrasiamo per capire meglio. La funzione, prenderà in ingresso degli input esterni, li elaborerà, e tirerà fuori un output.

SOLO in fase di definizione mi devo interessare di cosa mettere dentro per far si che la funzione si comporti come voluto.

## Sintassi e Firma

In C la firma per le funzioni è composta da tre parti:

1. Un tipo di ritorno, di cui parleremo meglio sotto.

2. Un nome con la quale chiamarla

3. Dei parametri tipizzati, che fungono da ingresso separati da virgola e incapsulati da parentesi

Quindi restando generici:

```cpp
<tipo di ritorno> <nome funzione> (<tipo1 parametro1, tipo2 parametro2, ...>)
```

facendo invece un esempio esplicito

```cpp
float calcolaSconto(float valoreDiPartenza, float scontoDaApplicare)
```

**Nota bene: si possono avere da 0 a infiniti parametri. Nel caso in cui se ne hanno 0 bisogna comunque inserire le parentesi tonde.**

```cpp
int battiCinque()
```

## Funzioni già utilizzate

Se ricordiamo cosa abbiamo scritto nei primi programmi finora, notiamo che sia la sintassi di definizione, sia la sintassi di utilizzo, già l'abbiamo utilizzata da altre parti.

Nello specifico in ogni programma in C abbiamo sempre definito un 

```cpp
int main(){
  ...
}
```

Visto che rispetta le regole di sintassi scritte sopra, possiamo riconoscere che abbiamo sempre definito questa funzione in ogni nuovo programma.

Questa funzione è il main ed è speciale, dato che è l'unica funzione che viene chiamata automaticamente all'avvio del programma.

Per quanto riguarda invece le funzioni che abbiamo già chiamato, abbiamo la `printf()` e `la scanf()`, dato che le abbiamo utilizzate senza definirle (altri programmatori le hanno definite per far si che gli utenti potessero utilizzarle) dal nostro punto di vista sono delle blackbox pure.

Non abbiamo idea di come fanno a funzionare, ma sappiamo che quando usiamo la printf() il programma ci stamperà a schermo una scritta, e quando usiamo una scanf, il programma inserisce dei valori presi da tastiera.

## Output e Tipo di ritorno

Qualunque funzione necessariamente `ritornerà` un output. Questo output sarà di un tipo specifico e dobbiamo esplicitarlo durante la firma.

Durante il suo utilizzo possiamo quindi utilizzare la funzione per valorizzare una variabile dello stesso tipo.

```cpp
int aggiungiCinque(int valoreDiPartenza) {
  return valoreDiPartenza+5;
}

int main() {
  int a=5;
  printf("Il valore della variabile a: %d\n", a);
  a = aggiungiCinque(a);
  printf("Ho appena aggiornato il valore della variabile a: %d", a);
}
```

Nell'esempio ho potuto riassegnare il valore di *a* attraverso la funzione **SOLO** perchè la funzione aveva il tipo di ritorno uguale alla variabile.

La funzione `ritorna` quando raggiunge una riga di codice con scritto `return` e torna il valore alla sua destra.

Se esistono altre righe al di sotto del return, non verranno eseguite dato che la funzione finisce la sua esecuzione non appena trova una riga con scritto return.

### Il tipo void

Ci sono alcune funzioni di cui non ci interessa il valore di ritorno o che addirittura non lo hanno proprio.

Però da un punto di vista formale **TUTTE** le funzioni devono avere un output.

Per questo caso specifico si è invento un tipo speciale chiamato `void`.

Vengono utilizzate per alcune funzioni che fanno operazioni di semplice stampa a schermo o per alcune che modificano lo stato interno del sistema (pericoloso, ne parleremo insieme al concetto di collezioni).

```cpp
void saluta(){
  printf("Buongiorno\n");
}

int main(){
  saluta();
  saluta();
}
```

In questo esempio la nostra funzione viene chiamata due volte, e quindi a schermo apparirà due volte la scritta "Buongiorno".

## nome della funzione - naming

I nomi delle funzioni seguono le regole de nomi delle variabili quindi:

1. Non possono possedere spazi
2. Non possono iniziare per numero

e posseggono anche le loro convenzioni:

1. Se vogliamo utilizzare più parole si uniscono in alcune forme prestabilite: camelCase, snake_case, kebab-case

In generale si fa ancora più attenzione rispetto al nome delle variabili per far si che anche solo leggendo il nome della funzione mi rendo conto di quale sia il suo obiettivo o il suo output:

```cpp
float applicaSconto(float valoreDiPartenza, floatValoreSconto)
float convertiMetriInYarde(float metri)
bool checkInputValido(int valoreInput)
void saluta()
void mescolaMazzoDiCarte(*int mazzoAttuale)
```

Anche solo in maniera intuitiva abbiamo delle aspettative riguardo alle funzioni che si presentano con questo tipo di firme.

## Parametri

I parametri sono gli input della funzione, il programma si aspetta che durante il suo utilizzo vengono inseriti al suo interno dei valori o delle variabili che contengono dei valori, o delle altre funzioni che ritornano dei valori. Insomma qualcosa che possa essere considerato un valore.

**La funzione ne utilizzerà una copia al suo interno**

Questo concetto è critico, significa che anche se modificassi questo valore, ne viene modificata solamente la copia all'interno della funzione e non la variabile al suo esterno.

facciamo un esempio con tutte e tre queste modalità.

```cpp
aggiungiDieci(int valoreDiPartenza){
  return valoreDiPartenza+10;
}

int main(){
  int a= aggiungiDieci(0);
  printf("il valore di a: %d\n", a);
  int b= aggiungiDieci(a);
  prinf("il valore di b: %d\n", b);
  int c= aggiungiDieci(aggiungiDieci(3));
  printf("il valore di c: %d\n, c);
}
```

Nel primo caso abbiamo usato un valore esplicito, quando succede si dice che il valore è stato `hardcodato`

Nel secondo caso abbiamo usato la variabile *a* in input e abbiamo valorizzato la variabile *b*, notare che la variabile a non ha cambiato il suo valore.

Nel terzo caso abbiamo utilizzato la stessa funzione come input. Prima viene risolta quella interna (il cui valore risultante è 13) e poi quella esterna che prenderà 13 come input (tornando 26)

### posizione dei parametri

Quando si ha più di un parametro il sistema utilizzerà la loro posizione per discenerli, facciamo un esempio

```cpp
int sommaESottrazione(int val1, int val2, int val3){
  return val1+val2-val3
}

int main(){
  int a=3;
  int b=5;
  int c=10;
  
  int risultato = sommaESottrazione(a,b,c);
  printf("il primo risultato: %d\n", risultato);
  risultato = sommaESottrazione(b,c,a);
  printf("il secondo risultato: %d\n", risultato);
  risultato = sommaESottrazione(a,c,b);
  printf("il terzo risultato: %d\n", risultato);
}
```

La funzione scritta somma i primi due parametri e sottrae il terzo, dato che la sottrazione non è commutativa, cambiare l'ordine degli operandi fa cambiare anche il risultato.

Nel main anche se utilizzo le stesse identiche variabili le ho inserite sempre in posizione diversa all'interno della funzione utilizzata, e quindi i risultati saranno diversi.

Nello specifico notiamo che avviene letteralmente un cambio nome contestualmente alla copia del valore. Ovvero sia che quando viene chiamata ad esempio la seconda volta. 

All'interno dalla funzione il valore di *b* viene copiato dentro *val1*, quello di *c* dentro *val2*, e quello di *a* dentro *val3* dopodiche utilizzo queste tre nuove variabili per calcolare il risultato.

## Local Scope e Global Scope

Dato che nelle possiamo interagire solamente attraverso gli input e ottenendo degli output essa non viene inficiata da qualunque altra cosa all'interno del programma.

**Ciò che succede in una funzione rimane nella funzione**

Ad esempio è impossibile avere conflitto di nomi, anche se si utilizzano due variabili con lo stesso nome in due funzioni diverse esse non interagiscono le une con le altre, ognuna avrà vita propria

```cpp

int aggiungi7(int valoreDiPartenza){
  int a=7;
  printf("Sto aggiungendo la variabile a locale della funzione aggiungi7 con valore: %d\n", a);
  return valoreDiPartenza+a;
}


int main(){
  int a=5;
  printf("La variabile a locale della funzione main con valore: %d\n", a);
  int b=aggiungi7(a);
  printf("la variabile a locale della funzione main non ha cambiato valore: %d\n", a);
}
```
Abbiamo usato la variabile *a* in due posti diversi, ma ogni posto fa storia a se, le due variabili non conflittano perchè entrambe lavorano in maniera locale all'interno della loro funzione.

In particolare anche quando viene utilizzata la variabile *a* del main come input per *aggiungi7* viene effettuata la copia ed il cambioNome, quindi è proprio impossibile che potessero avvenire conflitti di nomi.

### Global Scope

In realtà è possibile avere delle variabili che sono valide per tutte le funzioni, queste vengono chiamate variabili globali ed in generale bisogna usarle con molta parsimonia. 
Per alcuni specifici casi non si può fare a meno ma in generale fa storcere il naso trovarle all'interno del codice.

Solitamente le variabili globali meno rischiose sono costanti.

Per poterle utilizzare bisogna dichiararle al di fuori di qualunque funzione.

```cpp
const int A=3;

int aggiungi3(int valoreDiPartenza){
  printf("anche io conosco A, vale: %d\n", A);
  return valoreDiPartenza+A;
}

int main(){
  printf("conosco A, vale: %d\n", A);
  int a= aggiungi3(5);
}
```

In questo caso la variabile costante *A* viene letta ed utilizzata da entrambe le funzioni.

## Funzioni Ricorsive

Possiamo chiamare una funzione all'interno di un'altra funzione, del resto è ciò che facciamo sempre con la funzione main, questa dinamica però vale per qualunque funzione.

```cpp
void saluta(){
  printf("buongiorno\n");
}

void saluta3Volte(){
  saluta();
  saluta();
  saluta();
  printf("ok salutato 3 volte\n);
}

int main(){
  saluta3Volte();
  saluta3Volte();
  saluta3Volte();
  printf("ho finito di salutare\n");
}
```

Nell'esempio qui sopra verrà stampata la scritta "buongiorno" 9 volte. Ma possiamo notare che il main chiama *saluta3volte* e questa funzioe a sua volte chiama *saluta* ottenendo 2 livelli di profondità. main->saluta3volte->saluta

Quando una funzione raggiunge la chiamata ad un'altra funzione, la prima rimane in standby aspettando la fine della sua funzione interna, e questo processo si ripete per ogni livello di profondità, quindi operativamente la prima funzione ad essere "completata" sarà la più profonda che al suo interno non contiene altre funzioni.

Semplificando, per rimanere in standby vengono conservate tutte le informazioni in una parte di memoria che si chiama Stack, il quale viene liberato al termine della funzione stessa. Quindi per ogni funzione in standby (ogni livello di profondità) ho una parte della memoria occupata con le informazioni che gli serviranno per riprendere l'esecuzione.

Concettualmente questa dinamica è infinita e si possono avere infiniti livelli di profondità.

Operativamente però la memoria del pc dedicabile allo stack è finita e quando si raggiungono troppi livelli di profondità si ha un errore "stack overflow" - che da il nome ad un noto sito dedicato a domande sulla programmazione [stackoverflow.com]

La ricorsione è quella funzione che al suo interno chiama se stessa.

Questa cosa è possibile ed è una pratica lecita ma bisogna stare molto attenti ad usare la ricorsione.

Un esempio tipico è il calcolo del fattoriale, dato un numero N, il suo fattoriale è uguale a N(n-1)(n-2)(n-3)....(2)(1) e si ferma quando l'ultimo termine a moltiplicare è 1. Posso calcolarlo attraverso una funzione ricorsiva.

```cpp

int fattoriale(int n){
   int f; 
   if(n==1){
     return 1;
   }
   f = n * fattoriale(n-1);
   return f;
}
main(){
   int risultato;
   risultato= fattoriale(5);
   printf("il risultato: %d\n", risultato);
}
```

In questa funzione calcolo solamente un passaggio e moltiplico il numero dove sono arrivato con quello precedente attraverso la funzione che moltiplicherà quindi questo numero con la funzione del suo precedente, che moltiplicherà questo numero con la funzione del suo precedente eccetera eccetera.

Questa cosa genererà 5 livelli di profondità (in questo caso facile da calcolare perchè sto calcolando il fattoriale di 5) e si fermerà quando incontra 1 in cui ritorna un numero secco, a quel punto risolve il penultimo livello (2 x 1), e tramite questo il terzultimo (3 x (2 x 1)) , e tramite questo il quartultimo eccetera eccetera.

**NOTA BENE: se non avessi messo la condizione di uscita a n==1 in cui NON veniva chiamata la funzione ricorsiva ma un numero secco, il sistema avrebbe chiamato funzioni all'infinito fino all'inevitabile errore di stackoverflow, in questo senso bisogna stare attenti a mettere sempre la condizione di uscita**

In generale qualunque ricorsione si può riscrivere sottoforma di iterazione, anche se in molti casi non è semplice.


1. Quali sono le 3 sintassi utilizzaibili per eseguire dei cicli?
2. A cosa serve la keyword break? A cosa serve la keyword continue?
3. Scrivi, usando un ciclo, un programma che mi stampi ">" poi ">>" eccetera eccetera fino a 8
4. Continua il programma precedente con un secondo ciclo che invece tolga ogni turno un ">" fino a che non ce ne sia neanche uno
