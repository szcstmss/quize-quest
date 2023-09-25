# Architekturális Terv:

-Rétegek és Fő Komponensek:

   1.  Felhasználói Felület Réteg (UI Layer):
      - A React.js keretrendszert használjuk a felhasználói felület kialakításához.
      - A komponensek, mint például regisztrációs és bejelentkezési űrlapok, eredmények megjelenítése.

   2. Logikai Réteg (Business Logic Layer):
      - A központi logika a kvízek kezelése, a felhasználói profilok kezelése és az eredmények számítása.
      - Az alkalmazás logikai rétege kommunikál a felhasználói felület réteggel és az adatbázis réteggel is.

   3. Adatbázis Réteg (Data Access Layer):
      - Az adatbázis réteg felelős az adatok tárolásáért és lekérdezéséért.
      - A relációs adatbázisban (pl. Google Firebase) tároljuk a felhasználói adatokat, a kvízeket és az eredményeket.

- Kommunikáció és Kapcsolatok:
   - A kommunikáció a rétegek között HTTP kérések segítségével történik.
   - A felhasználói felület réteg küld kéréseket a logikai rétegnek a felhasználói műveletek során (pl. kvíz kitöltése).
   - A logikai réteg elvégzi a szükséges műveleteket, például adatok lekérdezése és eredmények számítása, majd válaszokat küld a felhasználói felületnek.

- Változáskezelés:
   - Az alkalmazás könnyen bővíthető, mivel a rétegek jól elkülönülnek egymástól. Új funkciók hozzáadása vagy meglévő funkciók módosítása könnyen megvalósítható a rétegek függetlensége miatt.

- Rendszer Bővíthetősége:
   - Az alkalmazás lehetőséget biztosít külső API-k integrálására a további funkciók bővítése érdekében.
   - A felhasználói felület komponensei újrahasznosíthatók és kicserélhetők más hasonló komponensekre.

- Biztonsági Funkciók:
   - A biztonságot a felhasználói bejelentkezés és az engedélyezés kezelésével biztosítjuk.
   - Az érzékeny adatok (pl. jelszavak) titkosításra kerülnek a tárolás során.
   - Az adminisztrátori jogosultságok korlátozzák az adatok módosítását és a tartalom moderálását.
