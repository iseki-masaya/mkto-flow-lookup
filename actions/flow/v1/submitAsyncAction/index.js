const { Core } = require('@adobe/aio-sdk')
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs, handleFNF, validateSchema } = require('../../../utils')

const lts = require("../../../lib/lookupTableSearch.js");
const filesLib = require('@adobe/aio-lib-files');

const schemaKey = "#/components/schemas/async";

async function main(params){
    const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

    // 'info' is the default level if not set
    logger.info('Calling the main action')

    // log parameters, only if params.LOG_LEVEL === 'debug'
    logger.debug(stringParameters(params))

    try {
        var result = validateSchema(schemaKey, params);
    } catch (error) {
        logger.info(error)
        return(400, error, logger);
    }



}

module.exports ={
    main,
    schemaKey
}