const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const addMealPage = async (req, res) => {
    try {
        await res.render('addMeal');
    } catch (error) {
        console.error('errorr', error)
        throw error
    } finally {
        await prisma.$disconnect()
    }
}

const newMeal = async (req, res) => {
    try {
        const ID_Restaurant = 1;
        // Removing 'public' from the beginning of the path
        const imagePath = req.file.path.replace('public\\', '');
        const meal = await prisma.repas.create({
            data: {
                Nom: req.body.nom,
                DESCRIPTION: req.body.description,
                PRIX: parseInt(req.body.prix),
                IMAGE: imagePath,
                ID_Categorie: parseInt(req.body.id_categorie),
                ID_Restaurant
            },
        });
        res.redirect('/addMeal');
    } catch (error) {
        console.log(req.body);
        console.error('Error adding meal:', error);
        res.status(500).send('Error adding meal');
    } finally {
        await prisma.$disconnect();
    }
}



module.exports = {addMealPage, newMeal}