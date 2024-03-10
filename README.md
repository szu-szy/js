## Zadanie 1 -  pobieranie danych z formularza
1. Utwórz formularz z dwoma polami email i password
2. Utwórz funkcje która bedzie pobierać wartości z utworzonego formularza
3. Pobierz formularz
4. Nadaj event listener dla formularza, przekazujac referencje utworzonej powyzej funkcji
5. Przetestuj logike

## Zadanie 2 - Tworzenie listy na bazie danych 
1. Utwórz w HTML liste <ul> - aktualnie bedzie pusta
2. Utwórz funkcje która będzie dodawać element <li> do listy z danymi przekazanymi jako parametr funkcji
3. Wywolaj na początku funkcje na "sucho" przekazujac statyczne dane
4. Jezeli utworzyło nam element w tablicy i wyswietlioło się to w przeglądarce to spróbuj wywolać funkcje powyżej> w funkcji która pobiera dane z formularza

## Zadanie 3 - Usuwanie
1. Do elementu gdzie tworzymy <li> > należy dodać przycisk oraz nadac mu event listener który usuwa aktualny element z listy

## Zadanie 4 - Dodawanie listy elementów
1. Utwórz tablice składającą sie z trzech obiektów o strukturze {email, password}
2. Utwórz funkcje która na bazie tablicy używając odpowiedniej metody tablicowej (która iteruje elementy) nadpisuje liste w html

Zadanie: Zmiana stylów
Stwórz przycisk w swoim HTML. Za pomocą JavaScript, po kliknięciu na przycisk zmień kolor tła strony na losowy kolor.

Zadanie: Usuwanie elementów
Stwórz listę nieuporządkowaną (element <ul>) z trzema elementami listy (elementy <li>). Za pomocą JavaScript, po kliknięciu na każdy element listy usuń go.

Zadanie: Zmiana atrybutów
Stwórz obrazek <img> na stronie z pustym atrybutem src. Za pomocą JavaScript, po załadowaniu strony, zmień wartość atrybutu src na adres obrazka, który wybierzesz.

## Zadanie 5 - Stwórz klasę o nazwie Calculator.
- Klasa Calculator powinna zawierać następujące metody:
- add(...args): Metoda dodaje podane liczby do wyniku kalkulatora.
- subtract(...args): Metoda odejmuje podane liczby od wyniku kalkulatora.
- multiply(...args): Metoda mnoży aktualny wynik przez podane liczby.
- divide(...args): Metoda dzieli aktualny wynik przez podane liczby.
- clear(): Metoda czyści wynik kalkulatora.
- getResult(): Metoda zwraca aktualny wynik kalkulatora.
oraz pola:
- wynik
- wartosc pierwszej kliknietej cyfry (kalkulatory dzialaja tak, ze na poczatku klikamy liczbe i dopiero wybieramy operacje dlatego musimy gdzies przechowac wartosc pierwszej liczby przed wykonaniem operacji)

Następnie na bazie tej klasy i metod tworzymy sobie kalkulator na stronie za pomoca JS lub HTML
- kazdy przycisk powinien wykonywac jedna z metod obiektu kalkulatora
