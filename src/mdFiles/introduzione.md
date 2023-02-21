---

title: Introduzione
nextPage: variabili - Variabili

---
# Introduzione alla Programmazione


- [Introduzione alla Programmazione](#introduzione-alla-programmazione)
  - [I primi passi](#i-primi-passi)
  - [I linguaggi di programmazione](#i-linguaggi-di-programmazione)
  - [Codice](#codice)
  - [Esempi](#esempi)
    - [C](#c)
    - [C++](#c-1)
    - [Python](#python)
  - [Comprensione Pratica](#comprensione-pratica)


## I primi passi

La programmazione è quell'attività che ci permette di far eseguire delle specifiche operazioni ad un computer.

I computer, semplificando, li possiamo pensare come pietre con l'elettricità dentro. Sono letteralmente stupidi come rocce.

![Una roccia con l'elettricità dentro](/svg/introduzione1.svg)

Queste pietre hanno tre caratteristiche fondamentali:
1. Al loro interno ci sono dei componenti, che possono avere due stati[^](#noGo, "Inteso come modalità di funzionamento"): 
   - `in questo momento passa l'elettricità`
   - `in questo momento NON passa l'elettricità`. 
1. Possono `sovrascrivere` tale stato per ogni singolo elemento
2. Possono `comparare` tra di loro due elementi e quindi riconoscere se sono nello stesso stato o se sono in stati diversi

Bastano queste caratteristiche per permettere al computer di funzionare.

Consideriando `0` quando l'elettricità non passa e `1` quando passa, possiamo sfruttare il [sistema numerico binario](https://it.wikipedia.org/wiki/Sistema_numerico_binario) studiato per secoli, ben prima che nascessero i computer.

Dato che questi 0 e 1 non indicano numeri, bensì informazioni, prendono nomi diversi:
- Un singolo elemento contenente 0 o 1 viene chiamato `bit`.
- 8 bit (2^3) vengono chiamati `byte`.
- 1024[^](#noGo, "Da notare che anche se si avvicinano molto, non sono esattamente 1000 volte") byte (2^10) vengono chiamati `Kilobyte`.
- 1024 kilobyte (2^10) vengono chiamati `Megabyte`.
- 1024 megabyte (2^10) vengono chiamati `Gigabyte` e così via.[^](#noGo, "da notare che alcuni venditori, soprattutto nella telefonia, utilizzano la sigla Gb - Gigabit -, al posto di GB - GigaByte , promettendo 8 volte in meno il valore che a prima vista sembrano vendere")

Nello specifico si parla di operazioni elementari partendo dalle operazioni logiche `and`, `or` e `not` di cui parleremo in seguito, e tramite queste sono state costruite le operazioni matematiche di `somma`, `sottrazione`, `moltiplicazione`, `divisione`, e tramite queste altre tutta l'informatica fino ad arrivare ai giorni nostri.

## I linguaggi di programmazione

Una grossa sfida è che per quanto i sassi riescano a lavorare solo attraverso `0` e `1` agli esseri umani pensare in questi termini risulta particolarmente difficoltoso. Preferiamo l'uso di concetti più astratti come "scritta" o "numero con la virgola".

Per questo sono stati inventati dei `Linguaggi di programmazione` con cui si può dialogare, nel senso di dare ordini, col computer utilizzando concetti astratti.

Tra le caratteristiche con cui possiamo distinguere due linguaggi di programmazione diversi c'è il `Livello di astrazione`.
Esso è la distanza del `linguaggio di programmazione` rispetto al `linguaggio macchina` ovvero sia tra i concetti del linguaggio in esame e i `0` e `1` che la macchina dovrà elaborare per eseguire le operazioni richieste.

Un linguaggio si dice `di basso livello` (sottinteso, di astrazione) nel momento in cui i concetti che utilizza sono molto vicini al linguaggio macchine, e `di alto livello` nel momento in cui i concetti che utilizza sono molto astratti.

Ricordiamo che dato che comunque il computer saprà leggere solamente una serie di 0 e di 1, anche se il linguaggio è di alto livello esso dovrà essere `tradotto` in 0 e 1, questa fase tipicamente può essere svolta in due modi, il primo si chiama `compilazione` ed il secondo `interpretazione`.

![I tre strati, ](/svg/introduzione2.svg)

**NOTA BENE**: il fatto che un linguaggio sia ad alto o basso livello non ci dice nulla su quanto tale linguaggio sia buono.

Generalmente i linguaggi a basso livello permettono un controllo più puntuale dell'hardware e da questo ne consegue un livello di performance migliore, mentre i linguaggi ad alto livello sono meno performanti ma molto più facili da utilizzare. In base al contesto può rivelarsi migliore massimizzare la performance o massimizzare l'agevolazione della programmazione.

Esistono tantissimi linguaggi di programmazione e ogni anno ne nascono di nuovi, giusto per citarne alcuni tra i più utilizzati:
- C
- C++
- C#
- Java
- Python
- Javascript
- Rust
- Golang

## Codice

Ogni linguaggio di programmazione possiede la sua `sintassi` ovvero sia l'ordine di parole, simboli e parole chiave per far si che il computer riconosca l'operazione che vogliamo esegua.

Anche se molti linguaggi condividono la gran parte dei concetti, le sintassi possono essere molto varie. Esattamente come i linguaggi umani, chiamati `linguaggi naturali`, quasi tutte possiedono il concetto di verbo, ma poi i vari linguaggi lo implementano con regole sintattiche diverse ad esempio in latino lo troviamo spesso alla fine di una frase, in giapponese non possiede la coniugazione futura e così via.

Quando scriviamo in un linguaggio di programmazione quello che faremo **effettivamente** è scrivere in un `file di testo` ed inserirgli una estenzione specifica.

Dato che è un file di testo esso potrà essere aperto da qualunque editor di testo, anche il semplice blocco note. 

Tuttavia quando si programma è fortemente consigliato l'utilizzo di [IDE](https://it.wikipedia.org/wiki/Ambiente_di_sviluppo_integrato) poichè aggiungono delle funzionalità in più.

Ad esempio il tipico IDe:
- Riconosce il linguaggio di programmazione ed evidenzia le parole chiave con un colore specifico, o concetti diversi con colori diversi.
- Ha un comodo accesso al `play` per avviare il programma scritto.
- Evidenzia gli errori sia in fase di scrittura che in fase di avviamento

Il testo contenuto in questi files viene chiamato `codice`.

## Esempi
Quando ci affacciamo per la prima volta ad un linguaggio di programmazione non dobbiamo conoscere tutto lo scibile, ma solitamente si parte da alcune cose semplici:
1. Come risconosco i file di questo linguaggio?
2. Come faccio a farmi stampare a schermo una scritta?
3. Come distinguo una operazione dall'altra?
4. Come faccio a far ignorare una parte di codice così che posso scrivere un commento?
5. Ci sono delle parti che devo inserire nel codice a prescindere per farlo funzionare?

Vedremo adesso la risposta a queste domande in tre casi pratici

### C

1. I file avranno l'estenzione `.c`
2. Devo esplicitamente `inserire lo standard output` e poi utilizzare la funzionalità `printf()`
3. le operazioni finiscono sempre con un `;`
4. I commenti di una linea si annunciano scrivendo `//`
5. Verrà eseguito solamente il codice all'interno delle graffe di `int main(){}`

esempio 

```cpp
#include <stdio.h> 
//questa inclusione mi permette di utilizzare printf()

int main(){
  printf("Sto funzionando");
}
```

### C++

1. I file avranno l'estenzione `.cpp`
2. Devo esplicitamente `inserire lo standard output` e poi utilizzare la funzionalità `cout`
3. le operazioni finiscono sempre con un `;`
4. I commenti di una linea si annunciano scrivendo `//`
5. Verrà eseguito solamente il codice all'interno delle graffe di `int main(){}`

```cpp
#include <iostream> 
//questa inclusione mi permette di utilizzare cout

int main(){
  cout<< "Sto Funzionando";
}
```

Notare che c++ è molto simile a c, difatti è una sorta di versione successiva anche se non ha mai soppiantato la precedente.

### Python

1. I file avranno l'estenzione `.py`
2. posso usare direttamente la funzionalità `print()`
3. le operazioni durante sempre un solo rigo, ogni operazione ha il suo rigo.
4. I commenti di una linea si annunciano scrivendo `#`
5. Nulla

```python
print("sto funzionando")
```

Notare che la sintassi è molto più snella, questo perchè python è un linguaggio a più alto livello rispetto a c e c++, in generale ha performance peggiori ma è molto più facile da scrivere.

## Comprensione Pratica

1. Quali sono le tre caratteristiche fondamentali per cui un computer può funziona?
2. Quali sono gli unici stati di ogni suo elemento con cui il computer lavora?
3. A cosa servono i linguaggi di programmazione?
4. Cosa vuol dire che un linguaggio di programmazione è a basso livello?
5. Qual è la differanza tra linguaggio di progammazione, linguaggio macchina e linguaggio naturale?
6. Come riconosco che all'interno di un file sia contenuto codice e non semplicemente testo?
7. Rispetto al primo approccio con i tre linguaggi c, c++ e python, quali sono le differenze salienti che hai notato?