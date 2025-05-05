export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Service Icon',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}