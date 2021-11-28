------------------------------------- REQUETES INSERTION -------------------------------------

---------- CATEGORIES ---------------

-- INSERER CATEGORIES
INSERT INTO categorie(libelle, ordre)
VALUES ('Chien', '1'), ('Chat', '2'), ('Rongeur', '3'), ('Oiseau', '4'), ('Reptile', '5'), ('Promotions', '6'), ('Nouveautés', '7'), ('Services', '8');

-- INSERER SOUS-CATEGORIES CHIEN
INSERT INTO souscategorie(idCategorie, libelle, ordre)
VALUES ('1', 'Alimentation', '1'), ('1', 'Jouet', '2'), ('1', 'Gamelle', '3'), ('1', 'Soin et hygiène', '4'), ('1', 'Couchage', '5'), ('1', 'Accessoires', '6');

-- INSERER SOUS-CATEGORIES CHAT
INSERT INTO souscategorie(idCategorie, libelle, ordre)
VALUES ('2', 'Alimentation', '1'), ('2', 'Jouet', '2'), ('2', 'Litière', '3'), ('2', 'Soin et hygiène', '4'), ('2', 'Transport', '5'), ('2', 'Accessoires', '6');

-- INSERER SOUS-CATEGORIES RONGEUR
INSERT INTO souscategorie(idCategorie, libelle, ordre)
VALUES ('3', 'Alimentation', '1'), ('3', 'Jouet', '2'), ('3', 'Paille et litière', '3'), ('3', 'Soin et hygiène', '4'), ('3', 'Cage', '5'), ('3', 'Accessoires', '6');

-- INSERER SOUS-CATEGORIES OISEAU
INSERT INTO souscategorie(idCategorie, libelle, ordre)
VALUES ('4', 'Alimentation', '1'), ('4', 'Volière', '2'), ('4', 'Soin et hygiène', '3'), ('4', 'Litière', '4'), ('4', 'Transport', '5'), ('4', 'Accessoires', '6');

-- INSERER SOUS-CATEGORIES REPTILE
INSERT INTO souscategorie(idCategorie, libelle, ordre)
VALUES ('5', 'Alimentation', '1'), ('5', 'Terrarium', '2'), ('5', 'Chauffage', '3'), ('5', 'Éclairage', '4'), ('5', 'Transport', '5'), ('5', 'Accessoires', '6');

-- INSERER SOUS-CATEGORIES SERVICE
INSERT INTO souscategorie(idCategorie, libelle, ordre)
VALUES ('8', 'Voyage dans l''espace', '1'), ('8', 'Toilettage', '2'), ('8', 'Promenade', '3');


-- INSERER CLIENT
INSERT INTO client(nom, prenom, adrMail, numTel, estHomme, mdp, dateInscription, dateNaissance)
VALUES ('Jallifier-Talmat', 'Ruben', 'ruben.jallifier@gmail.com', '0613563961', '1', 'fig5e9s8fkbp495z', '2021-10-22', '1997-08-25');

-- INSERER ADRESSE
INSERT INTO adresse(codePostal, commune, ligne1, pays, idClient)
VALUES ('38980', 'Chatenay', '337 chemin des prairies', 'France', '1');

-- INSERER ANIMAL(AUX)
INSERT INTO animal(espece, idClient, nom)
VALUES ('Chien', '1', 'Hasko'), ('Chien', '1', 'Nanouk');

-- INSERER TVA
INSERT INTO tva(taux)
VALUES ('20');

