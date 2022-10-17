'use strict';

/**
 * error-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::error-page.error-page');
