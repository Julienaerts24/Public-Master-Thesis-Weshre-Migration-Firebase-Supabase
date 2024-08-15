const { convertFirebaseTimeStampToISODate, convertFirebaseDocumentIdToSupabaseUUID } = require('../utils');

module.exports = (collectionName, doc, recordCounters, writeRecord) => {
    if (doc.createdAt && doc.creator && doc.validUntil) {
        const ESN_Coupons_Id = doc.firestore_id || doc.firestoreid || doc.original_id || doc.originalid;
        const esn_coupon_Doc = {
            created_at: convertFirebaseTimeStampToISODate(doc.createdAt),
            creator: convertFirebaseDocumentIdToSupabaseUUID(doc.creator),
            valid_util: convertFirebaseTimeStampToISODate(doc.validUntil),
            value: doc.value
        };
        writeRecord('_esn_coupon', esn_coupon_Doc, recordCounters);
    }
    else{
        console.log(doc)
    }
    return undefined;
};