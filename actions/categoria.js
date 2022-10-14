  const axios = require('axios')
  const myAction = async (name, value) => {
    var categoria = event.decision
    axios
      .post('http://localhost:5000/getCategoria', {})
      .then(async result => {
        console.log('Datos ----->> ' + JSON.stringify(result.data))
        if (result != '') {
          console.log('datos nulos======>' + result.data)
        }
        const text = await bp.cms.renderElement(
          'builtin_text',
          {
            type: 'text',
            text: result.data.datos[0].nombre_categoria,
            typing: true,
            markdown: true
          },
          event
        )

        await bp.events.replyToEvent(event, text)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return myAction(args.name, args.value)