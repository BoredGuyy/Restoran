const Joi = require('joi');

const mealSchema = Joi.object({
    nom: Joi.string().required(),
    description: Joi.string().required(),
    prix: Joi.number().integer().min(0).required(),
    id_categorie: Joi.number().integer().min(1).required(),
});

const mealValidation = async (req, res, next) => {

    console.log(req.body);

    const { error, value } = await mealSchema.validateAsync(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        next();
    }
}

module.exports = mealValidation;