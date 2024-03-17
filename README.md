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


## Zadanie 6 - RPG
Klasa Postać (Character):

Właściwości:

imię (string): Imię postaci.
poziom (number): Poziom postaci (początkowo ustawiony na 1).
zdrowie (number): Punkty zdrowia postaci (początkowo ustawione na 100).
atak (number): Wartość ataku postaci (początkowo ustawiona na 10).
Metody:

- atakuj(cel): Metoda, która pozwala postaci na zaatakowanie innego celu (innej postaci) i odejmowanie punktów zdrowia zgodnie z atakiem postaci.
- sprawdźZdrowie(): Metoda, która sprawdza aktualny poziom zdrowia postaci i wyświetla stosowną informację.

- Główna pętla gry:

Stwórz kilka instancji klasy Postać reprezentujących różne postacie w grze.
Umożliw graczowi wybór, z kim chce się zmierzyć.
Przeprowadź walkę między wybranymi postaciami.
Wyświetlaj wyniki walki i aktualne poziomy zdrowia postaci.

- Dodatkowe (opcjonalne):

Dodaj możliwość rozwijania postaci (np. zwiększanie ataku, zdrowia itp.).
Zaimplementuj różne typy ataków (np. zwykły atak, atak magiczny itp.).
Umożliw graczowi wybór postaci z listy dostępnych klas (wojownik, mag, łucznik itp.).


#### FETCHAPI
GET
utwórz funkcje fetchData która pobiera liste produktów i wypisuje tablice elementów w konsoli
PUT
utwórz funkcje updateData która aktualizuje nazwe produktu i wynik wyswietla w konsoli
POST
utwórz funkcje która tworzy nowy produkt i wyswietla alert z nowo utworzonym produktem dzieki metodzie "alert('')"
DELETE
usuń dowolny produkt z zakresu 1-100 i wyswietl usuniety produkt w konsoli

1. stworz przycisk do pobierania danych napisz funkcje za pomoca metodych fetch do pobierania listy uzytkownikow lista uzytkownikow powinna wyswietlic sie w konsoli po wcisnieciu przycisku aby to sie wykonalo musimy dodac event listener do przycisku na event click

2. na bazie zadania poprzedniego utworz funkcje ktora na bazie pobranej listy dodaje nam elementy do listy uzytkownikow

3. kazdy z elementów powinien miec przycisk do usuwania aktualnego elementu, element powinien zostac usuniety z widoku oraz wyslac zapytanie o usuniecie uzytkownika po ID

4. stworz formularz z input o typie number do wybrania id uzytkownika z zakresu 1-100 stworz funkcje do pobierania pojedynczego uzytkownika przypisz do formularza utworzona funkcje po wcisnieciu przycisku submit powinno nam wyswietlic uzytkownika w konsoli

5. stworz formularz ktory bedzie aktualizowal firstName oraz lastName uzytkownika formularz bedzie zawieral 3 inputy (okresla id, imie, nazwisko) oraz przycisk input od id powinien byc sprawdzany (min=1, max=100) napisz funkcje ktora pobiera dane z formularza oraz aktualizuje wybranego uzytkownika przypisz funkcje jako event listener do formularza

6. stworz formularz do utworzenia nowego uzytkownika stworz funkcje ktora bedzie pobierac pola z formularza i tworzyc na ich bazie nowego uzytkownika w bazie po utworzeniu dajmy alert dla uzytkownika o nowym produkcie pamietamy o sprawdzeniu czy dane nie sa puste dodajemy event listener do formularza z referencja funkcji

7. stworz 3 przyciski "Strona 1", "strona 2", "strona 3"
stworz 1 funkcje z przyjmowanym parametrem "page", gdzie limit jest ustalony na sztywno do zmiennej ITEM_LIMIT
przypisz eventy do przyciskow z html
kazdy z tych przyciskow okresla odpowiednio elementy 1-10, 11-20, 21-30
po wcisnieciu odpowiedniego przycisku powinno wyswietlic nam okreslone elementy

## 
Zadanie 1
stworz przycisk do pobierania danych
napisz funkcje za pomoca metodych fetch do pobierania listy postów
lista uzytkownikow powinna wyswietlic sie w konsoli po wcisnieciu przycisku
aby to sie wykonalo musimy dodac event listener do przycisku na event click

Zadanie 2
stworz formularz z input o typie number do wybrania id posta z zakresu 1-100
stworz funkcje do pobierania pojedynczego posta
przypisz do formularza utworzona funkcje
po wcisnieciu przycisku submit powinno nam wyswietlic posta w konsoli

Zadanie 3
stworz 3 przyciski "Strona 1", "strona 2", "strona 3"
stworz 1 funkcje z przyjmowanym parametrem "page", gdzie limit jest ustalony na sztywno do zmiennej ITEM_LIMIT
przypisz eventy do przyciskow z html
kazdy z tych przyciskow okresla odpowiednio elementy 1-10, 11-20, 21-30
po wcisnieciu odpowiedniego przycisku powinno wyswietlic nam okreslone elementy

zadanie 4
stworz formularz ktory bedzie aktualizowal tytul posta
formularz bedzie zawieral 3 inputy (okresla id, name) oraz przycisk
input od id powinien byc sprawdzany (min=1, max=100)
napisz funkcje ktora pobiera dane z formularza oraz aktualizuje wybranego posta
przypisz funkcje jako event listener do formularza

Zadanie 5
stworz formularz do utworzenia nowego posta
stworz funkcje ktora bedzie pobierac pola z formularza i tworzyc na ich bazie nowego posta w bazie
po utworzeniu dajmy alert dla posta o nowym produkcie
pamietamy o sprawdzeniu czy dane nie sa puste
dodajemy event listener do formularza z referencja funkcji


Projekt podsumowujący:
- Strona firmy spożywczej
Celem tego zadania jest zaprojektowanie i stworzenie strony internetowej dla nowo powstającej firmy spożywczej
Wymagane Podstrony:

1. Header
Przyciski nawigacyjne lub menu do innych podstron.

2. Strona Główna (Home):
Powinna zawierać przyciągające uwagę zdjęcia lub slajdy prezentujące różnorodność produktów firmy.
Krótki opis firmy i jej misji.

3. Produkty (Products):
Formularz nowego produktu (zwijany za pomoca styli css)
Katalog produktów (pobierana lista z bazy).
kazdy produkt posiada przycisk aby wyswietlic szczegóły.
Możliwość filtrowania produktów według nazwy.

4. Kontakt (Contact):
Formularz kontaktowy dla szybkich zapytań (obsługa za pomoca JS wyswietla alert z danymi formularza)
Dane kontaktowe: adres firmy, numer telefonu, adres e-mail.

5. O Nas (About Us):
Historia firmy, jej wartości i filozofia działania.
Lista personelu (z bazy) oraz możliwowść rozwiniecia szczegołów o pracowniku
krótkie biografie kluczowych członków.
Informacje o certyfikatach jakości, nagrodach, lub innych osiągnięciach.

6. Footer:
linki do privacy policy oraz regulaminu
logo/nazwa firmy

Dodatkowe Wymogi:
Responsywność: Strona musi być przystosowana do wyświetlania na różnych urządzeniach (komputery stacjonarne, laptopy, tablety, smartfony).-