import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

const Job = sequelize.define('Job', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    workMode: {
        type: DataTypes.ENUM("onSite", "Hybrid", "Remote"),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("wishlist", "applied", "interview", "offer", "rejected"),
        allowNull: false
    }
});

export default Job;