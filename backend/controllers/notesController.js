const mongoose = require('mongoose');

const Notes = require('../models/notesModel');

exports.addNotes = async (req, res, next) => {
    console.log(req.body);
    try {
        console.log(req.body);
        const {title, description} = req.body;

        const note = await Notes.create({title, description});
        if(!note){
            return res.json({
                success: false,
                message: "There was some error!"
            })
        }
        res.status(201).json({
            success: true,
            note
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
}

exports.getNoteById = async (req, res, next) => {
    try {
        const note = await Notes.findById(req.params.id);

        if(!note){
            return res.json({
                success: false,
                message: "Not found!"
            })
        }
        res.status(200).json({
            success: true,
            note
        })
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
}


exports.deleteNote = async (req, res, next) => {
    try {
        const note = await Notes.findByIdAndDelete(req.params.id);
        if(!note){
            return res.json({
                success: false,
                message: "Not found!"
            })
        }
        res.status(200).json({
            success: true,
            note
        })

    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
}
