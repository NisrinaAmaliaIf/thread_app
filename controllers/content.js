const db = require("../models");
const Content = db.contents;

//CREATE: untuk menambahkan data ke dalam tabel Content | CREATE Content
exports.create = async (req, res) => {

    try{
        const data = await Content.create(req.body)
        res.json({
            message: "Contents created succesfully.",
            data : data,
        })
    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//READ: menampilkan atau mengambil semua data sesuai model dari DB | GET ALL Content
exports.getAll = async(req, res) => {
    try{
        const contents = await Content.findAll()
        res.json({
            message: "Contents retrivied successfully.",
            data: contents,
        });
    }catch(error){
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

//mengubah data dari sesuai id yg dikirimkan
exports.update = async(req,res)=> {
    const id = req.params.id
    try{
        const Content = await Content.findByPk(id, {rejectOnEmpty: true})
        Content.update(req.body,{
            where:{id}
        })
        res.json({
            message: "Contents updated successfully.",
            data: Content,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "Some error occured while retrieving Content",
            data: null,
        });

    }
}

//Menghapus data sesuai id yang dikirimkan
exports.delete = async(req,res)=> {
    const id = req.params.id
    try{
        const Content = await Content.findByPk(id, {rejectOnEmpty: true})

        Content.destroy()

        res.json({
            message: "Content deleted successfully."
        });
    }catch(error){
        res.status(500).json({
            message: error.message || "Some error occured while retriview Content",
            data: null,
        });

    }
}

//Mengambil data sesuai id yang diinginkan | GET ONE Content
exports.findOne = async (req, res) => {
    const id = req.params.id
    try{
        const Content = await Content.findByPk(id, { rejectOnEmpty:true})
        res.json({
            message: `Content retrieved successfully with id=${id}.`,
            data: Content,
        });
    }catch(error){
        req.status(500).json({
            message: error.message || "Some error occured while retrieving Content",
            data: null,
        });
    }
};
