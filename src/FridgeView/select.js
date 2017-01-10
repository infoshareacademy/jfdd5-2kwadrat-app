const filters = {
  all: person => true,
  female: person => person.gender === 'Female',
  male: person => person.gender === 'Male',
  gmailUsers: person => person.email.includes('@google.co.uk')
}

export default {
  selectPeople: (people, filterNames) => people.filter(
    person => filterNames.map(
      filterName =>
        filters[filterName](person)
    ).every(
      filterResult =>
      filterResult === true
    )
  )
}