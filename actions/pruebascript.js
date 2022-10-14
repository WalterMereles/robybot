  const axios = require('axios')
  const myAction = async (name, value) => {
    var categoria = event.decision
    axios
      .post('http://localhost:5000/getCategoria')
      .then(async result => {
        console.log('Datos -->> ' + JSON.stringify(result.data))
        const dropdown = await bp.cms.renderElement(
          'dropdown',
          {
            type: 'dropdown',
            message: 'Seleccione la Categoria',
            buttonText: 'Enviar',
            placeholderText: 'Categoria',

            //options: [breakAtEmptyString(JSON.stringify(result.data)],
            options: [
              { label: 'Celulares', value: 'Celular' },
              { label: 'Electrodomesticos', value: 'Electrodomesticos' },
              { label: 'Electrodomesticos', value: 'Electrodomesticos' },
              { label: 'Electrodomesticos', value: 'Electrodomesticos' },
              { label: 'Electrodomesticos', value: 'Electrodomesticos' }
            ],
            markdown: true,
            typing: true
          },
          event
        )

        await bp.events.replyToEvent(event, dropdown)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return myAction(args.name, args.value)

  function breakAtEmptyString(arr) {
    arr.some(function(elem) {
      if (elem.length === 0) {
        return true // break
      }
      console.log(elem)
      // this is an implicit case: return undefined if false
    })
  }