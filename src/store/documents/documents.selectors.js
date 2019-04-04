export const getDocuments = state => state.documents

export const getDocumentsByUserId = (state, userId) =>  getDocuments(state).filter(document => document.user === Number(userId) )