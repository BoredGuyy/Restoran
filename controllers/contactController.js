const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const path = require('path')

const getContactPage = async (req, res) => {
    try {
        const info = await prisma.restaurant.findUnique({
            where: { ID: 1 },
        });
        res.render('contact', {info})
    } catch (error) {
        console.error('error', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

module.exports = getContactPage