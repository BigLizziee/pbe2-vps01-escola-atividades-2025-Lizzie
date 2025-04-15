const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const Aluno = await prisma.Aluno.create({
            data: req.body
        });
        res.status(201).json(Aluno).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const read = async (req, res) => {
    const Alunos = await prisma.Aluno.findMany();
    res.json(Alunos);
}

const update = async (req, res) => {
    try {
        const Aluno = await prisma.Aluno.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(Aluno).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const Aluno = await prisma.Aluno.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(Aluno).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}