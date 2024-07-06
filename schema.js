const Joi=require("joi")

const sportsschema=Joi.object({
    name:Joi.string().required(),
    category:Joi.number().min(0).required(),
    image:Joi.string().required(),
    description:Joi.string().required()
})

module.exports={sportsschema}