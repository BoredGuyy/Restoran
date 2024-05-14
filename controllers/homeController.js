const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
 
const getData = async (req, res) => {
    try {
        const meals = await prisma.categorie.findMany({
            include: {
                Repas: true,
            },
        });
        const info = await prisma.restaurant.findUnique({
            where: { ID: 1 },
        });
        const chefs = await prisma.employer.findMany();
        res.render('index', {meals, info, chefs})
    } catch (error) {
        console.error('error', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

module.exports = getData;