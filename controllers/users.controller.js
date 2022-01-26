const { response, request } = require('express')

const userGet = (req = request, res = response) => {

    const {q,nombre,apikey,page=1,limit=10} = req.query;

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const userPut = (req, res) => {

    const id = req.params.id;

    res.status(400).json({
        msg: 'put API - Controller',
        id
    });
}

const userPost = (req, res) => {

    const {nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    });
}

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}