export const getParkours = state => state.parkours

export const getParkoursByUserId = (state, userId) =>  getParkours(state).filter(parkour => parkour.user === userId )

export const getParkoursByParkoursId = (state, parkoursId) => {
  let parkour = getParkours(state).filter(parkour => parkour.id === parkoursId )[0]
  let sortedEvents = {...parkour}.events.sort((a, b) => a.date - b.date)
  return { ...parkour, events: sortedEvents }
}


export const getParkoursByParkoursIdAndIdEvent = (state, parkoursId, idEvent) =>
  getParkours(state).filter(parkour => parkour.id === parkoursId )[0]
    .map(p => p.events)
    .filter(e => e.id===idEvent)
    .map(e => e.documents)