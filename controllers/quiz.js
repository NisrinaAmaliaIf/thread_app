const db = require("../models");
const Quiz = db.quizzes;

//CREATE: untuk menambahkan data ke dalam tabel quiz | CREATE QUIZ
exports.create = async (req, res) => {

    try{
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz created succesfully.",
            data : data,
        })
    } catch (error){
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//READ: menampilkan atau mengambil semua data sesuai model dari DB | GET ALL QUIZ
exports.getAll = async(req, res) => {
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrivied successfully.",
            data: quizzes,
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
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        quiz.update(req.body,{
            where:{id}
        })
        res.json({
            message: "Quizzes updated successfully.",
            data: quiz,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "Some error occured while retrieving quiz",
            data: null,
        });

    }
}

//Menghapus data sesuai id yang dikirimkan
exports.delete = async(req,res)=> {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})

        quiz.destroy()

        res.json({
            message: "Quiz deleted successfully."
        });
    }catch(error){
        res.status(500).json({
            message: error.message || "Some error occured while retriview quiz",
            data: null,
        });

    }
}

//Mengambil data sesuai id yang diinginkan | GET ONE QUIZ
exports.findOne = async (req, res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty:true})
        res.json({
            message: `Quizzes retrieved successfully with id =${id}.`,
            data: quiz,
        });
    }catch(error){
        req.status(500).json({
            message: error.message || "Some error occured while retrieving quiz",
            data: null,
        });
    }
};
