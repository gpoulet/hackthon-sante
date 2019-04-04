export const getParkours = state => state.parkours

export const getParkoursByUserId = (state, userId) =>  getParkours(state).filter(parkour => parkour.user === userId )