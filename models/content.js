module.exports = (sequelize, Sequelize) => {
    const Contents = sequelize.define('content',{
        title:{
            type: Sequelize.STRING,
        },
        subtitle1:{
            type: Sequelize.STRING,
        },
        content1:{
            type: Sequelize.STRING,
        },
        subtitle2:{
            type: Sequelize.STRING,
        },
        content2:{
            type: Sequelize.STRING,
        },
    });
    return Contents;
}