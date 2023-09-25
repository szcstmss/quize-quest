# Fizikai környezet:

- Fejlesztési Platform: A kvíz weboldalt JavaScript nyelven fogjuk fejleszteni, a React.js keretrendszer használatával.

- Operációs Rendszer: A fejlesztői környezeteken széles körben használt operációs rendszerek támogatva lesznek, beleértve a Windows, macOS és Linux operációs rendszereket is.

- Hardver: A fejlesztők saját hardvereiken dolgoznak, beleértve a laptopokat és személyi számítógépeket.

- Hálózati Topológia: A fejlesztői környezet a fejlesztők saját eszközeire korlátozódik, és nincs szükség hálózati topológiára a fejlesztés során.

- Fizikai Alrendszerek: A weboldal elkészítésekor nincs szükség speciális fizikai alrendszerekre. Az alkalmazás felhőalapú szervereken fut majd, amelyeket a hosting szolgáltató biztosít.

- Fejlesztőeszközök: A fejlesztők a következő eszközöket használják a fejlesztés során:
  - Kódszerkesztők: Visual Studio Code, IntelliJ Idea stb.
  - Git verziókezelő rendszer a kódkezeléshez és verziókezeléshez.
  - Böngészők (Google Chrome, Mozilla Firefox, stb.) a weboldal teszteléséhez.

- Keretrendszer: A kvíz weboldal fejlesztéséhez a React.js keretrendszert használjuk a felhasználói felület kialakításához és az interaktivitás megvalósításához.

- Hosting Szolgáltatás: A kvíz weboldalt egy felhőalapú hosting szolgáltatóra telepítjük, amely lehetővé teszi a weboldal elérhetőségét az interneten keresztül.

- Adatbázis Szerver: Az adatbázis szerver együttműködik a webalkalmazással, és az adatok tárolását és lekérdezését végzi. A pontos adatbázis technológiát a későbbi tervezési fázisban választjuk ki.

Absztrakt Domain Modell:

1. Felhasználó (User): A felhasználók azok, akik a weboldalt látogatják és kvízeket kitöltenek. Minden felhasználónak lehet saját fiókja.

2. Kvíz (Quiz): A kvíz az alapvető tartalom egysége a weboldalon. Tartalmazza a kérdéseket és válaszokat, valamint egyéb metaadatokat, például a címet.

3. Kérdés (Question): A kérdések a kvízek részei, és tartalmazzák magukat a kérdéseket és a hozzájuk tartozó válaszokat.

4. Eredmény (Result): Az eredmények a felhasználók kitöltött kvízeik eredményeit tartalmazzák, például a pontszámot.

5. Adminisztrátor (Administrator): Az adminisztrátorok olyan felhasználók, akik felügyelik és moderálják a weboldalt, ellenőrzik a tartalmakat és kezelik a felhasználói fiókokat.

Kapcsolatok:

- Egy felhasználó több kvízt tölthet ki.
- Egy kvíz több kérdést tartalmazhat, és több felhasználó kitöltheti.
- Egy kérdésnek több válasza lehet.
- Egy kvízhez több eredmény tartozhat, attól függően, hogy ki töltötte ki és hogyan.
