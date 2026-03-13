import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

const Contact = sequelize.define('Contact', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jobtitle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    companies: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phonenumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    socialmedia: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Contact;