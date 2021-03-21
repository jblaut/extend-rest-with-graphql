fetch('/graphql', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    query: `
      query {
        info {
          name
          ask
        }
      }
    `
  })
})
.then(res => res.json())
.then(res => {
  console.log(res)
})