-- INSERER PRODUIT
INSERT INTO produit(description, estActif, idSousCategorie, idTva, nom, prix)
VALUES ('Offrez à votre chien un lieu de repos moderne où votre compagnon pourra se retirer, se détendre et se reposer. 
D’un toucher naturel et délicat, il se décline en différentes tailles et coloris pour s’adapter au mieux à votre intérieur.', 1, '5', '1', 'Panier 100% coton', 55);

INSERT INTO produit(description, estActif, idSousCategorie, idTva, nom, prix)
VALUES ('Envoyez votre chien dans l''espace, offrez-lui des souvenirs innoubliables !', 1, '31', '1', 'Voyage dans l''espace', 59500);

-- INSERER UN BIEN
INSERT INTO bien(idProduit, quantiteDispo, idMarque)
VALUES ('3', 10, '12');

-- INSERER UN SERVICE
INSERT INTO service(idProduit, dateService, duree, idAnimal)
VALUES ('4', '2021-10-22', 7, '2');

-- INSERER ETAT COMMANDE
INSERT INTO etatcommande(libelle)
VALUES ('Acceptée'), ('En cours de préparation'), ('Expédiée'), ('Remboursée');

-- INSERER COMMANDE 
INSERT INTO commande(dateRealisation, montant, cb, idEtatCommande, idClient)
VALUES ('2021-10-22', 59500, 1, '1', '1');

-- INSERER FACTURE
INSERT INTO facture(numero)
VALUES ('1');

-- INSERER FAVORI
INSERT INTO favori (idClient, idProduit)
VALUES ('1', '3');


----------------------UPDATE DATA--------------------

-- UPDATE MDP CLIENTS
UPDATE client
SET mdp = SUBSTRING(MD5(RAND()) FROM 1 FOR 16)
WHERE mdp IS NULL;

-- UPDATE ANIMAUX
UPDATE animal
SET espece = 'Chien'
WHERE idAnimal < 300


------------------- SELECT -----------------------

-- SELECTIONNER LES CLIENTS QUI POSSEDENT PLUS DE 1 ANIMAL
SELECT COUNT(*), client.prenom, client.nom
FROM client
JOIN animal ON client.idClient = animal.idClient
GROUP BY client.prenom, client.nom
HAVING COUNT(*) > 1



------------------------------------------------ PROCEDURES STOCKEES -------------------------------------------

-- AJOUTER NB CLIENTS ALEATOIRE
BEGIN
SET @maxi = 250 + RAND() * 250;
SET @i = 0;
WHILE @i < @maxi DO 
	SET @nomTemp = CONV(FLOOR(RAND() * 99999999999999), 20, 36);
	SET @prenomTemp = CONV(FLOOR(RAND() * 99999999999999), 20, 36);
	SET @adrMailTemp = CONCAT(CONV(FLOOR(RAND() * 99999999999999), 20, 36), '@gmail.com');
	SET @dateNaissanceTemp = '1920-01-01' + INTERVAL (RAND() * 32870) DAY;
	SET @dateInscriptionTemp = '2018-01-01' + INTERVAL (RAND() * 1095) DAY;
	SET @mdpTemp = SHA2(CONV(FLOOR(RAND() * 99999999999999), 20, 36), 256);
	SET @estHommeTemp = IF(RAND() < 0.50, 1, 0);
	SET @numTelTemp = ROUND(RAND()*(9999999999-1000000000)+1000000000);
INSERT INTO client(nom, prenom, adrMail, dateNaissance, dateInscription, mdp, estHomme, numTel)
VALUES (@nomTemp, @prenomTemp, @adrMailTemp, @dateNaissanceTemp, @dateInscriptionTemp, @mdpTemp, @estHommeTemp, @numTelTemp);
SET @i = @i + 1;
END WHILE;
SELECT CONCAT(@i, ' clients ajoutés') AS resultat;
END

-- AJOUTER PRODUITS ALEATOIRES
BEGIN
SET @maxi = 250 + RAND() * 250;
SET @i = 0;
WHILE @i < @maxi DO 
	SET @nomTemp = CONV(FLOOR(RAND() * 99999999999999), 20, 36);
	SET @descriptionTemp = CONV(FLOOR(RAND() * 99999999999999), 20, 36);
	SET @estActifTemp = IF(RAND() < 0.50, 1, 0);
	SET @prixTemp = ROUND(RAND()*(999-10)+10);
	SET @souscategorieTemp = SET @souscategorieTemp = (SELECT idsouscategorie FROM souscategorie ORDER BY RAND() LIMIT 1);
INSERT INTO produit(nom, description, estActif, prix, idSousCategorie, idTva)
VALUES (@nomTemp, @descriptionTemp, @estActifTemp, @prixTemp, @souscategorieTemp, 1);
SET @i = @i + 1;
END WHILE;
SELECT CONCAT(@i, ' produits ajoutés') AS resultat;
END

-- AJOUTER NB COMMANDES ALEATOIRES
BEGIN
SET @maxi = 250 + RAND() * 250;
SET @i = 0;
WHILE @i < @maxi DO 
	SET @dateRealisationTemp = '2020-01-01' + INTERVAL (RAND() * 870) DAY;
	SET @idClientTemp = (SELECT idClient FROM client ORDER BY RAND() LIMIT 1);
	SET @montantTemp = (RAND()*(999-10)+10);
	SET @cbTemp = IF(RAND() < 0.50, 1, 0);
	SET @idEtatCommandeTemp = (SELECT idEtatCommande FROM etatcommande ORDER BY RAND() LIMIT 1);
INSERT INTO commande(dateRealisation, idClient, montant, cb, idEtatCommande)
VALUES (@dateRealisationTemp, @idClientTemp, @montantTemp, @cbTemp, @idEtatCommandeTemp);
SET @i = @i + 1;
END WHILE;
SELECT CONCAT(@i, ' commandes ajoutés') AS resultat;
END

-- AJOUTER LIGNES
BEGIN
SET @maxi = 250 + RAND() * 250;
SET @i = 0;
WHILE @i < @maxi DO
	SET @idProduitTemp = (SELECT idProduit FROM produit ORDER BY RAND() LIMIT 1);
	SET @quantiteTemp = (RAND()*(10-1)+1);
	SET @numeroTemp = (SELECT numero FROM commande ORDER BY RAND() LIMIT 1);
INSERT INTO ligne(quantite, idProduit, numero)
VALUES (@quantiteTemp, @idProduitTemp, @numeroTemp);
SET @i = @i + 1;
END WHILE;
SELECT CONCAT(@i, ' lignes ajoutés') AS resultat;
END





