import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import Job from './jobModel';
import Contact from './contactModel';
import Document from './documentModel';
import Filedata from './fileModel';

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define Relationships
User.hasMany(Job);
Job.belongsTo(User);

User.hasMany(Contact);
Contact.belongsTo(User);

User.hasMany(Document);
Document.belongsTo(User);

User.hasMany(Filedata);
Filedata.belongsTo(User);

export default User;