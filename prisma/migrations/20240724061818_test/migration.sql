-- CreateTable
CREATE TABLE `Registrations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `institution` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `teamLeadName` VARCHAR(191) NOT NULL,
    `teamLeadPhone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
