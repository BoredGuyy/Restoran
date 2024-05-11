-- CreateTable
CREATE TABLE `Restaurant` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(191) NOT NULL,
    `ADRESSE` VARCHAR(191) NOT NULL,
    `Telephone` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categorie` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Repas` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(191) NOT NULL,
    `DESCRIPTION` VARCHAR(191) NOT NULL,
    `PRIX` INTEGER NOT NULL,
    `IMAGE` VARCHAR(191) NOT NULL,
    `ID_Categorie` INTEGER NOT NULL,
    `ID_Restaurant` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employer` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(191) NOT NULL,
    `Poste` VARCHAR(191) NOT NULL,
    `Salaire` INTEGER NOT NULL,
    `ID_Restaurant` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(191) NOT NULL,
    `TELEPHONE` INTEGER NOT NULL,
    `EMAIL` VARCHAR(191) NOT NULL,
    `ID_Restaurant` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Repas` ADD CONSTRAINT `Repas_ID_Categorie_fkey` FOREIGN KEY (`ID_Categorie`) REFERENCES `Categorie`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Repas` ADD CONSTRAINT `Repas_ID_Restaurant_fkey` FOREIGN KEY (`ID_Restaurant`) REFERENCES `Restaurant`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employer` ADD CONSTRAINT `Employer_ID_Restaurant_fkey` FOREIGN KEY (`ID_Restaurant`) REFERENCES `Restaurant`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_ID_Restaurant_fkey` FOREIGN KEY (`ID_Restaurant`) REFERENCES `Restaurant`(`ID`) ON DELETE RESTRICT ON UPDATE CASCADE;
