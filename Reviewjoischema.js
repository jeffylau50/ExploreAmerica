const Basejoi = require('joi')
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML:{
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const joi = Basejoi.extend(extension)




const reviewSchema = joi.object({
    Review: joi.object({
        reviewText: joi.string().required().escapeHTML(),
        rating: joi.number().required()
        
    })
}).unknown()


module.exports = reviewSchema;