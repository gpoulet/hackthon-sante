export const getParkours = state => state.parkours

export const getParkoursByUserId = (state, userId) =>  getParkours(state).filter(parkour => parkour.user === userId )

export const getParkoursByParkoursId = (state, parkoursId) =>  getParkours(state).filter(parkour => parkour.id === parkoursId )[0]