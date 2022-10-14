  const axios = require('axios')
  const myAction = async (name, value) => {
    var ci = event.preview
    axios
      .post('http://localhost:5000/getPersona', {
        ci: ci
      })
      .then(async result => {
        console.log('Datos -->> ' + JSON.stringify(result.data))
        const text = await bp.cms.renderElement(
          'builtin_text',
          {
            type: 'text',
            text: 'Hola ' + result.data.datos[0].nombres + ' en que te puedo ayudar :)',
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