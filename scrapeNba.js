var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.nba.com')
  .click(`a[href="/draft"]`)
  .click(`a[href="/draft/2019/prospects"]`)
  .evaluate( () => {
    const tds = document.querySelectorAll('.cell-position')
    // const schools = document.querySelectorAll('.cell-school')

    // const allSchools = [].slice.call(schools)
    const list = [].slice.call(tds)
      return list.map(node => {
        return { 
          school: node.innerText, 
        }
      })
  })
  // .evaluate( () => {
  //   const position = document.querySelectorAll('.cell-school')
  //   const list = [].slice.call(position)
  //     return list.map(node => {
  //       return node.innerText
  //     })
  // })
  .end()
  .then(result => console.log(result, 'he'))
  .catch(function (error) {
    console.error('Search failed:', error);
  });

