const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const path = require('path')

const getContactPage = async (req, res) => {
    try {
        await res.render('contact')
    } catch (error) {
        console.error('error', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

module.exports = getContactPage