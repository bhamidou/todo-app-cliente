'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('RolUsers', [
        {
      user_id: 1,
      rol_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 1,
      rol_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
