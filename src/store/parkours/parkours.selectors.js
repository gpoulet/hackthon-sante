export const getParkours = state => state.parkours

export const getParkoursByUserId = (state, userId) =>  getParkours(state).filter(parkour => parkour.user === userId )

export const getParkoursByParkoursId = (state, parkoursId) =>  getParkours(state).filter(parkour => parkour.id === parkoursId )[0]

export const getParkoursByParkoursIdAndIdEvent = (state, parkoursId, idEvent) =>
  getParkours(state).filter(parkour => parkour.id === parkoursId )[0]
    .map(p => p.events)
    .filter(e => e.id===idEvent)
    .map(e => e.documents)