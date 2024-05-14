const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const path = require('path')

const getAboutPage = async (req, res) => {
    try {
        const info = await prisma.restaurant.findUnique({
            where: { ID: 1 },
        });
        const chefs = await prisma.employer.findMany();
        res.render('about', {chefs, info})
    } catch (error) {
        console.error('error', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

module.exports = getAboutPage