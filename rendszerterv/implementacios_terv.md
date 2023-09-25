# Implementációs terv:

Perzisztencia Osztályok:

1. UserRepository: Ez az osztály felelős a felhasználók adatainak tárolásáért és kezeléséért az adatbázisban. Tartalmazza a felhasználók regisztrálását, bejelentkezését végző metódusokat.

2. QuizRepository: A kvízek tárolását és kezelését végzi az adatbázisban. Itt lehetőség van új kvízek létrehozására, meglévő kvízek listázására és kérdések hozzáadására.

3. QuestionRepository: A kérdéseket és válaszokat kezeli, és kapcsolódik a kvízekhez. Lehetővé teszi a kérdések hozzáadását és szerkesztését.

4. ResultRepository: Az eredmények tárolásáért felelős. Itt kerül rögzítésre, hogy mely felhasználók kitöltötték melyik kvízt, és az eredmények pontszámait.

Üzleti Logika Osztályai:

1. UserManager: A felhasználói műveletek üzleti logikáját tartalmazza, például a regisztráció, bejelentkezés és jogosultságkezelés.

2. QuizManager: Kezeli a kvízek létrehozását, szerkesztését és listázását. Továbbá gondoskodik a kérdések hozzáadásáról és kezeléséről.

3. ResultManager: Az eredményekkel kapcsolatos üzleti logikát kezeli, például a pontszámítást és a felhasználók eredményeinek lekérdezését.

Kliens Oldal Osztályai:

1. QuizComponent: A kvíz kitöltési felületet tartalmazza, és a felhasználói interakciót kezeli. Itt jelennek meg a kérdések és a válaszok.

2. UserProfileComponent: A felhasználói profilkezelést valósítja meg, ahol a felhasználók megtekinthetik eredményeiket.

3. AdminDashboardComponent: Az adminisztrátoroknak szolgáló felület, ahol moderálni tudják a tartalmakat és kezelni a felhasználókat.
