const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

// building out model for bog that contains id, title, author, and content

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Blog',
  }
)
module.exports = Blog;