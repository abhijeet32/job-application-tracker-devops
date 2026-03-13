import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

const Document = sequelize.define('Document', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    category: {
        type: DataTypes.ENUM("Resume", "Cover Letter", "Transcript"),
        allowNull: false
    }
});

export default Document;