# Funkcionális terv:

Rendszerszereplők:

1. Felhasználó: A weboldal látogatói, akik kvízeket kitöltik és böngésznek.

2. Adminisztrátor: Azok, akik az adminisztratív felületen keresztül felügyelik és karbantartják a weboldalt valamint kvízeket készítenek.

Rendszerhasználati esetek és lefutásaik:

1. Felhasználói Regisztráció:
   - A felhasználó regisztrál egy fiókot az e-mail címével és jelszavával.
   - A rendszer ellenőrzi a regisztrált adatok helyességét.
   - A rendszer létrehozza a felhasználói fiókot és bejelentkezteti a felhasználót.

2. Kvíz Létrehozása:
   - Az admin létrehoz egy új kvízt a saját fiókjában.
   - Az admin hozzáad kérdéseket és válaszokat a kvízhez.
   - A rendszer menti a kvíz adatait az adatbázisban.

3. Kvíz Kitöltése:
   - A felhasználó kiválaszt egy kvízt a böngészési lehetőségek közül.
   - A felhasználó kitölti a kvíz kérdéseit és válaszait.
   - A rendszer kiértékeli a válaszokat és visszaadja az eredményt.

4. Adminisztrációs Felület Használata:
   - Az adminisztrátorok bejelentkeznek az adminisztrációs felületre.
   - Az adminisztrátorok képesek ellenőrizni és szerkeszteni a felhasználói tartalmakat.

Határ osztályok:

1. Felhasználói Felület (UI):
   - A képernyőtervek és a felhasználói felület megvalósítása.
   - Interakció a felhasználókkal és adminisztrátorokkal.

2. Adatbázis Rendszer:
   - Az adatbázis kezeli a felhasználói fiókokat, a kvízeket és az eredményeket.

3. Eredmények Modul:
   - Az eredmények modul számítja ki és tárolja az eredményeket.

Menühierarchiák:

1. Főmenü:
   - Kvízek böngészése
   - Bejelentkezés/Regisztráció

2. Felhasználói Menü (Bejelentkezett felhasználóknak):
   - Saját kvízek megtekintése
   - Profil szerkesztése
   - Kilépés

3. Adminisztrációs Menü (Adminisztrátoroknak):
   - Felhasználók moderálása
   - Tartalom moderálása
   - Statisztikák és jelentések
