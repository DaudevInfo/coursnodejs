
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const UserDB =  prisma.user
module.exports = UserDB