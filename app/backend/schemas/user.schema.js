const Joi = require("joi")

const id = Joi.number().integer().min(1)
const email = Joi.string().email()
const password = Joi.string().min(8).max(255)
const username = Joi.string().min(1).max(255)
const roleId = Joi.number().integer().min(1)

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  username: username.required(),
  roleId: roleId.required(),
})

const updateUserSchema = Joi.object({
  email: email,
  password: password,
  username: username,
  roleId: roleId,
})

const getUserSchema = Joi.object({
  id: id.required(),
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
