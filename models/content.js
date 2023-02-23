module.exports = (sequelize, Sequelize) => {
    const Content = sequelize.define('content',{
        materi:{
            type: Sequelize.STRING,
        },
        pengertian:{
            type: Sequelize.STRING,
        },
        ciri_ciri:{
            type: Sequelize.STRING,
        },
        jenis:{
            type: Sequelize.STRING,
        },
    });
    return Content;
}