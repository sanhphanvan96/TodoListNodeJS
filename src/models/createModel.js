import db from './database';

export default function (schemaName, modelSchema) {
    return db.model(schemaName, modelSchema);
}