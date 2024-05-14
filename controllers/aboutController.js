const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const path = require('path')

const getAboutPage = async (req, res) => {
    try {
        await res.render('about')
    } catch (error) {
        console.error('error', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

module.exports = getAboutPage