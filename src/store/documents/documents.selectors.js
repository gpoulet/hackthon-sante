export const getDocuments = state => state.documents

export const getDocumentsByUserId = (state, userId) => getDocuments(state).filter(document => document.userId === userId)

export const getDocumentById = (state, id) => getDocuments(state).filter(document => document.id === id)[0]