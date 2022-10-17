'use strict';

/**
 * error-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::error-page.error-page');
