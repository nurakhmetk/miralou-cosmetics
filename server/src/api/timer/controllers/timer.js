'use strict';

/**
 * timer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::timer.timer');
