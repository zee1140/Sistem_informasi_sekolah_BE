const nilaiModel = require('../models/nilai.model')

// GET
exports.getAll = async (req,res)=>{
  try{
    const data = await nilaiModel.findAll()
    res.json(data)
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

// GET BY ID
exports.getById = async(req,res)=>{
  try{

    const data = await nilaiModel.findById(req.params.id)

    if(!data){
      return res.status(404).json({
        message:'Nilai not found'
      })
    }

    res.json(data)

  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

// CREATE
exports.create = async(req,res)=>{
  try{

    await nilaiModel.create(req.body)

    res.status(201).json({
      message:'Nilai created'
    })

  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

// UPDATE
exports.update = async(req,res)=>{
  try{

    await nilaiModel.update(req.params.id,req.body)

    res.json({
      message:'Nilai updated'
    })

  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

// DELETE
exports.delete = async(req,res)=>{
  try{

    await nilaiModel.delete(req.params.id)

    res.json({
      message:'Nilai deleted'
    })

  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

exports.rekap = async (req, res) => {
  try {
    const data = await nilaiModel.rekap()
    res.json(data)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}