'use strict';

const { genUsers } = require('../factories/userFactory');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

    await queryInterface.bulkInsert('Users', [{
          name: 'badr',
          email: 'badr@daw.com',
          password: await bcrypt.hash('1234', 10),
          createdAt: new Date(),
          updatedAt: new Date()
        }],{});

    const users = await genUsers(4);
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('users', null, {});
  }
};
